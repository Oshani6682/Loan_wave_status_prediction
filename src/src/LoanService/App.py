from flask import Flask, request, jsonify
import pandas as pd
import pickle
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
from datetime import datetime, timezone
import logging

# Set up logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s %(levelname)s %(message)s')

app = Flask(__name__)
CORS(app)  # This will allow all domains by default

# Load the trained model
with open('model_rfc.pkl', 'rb') as model_file:
    model_rfc = pickle.load(model_file)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")  # Update with your MongoDB connection URI
db = client["loan_db"]
users_collection = db["users"]

@app.route('/requestLoan', methods=['POST'])
def requestLoan():
    try:
        logging.info('Request Loan initiated!')

        # Get JSON data from the POST request
        data = request.json
        
        # Extract username from the data
        username = data.pop('username', None)  # Remove username from data if it exists
        logging.info('Request data received successfully!')

        if not username:
            return jsonify({"error": "Username is required"}), 400

        logging.info('Username reccieved!')

        # Find the user document by username
        user = users_collection.find_one({"username": username})

        if not user:
            logging.info('User not found!')
            return jsonify({"error": "User not found"}), 404

        logging.info('User authenticated!')

        # Prepare the loan application data
        loan_application = {
            "Gender": data.get("Gender")[0],
            "Married": data.get("Married")[0],
            "Dependents": data.get("Dependents")[0],
            "Education": data.get("Education")[0],
            "Self_Employed": data.get("Self_Employed")[0],
            "ApplicantIncome": data.get("ApplicantIncome")[0],
            "CoapplicantIncome": data.get("CoapplicantIncome")[0],
            "LoanAmount": data.get("LoanAmount")[0],
            "Loan_Amount_Term": data.get("Loan_Amount_Term")[0],
            "Credit_History": data.get("Credit_History")[0],
            "Property_Area": data.get("Property_Area")[0],
            "Loan_Status": "Pending",
            "Application_Date": 10000000000
        }

        users_collection.update_one(
            {
                "username": username
            },
            {
                "$set": {
                    "isLoanExist": True
                },
                "$push": {
                    "LoanApplications": loan_application
                }
            }
        )

        # Prepare response
        response = {
            "Username": username,
            "loan": loan_application,
            "status": "Pending"
        }

        logging.info('Loan requested successfully!')
        return jsonify(response)

    except Exception as e:
        logging.info(e)
        return jsonify({"error": str(e)}), 500

@app.route('/doPrediction/<username>', methods=['POST'])
def predict(username):
    try:
        logging.info("do predict called +++++++++++++++++++++++")
        data = request.json
        
        if not username:
            return jsonify({"error": "Username is required"}), 400

        
        # Find the user document by username
        user = users_collection.find_one({"username": username})

        if not user:
            return jsonify({"error": "User not found"}), 404 

        loanApplications = user['LoanApplications']
        logging.info("loan applications loaded +++++++++++++++++++++++")

        for loan in loanApplications:
            if loan['Loan_Status']=="Pending":
                logging.info("found matching loan +++++++++++++++++++++++")
                data=loan
                break

        logging.info("ended loans loop +++++++++++++++++++++++")

        loanApplications.remove(data)
        logging.info("removed loan +++++++++++++++++++++++")

        loan_prediction_request = {
            "ApplicantIncome": data["ApplicantIncome"],
            "CoapplicantIncome": data["CoapplicantIncome"],
            "Credit_History": data["Credit_History"],
            "Dependents": data["Dependents"],
            "Education": data["Education"],
            "Gender": data["Gender"],
            "LoanAmount": data["LoanAmount"],
            "Loan_Amount_Term": data["Loan_Amount_Term"],
            "Married": data["Married"],
            "Self_Employed": data["Self_Employed"],
            "Property_Area": data["Property_Area"]
        }

        # Convert JSON data to DataFrame
        df = pd.DataFrame(loan_prediction_request, index=[0])

        # Make prediction using the loaded model
        logging.info("Before prediction +++++++++++++++++++++++")
        result = model_rfc.predict(df)[0]
        logging.info("After prediction +++++++++++++++++++++++")

        # Prepare response
        data['Loan_Status']="Approved" if result == 1 else "Rejected"
        loanApplications.append(data)
        # logging.info(loanApplications)
        response = {
            "Loan Status": "Loan Approved" if result == 1 else "Loan Not Approved"
        }
            
        # Update the document in MongoDB
        result_match = users_collection.update_one(
            {"username": username, "LoanApplications.Loan_Status": "Pending"},
            {
                "$set": {
                    "LoanApplications.$.Loan_Status": "Approved" if result == 1 else "Rejected"
                }
            }
        )
        response['Username'] = username

        logging.info("predict ended +++++++++++++++++++++++")
        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True)
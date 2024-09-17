from flask import Flask, request, jsonify
import pandas as pd
import pickle
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)  # This will allow all domains by default

# Load the trained model
with open('model_rfc.pkl', 'rb') as model_file:
    model_rfc = pickle.load(model_file)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")  # Update with your MongoDB connection URI
db = client["loan_db"]
users_collection = db["users"]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from the POST request
        data = request.json
        
        # Extract username from the data
        username = data.pop('username', None)  # Remove username from data if it exists
        
        if not username:
            return jsonify({"error": "Username is required"}), 400

        # Convert JSON data to DataFrame
        df = pd.DataFrame(data, index=[0])

        # Make prediction using the loaded model
        result = model_rfc.predict(df)[0]

        # Prepare response
        response = {
            "Loan Status": "Loan Approved" if result == 1 else "Loan Not Approved"
        }

        # Find the user document by username
        user = users_collection.find_one({"username": username})

        if not user:
            return jsonify({"error": "User not found"}), 404

        # Prepare the loan application data
        loan_application = {
            "Gender": data.get("Gender"),
            "Married": data.get("Married"),
            "Dependents": data.get("Dependents"),
            "Education": data.get("Education"),
            "Self_Employed": data.get("Self_Employed"),
            "ApplicantIncome": data.get("ApplicantIncome"),
            "CoapplicantIncome": data.get("CoapplicantIncome"),
            "LoanAmount": data.get("LoanAmount"),
            "Loan_Amount_Term": data.get("Loan_Amount_Term"),
            "Credit_History": data.get("Credit_History"),
            "Property_Area": data.get("Property_Area"),
            "Loan_Status": "Approved" if result == 1 else "Not Approved",
            "Application_Date": datetime.utcnow()
        }
            
        # If the loan is approved, update the MongoDB document
        if result == 1:
            # Update the document in MongoDB
            users_collection.update_one(
                {"username": username},
                {
                    "$set": {
                        "LoanStatus": "Approved",
                        "loanAmount": loan_application["LoanAmount"],
                        "isLoanExist": True
                    },
                    "$push": {
                        "LoanApplications": loan_application
                    }
                }
            )
            response['Username'] = username

        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
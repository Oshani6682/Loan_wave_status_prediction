from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from datetime import datetime
from flask_cors import CORS
from smtplib import SMTP

import mailslurp_client

app = Flask(__name__)
CORS(app)  # This will allow all domains by default

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")  # Update with your MongoDB connection URI
db = client["loan_db"]
users_collection = db["users"]

# Replace
GMAIL_USER = "oshani071@gmail.com"
GMAIL_PASSWORD = "aranogm@g77..)"

# POST Method to create New user with loan information,user type, and email
@app.route('/createuser', methods=['POST'])
def create_user():
    data = request.json
    print(data)
    required_fields = {"username", "password", "isLoanExist", "loanAmount", "LoanStatus", "Usertype", "email"}
    
    # Check if all required fields are present
    if not required_fields.issubset(data):
        return jsonify({"error": "Missing required fields"}), 400

    user_data = {
        "username": data['username'],
        "password": data['password'],
        "isLoanExist": data['isLoanExist'],
        "loanAmount": data['loanAmount'],
        "LoanStatus": data['LoanStatus'],
        "Usertype": data['Usertype'],
        "email": data['email'],  # Include email field
        "_id": ObjectId()  # Generate a new ObjectId
    }

    users_collection.insert_one(user_data)
    return jsonify({"message": "User created successfully!", "user_id": str(user_data["_id"])}), 201

# GET Method to retrieve user by username
@app.route('/getuser/<username>', methods=['GET'])
def get_user(username):
    user = users_collection.find_one({"username": username})
    if user:
        user['_id'] = str(user['_id'])  # Convert ObjectId to string for JSON serialization
        return jsonify(user), 200
    else:
        return jsonify({"error": "User not found"}), 404

# GET Method to send mail by username
@app.route('/sendmail/<username>', methods=['GET'])
def send_mail(username):
    user = users_collection.find_one({"username": username})
    if user:
        user['_id'] = str(user['_id'])  # Convert ObjectId to string for JSON serialization
        try:
            with smtplib.SMTP("smtp.gmail.com", 587) as smtp:
                smtp.ehlo()  # Identify yourself with the SMTP server
                smtp.starttls()  # Upgrade the connection to a secure encrypted SSL/TLS connection
                smtp.ehlo()  # Re-identify yourself after securing the connection
                smtp.login(GMAIL_USER, GMAIL_PASSWORD)

                # Construct the email
                subject = "Loan Verified"
                body = "Your loan has been verified successfully."
                msg = f"Subject: {subject}\n\n{body}"

                # Send the email
                smtp.sendmail(
                    from_addr=GMAIL_USER,
                    to_addrs=[user["email"]],
                    msg=msg
                )
            return jsonify({"message": "Email sent successfully!"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "User not found"}), 404

# UPDATE Method to update user details based on username
@app.route('/updateuser/<username>', methods=['PUT'])
def update_user(username):
    data = request.json
    user = users_collection.find_one({"username": username})

    if user:
        update_data = {}
        # Update only the provided fields
        if 'password' in data:
            update_data['password'] = data['password']
        if 'isLoanExist' in data:
            update_data['isLoanExist'] = data['isLoanExist']
        if 'loanAmount' in data:
            update_data['loanAmount'] = data['loanAmount']
        if 'LoanStatus' in data:
            update_data['LoanStatus'] = data['LoanStatus']
        if 'Usertype' in data:
            update_data['Usertype'] = data['Usertype']
        if 'email' in data:  # Update email if provided
            update_data['email'] = data['email']

        users_collection.update_one({"username": username}, {"$set": update_data})
        return jsonify({"message": "User updated successfully!"}), 200
    else:
        return jsonify({"error": "User not found"}), 404
        
# GET ALL USERS Method to retrieve all users
@app.route('/getallusers', methods=['GET'])
def get_all_users():
    users = users_collection.find()
    user_list = []
    for user in users:
        user['_id'] = str(user['_id'])  # Convert ObjectId to string for JSON serialization
        user_list.append(user)
    
    return jsonify(user_list), 200

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)

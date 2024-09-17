@echo off

:: Navigate to the first folder and run the script
cd /D D:\Source\Repos\Loan_Status_Prediction_App\src\AccountService
start py app.py

:: Navigate to the second folder and run the script on a given port
cd /D D:\Source\Repos\Loan_Status_Prediction_App\src\LoanService
start py app.py --port=5001

:: Navigate to the third folder and start npm
cd /D D:\Source\Repos\Loan_Status_Prediction_App\src\LoanApplication\loanwave
start npm start

:: Pause to keep the terminal open
pause
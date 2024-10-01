@echo off

:: Navigate to the first folder and run the script
cd /D D:\ICBT\src\AccountService
start py app.py

:: Navigate to the second folder and run the script on a given port
cd /D D:\ICBT\src\LoanService
start py app.py --port=5001

:: Navigate to the third folder and start npm
cd /D D:\ICBT\src\LoanApplication\loanwave
start npm start

:: Pause to keep the terminal open
pause
@echo off
echo Checking for Node.js installation...

where node >nul 2>nul
if %errorlevel% equ 0 (
    echo Node.js is already installed.
    node --version
) else (
    echo Node.js is not installed.
    echo.
    echo Please follow these steps to install Node.js:
    echo 1. Open your web browser and go to: https://nodejs.org/
    echo 2. Download the LTS (Long Term Support) version
    echo 3. Run the downloaded installer
    echo 4. Follow the installation wizard steps
    echo 5. Make sure to check "Automatically install the necessary tools"
    echo 6. After installation, close all terminal windows
    echo.
    echo After installing Node.js:
    echo 1. Open a new terminal
    echo 2. Navigate to this folder:
    echo    cd "%~dp0"
    echo 3. Run these commands:
    echo    npm install
    echo    npm run dev
    echo.
    echo The website will be available at: http://localhost:3000
    echo.
)

echo Press any key to exit...
pause 
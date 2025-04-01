@echo off
echo ===== TECH MAFIA WEBSITE LAUNCHER =====
echo.
echo This script will automatically start your website.
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% equ 0 (
    echo Node.js is installed. Starting with Node.js...
    
    :: Check if node_modules exists
    if not exist node_modules (
        echo Installing dependencies...
        call npm install --no-fund --no-audit --loglevel=error
    )
    
    :: Start the server
    echo Starting server...
    start "" http://localhost:3000
    node server.js
) else (
    echo Node.js is not installed. Opening website directly...
    
    :: Open index.html directly in the default browser
    start "" index.html
)

exit /b 0 
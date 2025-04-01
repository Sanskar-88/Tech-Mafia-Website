@echo off
echo ===== Tech Mafia Website Auto Setup =====
echo.
echo This script will automatically:
echo 1. Try to install Node.js if not present
echo 2. Install dependencies
echo 3. Start the development server
echo.
echo Starting in 3 seconds...
timeout /t 3 /nobreak > nul

echo.
echo Step 1: Checking for Node.js installation...
where node >nul 2>nul
if %errorlevel% equ 0 (
    echo Node.js is already installed: 
    node --version
    echo npm version:
    npm --version
) else (
    echo Node.js is not installed. Attempting automatic installation...
    
    echo Downloading Node.js installer...
    powershell -Command "& {Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi' -OutFile 'node_installer.msi'}"
    
    if exist node_installer.msi (
        echo Running Node.js installer silently...
        start /wait msiexec /i node_installer.msi /qn
        echo Installation completed. Refreshing environment variables...
        call refreshenv.cmd
        if not exist refreshenv.cmd (
            echo Creating refreshenv.cmd...
            echo @echo off > refreshenv.cmd
            echo echo Refreshing environment variables... >> refreshenv.cmd
            echo for /f "tokens=*" %%a in ('set') do set %%a >> refreshenv.cmd
        )
        call refreshenv.cmd
    ) else (
        echo Failed to download Node.js installer.
        echo Please install Node.js manually from https://nodejs.org/
        exit /b 1
    )
)

echo.
echo Step 2: Installing dependencies...
call npm install --no-fund --no-audit --loglevel=error

echo.
echo Step 3: Starting development server...
start "" http://localhost:3000
call npm run dev

exit /b 0 
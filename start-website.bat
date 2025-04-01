@echo off
echo ===== TECH MAFIA WEBSITE LAUNCHER =====
echo.
echo Starting Tech Mafia website...
echo.

:: Try to use Python's built-in HTTP server if available
where py >nul 2>nul
if %errorlevel% equ 0 (
    echo Python found. Starting with Python's HTTP server...
    start "" http://localhost:8000
    echo Press Ctrl+C to stop the server when done.
    py -m http.server 8000
    goto :end
)

where python >nul 2>nul
if %errorlevel% equ 0 (
    echo Python found. Starting with Python's HTTP server...
    start "" http://localhost:8000
    echo Press Ctrl+C to stop the server when done.
    python -m http.server 8000
    goto :end
)

where python3 >nul 2>nul
if %errorlevel% equ 0 (
    echo Python3 found. Starting with Python's HTTP server...
    start "" http://localhost:8000
    echo Press Ctrl+C to stop the server when done.
    python3 -m http.server 8000
    goto :end
)

:: If Python is not available, just open the HTML file directly
echo Python not found. Opening website directly...
start "" index.html

:end
exit /b 0 
@echo off
echo ===== TECH MAFIA WEBSITE LAUNCHER =====
echo.
echo Starting Tech Mafia website...
echo.

echo Opening website in your default browser...
start "" run-local.html

echo.
echo If you want to run a local server instead, you can try:
echo python -m http.server 8000
echo or
echo py -m http.server 8000
echo.
echo Press any key to exit...
pause > nul
exit /b 0 
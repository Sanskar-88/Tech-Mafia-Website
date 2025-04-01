@echo off
echo ===== TECH MAFIA WEBSITE LAUNCHER =====
echo.
echo Opening all HTML pages for testing...
echo.

start "" index.html
timeout /t 1 >nul
start "" laptops.html
timeout /t 1 >nul
start "" wearables.html
timeout /t 1 >nul
start "" news.html
timeout /t 1 >nul
start "" gadgets.html
timeout /t 1 >nul
start "" category.html
timeout /t 1 >nul
start "" article.html

echo.
echo All pages opened successfully!
echo.
echo Press any key to exit...
pause >nul
exit /b 0 
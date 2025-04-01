@echo off
echo Refreshing environment variables...

:: Get the system PATH
for /f "tokens=2*" %%a in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v PATH') do set syspath=%%b

:: Get the user PATH
for /f "tokens=2*" %%a in ('reg query "HKCU\Environment" /v PATH') do set userpath=%%b

:: Set the new PATH
set PATH=%userpath%;%syspath%;%ProgramFiles%\nodejs\;%APPDATA%\npm

echo Environment variables refreshed. 
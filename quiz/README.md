How to get the Bible Quiz Working.

Opening website:

You can do this by double clicking index.html or if you do not have visual studio and can not start up the server to enter your email and password into the database you can just double click game.html to go straight to the game.

Download Github onto your computer:
Go here to download Git https://git-scm.com/download/win
Download the 64 bit windows setup installer.
You can use this guide to help through the set up process.
https://www.geeksforgeeks.org/how-to-install-git-on-windows-command-line/

Go here to download chocolatey. Chocolatey is a package manager for Windows, designed to help you automate the installation, updating, and management of software on your Windows system. 
https://community.chocolatey.org/courses/installation/installing?method=installing-chocolatey#cmd
Go to basic chocolatey install.
Use cmd.exe and copy the code.
Open your command Prompt on your computer and right click and run as administrator.
Paste the code and hit enter.
When it is finished downloading type
'choco install git'
Github should now be installed on your device.
downloading Visual Studio Code:

# Bible Quiz Project

## Introduction

Welcome to the Bible Quiz Project! This application is designed to help people learn more about the Bible in a fun and engaging way. Whether you're looking to test your knowledge or learn something new, this quiz is a great place to start.

## Getting Started

### Opening the Website

You can get started by following these steps:

1. **Launch the Website:**
   - Double-click on `index.html` to open the main page.
   - If you don't have Visual Studio or can't start the server, you can skip the login step by directly opening `game.html` to jump straight into the quiz.

### Setting Up Your Development Environment

To modify the project or test the user login, you'll need to set up a development environment.

#### 1. Install Git

Git is essential for version control and collaboration. Follow these steps to install Git:

- **Download Git:**  
  [Download Git for Windows](https://git-scm.com/download/win)  
  Choose the 64-bit Windows setup installer.

- **Follow the Setup Guide:**  
  Use this guide to help with the installation process:  
  [How to Install Git on Windows Command Line](https://www.geeksforgeeks.org/how-to-install-git-on-windows-command-line/)

#### 2. Install Chocolatey

Chocolatey is a package manager for Windows that simplifies software installation and management.

- **Download Chocolatey:**  
  [Install Chocolatey](https://community.chocolatey.org/courses/installation/installing?method=installing-chocolatey#cmd)

- **Install Chocolatey via Command Prompt:**
  1. Open `cmd.exe`.
  2. Right-click and select "Run as administrator".
  3. Paste the following code into the Command Prompt and press Enter:

     ```bash
     @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "Set-ExecutionPolicy AllSigned; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; (New-Object Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1') | iex"
     ```

  4. Once Chocolatey is installed, type the following command to install Git:

     ```bash
     choco install git
     ```

#### 3. Install Visual Studio Code

Visual Studio Code is a powerful code editor that will help you work with the project files.

- **Download Visual Studio Code:**  
  [Download Visual Studio Code](https://visualstudio.microsoft.com/downloads/)  
  *(Make sure to choose Visual Studio Code, not Visual Studio 2022).*

- **Clone the Repository:**
  1. Go to the project’s GitHub page and click the green "Code" button.
  2. Ensure you're using HTTPS, then copy the repository URL.
  3. Open Visual Studio Code.
  4. In the terminal, navigate to the folder where you want to save the project, then type:

     ```bash
     git clone <paste URL here>
     ```

  This command will clone the repository to your local machine, giving you access to all the code.

#### 4. Start the Server

To test the user login functionality, start the server:

1. Open the terminal in Visual Studio Code.
2. Navigate to the project folder and type:

   ```bash
   node server.js
   
This app's goal is for people to learn more about the Bible and have dun doing it. I hope this small step can have a huge impact, have fun!

Music information:
Title: Remembered Times
Artist: Maxim Novak
Source: Free Music Archive
License type: CC BY-NC-ND

Title: Pigeons at my window
Artist: human gazpacho
Source: Free Music Archive
License type: CC BY-NC

Title: Positive Day
Artist: Denys Kyshchuk
Source: Free Music Archive
License type: CC BY-NC-ND

Title: Glacier
Artist: SalmonLikeTheFish
Source: Free Music Archive
License type: CC BY-NC-SA

Title: Adrenaline Rush
Artist: BoDleasons
Source: Free Music Archive
License type: CC BY-NC-ND

Title: OverBoard
Artist: Beat Mekanik
Source: Free Music Archive
License type: CC BY

Christian Worship Instrumental Calm Emotional Piano by Jesse Quinn






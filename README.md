# React JS Project with JSON Server

This project is a React JS frontend application with JSON Server serving as the backend and database. This README file will guide you through setting up and running the project.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Endpoints](#endpoints)

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (which includes npm)
- [Git](https://git-scm.com/downloads)

## Installation

1. **Clone the repository**

    ```bash
   git clone https://github.com/your-username/your-repo-name.git](https://github.com/Anirudh-Brillio/realtor_project.git
    cd your-repo-name
    ```

2. **Install the dependencies**

    ```bash
    npm install
    ```

## Running the Project

1. **Start JSON Server**

    JSON Server will serve as your backend. You need to create a `db.json` file in the root directory with your initial data.

    ```bash
    npx json-server --watch db.json --port 5000
    ```

    This will start JSON Server on [http://localhost:5000](http://localhost:5000).

2. **Start the React Application**

    Open another terminal and run:

    ```bash
    npm start
    ```

    This will start the React application on [http://localhost:3000](http://localhost:3000).

## Project Structure

githu

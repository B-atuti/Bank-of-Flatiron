# Mini Web App: Bank Transactions

This is a mini web application built with React that allows users to manage and view their recent bank transactions. Users can add new transactions, search for transactions by description, and filter transactions by category. The app fetches data from a local JSON DB server and displays the transactions in a table.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Running the App](#running-the-app)
- [Features](#features)
- [Built With](#built-with)
- [Authors](#authors)
- [License](#license)

## Getting Started

Follow the instructions below to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

You need to have Node.js and npm (Node Package Manager) installed on your machine.

## Installing

1. Clone this GitHub repository to your local machine:

  git clone 

2. Navigate to the project directory:

  cd Bank-Transactions


3. Install the required dependencies:

  npm install


## Running the App

1. Start the JSON DB server:

json-server --watch db.json


2. Run the React app:

npm start

The app should now be running on `http://localhost:3000`.

## Features

- View a table of all transactions.
- Fill out and submit the form to add a new transaction. The new transaction will be added to the table (not persisted to the backend).
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term will be shown in the transactions table.
- **Bonus**: Sort transactions alphabetically by category or description.
- **Bonus**: Delete a transaction, removing it from the table.

## Built With

- React - JavaScript library for building user interfaces
- Axios - HTTP client for making API requests
- json-server - Local JSON DB server for serving data

## Authors

- [Atuti Brian] (https://github.com/B-atuti) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.



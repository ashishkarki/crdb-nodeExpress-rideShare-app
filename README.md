# Please note the starter files for this repo has been downloaded as part of Cockroach labs's course here:

https://university.cockroachlabs.com/courses/fundamentals-javascript/course/

# Project Overview

This is the NodeJS backend implementation of the MovR
Sample App built using TypeORM init with Express.
This example will demonstrate how to integrate a Node/TypeORM
implementation with CockroachDB to create REST API and
utilize it with static front end built in React using
create-react-app and Redux.

### Load CockroachDB

1. Create a CockroachDB cluster.
   Save the CRT file and take note of the host name, port, username used in your cluster.

2. Configure environment variables:
   Edit the .env file with your host, port, username, password, port and ssl certificate following the
   examples in the file.

3. Initialize the database

   ```shell
   .\db-setup.bat <db_url> (Windows PowerShell)
   .\db-setup.sh <db_url> (Mac/Linux)
   ```

   The "<db_url>" can be any CockroachDB or Cockroach Cloud instance.

### Application setup

1. To run the application you must have node and typescript installed. First download the latest node version:

   ```shell
   https://nodejs.org/en/download/
   ```

   After node is downloaded you can use npm to download typescript. Run this in your command line:

   ```shell
   npm install -g typescript
   ```

2. Install dependencies by navigating to this project and running this install script in the command line

   ```shell
   npm install
   ```

3. Start up the application by running this start script in the command line
   ```shell
   npm start
   ```
4. Navigate to the url [http://localhost:36257/](http://localhost:36257)
   to use the application.

### Clean up

1. To shut down the application, `Ctrl+C` out of the node process.

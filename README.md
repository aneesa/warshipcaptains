# Node Warship Captains App

Demo : http://warshipcaptains-ailuromaniac.rhcloud.com/warshipcaptains

This app is built for learning purposes. There are 3 pages:

- first page contains a form to create a new Warship and displays all the Warships created.
- second page contains a form to create a new Captain and displays all the Captains created.
- third page contains a form to assign a Captain to a Warship and displays all the assignments.

This is a node app build using MongoDB and Angular.

- Node provides the RESTful API. 
- Angular provides the frontend and accesses the API. 
- MongoDB stores the data.

## Requirements

- [Node and npm](http://nodejs.org)
- [MongoDB](https://www.mongodb.org/)

## Local Installation

1. Clone the repository: `git clone https://ailuromaniac@bitbucket.org/ailuromaniac/warshipcaptains.git`
2. Navigate to the config folder: `cd warshipcaptains/config`
3. Update dbpath and logpath in mongo.config to point to the data and mongodb respectively
4. Navigate to the application directory: `cd ..`
5. Install the application: `npm install`
6. Start the local DB: `<MongoDB-bin>/mongod.exe --config <parent-path>/warshipcaptains/config/mongo.config`
7. Start the server: `node server.js`
8. View in browser at `http://localhost:8080/warshipcaptains`

## Future Things To Do

- Fix Angular routing to use ng-route and ng-view

## References

This app is built based on source codes from [Scotch](http://scotch.io)'s tutorial website. 

The basic framework is based on this tutorial, [Creating a Single Page Todo App with Node and Angular](https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular).
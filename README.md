## Fitness Tracker

This fitness tracker application allows users to view create and track daily workouts. Users can log multiple exercises in a workout on a given day and track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, users can track my distance traveled.

## Video 
Link to watch app: https://drive.google.com/file/d/1xcvfGNlFkDS3VLzprTwyQj6ZtPKzj2ZV/view 

## Technologies 
<ul>
    <li> Express Web Server </li>
    <li> MongoDB Database </li>
    <li> Mongoose </li>
</ul>

## Description 

The goal of this application is to allow the user to track workouts and excerises in one central location. With provided HTML and corresponding Javascript, I worked on building the models, routes and server.js page. 

The model was created using Mongoose, so that it could be pulled from the Mongo DB Database that runs through Robo T3. This model contains an 'workout' consisting of the day and the excerises performed. The excerises are broken down into an array of the different elements for the excerise, such as type, name, duration, weight, set, distance and reps. 

The routes are divided into two section, API routes and HTML routes. The API routes call the information from the database to show on the corresponding page. The four routes created are a GET route for all workouts, a GET route for the stats, a POST route to create a new workout and a PUT route to update a workout from an ID.  The HTML routes show which URL corresponds with the correct HTML page that host all the information. 

Finally, the server.js file connects the front end code to the backend and database. Additionally, this page allows the page to be hosted through Heroku. 

## Images

Homepage with give exercises
<img src="images\fitness tracker.png">

Adding an exercise 
<img src="images\exercise.png">

Stats Dashboard
<img src="images\dashboard.png">

## Deployed Application 

Application did not deploy correctly to Heroku. Please review the video and images to see that locally it performs all the correct routes. 
# Captain-Log-HW
Captains Log
Insert Pun Image here

Purpose from CD team:
This is where students put everything they have learned so far in Mod 2 together in preparation for the project.

Homework

Every great captain, whether on the waters or in the skies, keeps a daily log.

Let's build the perfect Captain's Log App for our extraordinary captains.

There are many ways to get started building an app. This lab follows a specific order for two reasons:

to align with the content of lecture
to give you an order to guide you to create small bits of functionality and test each one before moving on to the next part
If you finish lab early consider:

SUPER BONUS - Once you finish this whole lab, add a second model for comments, it should have the name of the person who wrote it, and some text for the comment (maybe time stamps?). This model should 'belong' the the post, the data should be related in some way. Do you own research of how to set up a one-to-many relationship (one post can have many comments, one comment only belongs to one post), in MongoDB. Use Mongo Documentation, or Google.
Set up
Let's keep track of our Restful Routes as we build out our app. Copy/paste this table into a fresh file, open an excel/sheets spreadsheet or draw on a piece of paper. Feel free to add more columns and notes to help you put it all together.

Index, New and Create has been completed for you.

 

In your homework folder
mkdir captains_log
cd catpains_log
create a new express app `
 

 

Mongo
install mongoose and configure it in your server.js
Logs Model
mkdir models
touch models/logs.js
Create the logs schema
title: string
entry: string
shipIsBroken: Boolean (bonus: set a default to true)
Super bonus:
as a second argument to mongoose.Schema(), add { timestamps: true }
Create Route
upgrade your code to create your log in MongoDB
create a route to post & create a log to MongoDB
don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Stretch: make a seed file and seed it
Index Route
In server.js make an index route, be sure to follow the Restful convention
first, just test it by having it res.send('index')
Respond with the full list of captain's logs
don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Index/:id Route
create a mongo query and res.json your data as data
 

don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Delete Route
make your delete route in your server.js
don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Put Route
create your PUT route
First, just have it res.json the updated log and check it is as expected
don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Bonuses
The captain wants to keep track of eating habits: make a new set of routes in a new file in your controller folder called foodlogs
build out the 7 routes for foodlogs, include a new model with whatever properties make sense
make a seed file and seed it
create a seed file and seed your database
if you have timestamps, figure out how to edit/display the edited date

# E-Commerce Back End
![image](https://img.shields.io/badge/License-MIT-slateblue.svg)
## by Dan McKay

## Overview

* This is the week 13 assignment for BootCamp Spot's Full-Stack Coding Bootcamp, as offered through continuing education at UC Berkeley.
* It is a back-end chain of servers storing data for a hypothetical e-commerce site, using node.js, and run by a Command Line Interface. Using a database interface app, the assignment is to demonstrate that one can successfully Create (Post), Retrieve (Get), Update (Post), and Destroy (Delete) the data whether it is a product category, a product tag, or a specific product.
* Although the instructions technically call for using Insomnia, this cohort is using Postman and we have specifically been instructed to use that instead.
* There is no live site, as such a demo video has been recorded and attached.

## Installation

* Please open a command line interface such as Git Bash, and navigate to the root folder. If the folder has not been initiallized, enter the line "run npm init -y". Then enter the line "npm i" to install all the dependencies in the package.json. If for some reason you do not have this, please run "npm i mysql2 dotenv express sequelize".
* Then go into mysql with the line "mysql -u root -p" and enter your password. Then enter the line "source db/schema.sql". Then type out "exit" to leave mysql.
* Next, seed the data using the line "npm run seed", and start the program using "node server.js" or "nodemon server.js". The server is now running and you can manipulate it in Postman as shown in the demo video.

## Demo Video Link: https://drive.google.com/file/d/1m8jxaZS7V6eBFm5KzzhKySknV6R6-tPf/view

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

### License
This app is licensed under [the MIT License](https://choosealicense.com/licenses/mit/) and is free to use "as is" under their terms and conditions, without warranty or liability.

(c) Copyright Dan McKay 2023

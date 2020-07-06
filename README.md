# Job-Jot
  What is it?
Welcome to Job Jot, are you looking for a way to better organize your life? Well you are in the right place. Job Jot is a personal space to keep track of follow ups, that you don't want cluttering your personal space. This is for anyone trying to keep track of their daily life connections, wether it be job leads, interviews, or simple follow ups. This is a Django app with React nested inside. Simply login in through Djangos secured back end, and add follow ups with corresponding emails at ease. When you're done feel free to delete them. If this sounds like something you could use, follow along as i explain the steps to use it yourself.

  Built With
Django: As the back end and main support of the project
React: This is the framework for Redux and JSX
Redux: This controls the store and state
Knox: Controls Authorization and token configuration for security
Webpack: This compiles your code through npm into a single file and deploys it
Babel: This allows Javascript to be understood by multiple browsers

  Before you get started:
If you chose to just view a demo, check out my self demo video on youtube:
  https://www.youtube.com/watch?v=xfelUsydxrM
For tutorials on how to build your own similar project see the Django docs:
  https://www.django-rest-framework.org/#installation

  Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

    Prerequisites
  You will need to install the following through your terminal:
1.  Npm is a must and you will have to install it on your machine
  ~npm install
2. Next you will need webpack as a server to cimple your
  ~npm i -D webpack
3. Install pip3 enviroment shell
  ~pip3 install pipenv

    Cloning the Code
  For this process you will need a Github account of your own.
  After head over to my github @ https://github.com/AlteredArt/JobJot
1. First you will want to fork your own version of the code by clicking the fork button in the top right hand corner.
2. hover over to the code button and click on it.
3. Next copy the http link to your clipboard
4. Finally head over to your terminal window and run
  ~git clone (and paste the http key here)

    Deployment
  To Deploy this project to your browser windows follow these steps
1. Start with a open terminal in the root directory of the code you cloned
2. Next start the pip enviroment you installed in the prerequisits by running
  ~pipenv shell
3. Now youll notice you are in your development enviroment, next change directories into jobjot and ls so that you can see python manage.py
 ~cd jobjot/
  ~ls   (see manage.py)
4. You will want to run your python server, by running
  ~python manage.py runserver
5. open a new terminal window to run your webpack runserver
6. Start by entering into your development enviroment again by running
  ~pipenv shell
7. Now that your in your shell from your root directory ls so that you see Pipfile
8. When your there simply run
  ~npm run dev
9. This will launch the webpack server and now you can go to your local browser and go to your local server address given by the python server
10. Now you are free to use the program at will

    Whats next?
  Next i plan to implement a few extra features into the interface, along with adding it as an extension into Google Chrome. Finally i will follow up with a deployment to Heroku.

Thank you for reading, I hope you enjoy jobjot
Feel free to contact me at any time!

  Problems:
add your problems to the read me here



make sure your in the pipenv shell then run the server in a single terminal window
run the server
python manage.py runserver

you can now access through postman
	python manage.py startapp frontend
	mkdir -p ./frontend/src/components
	mkdir -p ./frontend/{static,templates}/frontend


npm run build
npm run dev


Ok have your sever running on one tab in pipenv shell by running python manage.py runserver
then in another tab in pipenv shell you want to run npm run dev to make any changes in home directory

react- redux
babel
react alert

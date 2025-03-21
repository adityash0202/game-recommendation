# Data-Driven-Customer-Segmentation-and-Game-Recommendations-for-SFU

SFU introduced gaming rooms and board games to increase
student engagement and social life, but a major problem arose
as few students played there regularly from our cohort. After
conducting a survey among students from various batches, the
reasons for this problem were identified as the struggle to find
relevant games. To address this issue, a data-driven customer
segmentation and game recommendation system was
developed to maintain a limited but relevant library of games,
bridge the gap between game discovery and user interests,
and ultimately build a stronger community in the university.

Steps to run our Data Product:
Introduction
This repository contains code for a web application that has both a frontend GUI and a backend server.

Prerequisites
Python 3.x
Node.js
npm

Installation

• Frontend
1. Go to the gui folder using the command line interface.
Run the following command to start the frontend server: python manage.py runserver

2. Make sure you have the "CORS Unblock" extension installed on your browser. This will allow you to make requests to the backend server from the frontend.

• Backend
1. Go to the backend folder using the command line interface.
2. Run the following command to install all the dependencies: npm install
3. Run the following command to start the backend server: npm start

Usage
After following the installation instructions, you can access the web application by opening a web browser and navigating to http://localhost:8000 or whichever port the frontend server is running on.


Run the following Jupyter notebooks in this order:
Please note, if you are unable to view these files on github, please download it and then view on colab.
1. Clone our Project and then connect to colab
2. Run WikipediaWebScraping.ipynb
3. Run SwitcScoresWebScraping.ipynb
4. Run data_preparation.ipynb
5. Run EDA.ipynb
6. Run Model.ipynb

Our Model.ipynb consits of all final results

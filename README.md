AI Twitter Retweets Predicition:

A project by Lewin Sim (1003617), Austin Tay (1003304), James Gan (1003330), and Tan Chia Yik (1003391)

GUI Description:
For our GUI, we have opted to create a web application. We have constructed our web application in the form of a game, whereby the user has to try and 
beat the predictions of the model. Given n amount of input features, the user has to try and guess the number of retweets a particular tweet will get. 
With each prediction, the mean square log error of the users guess and the models guess will be aggregated.\

The web application consists of 2 parts, a React frontend, which can be found in the "./FrontEnd" directory, and a Flask backend, which can be found in 
the "Backend" directory

Installation Instructions:
1. Navigate into the "Backend" directory, install the required python dependencies with the command $ pip install -r requirements.txt
2. Start the backend server with the command $ python server.py. Be sure to start the backend server before the frontend as the api routes needs to be ready 
before the front end starts. 
3. Navigate into the "Frontend" directory, install the required node dependencies with the command $ npm install. Ensure you have node.js installed beforehand
4. Start the frontend with the command $ npm start

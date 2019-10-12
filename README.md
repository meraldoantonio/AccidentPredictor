# CSE6242 Data & Visual Analytics (Spring 2019)
## Team 74 - Road Traffic Accident Prediction Web Application

<img align="right" height="244" src="https://www.shareicon.net/data/128x128/2015/12/27/693941_transport_512x512.png">

### Description of the project
In this project, we set out to solve the problem of Road Traffic Accident (RTA) in London, United Kingdom by providing a tool to predict RTA risk so that users can make informed decision about their traveling route. We also did a detailed analysis of past data and visuals to gain a better understanding of RTA.

Our web interface contains two parts, namely exploration and interaction. In the exploration part, we presents our research methodology, algorithm used, analysis and visualization of the data. In the interaction part, user can make use of an interactive dashboard to predict the probability of RTA in their chosen routes.

The app uses machine learning models for predictions. User will have to enter a date and time, an origin and travel destination. The app will then call [Google maps API](https://cloud.google.com/maps-platform/) for route planning and a weather API, [Darksky](https://darksky.net/dev)
for weather forecasts. These data will then be fed into the model and probability of RTA occurring in user's route will be displayed on the map as hazard icons.

The web application is built using Python Flask framework and is currently being hosted in Pythonanywhere, [here](http://kteo7.pythonanywhere.com/home).

---
### Installation and setup

**a. First-time setup**  
1) Unzip the 'team74final.zip' folder and put it in your local drive.  

2) Make sure you are connected to the internet

3) The Python virtual environment for this project is created using [Pipenv](https://pipenv.readthedocs.io/en/latest/), which is a Python package. First, install the package to your local Python program if you don't have the package. Open a new command line,
 ```
 pip install pipenv
 ```

4) To install project package requirements from *Pipfile* and *Pipfile.lock* in the 'team74final' folder:  

   - Change the working directory to the where your unzipped 'team74final' folder is in the command line.
   ```
   cd C:\Users\xxx\team74final\CODE
   ```

   - Create a virtual environment for this project.
   ```
   pipenv shell
   ```

   - Install all the packages from the *Pipfile* into the virtual environment.
   ```
   pipenv install
   ```
   - All the packages required will now be installed.  

&nbsp;    

**b. To run the Flask app locally:**  
1) Navigate to the project folder in command prompt, run the following to activate the virtual environment.
  ```
  pipenv shell
  ```
2) Running flask,
   - In Windows command prompt, the following command will  export the Flask application and run the app in debug mode.
   ```
   set FLASK_DEBUG=1
   ```  
   ```
   flask run
   ```   
   - The equivalent in Mac,  
   ```
   export FLASK_DEBUG=1
   ```  
   ```
   flask run
   ```

3) Ensure that you have internet access. Open the localhost in your Google Chrome, 'http://localhost:5000/'  

   **NOTE**: Should any of the above fail, the web app can still be accessed at the following address.  
   https://kteo7.pythonanywhere.com/


---

### Execution
Please refer to the following link for screenshots on how to execute the prediction tool.
https://docs.google.com/document/d/1NBnV09YSlKvXVZ0oXIUsbCFj2SeiQCps-0pkpEFj-ss/edit?usp=sharing

We have also created a video demo which can be found here.  
https://www.youtube.com/watch?v=5OhZl6achaM

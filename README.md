# COVID-19 Map Application
## Main Goals
Build a react native application that displays COVID-19 cases for each country and region on the MAP.
## Milestones
### Step 1：Set up environment
Set up the React Native environment on your machine
### Step 2: Go through React Native Tutorials
Go through React Native Tutorials and build a basic Hello-World Application.
run the following command to start the first helloworld react native project
```
npm install -g expo-cli
expo init FirstApp
cd FirstApp
expo start
```
### Step 3: Deploy a map on app
Develop the covid-19 app with a map. Install and set up React Native application with relative sources.
```
npm install -g react-native-cli
react-native run-ios
npm install --save react-native-map
```
### Step 4: On separate branch, exercise the CODVID-19 API (Documentation using postman) and display the data in your application as text.
This app can uses the CODVID-19 API to get the  number of confirmed cases by each state. Otherwise, It can also return the total number of confirmed cases per day in the whole country. The command is shown as below:
```
curl --location --request GET https://api.covid19api.com/live/country/united-states/status/confirmed/date/2020-04-10T20:00:00Z
curl --location --request GET https://api.covid19api.com/dayone/country/united-states/status/confirmed
```

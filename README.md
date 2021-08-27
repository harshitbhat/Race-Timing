# Race Event Timing

The app is made as part of a test assignment.In this I have developed the front end part of the application. I am using dummy data, which is generated by a js file.

The app can be viewed live ([Live Demo](https://harshitbhat.github.io/Race-Timing/)).

To run the project in your local environment:

- Clone this repository.
- Go to project directory.
- Run `npm install` .
- Run `npm start`.

## Functionality of the App

### At Start

At the start, no one has entered the track, so a loader runs till someone enters the field.

![Loader](https://github.com/harshitbhat/Small-Projects/blob/master/screenshots/test/loader.gif)

### As Athletes enter the field

As soon as players start entering the field, they are shown in order of entering the field.
The one entering the field last is shown at the top and the rest are moved down the table based on their arrival time.

![Arrival](https://github.com/harshitbhat/Small-Projects/blob/master/screenshots/test/arrival.gif)

### As some athletes complete the race

Just when a player crosses the finish line, his rank is displayed and they are sorted in the order of their finish time. Rest of the players are still in the table as they enter the track.
The top 3 places are shown seperately and rank of rest of the players are shown in the table only in the order they finish the race.

![Finish](https://github.com/harshitbhat/Small-Projects/blob/master/screenshots/test/winner.gif)

### Code Structure

The React consists of the View part of the MVC Architecture.
The code has been sturctured so that it is extensible, and with just few changes based on the data, it can be used with the server, rest of the code will remain same.

### The App is responsive

The app has been made responsive so that it can be viewed on any type of screen size.

![Moto G4](https://github.com/harshitbhat/Small-Projects/blob/master/screenshots/test/images/motoG4.jpeg)
![Pixel 2](https://github.com/harshitbhat/Small-Projects/blob/master/screenshots/test/images/pixel2.jpeg)
![iPhone X](https://github.com/harshitbhat/Small-Projects/blob/master/screenshots/test/images/iPhoneX.jpeg)
![iPad](https://github.com/harshitbhat/Small-Projects/blob/master/screenshots/test/images/iPad.jpeg)
![Surface Duo](https://github.com/harshitbhat/Small-Projects/blob/master/screenshots/test/images/surfaceDuo.jpeg)

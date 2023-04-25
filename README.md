# Express Note Taker
A web application that allows users to create, save, and delete notes.

## User Story
````
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
````

## Acceptance Criteria
````
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column,
  plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
````

## Installation
To run this project on your local machine, follow these steps:

   1. Clone the repository to your local machine by running the following command in your terminal:

    git clone https://github.com/Tadhgin/Express.Note.Taker.git

   2. Navigate to the project directory in your terminal:

    cd Express.Note.Taker

   3. Install the dependencies by running the following command:

    npm install

## Usage

  To start the application, run the following command:

    npm start

This will start the server and make the application available at http://localhost:3000.

Once the application is running, you can use it to create, view, update, and delete notes.

The notes are stored in the db.json file, which is updated automatically whenever a note is created, updated, or deleted.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the GitHub repository.

## Credits

This application was created by Tadhgin White

## License

This application is licensed under the MIT License.

## Mock-Up
The following images show the web application's appearance and functionality:
![Note Taker](https://user-images.githubusercontent.com/117637052/225011082-0b17a02a-770c-4114-bb4a-616e90f504ab.gif)

## URL
Follow the link to use the app, redeployed to Heroku :)
https://quiet-reaches-24125.herokuapp.com/

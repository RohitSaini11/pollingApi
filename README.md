# Polling API
API created using Node JS and Express JS which allows to create, poll, and vote on dynamic questions and options.

### Features

1. Create a question.
2. Create options for a question.
3. Vote for a particular option to a question.
4. Delete an option.
5. Delete a question.


#### Request URLs
  Base URL: http://localhost:8080/api

   Additional URLs
   1. Create a question <br>
           /questions/create <br>
      (post request, also pass a title in the body eg title: What tates better?)
   2. View the question  <br>
           /questions/view/:id <br>
      (get request, id is the question id )
   3. Delete a question <br>
           /questions/delete/:id <br>
      (delete request, id is the question id)
   4. Create an option <br>
           /options/:id/create <br>
      (post request, id is th question's id for the option is to be created )
   5. Delete an option  <br>
        /options/delete/:id  <br>
      (delete request, id is the option's id to delete)
   6. Vote for an option <br>
        the required url will be given, with the Options.  

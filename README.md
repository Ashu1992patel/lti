# lti
 LTIMintree Assignment - March 2023

 #Start Dev Server
    npm run dev

 #Start JSON-Server
    json-server --watch db.json

#ReactJS Assignment:
    1. Login/Register functionality
        a. Login should have two fields email and password, (with validations - should be a valid email and password should contain minimum 8 characters with at least 1 Uppercase and 1 special character) error messages should be shown to the user on click submit.
        b. Registration should have three fields email, username and password (with same validation rules as above)
        c. Email is a unique field in registration process
        d. You can create a database to store users or save all users in a JSON file
    2. After Login we need to show one form to user to enter event details (below are the field name should have in a event)
        a. Event name 
        b. Event date
        c. Event description
        d. Price (user need to enter a base price for the event)
        e. Radio button for premium or normal booking
        f. Checkbox for I accept terms & conditions
        g. Submit button
    3. After submission of form we need to create an event record for that user (you can store it in a database or JSON) and need to show all the events created by the user.
    4. After login users should be able to see all the events created by him/her
    5. After login users should be able to edit/delete the events he/she created
    6. User should be able to see the total base prices of all events
    7. UI should differentiate premium bookings with normal bookings
    8. Implement the above functionalities with Redux
    9. The UI should look good.

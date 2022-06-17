function focusOnMe() {
    console.log('focus on me')
}

// An event is an interaction between the usr and the browser.
// 1. The user does something
// 2. Browser responds

// Bind events to dom elements

// Handle Events with Event Handlers
// are functions we write to handle events




// I want to print the values of my form to the document



// 1. I will need a reference to my form;
let my_form = document.getElementById('my-form')
let userNameInputField = document.getElementById('username');

//2. I will need to listen to the events on the form

function submitForm (e) {
    e.preventDefault()
    // generally used when sending formm
    // prevents the default behavior
    alert('your form was sent')
    my_form.reset()
}


function listenForUser(e){

    console.log(e.target.value)
    // returns the value of the dom element you're listening to
}

my_form.addEventListener('submit',submitForm)
userNameInputField.addEventListener('keydown',listenForUser)
// userName.onfocus = focusOnMe;
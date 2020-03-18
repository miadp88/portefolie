const loginForm = document.getElementById('login-form');

// Add eventlistener on submit, and use the processform function.
loginForm.addEventListener("submit", processForm);

function processForm(e) {
    if (e.preventDefault) e.preventDefault(); // stops default behavior. 
    console.log("form captured!");
    checkLogin();

    // You must return false to prevent the default form behavior
    return false;
}



// function for running the code that checks login credentials.
function checkLogin(){

    // Get each individual elements
    const inputs = loginForm.getElementsByTagName("input");
    const email = inputs[0].value;
    const password = inputs[1].value;
    const message = document.getElementById('login-form__message');
    
    // create admin object, with email and password
    let adminLoginObject = {
        email : "admin@email.dk",
        password : "1234"
    };
    // create user object, with email and password
    let userLoginObject = {
        email : "user@email.dk",
        password : "1234"
    };
    
    // create a new array, and insert the objects into it.
    let loginArray = new Array(
        adminLoginObject, 
        userLoginObject
    );

    // use a filter to check both email and password for any matches, 
    // if any matches return it as an object.
    var result = loginArray.filter(obj => {
        return obj.email === email && obj.password === password;
    });

    // if statement depending on the "result",
    // if failure, show error message.
    // if success, go to garage.html
    console.log(result);
    if(result === undefined || result.length < 1){
        console.log("login failure");
        message.style.display = "block";

    }else{
        console.log("login success");
        message.style.display = "none";
        window.location.href = "garage.html";
    }
}


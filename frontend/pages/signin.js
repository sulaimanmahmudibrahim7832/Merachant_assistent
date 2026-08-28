/* =========================
TEMPORARY AUTH DATA


In the final system this
will be handled by the
backend authentication system.
========================= */


const temporaryAccount = {


email: "retailer@example.com",


password: "12345678"


};


/* =========================
ELEMENTS
========================= */


const signinForm =


document.getElementById(
    "signinForm"
);


const formMessage =


document.getElementById(
    "formMessage"
);


const forgotPassword =


document.getElementById(
    "forgotPassword"
);


/* =========================
SIGN IN
========================= */


signinForm.addEventListener(
"submit",
function(event) {


    event.preventDefault();






    const email =


        document.getElementById(
            "email"
        ).value.trim();




    const password =


        document.getElementById(
            "password"
        ).value;






    /* =========================
       TEMPORARY VALIDATION
    ========================= */




    if (
        email !== temporaryAccount.email ||
        password !== temporaryAccount.password
    ) {


        formMessage.textContent =
            "Invalid email or password.";


        return;


    }






    /* =========================
       AUTHENTICATED STATE
    ========================= */




    const authenticatedUser = {


        email,


        signedIn: true


    };




    console.log(
        "Authenticated user:",
        authenticatedUser
    );






    formMessage.textContent =
        "Sign in successful.";






    /*
        Later this will navigate
        to the authenticated
        Dashboard.
    */


}


);


/* =========================
FORGOT PASSWORD
========================= */


forgotPassword.addEventListener(
"click",
function(event) {


    event.preventDefault();


    formMessage.textContent =
        "Password recovery will be handled by the authentication system.";


}


);


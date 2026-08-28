/* =========================
TEMPORARY PROFILE DATA
========================= */


const profileData = {


userId:
    "USR-001",


accountId:
    "ACC-001",


status:
    "Active",


role:
    "Business Owner"


};


/* =========================
ELEMENTS
========================= */


const userStatus =


document.getElementById(
    "userStatus"
);


const profileForm =


document.getElementById(
    "profileForm"
);


/* =========================
INITIALIZE
========================= */


userStatus.textContent =
profileData.status;


/* =========================
SAVE PROFILE
========================= */


profileForm.addEventListener(
"submit",
function(event) {


    event.preventDefault();




    const firstName =


        document.getElementById(
            "firstName"
        ).value.trim();




    const lastName =


        document.getElementById(
            "lastName"
        ).value.trim();




    const email =


        document.getElementById(
            "email"
        ).value.trim();




    const phone =


        document.getElementById(
            "phone"
        ).value.trim();




    const username =


        document.getElementById(
            "username"
        ).value.trim();




    const bio =


        document.getElementById(
            "bio"
        ).value.trim();






    const updatedProfile = {


        userId:
            profileData.userId,


        accountId:
            profileData.accountId,


        firstName,


        lastName,


        email,


        phone,


        username,


        role:
            profileData.role,


        bio


    };






    console.log(
        "Updated profile:",
        updatedProfile
    );




    alert(
        "Profile information updated successfully."
    );


}


);


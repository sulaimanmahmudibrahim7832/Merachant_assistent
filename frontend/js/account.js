/* =========================
TEMPORARY ACCOUNT DATA
========================= */


const accountData = {


accountId:
    "ACC-001",


status:
    "Active",


productCount:
    3


};


/* =========================
ELEMENTS
========================= */


const accountStatus =


document.getElementById(
    "accountStatus"
);


const productCount =


document.getElementById(
    "productCount"
);


const accountForm =


document.getElementById(
    "accountForm"
);


/* =========================
INITIALIZE
========================= */


accountStatus.textContent =
accountData.status;


productCount.textContent =
accountData.productCount;


/* =========================
SAVE ACCOUNT
========================= */


accountForm.addEventListener(
"submit",
function(event) {


    event.preventDefault();




    const businessName =


        document.getElementById(
            "businessName"
        ).value.trim();




    const businessType =


        document.getElementById(
            "businessType"
        ).value;




    const businessLocation =


        document.getElementById(
            "businessLocation"
        ).value.trim();




    const market =


        document.getElementById(
            "market"
        ).value.trim();




    const businessPhone =


        document.getElementById(
            "businessPhone"
        ).value.trim();




    const businessEmail =


        document.getElementById(
            "businessEmail"
        ).value.trim();




    const businessDescription =


        document.getElementById(
            "businessDescription"
        ).value.trim();






    const updatedAccount = {


        accountId:
            accountData.accountId,


        businessName,


        businessType,


        businessLocation,


        market,


        businessPhone,


        businessEmail,


        businessDescription


    };






    console.log(
        "Updated account:",
        updatedAccount
    );




    alert(
        "Account information updated successfully."
    );


}


);
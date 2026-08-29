/* =========================
TEMPORARY SETTINGS DATA
========================= */


const settingsData = {


theme:
    "system",


notifications:
    true,


confirmations:
    true,


language:
    "english"


};


/* =========================
ELEMENTS
========================= */


const themeSetting =


document.getElementById(
    "themeSetting"
);


const notificationSetting =


document.getElementById(
    "notificationSetting"
);


const confirmationSetting =


document.getElementById(
    "confirmationSetting"
);


const languageSetting =


document.getElementById(
    "languageSetting"
);


const saveSettings =


document.getElementById(
    "saveSettings"
);


const resetSettings =


document.getElementById(
    "resetSettings"
);


/* =========================
INITIALIZE
========================= */


function loadSettings() {


themeSetting.value =
    settingsData.theme;




notificationSetting.checked =
    settingsData.notifications;




confirmationSetting.checked =
    settingsData.confirmations;




languageSetting.value =
    settingsData.language;


}


loadSettings();


/* =========================
SAVE SETTINGS
========================= */


saveSettings.addEventListener(
"click",
function() {


    settingsData.theme =
        themeSetting.value;




    settingsData.notifications =
        notificationSetting.checked;




    settingsData.confirmations =
        confirmationSetting.checked;




    settingsData.language =
        languageSetting.value;




    console.log(
        "Updated settings:",
        settingsData
    );




    alert(
        "Settings saved successfully."
    );


}


);


/* =========================
RESET SETTINGS
========================= */


resetSettings.addEventListener(
"click",
function() {


    settingsData.theme =
        "system";




    settingsData.notifications =
        true;




    settingsData.confirmations =
        true;




    settingsData.language =
        "english";




    loadSettings();




    alert(
        "Settings reset successfully."
    );


}


);


/* =========================
SUPPORT ACTIONS
========================= */


document
.getElementById("helpButton")
.addEventListener(
"click",
function() {


        alert(
            "Help Center will provide guidance for using PITMS."
        );


    }
);


document
.getElementById("supportButton")
.addEventListener(
"click",
function() {


        alert(
            "Support will help resolve system-related problems."
        );


    }
);


document
.getElementById("feedbackButton")
.addEventListener(
"click",
function() {


        window.location.href =
            "feedback.html";


    }
);


document
.getElementById("aboutButton")
.addEventListener(
"click",
function() {


        alert(
            "PITMS - Product Inventory Tracking and Management System"
        );


    }
)
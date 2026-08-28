/* =========================
TEMPORARY FEEDBACK DATA


Later this will come from
the backend/database.
========================= */


const feedbackRecords = [


{


    id:
        "FDB-001",


    type:
        "improvement",


    subject:
        "Product search",


    rating:
        5,


    status:
        "Received",


    date:
        "2026-08-28"


},




{


    id:
        "FDB-002",


    type:
        "feature",


    subject:
        "Better tracking reports",


    rating:
        4,


    status:
        "Received",


    date:
        "2026-08-26"


}


];


/* =========================
ELEMENTS
========================= */


const feedbackForm =


document.getElementById(
    "feedbackForm"
);


const feedbackCount =


document.getElementById(
    "feedbackCount"
);


const recentFeedbackCount =


document.getElementById(
    "recentFeedbackCount"
);


const feedbackTableBody =


document.getElementById(
    "feedbackTableBody"
);


const mobileFeedbackList =


document.getElementById(
    "mobileFeedbackList"
);


/* =========================
FORMAT TYPE
========================= */


function formatFeedbackType(
type
) {


if (type === "general") {


    return "General";


}




if (type === "bug") {


    return "Problem";


}




if (type === "feature") {


    return "Feature";


}




if (type === "improvement") {


    return "Improvement";


}




return type;


}


/* =========================
UPDATE COUNT
========================= */


function updateFeedbackCount() {


const count =
    feedbackRecords.length;




feedbackCount.textContent =
    count;




recentFeedbackCount.textContent =


    `${count} submission${
        count === 1
            ? ""
            : "s"
    }`;


}


/* =========================
RENDER TABLE
========================= */


function renderTable() {


feedbackTableBody.innerHTML =
    "";






if (
    feedbackRecords.length === 0
) {




    feedbackTableBody.innerHTML = `


        <tr>


            <td colspan="6">


                <div class="empty-state">


                    No feedback submitted yet.


                </div>


            </td>


        </tr>


    `;




    return;


}






feedbackRecords.forEach(
    record => {




        const row =
            document.createElement(
                "tr"
            );




        row.innerHTML = `


            <td>


                <span class="feedback-id">


                    ${record.id}


                </span>


            </td>




            <td>


                <span class="feedback-type">


                    ${formatFeedbackType(
                        record.type
                    )}


                </span>


            </td>




            <td>


                ${record.subject}


            </td>




            <td>


                ${record.rating}/5


            </td>




            <td>


                <span class="feedback-status">


                    ${record.status}


                </span>


            </td>




            <td>


                ${record.date}


            </td>


        `;




        feedbackTableBody.appendChild(
            row
        );


    }
);


}


/* =========================
MOBILE RECORDS
========================= */


function renderMobile() {


mobileFeedbackList.innerHTML =
    "";






if (
    feedbackRecords.length === 0
) {




    mobileFeedbackList.innerHTML = `


        <div class="empty-state">


            No feedback submitted yet.


        </div>


    `;




    return;


}






feedbackRecords.forEach(
    record => {




        const item =
            document.createElement(
                "article"
            );




        item.className =
            "mobile-feedback-record";




        item.innerHTML = `


            <div class="mobile-feedback-header">




                <div class="mobile-feedback-title">


                    <strong>


                        ${record.subject}


                    </strong>




                    <span>


                        ${record.id}


                    </span>


                </div>




            </div>






            <div class="mobile-feedback-details">




                <div class="mobile-detail">


                    <span>
                        Type
                    </span>


                    <strong>


                        ${formatFeedbackType(
                            record.type
                        )}


                    </strong>


                </div>




                <div class="mobile-detail">


                    <span>
                        Rating
                    </span>


                    <strong>
                        ${record.rating}/5
                    </strong>


                </div>




                <div class="mobile-detail">


                    <span>
                        Status
                    </span>


                    <strong>
                        ${record.status}
                    </strong>


                </div>




                <div class="mobile-detail">


                    <span>
                        Date
                    </span>


                    <strong>
                        ${record.date}
                    </strong>


                </div>




            </div>


        `;




        mobileFeedbackList.appendChild(
            item
        );


    }
);


}


/* =========================
RENDER ALL
========================= */


function renderFeedback() {


updateFeedbackCount();


renderTable();


renderMobile();


}


/* =========================
SUBMIT FEEDBACK
========================= */


feedbackForm.addEventListener(
"submit",
function(event) {


    event.preventDefault();




    const type =


        document.getElementById(
            "feedbackType"
        ).value;




    const rating =


        Number(
            document.getElementById(
                "rating"
            ).value
        );




    const subject =


        document.getElementById(
            "subject"
        ).value.trim();




    const message =


        document.getElementById(
            "message"
        ).value.trim();






    const newFeedback = {


        id:


            `FDB-${
                String(
                    feedbackRecords.length + 1
                ).padStart(3, "0")
            }`,


        type,


        rating,


        subject,


        message,


        status:
            "Received",


        date:
            new Date()
                .toISOString()
                .split("T")[0]


    };






    feedbackRecords.unshift(
        newFeedback
    );




    feedbackForm.reset();




    renderFeedback();




    alert(
        "Feedback submitted successfully."
    );


}


);


/* =========================
INITIALIZE
========================= */


renderFeedback();


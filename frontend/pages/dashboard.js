const currentDate =   document.getElementById("currentDate");




currentDate.textContent =
    new Date().toLocaleDateString(
        undefined,
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );






/* =========================
   TEMPORARY TRACKING DATA
========================= */


const trackingData = {


    daily: {


        imports: 18,


        exports: 12


    },




    weekly: {


        imports: 125,


        exports: 83


    },




    monthly: {


        imports: 520,


        exports: 365


    }


};






/* =========================
   TRACKING ELEMENTS
========================= */


const trackingPeriod =document.getElementById(  "trackingPeriod" );




const importCount =  document.getElementById("importCount");




const exportCount = document.getElementById("exportCount" );




const netMovement = document.getElementById( "netMovement"  );






/* =========================
   UPDATE TRACKING
========================= */


function updateTracking() {


    const selectedPeriod =
        trackingPeriod.value;




    const data =trackingData[selectedPeriod];




    importCount.textContent =data.imports;




    exportCount.textContent =data.exports;




    const net =data.imports - data.exports;




    netMovement.textContent =
        net >= 0 ? `+${net}`: net;
}






/* =========================
   PERIOD CHANGE
========================= */


trackingPeriod.addEventListener(
    "change",
    updateTracking
);






/* =========================
   INITIALIZE
========================= */


updateTracking();
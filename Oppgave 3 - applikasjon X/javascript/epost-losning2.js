(function () {

    let cookieStatus;
    let mainPageContent;


    const init = function () {

        const setHTMLObjects = function () {
            cookieStatus = document.getElementById("cookie-status");
            mainPageContent = document.getElementById("main-page-content");
            //boxesArray
        }(); //end setHTMLObjects

        const setGUI = function () {
            checkIfCookie();
        }();

    }(); //end init   

    /* Application logic Page 2*/

    function checkIfCookie() {
        if (document.cookie) {
            let epostCookie = document.cookie; 
            let cookieArray = epostCookie.split("="); 
            let epost = cookieArray[1];

            cookieStatus.innerHTML = "Cookie finnes: " + epost;
            }


        } else {
            cookieStatus.innerHTML = "Cookie finnes ikke";
        }
    }

}())

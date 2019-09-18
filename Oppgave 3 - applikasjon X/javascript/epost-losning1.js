(function () {



    let cookieStatus;
    let EpostTxt;
    let setEpostBtn;
    let deleteCookieBtn;

    const init = function () {
        const setHTMLObjects = function () {
            cookieStatus = document.getElementById("cookie-status");
            EpostTxtTxt = document.getElementById("epost-txt");
            setEpostBtn = document.getElementById("set-epost-btn");
            deleteCookieBtn = document.getElementById("delete-cookie-btn");
        }(); //end setHTMLObjects

        const setEvents = function () {
            setEpostBtn.onclick = setCookie;
            deleteCookieBtn.onclick = deleteCookie;
        }();

        const setGUI = function () {
            checkIfCookie();
        }();

    }(); //end init   

    /* Application logic*/
    function checkIfCookie() {
        if (document.cookie) {
            cookieStatus.innerHTML = "Cookie finnes " + document.cookie;
        } else {
            cookieStatus.innerHTML = "Cookie finnes ikke";
        }
    }

    function setCookie() {
        let newDate = new Date();
        newDate.setDate(newDate.getDate() + 3);

        let Epost = EpostTxt.value;

        document.cookie = `epost=${epost}; expires=${newDate.toUTCString()}`;

        checkIfCookie();
    }

    function deleteCookie() {
        let newDate = new Date();
        newDate.setDate(newDate.getDate() - 3);

        let Epost = EpostTxt.value;

        document.cookie = `epost=; expires=${newDate.toUTCString()}`;

        checkIfCookie();
    }


}())

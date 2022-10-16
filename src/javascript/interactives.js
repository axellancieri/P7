//Notif Alert


    //Notif Alert Variables
    const getDiv = document.createElement('div');
    const traffic = document.querySelector('.traffic');
    const bellNotif = document.querySelector('.svg-head-bell');
    const activeButton = document.querySelector('#activeStart').focus();

    function alertPopUp() {
        // Alerts function
    const notifAlerts = function () {
        $("#notif-alert")
            .hide()
            .slideDown(500)
            .delay(4000)
            .slideUp(500);
        $(".svg-head-bell ellipse")
            .hide()
            .show(500)
            .delay(4000)
            .hide(500);
    }
        getDiv.innerHTML = `<p><strong>Alert:</strong> &nbsp You have unread messages</p><span>X</span>`;
        getDiv.setAttribute('id', 'notif-alert');
        main.insertBefore(getDiv, traffic);   
        // making event listener on 'X' span element so it'll close the alertpopu
        const closeNotifBar = getDiv.querySelector('span');
        closeNotifBar.addEventListener('click', () => {
            $("#notif-alert").hide();
            $(".svg-head-bell ellipse").hide();
        });
        bellNotif.addEventListener('click', () => {
            $("#notif-alert").hide();
            $(".svg-head-bell ellipse").hide();
            alertPopUp()
        });
        notifAlerts()
        
    }

//Message User interactivity
    //searchBar

    const messageForm = document.querySelector('.message-us');

    function searchBar() {
        const searchBar = messageForm.querySelector('#searchUser');

        /*starting code block where we create div elements on focus and make
        searchbar match to names on pplData variable*/

        searchBar.addEventListener('focusin', () => {
        for ( let i = 0; i < pplData.length; i++ ) { 
    
            const slideNames = document.createElement('Div'); 
            slideNames.innerHTML = `<p>${pickUrValue(pplData, [i], 'name')}</p>`;
            slideNames.classList.add('message-search-popUp');
            slideNames.style.display = 'none';
            searchBar.insertAdjacentElement('afterend', slideNames);
            
            function searchMatch() {
                searchBar.value = searchBar.value.toLowerCase()
                searchLowCase = searchBar.value   
                    if (!slideNames.innerHTML.toLowerCase().includes(searchLowCase)) {
                        slideNames.style.display = 'none';
                    } else if (searchLowCase.length === 0) {
                        slideNames.style.display = 'none';
                    } else {
                        slideNames.style.display = 'flex';
                    }
            }
                searchBar.addEventListener('keyup', searchMatch)   
                /*
                focusing out of searchbar will make divs suggesting users
                to be deleted. Will get re displayed if searcbar is re focused
                */      
                searchBar.addEventListener('focusout', () => {
                    slideNames.remove()
            })
            /*
            on mouse click it'll pick the name of the person selected and display
            it on search bar text
            */
            slideNames.addEventListener('mousedown', () => {
                searchBar.value = pickUrValue(pplData, [i], 'name');
            })
    
            }
        });
    
    }

    function buttonMessage() {

        const button = messageForm.querySelector('button');
        const searchCheck = messageForm.querySelector('.message-search');
        const txtAreaCheck = messageForm.querySelector('.textarea');

        const alertMessageDiv = document.createElement('div');
        alertMessageDiv.classList.add('textarea-errormsg');

        const errorDetailsDiv = document.createElement('Div');
        errorDetailsDiv.classList.add('textarea-errormsg');

        // making this event so it wont reload page

        button.addEventListener('click', (e) => {
            e.preventDefault()
        })

        /* Making even listener on button and displaying error message if username is not complete or message returns null or has a white space at start and also if its empty */

        button.addEventListener('mousedown', () => {
            for ( i = 0; i < pplData.length; i++ ) {
                if (searchCheck.value.includes(pickUrValue(pplData, [i], 'name')) && !!txtAreaCheck.value && txtAreaCheck.value.length === txtAreaCheck.value.trim().length) {
                    button.insertAdjacentElement('beforebegin', alertMessageDiv);
                    /* Following 2 lines make the animation proc if you change from success message to fail one
                    Learned this at https://css-tricks.com/restart-css-animation/ */
                    alertMessageDiv.classList.remove("textarea-errormsg-animation");
                    void alertMessageDiv.offsetWidth;

                    alertMessageDiv.style.backgroundColor = 'rgba(76, 71, 175, 0.776)';
                    alertMessageDiv.classList.add('textarea-errormsg-animation');
                    alertMessageDiv.innerHTML = `<p>Message Sent! you'll receive a copy on your inbox</p><span id="closeTagCorrect" > X </span>`;
                    const closeCorrMsg = messageForm.querySelector('#closeTagCorrect');
                    closeCorrMsg.addEventListener('click', () => {
                        alertMessageDiv.remove()
                    });
                    break
                } else {
                    button.insertAdjacentElement('beforebegin', alertMessageDiv);
                    /* Following 2 lines make the animation proc if you change from success message to fail one
                    Learned this at https://css-tricks.com/restart-css-animation/ */
                    alertMessageDiv.classList.remove("textarea-errormsg-animation");
                    void alertMessageDiv.offsetWidth;
                    
                    alertMessageDiv.style.backgroundColor = 'rgba(225, 34, 34, 0.5607843137)';
                    alertMessageDiv.classList.add('textarea-errormsg-animation');
                    alertMessageDiv.innerHTML = `<p>ERROR<br> <span id="errorMessage">Read more</span> to get details</p><span id="closeTagError" > X </span>`
                    /*Making an error message dropdown text with more details*/
                    const errorMessage = alertMessageDiv.querySelector('#errorMessage');
                    errorDetailsDiv.style.backgroundColor = 'rgba(225, 34, 34, 0.5607843137)';
                    errorDetailsDiv.classList.add('textarea-errorreadme');
                    errorDetailsDiv.innerHTML = '<p>Check for empty spaces at the beginning of your text and that the name and last name of the person sending the message is correct. <span id="errorDetails">Close Read more</span></p>';
                    
                    errorMessage.addEventListener('mousedown', () => {
                        alertMessageDiv.insertAdjacentElement('afterend', errorDetailsDiv)
                    });  
                    const closeErrMsg = messageForm.querySelector('#closeTagError');
                    closeErrMsg.addEventListener('click', () => {
                        alertMessageDiv.remove()
                    });
                    errorDetailsDiv.addEventListener('click', () => {
                        errorDetailsDiv.remove()
                    });
                }   
            }
        })          
    }
    //message user button interactions

//Settings local storage
    const settings = document.querySelector('.settings');
    const settButtons = settings.querySelectorAll('.btn-settings');
    const saveSett = settButtons[0];
    const cancelSett = settButtons[1];
    const emailNotif = settings.querySelector('#chkboxEmail');
    const setProf = settings.querySelector('#chkboxSetProf');
    const timeZone = settings.querySelector('.time-zone select');

/* function with checkboxes and timezone function */

    function localStorSettings() {
        const localStorCheckBox = function(checkboxVar, objName) {
            saveSett.addEventListener('click', () => {
                if (checkboxVar.checked === true) {
                    localStorage.setItem(`${objName}`, 'true')
                } else {
                    localStorage.setItem(`${objName}`, 'false')
                }
            })
            
            localStorage.getItem(`${objName}`);
            if (localStorage.getItem(`${objName}`) === 'true') {
                checkboxVar.checked = true;
            } else {
                checkboxVar.checked = false;
            }
        }
        
        const localStorTimeZone = function() {

            /*Making the following if statement so it'll show 'select timezone'
            when openning the site without any local storage */

            if (localStorage.getItem('timeSet') === null ) {
                localStorage.setItem('timeSet', '');
            }

            /* folloing statements within function make timezone select input operate
            and behave as intended */

            saveSett.addEventListener('click', () => {   
                localStorage.setItem('timeSet', `${timeZone.value}`)         
            })
        
            timeZone.value = localStorage.getItem('timeSet'); 
        }

        cancelSett.addEventListener('click', () => {
            emailNotif.checked = false;
            setProf.checked = false;
            localStorage.removeItem('emailNotifObj');
            localStorage.removeItem('setProfObj');
            timeZone.value = '';
            localStorage.setItem('timeSet', '');
            })
        
        localStorCheckBox(emailNotif, 'emailNotifObj');
        localStorCheckBox(setProf, 'setProfObj');
        localStorTimeZone();

    }    

//CALLING ALL INTERACTIVE FUNCS

    window.addEventListener('load', () => {
        localStorSettings()
        alertPopUp();
        activeButton;
        searchBar();
        buttonMessage()
    });
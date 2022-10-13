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
            .delay(500)
            .slideDown(500)
            .delay(4000)
            .slideUp(500);
        $(".svg-head-bell ellipse")
            .hide()
            .delay(500)
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
        });
        notifAlerts()
        activeButton
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
            slideNames.classList.add('papaya');
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
                fosuing out of searchbar will make divs suggesting users
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

    //message user button interactions


//CALLING ALL INTERACTIVE FUNCS

    window.addEventListener('load', () => {
        alertPopUp();
        searchBar();
        buttonMessage()
    });
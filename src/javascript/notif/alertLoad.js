import {main,
        getDiv
        } from './../index'

//Local Variables
const traffic = document.querySelector('.traffic');
const bellNotif = document.querySelector('.svg-head-bell');
const activeButton = document.querySelector('#activeStart').focus();

//Notification alerts
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

export { alertPopUp }
//Variables
const traffic = document.querySelector('.traffic');
const getDiv = document.createElement('div');
const main = document.querySelector('main');

//Notification alerts
function alertPopUp() {
    getDiv.innerHTML = `<p><strong>Alert:</strong> &nbsp You have unread messages</p><span>X</span>`;
    getDiv.setAttribute('id', 'notif-alert');
    const closeNotifBar = getDiv.querySelector('span');
    main.insertBefore(getDiv, traffic);
    // making event listener on 'X' span element so it'll close the alertpopu
    closeNotifBar.style.cursor = 'pointer';
    closeNotifBar.addEventListener('click', () => {
        $("#notif-alert").hide();
    });
    //Using Jquery to give an animation sequence effect
    // $("#notif-alert")
    //     .hide()
    //     .delay(500)
    //     .slideDown(1500)
    //     .delay(5000)
    //     .slideUp(1500);
};

//Making alertPop appear on page load
window.addEventListener('load', () => {
    alertPopUp();
});


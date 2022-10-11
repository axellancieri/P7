import { alertPopUp } from './notif/alertLoad'
import { socialStats } from './layout/socialStats'
import { newMembers } from './layout/newMemb'
import '../scss/style.scss'
import './charts/charts'

// Global func

function pickUrValue(obj, num, value) {
        
    for ( let i = 0; i < obj.length; i++ ) {
        let objVal = obj[num][value];
        return objVal;
    }
}

// Global vars

const main = document.querySelector('main');
const aside = document.querySelector('aside');
const getAside = document.createElement('aside');
const getSecSocial = document.createElement('section');
const getSecMem = document.createElement('section');
const getDiv = document.createElement('div');

//Making alertPop appear on page load
window.addEventListener('load', () => {
    alertPopUp();
    socialStats();
    newMembers();    
});

export { pickUrValue,
         main,
         aside,
         getSecSocial,
         getDiv,
         getSecMem
}
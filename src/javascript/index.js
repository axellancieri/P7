import { alertPopUp } from './interact/alertLoad'
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
const getAside = document.createElement('ASIDE');
const getSecSocial = document.createElement('SECTION');
const getSecMem = document.createElement('SECTION');
const getDiv = document.createElement('div');

//Making alertPop appear on page load
window.addEventListener('load', () => {
    alertPopUp();
    socialStats();
    newMembers();    
});

export { pickUrValue,
         main,
         getAside,
         getSecSocial,
         getDiv,
         getSecMem
}
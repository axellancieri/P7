import { alertPopUp } from './interact/alertLoad'
import { socialStats } from './layout/socialStats'
import { newMembers } from './layout/newMemb'
import { recentMembers } from './layout/recentMembe'
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
const aside = document.createElement('ASIDE');

//Making alertPop appear on page load
window.addEventListener('load', () => {
    alertPopUp();
    socialStats();
    // Getting Aside created
        aside.classList.add('members');
        aside.setAttribute('id', 'ppl')
        main.insertAdjacentElement('afterend', aside)
    newMembers(); 
    recentMembers();   
    //taking borderoff first image on each aside sections
        const noBorderMemb = aside.querySelectorAll('.new-members > .flexing-members');
        noBorderMemb[0,4].setAttribute('id', 'no-border');
});

export { pickUrValue,
         main,
         aside
}
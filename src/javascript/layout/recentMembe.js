import {pickUrValue,
    aside
    } from './../index'
import { pplData } from './newMemb'

//local variables
const sectRec = document.createElement('SECTION');

function recentMembers() {
    const recentMembData = [
        {
            activity: "commented on <strong>WebApp's SEO Tips</strong>",
            time: '4 hours ago'
        },
        {
            activity: "liked the post <strong>Facebook's Changes for 2021</strong>",
            time: '5 hours ago'
        },
        {
            activity: "commented on <strong>Facebook's Changes for 2021",
            time: '5 hours ago'
        },
        {
            activity: "posted <strong>WebApp's SEO Tips</strong>",
            time: '1 day ago'
        }
    ]
    //id="no-border"
    function recMemCards(num) {
        let times = ``;
        for ( let i = 0; i < num; i++ ) {
            times += `
                    <div class="flexing-members" >
                        <img src="${pickUrValue(pplData, [i], 'image')}" class="new-members-images">
                        <div class="recent-activity-margin">
                            <p>${pickUrValue(pplData, [i], 'name')} ${pickUrValue(recentMembData, [i], 'activity')}</p>
                            <p>${pickUrValue(recentMembData, [i], 'time')}</p>
                        </div>
                        <p><span>></span></p>
                    </div>
            `;
        }
        return times;
    }

    sectRec.classList.add('new-members')
    sectRec.innerHTML = '<h2>Recent Activity</h2>'
    aside.insertAdjacentElement('beforeEnd', sectRec)
    sectRec.insertAdjacentHTML('beforeEnd', recMemCards(4)) 

}

export { recentMembers }
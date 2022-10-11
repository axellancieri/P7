import {pickUrValue,
        aside
        } from './../index'

//local variables
const sectMemb = document.createElement('SECTION');
const pplData = [
    {
        name: 'Victoria Chambers',
        email: 'victoria.chambers80@example.com',
        bdate: '10/15/20',
        image: require('../../images/member-1.jpg')
        
    },
    {
        name: 'Dale Byrd',
        email: 'dale.byrd52@example.com',
        bdate: '10/15/20',
        image: require('../../images/member-2.jpg')
    },
    {
        name: 'Dawn Good',
        email: 'dawn.wood16@example.com',
        bdate: '10/15/20',
        image: require('../../images/member-3.jpg')
    },
    {
        name: 'Dan Oliver',
        email: 'dan.oliver82@example.com',
        bdate: '10/15/20',
        image: require('../../images/member-4.jpg')
    }
]

function newMembers() {

    function newMembCards(num) {
        let times = ``;
        for ( let i = 0; i < num; i++ ) {
            times += `
                        <div class="flexing-members">                        
                            <div>
                                <img src="${pickUrValue(pplData, [i], 'image')}" class="new-members-images" alt="image of ${pickUrValue(pplData, [i], 'name')}">
                            </div>
                            <div class="aside-text">
                                <p>${pickUrValue(pplData, [i], 'name')}</p>
                                <a href="${pickUrValue(pplData, [i], 'email')}"><address>${pickUrValue(pplData, [i], 'email')}</address></a>
                            </div>
                            <p>${pickUrValue(pplData, [i], 'bdate')}</p>
                        </div>
            `;
        }
        return times;
    }
    sectMemb.classList.add('new-members')
    sectMemb.innerHTML = '<h2>New Members</h2>'
    aside.insertAdjacentElement('beforeEnd', sectMemb)
    sectMemb.insertAdjacentHTML('beforeEnd', newMembCards(4)) 

    //MIGHT WANNA DO THIS ON INDEX / GLOBAL taking borderoff first image on New Members section
    const noBorderMemb = aside.querySelectorAll('.new-members > .flexing-members');
    noBorderMemb[0].setAttribute('id', 'no-border');

}

export { newMembers,
         pplData }
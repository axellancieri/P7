import {pickUrValue,
    main,
    getAside,
    aside,
    getSecMem
    } from './../index'



function newMembers() {

        const pplData = [
            {
                name: 'Victoria Chambers',
                email: 'victoria.chambers80@example.com',
                bdate: '10/15/20',
                image: 'images/member-1.jpg'
            },
            {
                name: 'Dale Byrd',
                email: 'dale.byrd52@example.com',
                bdate: '10/15/20',
                image: 'images/member-2.jpg'
            },
            {
                name: 'Dawn Good',
                email: 'dawn.wood16@example.com',
                bdate: '10/15/20',
                image: 'images/member-3.jpg'
            },
            {
                name: 'Dan Oliver',
                email: 'dan.oliver82@example.com',
                bdate: '10/15/20',
                image: 'images/member-4.jpg'
            }
        ]
    // id="no-border"
    function newMembCards(num) {
        let times = ``;
        for ( let i = 0; i < num; i++ ) {
            times += `
                        <div class="flexing-members">                        
                            <div>
                                <img src="images/member-1.jpg" class="new-members-images" alt="image of Victoria">
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
    // getAside
    // main.insertAdjacentHTML('afterEnd', getAside)
    // aside.classList.add('members');
    // aside.setAttribute('id', 'ppl')

    getSecMem.classList.add('new-members')
    getSecMem.innerHTML = '<h2>New Members</h2>'
    aside.insertAdjacentHTML('beforeEnd', newMembCards(4)) 
}

export { newMembers }
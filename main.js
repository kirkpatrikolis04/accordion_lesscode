// ACCORDION

let acc = document.querySelectorAll('.accordion');


    acc.forEach(item => {
        let status = item.querySelector('.info');
        let arrow = item.querySelector('.acc_arr');
        let txt = item.querySelector('.txt');
        item.addEventListener('click', () => {
            toggleAcc(arrow, txt);
        });
    });

    function toggleAcc(arrow, txt) {
       
        let currentActiveArrow = document.querySelectorAll('.accordion .acc > .active');
        let currentActiveText = document.querySelectorAll('.accordion > .show');

        // reset
        if(currentActiveArrow.length > 0 && currentActiveText.length > 0){

            currentActiveArrow[0].classList.remove('active');
            currentActiveText[0].classList.replace('show', 'hidden');

            if (!(currentActiveArrow[0].isSameNode(arrow) && currentActiveText[0].isSameNode(txt))) {
                arrow.classList.add('active');
                txt.classList.replace('hidden', 'show');
            }
           
        } else {
            arrow.classList.add('active');
            txt.classList.replace('hidden', 'show');
        }
    }








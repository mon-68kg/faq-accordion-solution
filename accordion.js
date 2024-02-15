function spinIcon(elem) {
    if (elem.classList.contains('spin-icon')) {
        elem.classList.remove('spin-icon');
    } else {
        elem.classList.add('spin-icon');
    } 
}

function show_hide(elem) {
    let accordions = document.getElementsByClassName('accordion');

    for (let accor of accordions) {
        //close other answer div
        if (accor.children[0] !== elem) {
            if (accor.children[1].classList.contains('show-answer')) {
                accor.children[1].classList.remove('show-answer');
                accor.children[1].classList.add('hide-answer')

                //for + - icons
                for (let childEl of accor.children[0].children) {
                    if (childEl.tagName.toLocaleLowerCase() === 'img') {

                        spinIcon(childEl);
                        if (childEl.classList.contains('hide-icon')) {
                            childEl.classList.remove('hide-icon');
                        } else {
                            childEl.classList.add('hide-icon');
                        }
                    }
                }
            }
        } else {
            // for answer div
            if (accor.children[1].classList.contains('hide-answer')) {
                accor.children[1].classList.remove('hide-answer');
                accor.children[1].classList.add('show-answer')
            } else {
                accor.children[1].classList.add('hide-answer');
                accor.children[1].classList.remove('show-answer')
            }

            for (let childE of accor.children[0].children) {
                if (childE.tagName.toLowerCase() == 'img') {

                    spinIcon(childE);
                    if (childE.classList.contains('hide-icon')) {
                        childE.classList.remove('hide-icon');
                    } else {
                        childE.classList.add('hide-icon');
                    }
                }
            }
        }
    }
}

function keyNav (event, elem) {
    if (event.keyCode === 13 || event.keyCode === 32) {
        show_hide(elem.parentElement);
    }
}
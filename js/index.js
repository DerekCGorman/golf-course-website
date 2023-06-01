const boxes = document.querySelectorAll('.module');

window.onscroll = function() {scrollFunction()};

boxes.forEach(box => {
    box.addEventListener('click', () =>{
        let answer = box.children[1];
        faqOpenClose(answer);
    });
});



const faqOpenClose = (answer) => {
        if(!answer.classList.contains('open')){
            answer.classList.add('answer');
            answer.classList.add('open');
            answer.classList.remove('hide');
        }else{
            answer.classList.remove('answer');
            answer.classList.remove('open');
            answer.classList.add('hide');
            hidden = true;
        }
}

const scrollFunction = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById('nav-bar').classList.add('navScroll');
    }
    else{
        document.getElementById('nav-bar').classList.remove('navScroll');
    }
}
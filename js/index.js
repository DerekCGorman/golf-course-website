const boxes = document.querySelectorAll('.module');

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
const arrowRight= document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft= document.querySelector('.portfolio-box .navigation .arrow-left');

let index=0;
const activePortfolio=() =>{
    const imgSlide= document.querySelector('.portfolio-carousel .img-slide');
    imgSlide.style.transform =`translateX(calc(${index * -100}% - ${index * 2}rem))`;
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    portfolioDetails.forEach(detail =>{
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () =>{
    if (index <2){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 3;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () =>{
    if(index>1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index=0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
})


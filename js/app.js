
$(document).ready(function(){
    $('.count').counterUp({
        delay:10,
        time:1200
    })
})

var skillsSection = document.querySelector(".service_offers");
var progressBars = document.querySelectorAll(".progress-bar");
function showProgress(){
    progressBars.forEach(progressBars =>{
        var value = progressBars.dataset.progress;
        progressBars.style.opacity = 1;
        progressBars.style.width = `${value}%`;
    })
}
function hideProgress(){
    progressBars.forEach(p =>{
        p.style.opacity = 0;
        p.style.width = 0;
    })
}
window.addEventListener('scroll', ()=>{
    var sectionpass = skillsSection.getBoundingClientRect().top;
    var screenPass = window.innerHeight/2;
    if(sectionpass < screenPass){
      showProgress();
    }else{
       hideProgress();
    }
})
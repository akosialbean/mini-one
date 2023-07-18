let jobCountView = document.querySelector("#jobSeekersCount")
let jobCount = 0
let jobCountTotal = 27777
let jobCountTotalMin = jobCountTotal / 10
let jobCountInterval = setInterval(function(){
    jobCount+=jobCountTotalMin
    jobCountView.innerHTML = parseInt(jobCount)

    if(jobCount >= jobCountTotal){
        clearInterval(jobCountInterval)
    }
}, 100)

let employerCountView = document.querySelector("#employersCount")
let employerCount = 0
let employerCountTotal = 4671
let employerCountMin = employerCountTotal / 10
let employerCountInterval = setInterval(function(){
    employerCount+=employerCountMin
    employerCountView.innerHTML = parseInt(employerCount)

    if(employerCount >= employerCountTotal){
        clearInterval(employerCountInterval)
    }
}, 100)

let jobVanciesView = document.querySelector("#jobVacanciesCount")
let jobVacanciesCount = 0
let jobVacanciesCountTotal = 3226
let jobVacanciesCountMin = jobVacanciesCountTotal / 10
let jobVacanciesInterval = setInterval(function(){
    jobVacanciesCount+=jobVacanciesCountMin
    jobVanciesView.innerHTML = parseInt(jobVacanciesCount)

    if(jobVacanciesCount >= jobVacanciesCountTotal){
        clearInterval(jobVacanciesInterval)
    }
}, 100)

let jobSeekersHiredView = document.querySelector("#jobSeekersHired")
let jobSeekersHiredCount = 0
let jobSeekersHiredTotal = 11315
let jobSeekersHiredMin = jobSeekersHiredTotal / 10
let jobSeekersHiredInterval = setInterval(function(){
    jobSeekersHiredCount+=jobSeekersHiredMin
    jobSeekersHiredView.innerHTML = parseInt(jobSeekersHiredCount)

    if(jobSeekersHiredCount >= jobSeekersHiredTotal){
        clearInterval(jobSeekersHiredInterval)
    }
}, 100)


//NAVBAR

let navBarOpacity = document.querySelector(".navbar")
let navLogo = document.querySelector("#navLogo")
let getStarted = document.querySelector('.btn-get-started')
window.onscroll = function(){
    if(window.scrollY){
        navBarOpacity.style.opacity = "1"
        getStarted.style.opacity = "1"
        navBarOpacity.style.background = "black"
        navBarOpacity.style.height = "100px"
    }else{
        navBarOpacity.style.background = "black"
        navBarOpacity.style.opacity = "0.6"
        navBarOpacity.style.height = "120px"
        getStarted.style.opacity = "1"
    }
}

window.onload = function(){
    getStarted.style.opacity = "1"
}
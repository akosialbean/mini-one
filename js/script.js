let jobCountView = document.querySelector("#jobSeekersCount")
let jobCount = 0
let jobCountTotal = 27777
let jobCountTotalMin = jobCountTotal / 100
let jobCountInterval = setInterval(function(){
    jobCountView.innerHTML = jobCount
    jobCount++

    if(jobCount >= jobCountTotal){
        clearInterval(jobCountInterval)
    }
}, 1)

let employerCountView = document.querySelector("#employersCount")
let employerCount = 1
let employerCountInterval = setInterval(function(){
    employerCountView.innerHTML = employerCount
    employerCount++

    if(employerCount == 4671){
        clearInterval(employerCountInterval)
    }
}, 4)

let jobVanciesView = document.querySelector("#jobVacanciesCount")
let jobVacanciesCount = 1
let jobVacanciesInterval = setInterval(function(){
    jobVanciesView.innerHTML = jobVacanciesCount
    jobVacanciesCount++

    if(jobVacanciesCount == 3226){
        clearInterval(jobVacanciesInterval)
    }
}, 4)

let jobSeekersHiredView = document.querySelector("#jobSeekersHired")
let jobSeekersHiredCount = 1
let jobSeekersHiredInterval = setInterval(function(){
    jobSeekersHiredView.innerHTML = jobSeekersHiredCount
    jobSeekersHiredCount++

    if(jobSeekersHiredCount == 11315){
        clearInterval(jobSeekersHiredInterval)
    }
}, 4)
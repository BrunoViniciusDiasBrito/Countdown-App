

{
    const dataTargetDate = "25 December 2020"

    function congrats () {
        const birth         = document.getElementById('merry-christmas')
        const wrapBoxTimer  = document.querySelector('.countdown-container')

        birth.innerText     = 'Feliz Natal, Jesus nasceu! Aleluia Aleluia Aleluia!'

        birth.style.backgroundColor = 'rgb(255, 0, 0, 0.7)'
        birth.style.border          = '5px solid white'

        wrapBoxTimer.style.backgroundColor = 'rgb(255, 0, 0, 0.7)'
        wrapBoxTimer.style.border          = '5px solid white'
    }

    function insertLeftTime (day, hour, min, sec) {
        const daysLeft      = document.getElementById('days')
        const hoursLeft     = document.getElementById('hour')
        const minLeft       = document.getElementById('min')
        const secLeft       = document.getElementById('sec')

        daysLeft.innerText   = formatTime(day)
        hoursLeft.innerText  = formatTime(hour)
        minLeft.innerText    = formatTime(min)
        secLeft.innerText    = formatTime(sec)

        if(day === 0 && hour === 0){
            congrats()
        }
    }

    function countdown () {
        let dateTarget    = new Date(dataTargetDate)
        let currentDate   = new Date()
    
        let totalSec      = (dateTarget - currentDate) / 1000;
        let day           = Math.floor(totalSec / 3600 / 24);
        let hour          = Math.floor(totalSec / 3600) % 24;
        let min           = Math.floor(totalSec / 60) % 60;
        let sec           = Math.floor(totalSec % 60);

        insertLeftTime(day, hour, min, sec)
    }

    function formatTime (time) {
        return time < 10 ? `0${time}` : time
    }

    setInterval(() => {
        countdown()
    }, 1000);
}
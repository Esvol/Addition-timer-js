let dT = setInterval(function(){
    let d = new Date();
    let dDate = d.getDate();
    let dMonth = d.getMonth();
    dMonth ++;
    let dYear = d.getFullYear();

    if (dDate < 10){
        dDate = '0' + dDate;
    }
    if(dMonth < 10)
    {
        dMonth = '0' + dMonth;
    }
    document.querySelector('.dateTime').textContent = `${dDate}.${dMonth}.${dYear}`;
}, 1000)

let mainT = setInterval(function(){
    let d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();

    if (seconds < 10){
        seconds = '0' + seconds;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }
    if (hours < 10){
        hours = '0' + hours;
    }

    document.querySelector('.hours').textContent = `${hours}:`;
    document.querySelector('.minutes').textContent = `${minutes}`;
    document.querySelector('.seconds').textContent = `:${seconds}`;
}, 1000)

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let Secondomer;
let GetNumber = document.querySelector('.number').textContent;
let number = 0
let number2 = 0;
let Taimer;
let flagTimer = true
let flagStop = true;

document.querySelector('.start-button').addEventListener('click', Start);
document.querySelector('.loop-button').addEventListener('click', Loop);
document.querySelector('.stop-button').addEventListener('click', Stop);
document.querySelector('.reset-button').addEventListener('click', Reset);

document.querySelector('.plus').addEventListener('click', Plus);
document.querySelector('.minus').addEventListener('click', Minus);

document.querySelector('.start-bottom-button').addEventListener('click', bottomStart);
document.querySelector('.stop-bottom-button').addEventListener('click', bottomStop);
document.querySelector('.reset-bottom-button').addEventListener('click', bottomReset);

function Start(){
    Secondomer = setInterval(function(){
        miliseconds++;
        if(miliseconds<10 && miliseconds[0] != '0') miliseconds = '0' + miliseconds;
        if(seconds < 10 && seconds[0] != '0') seconds = '0' + seconds;
        if(minutes < 10 && minutes[0] != '0') minutes = '0' + minutes;
        if(hours < 10 && hours[0] != '0') hours = '0' + hours;
    
        if (miliseconds>99) 
        {
            miliseconds = 0;
            seconds++;
        }
        if (seconds>59)
        {
            seconds = 0;
            minutes++;
        }
        if (minutes>59)
        {
            minutes = 0;
            hours++;
        }
    
        document.querySelector('.secondomer').textContent = `${hours}:${minutes}:${seconds}:`;
        document.querySelector('.secondomer-seconds').textContent = `${miliseconds}`;
    }, 10) 
}

function Loop(){
    let str;
    str = document.querySelector('.secondomer').textContent + document.querySelector('.secondomer-seconds').textContent;
    console.log(str);
    document.querySelector('.container-center-right').innerHTML += `<p>${str}</p>`;
}

function Stop(){
    clearInterval(Secondomer);
}

function Reset(){
    clearInterval(Secondomer);
    document.querySelector('.secondomer').textContent = `00:00:00:`;
    document.querySelector('.secondomer-seconds').textContent = `00`;
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    document.querySelector('.container-center-right').innerHTML = '';
}

function Plus(){
    GetNumber++;
    document.querySelector('.number').textContent = GetNumber;
}

function Minus(){
    if (GetNumber > 0)
    {
        GetNumber--;
        document.querySelector('.number').textContent = GetNumber;
    }
}

function bottomStart(){
if (flagTimer)
{
    flagTimer = false;
    if (flagStop)
    {
        number = GetNumber;
    }
    Taimer = setInterval(function(){
        if (number2 == '00' && number == '00') clearInterval(Taimer);
        if (number2 < 10 && number2[0] != '0') 
        {
            number2 = '0' + number2;
        }
        if (number < 10 && number[0] != '0') 
        {
            number = '0' + number;
        }
        document.querySelector('.timer-bottom').textContent = `${number}:${number2}`
        if (number2 == 0){
            number--;
            number2 = 60;
        } 
        number2 --;
    }, 1000)
}
}

function bottomStop(){
    clearInterval(Taimer);
    flagTimer = true;
    flagStop = false;
}

function bottomReset(){
    clearInterval(Taimer);
    flagTimer = true;
    flagStop = true;
    number2 = 0;
    document.querySelector('.timer-bottom').textContent = `00:00`;
}

document.querySelector('.container-buttons').addEventListener('click', function(e){
    for (let i=0; i<document.querySelector('.container-buttons').children.length; i++)
    {
        document.getElementsByName('button')[i].style.outline = '0px';
        document.getElementsByName('button')[i].style.boxShadow = '0px 0px 2px rgb(245, 222, 178, 0.6)';
    }

    if (e.target.className != 'container-buttons')
    {
        e.target.style.outline = '1px solid rgb(34, 53, 164)';
        e.target.style.boxShadow = '0px 0px 9px rgba(59, 106, 225, 0.6)';
    }
});

document.querySelector('.container-plus-minus').addEventListener('click', function(e){
    for (let i=0; i<document.querySelector('.container-plus-minus').children.length; i++)
    {
        document.getElementsByName('button')[i+4].style.outline = '0px';
        document.getElementsByName('button')[i+4].style.boxShadow = '0px 0px 2px rgb(245, 222, 178, 0.6)';
    }

    if (e.target.className != 'container-plus-minus')
    {
        e.target.style.outline = '1px solid rgb(34, 53, 164)';
        e.target.style.boxShadow = '0px 0px 9px rgba(59, 106, 225, 0.6)';
    }
});

document.querySelector('.container-bottom-buttons').addEventListener('click', function(e){
    for (let i=0; i<document.querySelector('.container-bottom-buttons').children.length; i++)
    {
        document.getElementsByName('button')[i+6].style.outline = '0px';
        document.getElementsByName('button')[i+6].style.boxShadow = '0px 0px 2px rgb(245, 222, 178, 0.6)';
    }

    if (e.target.className != 'container-bottom-buttons')
    {
        e.target.style.outline = '1px solid rgb(34, 53, 164)';
        e.target.style.boxShadow = '0px 0px 9px rgba(59, 106, 225, 0.6)';
    }
});

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.jpg') {
        myImage.setAttribute('src', 'images/hissingcat.jpg');
        alert("Don't touch him, he's grumpy!!");
    } else {
        myImage.setAttribute('src', 'images/cat.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Introduce yourself to my cat, please');
    if(!myName){
        setUserName();
    }   else {
        localStorage.setItem('name', myName);
        myHeading.textContent = "He is very grumpy, " + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'He is very grumpy, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
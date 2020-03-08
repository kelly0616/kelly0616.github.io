let myHeading = document.querySelector('h1')
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName || myName === null) {
        setUserName()
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerText = '前段学习库，' + myName
    }
}

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/beer.jpg') {
        myImage.setAttribute('src', 'images/flower.png')
    } else {
        myImage.setAttribute('src', 'images/beer.jpg')
    }
};

myButton.onclick = function () {
    setUserName();
};

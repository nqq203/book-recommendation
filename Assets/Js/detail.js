const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const bookId = urlParams.get('ID')

getImg();
getName();
loadContent();

//get img by ID
function getImg() {
    const fileImg = `./Assets/Data/link/${bookId}.txt`;
    fetch(fileImg).then(imglink => imglink.text()).then(link => {
        const bookImg = document.getElementById("bookImg");
        bookImg.src = link;
        console.log(link);
    })
} //get name by ID 
function getName() {
    const fileName = `./Assets/Data/name/${bookId}.txt`;
    fetch(fileName).then(name => name.text()).then(bookName => {
        const name = document.getElementById("bookName");
        name.innerText = bookName;
        console.log(bookName);
    })
}

function loadContent() {
    const fileName = `./Assets/Data/detail/${bookId}.txt`;
    fetch(fileName).then(response => response.text()).then(text => {
        const content = document.getElementById("content");
        content.innerHTML = text;
        console.log(text);
    })
}
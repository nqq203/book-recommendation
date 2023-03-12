function initBook(id) {
  fetch(`./Assets/Data/link/${id}.txt`)
    .then(response => response.text())
    .then(text => {
      const bookElements = document.getElementById("book-information");
      const bookImage = text;
      const newEle = document.createElement("a");
      // newEle.href = "#";
      newEle.href = `detail.html?ID=${id}`
      newEle.classList.add("col-xxl-4");
      newEle.classList.add("col-md-6");
      newEle.classList.add("col-sm-12");
      newEle.classList.add("book-item");
      newEle.innerHTML =
        `
          <img src="${bookImage}" class="img-book-cover">
          <p id="${id}"></p>
          <button class="btn btn-primary">Đọc tiếp</button>
        `
      bookElements.appendChild(newEle);
    }
    )
}

function loadBookOnPage(numberOfBook) {
  for (let i = 1; i <= numberOfBook; i++) {
    const id = i;
    initBook(id);
    fetch(`./Assets/Data/name/${id}.txt`)
      .then(response => response.text())
      .then(text => {
        const newPara = document.getElementById(`${id}`);
        const title = document.createTextNode(`${text}`);
        console.log(id, text);
        newPara.appendChild(title);
      }
      )
  }
}

loadBookOnPage(9);
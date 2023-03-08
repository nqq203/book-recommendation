function initBook(id) {
  fetch(`./database/link/${id}.txt`)
    .then(response => response.text())
    .then(text => {
      const bookElements = document.getElementById("book-information");
      const bookImage = text;
      const newEle = document.createElement("a");
      newEle.href = "#";
      newEle.classList.add("col-xxl-4");
      newEle.classList.add("col-md-6");
      newEle.classList.add("col-sm-12");
      newEle.classList.add("book-item");
      newEle.innerHTML = `
            <img src="${bookImage}" class="img-book-cover">
            <p id="${id}"></p>
            <button class="btn btn-primary">Đọc tiếp</button>
          `
      bookElements.append(newEle);
    }
    )
}

function loadBookOnPage(numberOfBook) {
  for (let i = 0; i < numberOfBook; i++) {
    const id = i + 1;
    initBook(id);
    fetch(`./database/name/${id}.txt`)
      .then(response => response.text())
      .then(text => {
        const newPara = document.getElementById(`${id}`);
        const title = document.createTextNode(`${text}`);
        newPara.appendChild(title);
      }
      )
  }
}

function searchEngine() {
  const searchBar = document.getElementById("search-bar");
  searchBar.innerHTML =
    `
      <form class="d-flex" role="search">
        <input type="text" placeholder="Tìm kiếm" class="search-engine">
        <button type="submit" class="search-btn btn btn-primary">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    `
}

loadBookOnPage(9);
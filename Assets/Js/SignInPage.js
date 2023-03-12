const check = Boolean(localStorage.getItem('isSignin'));

if (check) {
  const form = document.getElementById("form");
  form.style.display = 'none';

  const info = document.getElementById("info");
  info.style.display = 'block';

  const user = JSON.parse(localStorage.getItem('user'));
  document.getElementById('username1').placeholder = user.tmpName;
  document.getElementById('email1').placeholder = user.tmpEmail;
  document.getElementById('password1').placeholder = user.tmpPassword;

} else {
  const form = document.getElementById('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userArray = JSON.parse(localStorage.getItem('userArray'));

    const username = event.target.username.value;
    let checkExist = false;
    let index = 0;

    for (let i = 0; i < userArray.length; i++) {
      if (userArray[i].username === username && userArray[i].password === event.target.password.value) {
        checkExist = true;
        index = i;
        break;
      }
    }

    if (checkExist) {
      localStorage.setItem('isSignin', true);

      const user = {
        tmpName: userArray[index].username,
        tmpEmail: userArray[index].email,
        tmpPassword: userArray[index].password,
      }

      localStorage.setItem("user", JSON.stringify(user));

      const form = document.getElementById("form");
      form.style.display = 'none';

      const info = document.getElementById("info");
      info.style.display = 'block';

      document.getElementById('username1').placeholder = user.tmpName;
      document.getElementById('email1').placeholder = user.tmpEmail;
      document.getElementById('password1').placeholder = user.tmpPassword;

      alert('Đăng nhập thành công.');

    } else {
      alert('Đăng nhập thất bại.');
    }
  })
}

const logOut = document.getElementById("logout");
logOut.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("user");
  localStorage.removeItem("isSignin");
  window.location.href = "SignInPage.html"; // redirect to sign in page after logging out
})


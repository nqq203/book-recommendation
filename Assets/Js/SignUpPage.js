const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
        email: event.target.email.value,
        password: event.target.password.value,
        username: event.target.username.value,
    }

    const localUSers = JSON.parse(localStorage.getItem('userArray'))

    if (!localUSers) {
        const userArray = [user]
        localStorage.setItem('userArray', JSON.stringify(userArray))
    }
    else {
        // const checkExist = localUSers.find(
        //     item => item.email == user.email
        // )

        // console.log(checkExist);

        let checkExist = false

        for (let i = 0; i < localUSers.length; i++) {
            if (localUSers[i].email == user.email) {
                checkExist = true;
                break;
            }
        }

        if (checkExist) {
            alert('Email đã tồn tại')
        }
        else {
            localUSers.push(user);
            localStorage.setItem('userArray', JSON.stringify(localUSers));
            alert("Đăng kí thành công");
            window.location.href = "SignInPage.html";


        }
    }

})
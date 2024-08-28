let showPwd = document.getElementById("show");
let Password = document.getElementById("password");
let box = document.querySelector(".input-box");
showPwd.onclick = () => {
    if (Password.type == "password") {
        Password.type = "text";
        showPwd.classList.remove("fa-eye-slash");
        showPwd.classList.add("fa-eye");
    }
    else {
        Password.type = "password";
        showPwd.classList.remove("fa-eye");
        showPwd.classList.add("fa-eye-slash");
    }
}
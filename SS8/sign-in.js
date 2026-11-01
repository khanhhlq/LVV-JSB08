let login = document.querySelector("form")

login.addEventListener("submit", function(event){
    event.preventDefault()

    let name = document.getElementById("name").value.trim()
    let password = document.getElementById("password").value.trim()

    let users_data = JSON.parse(localStorage.getItem("users"))

    let current_user = users_data.find(
        u => u.name === name && u.password === password
    )

    if (current_user) {
        localStorage.setItem("current_user", JSON.stringify(current_user))
        location.href = "index.html"
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!")
    }  
})
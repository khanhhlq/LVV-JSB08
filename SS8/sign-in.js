// Đi tìm thẻ form bằng câu lệnh document.querySelector() 
// và gán vào biến register
let register = document.querySelector("form")

// Thêm sự kiện submit cho thẻ form
register.addEventListener("submit", function(event){
    event.preventDefault() // Ngăn chặn hành vi mặc định của thẻ form

    // Kiểm tra xem người dùng đã nhập đầy đủ thông tin chưa
    let name = document.getElementById("name").value.trim()
    let password = document.getElementById("password").value.trim()

    let storedName = localStorage.getItem("name")
    let storedPassword = localStorage.getItem("password")

    if (name === storedName && password === storedPassword) {
       location.href = "index.html" // Chuyển hướng sang trang index.html
    } else {
        alert("Invalid username or password")
    }

})

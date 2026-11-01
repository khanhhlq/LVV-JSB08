// Đi tìm thẻ form bằng câu lệnh document.querySelector() 
// và gán vào biến register
let register = document.querySelector("form")

// Thêm sự kiện submit cho thẻ form
register.addEventListener("submit", function(event){
    event.preventDefault() // Ngăn chặn hành vi mặc định của thẻ form

    // Trim() là phương thức loại bỏ khoảng trắng ở đầu và cuối chuỗi
    // Value là thuộc tính lấy giá trị của thẻ input

    let name = document.getElementById("name").value.trim()
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()
    
    if (localStorage.getItem("users")) {
        // Lấy dữ liệu từ localStorage và chuyển đổi từ chuỗi JSON sang mảng
        let users_data = JSON.parse(localStorage.getItem("users")) 
        
        users_data.push(
            {
                name: name,
                email: email,
                password: password
            }
        )

        localStorage.setItem("users", JSON.stringify(users_data))
        location.href = "sign-in.html" // Chuyển hướng sang trang sign-in.html
    } else {
        let users_data = [
            {
                name: name,
                email: email,
                password: password
            }
        ]

        localStorage.setItem("users", JSON.stringify(users_data))
        location.href = "sign-in.html" // Chuyển hướng sang trang sign-in.html
    }
})
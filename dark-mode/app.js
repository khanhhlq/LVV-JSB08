// Tạo 1 biến tên element để tham chiếu đến phần tử body
let element = document.body;
// Sử dụng phương thức classList.toggle() để thêm hoặc xóa lớp "dark-mode" từ phần tử body
const toggleDarkMode = () => {
    element.classList.toggle("dark-mode");
}

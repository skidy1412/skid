// 获取选择框元素
const timeSelect = document.getElementById('time');
const hourSelect = document.getElementById('hour');

// 定义上午和下午的时间选项
const amHours = ['9:00', '10:00', '11:00'];
const pmHours = ['15:00', '16:00', '17:00'];

// 初始化函数，根据默认选择填充时间选项
function populateHours() {
    const selectedValue = timeSelect.value;
    // 清空现有选项
    hourSelect.innerHTML = '';
    const hours = selectedValue === 'am' ? amHours : pmHours;
    hours.forEach(hour => {
        const option = document.createElement('option');
        option.value = hour;
        option.textContent = hour;
        hourSelect.appendChild(option);
    });
}

// 页面加载时初始化
populateHours();

// 监听时间选择框的变化
timeSelect.addEventListener('change', populateHours);
function checkCheckboxAndShowAdvice() {
const checkbox = document.getElementById('commitCheckbox');
if (!checkbox.checked) {
    alert('请勾选承诺字条');
} else {
    const adviceBox = document.querySelector('.advice');
    const overlay = document.getElementById('overlay');
    const imageContainer = document.querySelector('.image-container');
    adviceBox.style.display = 'block';
    overlay.style.display = 'block';
    imageContainer.style.display = 'block';
}
}

function rate(rating) {
const stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
    if (index < rating) {
        star.classList.add('yellow');
    } else {
        star.classList.remove('yellow');
    }
});
}

function hideAdvice() {
const adviceBox = document.querySelector('.advice');
const overlay = document.getElementById('overlay');
const imageContainer = document.querySelector('.image-container');
adviceBox.style.display = 'none';
overlay.style.display = 'none';
imageContainer.style.display = 'none';
}
const selectWrapper = document.querySelector('.select-wrapper');
const select = selectWrapper.querySelector('select');

select.addEventListener('click', function () {
    selectWrapper.classList.toggle('open');
});

document.addEventListener('click', function (event) {
    if (!selectWrapper.contains(event.target)) {
        selectWrapper.classList.remove('open');
    }
});
function verifyInfo() {
    const username = document.getElementById('username').value;
    const certificateType = document.getElementById('certificateType').value;
    const number = document.getElementById('number').value;

    if (username === '') {
        alert('请输入患者姓名');
        return;
    }

    if (certificateType === '') {
        alert('请选择证件类型');
        return;
    }

    if (number === '') {
        alert('请输入证件号码');
        return;
    }

    // 这里可以添加更复杂的验证逻辑，比如身份证号码格式验证等
    alert('认证成功');
    // 实际应用中可以在这里添加提交表单的代码
}
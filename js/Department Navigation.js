function handleClick(liElement, targetId) {
    const allLis = document.querySelectorAll('.classification ul li');
    allLis.forEach(li => {
        li.classList.remove('active');
    });
    liElement.classList.add('active');

    const clinical = document.getElementById('clinical');
    const medical = document.getElementById('medical');
    const center = document.getElementById('center');

    if (targetId === 'clinical') {
        clinical.style.display = 'block';
        medical.style.display = 'none';
        center.style.display = 'none';
    } else if (targetId ==='medical') {
        clinical.style.display = 'none';
        medical.style.display = 'block';
        center.style.display = 'none';
    } else if (targetId === 'center') {
        clinical.style.display = 'none';
        medical.style.display = 'none';
        center.style.display = 'block';
    }
}

// 页面加载时默认点击临床科室
window.onload = function () {
    const clinicalLi = document.querySelector('.one');
    handleClick(clinicalLi, 'clinical');
};
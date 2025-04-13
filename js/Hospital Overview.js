document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item a');
    const sections = document.querySelectorAll('.section');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    navItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // 移除所有导航项的 active 类
            navItems.forEach(function (navItem) {
                navItem.classList.remove('active');
            });

            // 给当前点击的导航项添加 active 类
            this.classList.add('active');

            const targetId = this.dataset.target;
            showSection(targetId);
        });
    });

    // 初始显示医院简介
    showSection('overview-section');
    navItems[0].classList.add('active');
});
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.center ul li a');
    const contents = document.querySelectorAll('.content');

    // 初始化，显示第一个内容
    contents[0].classList.add('active');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.dataset.target;
            const targetContent = document.getElementById(targetId);

            // 隐藏所有内容
            contents.forEach(content => {
                content.classList.remove('active');
            });

            // 显示目标内容
            targetContent.classList.add('active');
        });
    });
});
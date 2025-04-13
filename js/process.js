function setupLinkClickEffect(selector) {
    const links = document.querySelectorAll(selector);
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止所有链接的默认行为
            links.forEach(l => l.classList.remove('clicked'));
            this.classList.add('clicked');
            
            // 切换内容显示
            const targetId = this.getAttribute('data-target');
            const contents = document.querySelectorAll('.content');
            contents.forEach(content => {
                content.classList.remove('active');
            });
            if (targetId) {
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            }
        });
    });
}

// 初始化时直接显示妇科院区内容并设置点击状态
window.onload = function () {
    setupLinkClickEffect('ul li a');
    document.getElementById('gynecology-content').classList.add('active');
    document.getElementById('gynecology-link').classList.add('clicked');
};
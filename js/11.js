function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var arrow = document.getElementById('collapse-arrow');
    if (sidebar.style.width === '100px') {
        sidebar.style.width = '0';
        arrow.classList.remove('fa-arrow-left');
        arrow.classList.add('fa-arrow-right');
    } else {
        sidebar.style.width = '100px';
        arrow.classList.remove('fa-arrow-right');
        arrow.classList.add('fa-arrow-left');
    }
}
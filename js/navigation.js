const map = document.getElementById('map');
const upArrow = document.getElementById('up-arrow');
const downArrow = document.getElementById('down-arrow');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const zoomSlider = document.getElementById('zoom-slider');
const zoomBar = document.querySelector('.zoom-bar');

let isDragging = false;
let startX, startY, initialX, initialY;
let isZooming = false;
let startYZoom, initialScale, initialSliderY;
let scale = 1;
let minScale = 0.5;
let maxScale = 3;

map.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = map.offsetLeft;
    initialY = map.offsetTop;
    map.style.cursor = 'grabbing';
    map.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        map.style.left = initialX + dx + 'px';
        map.style.top = initialY + dy + 'px';
    } else if (isZooming) {
        const dy = e.clientY - startYZoom;
        const newY = initialSliderY + dy;
        const minY = 0;
        const maxY = zoomBar.offsetHeight - zoomSlider.offsetHeight;
        const boundedY = Math.max(minY, Math.min(maxY, newY));
        zoomSlider.style.top = boundedY + 'px';

        const scaleFactor = (boundedY / (zoomBar.offsetHeight - zoomSlider.offsetHeight)) * (maxScale - minScale) + minScale;
        scale = scaleFactor;
        map.style.transform = `scale(${scale})`;
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        map.style.cursor = 'grab';
        map.style.transition = 'left 0.3s ease, top 0.3s ease, transform 0.3s ease';
    } else if (isZooming) {
        isZooming = false;
    }
});

upArrow.addEventListener('click', () => {
    map.style.top = (parseInt(map.style.top) || 0) - 10 + 'px';
});

downArrow.addEventListener('click', () => {
    map.style.top = (parseInt(map.style.top) || 0) + 10 + 'px';
});

leftArrow.addEventListener('click', () => {
    map.style.left = (parseInt(map.style.left) || 0) - 10 + 'px';
});

rightArrow.addEventListener('click', () => {
    map.style.left = (parseInt(map.style.left) || 0) + 10 + 'px';
});

zoomSlider.addEventListener('mousedown', (e) => {
    isZooming = true;
    startYZoom = e.clientY;
    initialScale = scale;
    initialSliderY = parseInt(zoomSlider.style.top) || 0;
});
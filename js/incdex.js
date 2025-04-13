        document.addEventListener('DOMContentLoaded', function () {
            const slider = document.querySelector('.slider');
            const sliderPics = slider.querySelectorAll('img');
            const sliderWords = slider.querySelectorAll('.slider_word');
            const num = document.querySelector('.slider_num');
            const buttons = num.querySelectorAll('li');
            const left = slider.querySelector('.button_left');
            const right = slider.querySelector('.button_right');
            let timer=0;
            let currentIndex = 0;
            function showSlide(index) {
                sliderPics.forEach((pic, i) => {
                    if (i === index) {
                        pic.style.display = 'block';
                        sliderWords[i].style.display = 'block';
                        buttons[i].classList.add('slider_num_active');
                    } else {
                        pic.style.display = 'none';
                        sliderWords[i].style.display = 'none';
                        buttons[i].classList.remove('slider_num_active');
                    }
                });
            }
        
            function prevSlide() {
                currentIndex = (currentIndex + 1) % sliderPics.length;
                showSlide(currentIndex);
            }
        
            function nextSlide() {
                currentIndex = (currentIndex - 1 + sliderPics.length) % sliderPics.length;
                showSlide(currentIndex);
            }

            function startAutoSlide() {
                timer = setInterval(nextSlide, 5000); 
            }        

            function stopAutoSlide() {
                clearInterval(timer);
            }

            left.addEventListener('click', function(){
                prevSlide();
                startAutoSlide();
                stopAutoSlide();
            });
            right.addEventListener('click', function(){
                nextSlide();
                startAutoSlide();
                stopAutoSlide();
            });
            buttons.forEach((button, index) => {
                button.addEventListener('click', function () {
                    currentIndex = index;
                    showSlide(currentIndex);
                    stopAutoSlide();
                    nextSlideSlide();
                });
            });
            showSlide(currentIndex);
            startAutoSlide();
        const news=document.querySelector('.news');
        const news_left=news.querySelector('.news_left');
        const banner=news_left.querySelector('.banner');
        const banner_img=banner.querySelector('.banner_img');
        const bannerImg=banner_img.querySelectorAll('img');    
        let currentBannerIndex = 0;
        function showBanner(index) {
            bannerImg.forEach((pic, i) => {
                if (i === index) {
                    pic.style.display = 'block';
                } else {
                    pic.style.display = 'none';
                }
            });
        }
        function nextBanner() {
            currentBannerIndex = (currentBannerIndex + 1) % bannerImg.length;
            showBanner(currentBannerIndex);
        }
        setInterval(nextBanner,3000);
        const expert = document.querySelector('.expert');
        const expertBanner = expert.querySelector('.expert_banner');
        const doctors = expertBanner.querySelectorAll('.doctor');
        const popup = expertBanner.querySelector('.doctor_popup');
        const doctorButtonYes = popup.querySelector('#doctorButtonYes');
        const doctorButtonNo = popup.querySelector('#doctorButtonNo');
        const success=expert.querySelector('.doctor_popup_yes');
        const close=success.querySelector('.close');
        doctors.forEach(doctor => {
            doctor.addEventListener('click', function () {
                popup.style.display = 'block';
            });
        });
        doctorButtonYes.addEventListener('click', function () {
            popup.style.display = 'none';
            success.style.display = 'block';
        })
        doctorButtonNo.addEventListener('click', function () {
            popup.style.display = 'none';
        })
        close.addEventListener('click',function(){
            success.style.display='none';
        })
        const bottom=document.querySelector('.bottom');
        const bottomBox=bottom.querySelector('.bottom_box');
        const bottomCont=bottomBox.querySelector('.bottom_box_cont');
        const bottomMedia=bottomCont.querySelector('.bottom_box_cont_media');
        const bottomImgCont=bottomMedia.querySelector('.bottom_box_cont_media_cont');
        const bottomImg=bottomMedia.querySelector('.bottom_box_cont_media_cont_img');
        const img=bottomImg.getElementsByTagName('img');
        const bottomLeft=bottomImgCont.querySelector('.bottom_box_cont_media_cont_btn_left');
        const bottomRight=bottomImgCont.querySelector('.bottom_box_cont_media_cont_btn_right');
       function turnLeft(){
            const firstImg=img[0];
            for(let i=0;i<img.length-1;i++){
                img[i].src=img[i+1].src;
            }
            img[img.length-1].src=firstImg.src;
        }
        function turnRight(){
            const lastImg=img[img.length-1];
            for(let j=img.length-1;j>0;j--){
                img[j].src=img[j-1].src;
            }
            img[0].src=lastImg.src;
        }
        bottomLeft.addEventListener('click',turnLeft);
        bottomRight.addEventListener('click',turnRight);
});
    


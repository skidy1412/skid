function checkCheck() {
// const checkbox = document.getElementById('commitCheckbox');
// if (!checkbox.checked) {
//     alert('请勾选承诺字条');
// } else {
//     const adviceBox = document.querySelector('.advice');
//     const overlay = document.getElementById('overlay');
//     const imageContainer = document.querySelector('.image-container');
//     adviceBox.style.display = 'block';
//     overlay.style.display = 'block';
//     imageContainer.style.display = 'block';
// }
                const name = document.getElementById('name').value;
                const medicalCard = document.getElementById('medicalCard').value;
                const year = document.getElementById('year').value;
                const phone = document.getElementById('phone').value;
                const time = document.getElementById('time').value;
                const keshi = document.getElementById('keshi').value;
                const checkbox = document.getElementById('commitCheckbox').checked;
                const malebox = document.getElementById('sexMale').checked;
                const famalebox=document.getElementById('sexFemale').checked;

                if (name === '') {
                    alert('请输入姓名');
                    return;
                }

                const Isname = /^[\u4e00-\u9fa5]+$/;
                if (!Isname.test(name)) {
                    alert('姓名必须为中文文字');
                    return;
                }

                if (!malebox&&!famalebox) {
                    alert('请勾选性别');
                    return;
                }

                if (medicalCard === '') {
                    alert('请输入医疗卡号');
                    return;
                }

                if (isNaN(Number(medicalCard))) {
                    alert('医疗卡号必须为数字');
                    return;
                }


                if (year === '') {
                    alert('请选择年龄');
                    return;
                }

                if (phone === '') {
                    alert('请输入电话号码');
                    return;
                }

                if (isNaN(Number(phone))) {
                    alert('电话号码必须为数字');
                    return;
                }

                if (time === '') {
                    alert('请选择挂号时间');
                    return;
                }

                if (keshi === '') {
                    alert('请选择挂号科室');
                    return;
                }

                if (!checkbox) {
                    alert('请勾选确认信息真实有效');
                    return;
                }

                alert('提交成功');
            }

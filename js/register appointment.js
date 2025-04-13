// 变换
function setupLinkClickEffect(selector) {
    const links = document.querySelectorAll(selector);
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('clicked'));
            this.classList.add('clicked');
        });
    });
}

setupLinkClickEffect('.top_two ul li a');
setupLinkClickEffect('.center ul li a');

// 盒子变换
const gridContainer = document.getElementById('grid-container');
const gynecologyLink = document.getElementById('gynecology-link');
const pediatricsLink = document.getElementById('pediatrics-link');
const oncologyLink = document.getElementById('oncology-link');

const gynecologyContents = [
    "阴道炎门诊", "宫颈炎门诊", "盆腔炎门诊", "附件炎门诊", "子宫肌瘤门诊",
    "卵巢囊肿门诊", "子宫内膜异位症门诊", "子宫腺肌病门诊", "多囊卵巢综合征门诊", "更年期综合征门诊",
    "妇科内分泌门诊", "妇科肿瘤门诊", "外阴白斑门诊", "尿道炎门诊", "尖锐湿疣门诊",
    "淋病门诊", "梅毒门诊", "衣原体感染门诊", "支原体感染门诊", "人流门诊",
    "药流门诊", "上环取环门诊", "宫颈leep刀门诊", "宫腔镜门诊", "腹腔镜门诊",
    "阴道紧缩术门诊", "处女膜修复门诊", "盆底修复门诊", "孕前检查门诊", "孕期保健门诊",
    "产后康复门诊", "不孕不育门诊", "辅助生殖门诊", "乳腺门诊", "妇科体检门诊",
    "青春期妇科门诊", "老年妇科门诊", "性健康门诊", "妇科心理咨询门诊", "中医妇科门诊",
    "中西医结合妇科门诊", "妇科营养门诊", "妇科康复门诊", "妇科遗传门诊", "妇科疼痛门诊"
];

const pediatricsContents = [
    "儿科普通门诊", "儿科专家门诊", "儿童呼吸科门诊", "儿童消化科门诊", "儿童心内科门诊",
    "儿童神经内科门诊", "儿童内分泌科门诊", "儿童血液科门诊", "儿童肾内科门诊", "儿童免疫科门诊",
    "儿童感染科门诊", "儿童保健门诊", "儿童康复门诊", "儿童皮肤科门诊", "儿童眼科门诊",
    "儿童口腔科门诊", "儿童耳鼻喉科门诊", "儿童心理门诊", "儿童营养门诊", "新生儿门诊",
    "小儿外科门诊", "小儿骨科门诊", "小儿泌尿外科门诊", "小儿神经外科门诊", "小儿心胸外科门诊",
    "小儿整形外科门诊", "小儿急诊科门诊", "小儿重症监护门诊", "儿童哮喘门诊", "儿童癫痫门诊",
    "儿童生长发育门诊", "儿童多动症门诊", "儿童抽动症门诊", "儿童过敏性疾病门诊", "儿童遗传病门诊",
    "儿童罕见病门诊", "儿童康复评估门诊", "儿童康复治疗门诊", "儿童康复训练门诊", "儿童康复护理门诊",
    "儿童康复心理门诊", "儿童康复营养门诊", "儿童康复教育门诊", "儿童康复运动门诊", "儿童康复游戏门诊"
];

const oncologyContents = [
    "肿瘤内科门诊", "肿瘤外科门诊", "肿瘤放疗门诊", "肿瘤化疗门诊", "肿瘤介入门诊",
    "肿瘤康复门诊", "肿瘤姑息门诊", "肿瘤遗传门诊", "肿瘤心理门诊", "肿瘤营养门诊",
    "肺癌门诊", "乳腺癌门诊", "胃癌门诊", "肝癌门诊", "结直肠癌门诊",
    "食管癌门诊", "胰腺癌门诊", "卵巢癌门诊", "宫颈癌门诊", "子宫内膜癌门诊",
    "前列腺癌门诊", "膀胱癌门诊", "肾癌门诊", "黑色素瘤门诊", "淋巴瘤门诊",
    "白血病门诊", "骨髓瘤门诊", "头颈部肿瘤门诊", "胸部肿瘤门诊", "腹部肿瘤门诊",
    "盆腔肿瘤门诊", "骨肿瘤门诊", "软组织肿瘤门诊", "神经肿瘤门诊", "内分泌肿瘤门诊",
    "儿童肿瘤门诊", "老年肿瘤门诊", "肿瘤多学科门诊", "肿瘤临床试验门诊", "肿瘤靶向治疗门诊",
    "肿瘤免疫治疗门诊", "肿瘤中医门诊", "肿瘤中西医结合门诊", "肿瘤康复评估门诊", "肿瘤康复治疗门诊"
];

function generateItems(contents) {
    gridContainer.innerHTML = '';
    for (let i = 0; i < contents.length; i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.textContent = contents[i];

        const arrow = document.createElement('div');
        arrow.classList.add('arrow');
        item.appendChild(arrow);

        gridContainer.appendChild(item);
    }
}

gynecologyLink.addEventListener('click', function (e) {
    e.preventDefault();
    generateItems(gynecologyContents);
});

pediatricsLink.addEventListener('click', function (e) {
    e.preventDefault();
    generateItems(pediatricsContents);
});

oncologyLink.addEventListener('click', function (e) {
    e.preventDefault();
    generateItems(oncologyContents);
});

// 初始显示妇科院区门诊
generateItems(gynecologyContents);

const links = document.querySelectorAll('a');
const contents = document.querySelectorAll('.content');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        // 若链接有 href 属性且不为空字符串，则允许跳转
        if (this.href) {
            return;
        }
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
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
    
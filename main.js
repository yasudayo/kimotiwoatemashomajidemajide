const scene = document.createElement('scene');
document.body.appendChild(scene);
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const startbutton = document.getElementById('hajimeru');
const kotaeteText = document.getElementById('kotaete');
const mondai = document.getElementById('mondai');
let T = document.getElementById('timertext');

const sentakushi = document.getElementById('sentakushi');
const sentakushi2 = document.getElementById('sentakushi2');
const sentakushi3 = document.getElementById('sentakushi3');
const sentakushi4 = document.getElementById('sentakushi4');

const sentakushi5 = document.getElementById('sentakushi5');
const sentakushi6 = document.getElementById('sentakushi6');
const sentakushi7 = document.getElementById('sentakushi7');
const sentakushi8 = document.getElementById('sentakushi8');

const sentakushi9 = document.getElementById('sentakushi9');
const sentakushi10 = document.getElementById('sentakushi10');
const sentakushi11 = document.getElementById('sentakushi11');
const sentakushi12 = document.getElementById('sentakushi12');

const sentakushi13 = document.getElementById('sentakushi13');
const sentakushi14 = document.getElementById('sentakushi14');
const sentakushi15 = document.getElementById('sentakushi15');
const sentakushi16 = document.getElementById('sentakushi16');

const sentakushi17 = document.getElementById('sentakushi17');
const sentakushi18 = document.getElementById('sentakushi18');
const sentakushi19 = document.getElementById('sentakushi19');
const sentakushi20 = document.getElementById('sentakushi20');

const sentakushi21 = document.getElementById('sentakushi21');
const sentakushi22 = document.getElementById('sentakushi22');
const sentakushi23 = document.getElementById('sentakushi23');
const sentakushi24 = document.getElementById('sentakushi24');

const sentakushi25 = document.getElementById('sentakushi25');
const sentakushi26 = document.getElementById('sentakushi26');
const sentakushi27 = document.getElementById('sentakushi27');
const sentakushi28 = document.getElementById('sentakushi28');

const sentakushi29 = document.getElementById('sentakushi29');
const sentakushi30 = document.getElementById('sentakushi30');
const sentakushi31 = document.getElementById('sentakushi31');
const sentakushi32 = document.getElementById('sentakushi32');

const sentakushi33 = document.getElementById('sentakushi33');
const sentakushi34 = document.getElementById('sentakushi34');
const sentakushi35 = document.getElementById('sentakushi35');
const sentakushi36 = document.getElementById('sentakushi36');

const sentakushi37 = document.getElementById('sentakushi37');
const sentakushi38 = document.getElementById('sentakushi38');
const sentakushi39 = document.getElementById('sentakushi39');
const sentakushi40 = document.getElementById('sentakushi40');

const seigohanteitext = document.getElementById('seigohanteitext');
const mouitidoButton = document.getElementById('mou');
const credit = document.getElementById('credit');
const pushSE = new Audio('push.mp3');
const QSE = new Audio('Q.mp3');
const SSE = new Audio('S.mp3');
const KSE = new Audio('??????.mp3');
const ShutudaiSE = new Audio('??????2.mp3');
const KeikokuSE = new Audio('??????.mp3');
const DramSE = new Audio('dram.mp3');
const SeikaiSE = new Audio('seikaiSE.mp3');
const HuseikaiSE = new Audio('huseikaiSE.mp3');
const KekkaSE = new Audio('kekka.mp3');
let timer;
let time = 0;
let timer2;
let time2 = 0;
let timer3;
let time3 = 0;
let timer4;
let time4 = 0;
let timer5;
let time5 = 0;

let dai1monTimer;
let dai1monTime = 0;
let dai2monTimer;
let dai2monTime = 0;
let dai3monTimer;
let dai3monTime = 0;
let dai4monTimer;
let dai4monTime = 0;
let dai5monTimer;
let dai5monTime = 0;
let kekkaTimer;
let kekkaTime = 0;

let dai1monsentakusiTimer;
let dai1monsentakusiTime = 0;
let dai2monsentakusiTimer;
let dai2monsentakusiTime = 0;
let dai3monsentakusiTimer;
let dai3monsentakusiTime = 0;
let dai4monsentakusiTimer;
let dai4monsentakusiTime = 0;
let dai5monsentakusiTimer;
let dai5monsentakusiTime = 0;

let dai1monOnePsentakuTimer;
let dai1monOnePsentakuTime = 0;
let dai2monOnePsentakuTimer;
let dai2monOnePsentakuTime = 0;
let dai3monOnePsentakuTimer;
let dai3monOnePsentakuTime = 0;
let dai4monOnePsentakuTimer;
let dai4monOnePsentakuTime = 0;
let dai5monOnePsentakuTimer;
let dai5monOnePsentakuTime = 0;

let dai1monSeikaihappyouTimer1;
let dai1monSeikaihappyouTimer2;
let dai1monSeikaihappyouTimer3;
let dai1monSeikaihappyouTimer4;
let dai2monSeikaihappyouTimer1;
let dai2monSeikaihappyouTimer2;
let dai2monSeikaihappyouTimer3;
let dai2monSeikaihappyouTimer4;
let dai3monSeikaihappyouTimer1;
let dai3monSeikaihappyouTimer2;
let dai3monSeikaihappyouTimer3;
let dai3monSeikaihappyouTimer4;
let dai4monSeikaihappyouTimer1;
let dai4monSeikaihappyouTimer2;
let dai4monSeikaihappyouTimer3;
let dai4monSeikaihappyouTimer4;
let dai5monSeikaihappyouTimer1;
let dai5monSeikaihappyouTimer2;
let dai5monSeikaihappyouTimer3;
let dai5monSeikaihappyouTimer4;

let dai1monSeikaihappyouTime = 0;
let dai2monSeikaihappyouTime = 0;
let dai3monSeikaihappyouTime = 0;
let dai4monSeikaihappyouTime = 0;
let dai5monSeikaihappyouTime = 0;

let OnePAnswers = 0;
let ShuyakuAnswers = 0;
let OnePAnswers2 = 0;
let ShuyakuAnswers2 = 0;
let OnePAnswers3 = 0;
let ShuyakuAnswers3 = 0;
let OnePAnswers4 = 0;
let ShuyakuAnswers4 = 0;
let OnePAnswers5 = 0;
let ShuyakuAnswers5 = 0;
let seikaisu = 0;


let odais = ["?????????????????????????", "?????????????????????????????????????????????????", "???????????????????????????????????????\n?????????????????????????",
    "??????????????????????????????????????????\n???????????????????????????????", "????????????????????????????????????????????????????", "?????????????????????????????????\n?????????????????????????"];
let odai = Math.floor(Math.random() * odais.length);

let odais2 = ["???????????????????????????????????????\n????????????????????????????", "?????????????????????????????????\n??????????????????????", "????????????????????????????????????????",
    "?????????????????????????????????????", "????????????????????????????????????\n???????????????????????????????", "??????????????????????????????????"];
let odai2 = Math.floor(Math.random() * odais2.length);

let odais3 = ["??????????????????????", "??????????????????????????????????", "?????????????????????????",
    "?????????????????????????????????\n????????????????", "???????????????????????????????", "??????????????????\n????????????????????????????????????????"];
let odai3 = Math.floor(Math.random() * odais3.length);

let odais4 = ["????????????????????????????", "???????????????????????????????", "????????????????????????????????????????",
    "????????????????????????????", "?????????????????????????", "???????????????????????????????"];
let odai4 = Math.floor(Math.random() * odais4.length);

let odais5 = ["?????????????????????????????????\n???????????????????", "????????????????????????????", "??????????????????????????????????",
    "??????????????????????", "?????????????????????????????????????????????????", "????????????????????????????"];
let odai5 = Math.floor(Math.random() * odais5.length);


sentakushi.style.display = 'none';
sentakushi2.style.display = 'none';
sentakushi3.style.display = 'none';
sentakushi4.style.display = 'none';
sentakushi5.style.display = 'none';
sentakushi6.style.display = 'none';
sentakushi7.style.display = 'none';
sentakushi8.style.display = 'none';
sentakushi9.style.display = 'none';
sentakushi10.style.display = 'none';
sentakushi11.style.display = 'none';
sentakushi12.style.display = 'none';
sentakushi13.style.display = 'none';
sentakushi14.style.display = 'none';
sentakushi15.style.display = 'none';
sentakushi16.style.display = 'none';
sentakushi17.style.display = 'none';
sentakushi18.style.display = 'none';
sentakushi19.style.display = 'none';
sentakushi20.style.display = 'none';

sentakushi21.style.display = 'none';
sentakushi22.style.display = 'none';
sentakushi23.style.display = 'none';
sentakushi24.style.display = 'none';
sentakushi25.style.display = 'none';
sentakushi26.style.display = 'none';
sentakushi27.style.display = 'none';
sentakushi28.style.display = 'none';
sentakushi29.style.display = 'none';
sentakushi30.style.display = 'none';
sentakushi31.style.display = 'none';
sentakushi32.style.display = 'none';
sentakushi33.style.display = 'none';
sentakushi34.style.display = 'none';
sentakushi35.style.display = 'none';
sentakushi36.style.display = 'none';
sentakushi37.style.display = 'none';
sentakushi38.style.display = 'none';
sentakushi39.style.display = 'none';
sentakushi40.style.display = 'none';

seigohanteitext.style.display = 'none';
kotaeteText.style.display = 'none';
mouitidoButton.style.display = 'none';

mondai.style.display = 'none';

title.innerText = "???????????????????????????\n??????????????????";
subtitle.innerText = "2???????????????????????????\n??????????????????????????????";
credit.innerText = "??????BGM??????????????????\nSE ????????????/??????????????????"

function push() {
    pushSE.play();//???????????????
    startbutton.style.display = 'none';
    title.style.display = 'none';
    credit.style.display = 'none';
    subtitle.style.display = 'none'; // ?????????????????????
    dai1monhyoujijunbi();
}
function dai1monhyoujijunbi() {
    timer = setInterval(dai1monhyouji, 1000);
}
function dai1monhyouji() {
    time++;
    if (time === 1) {
        QSE.play();
        title.innerText = "???1???";
        title.style.display = 'block';
    }
    if (time === 10) {
        title.style.display = 'none';
        clearInterval(dai1monhyouji);
        console.log(time);
        dai1monTimer = setInterval(dai1mon, 1000);
    }
}
function dai1mon() {
    dai1monTime++;
    if (dai1monTime === 1) {
        ShutudaiSE.play();
        mondai.innerText = odais[odai];
        console.log(odai);
        mondai.style.display = 'block';
    }
    if (dai1monTime === 3) {
        dai1monsentakusiTimer = setInterval(dai1monsentakusi, 1000);
        clearInterval(dai1mon);
    }
}
function dai1monsentakusi() {
    dai1monsentakusiTime++;
    if (dai1monsentakusiTime === 2 && odai === 0) {
        sentakushi.innerText = "1, ???";
        sentakushi2.innerText = "2, ???";
        sentakushi3.innerText = "3, ???";
        sentakushi4.innerText = "4, ???";
        sentakushi.style.display = 'block';
        sentakushi2.style.display = 'block';
        sentakushi3.style.display = 'block';
        sentakushi4.style.display = 'block';
        dai1monOnePsentakuTimer = setInterval(dai1monOnePPushTime, 1000);
        textchange1();
        clearInterval(dai1monsentakusi);
    } else if (dai1monsentakusiTime === 2 && odai === 1) {
        sentakushi.innerText = "1, ???";
        sentakushi2.innerText = "2, ???";
        sentakushi3.innerText = "3, ???";
        sentakushi4.innerText = "4, ???";
        sentakushi.style.display = 'block';
        sentakushi2.style.display = 'block';
        sentakushi3.style.display = 'block';
        sentakushi4.style.display = 'block';
        dai1monOnePsentakuTimer = setInterval(dai1monOnePPushTime, 1000);
        textchange1();
        clearInterval(dai1monsentakusi);
    }
    else if (dai1monsentakusiTime === 2 && odai === 2) {
        sentakushi.innerText = "1, K-Pop";
        sentakushi2.innerText = "2, J-Pop";
        sentakushi3.innerText = "3, ??????????????????";
        sentakushi4.innerText = "4, ?????????";
        sentakushi.style.display = 'block';
        sentakushi2.style.display = 'block';
        sentakushi3.style.display = 'block';
        sentakushi4.style.display = 'block';
        dai1monOnePsentakuTimer = setInterval(dai1monOnePPushTime, 1000);
        textchange1();
        clearInterval(dai1monsentakusi);
    }
    else if (dai1monsentakusiTime === 2 && odai === 3) {
        sentakushi.innerText = "1, ?????????????????????\n??????";
        sentakushi2.innerText = "2, ????????????????????????";
        sentakushi3.innerText = "3, ??????????????????????????????";
        sentakushi4.innerText = "4, ?????????????????????";
        sentakushi.style.display = 'block';
        sentakushi2.style.display = 'block';
        sentakushi3.style.display = 'block';
        sentakushi4.style.display = 'block';
        dai1monOnePsentakuTimer = setInterval(dai1monOnePPushTime, 1000);
        textchange1();
        clearInterval(dai1monsentakusi);
    }
    else if (dai1monsentakusiTime === 2 && odai === 4) {
        sentakushi.innerText = "1, YouTube";
        sentakushi2.innerText = "2, Twitter";
        sentakushi3.innerText = "3, Instagram";
        sentakushi4.innerText = "4, TikTok";
        sentakushi.style.display = 'block';
        sentakushi2.style.display = 'block';
        sentakushi3.style.display = 'block';
        sentakushi4.style.display = 'block';
        dai1monOnePsentakuTimer = setInterval(dai1monOnePPushTime, 1000);
        textchange1();
        clearInterval(dai1monsentakusi);
    }
    else if (dai1monsentakusiTime === 2 && odai === 5) {
        sentakushi.innerText = "1, ?????????";
        sentakushi2.innerText = "2, ??????";
        sentakushi3.innerText = "3, ?????????";
        sentakushi4.innerText = "4, ?????????";
        sentakushi.style.display = 'block';
        sentakushi2.style.display = 'block';
        sentakushi3.style.display = 'block';
        sentakushi4.style.display = 'block';
        dai1monOnePsentakuTimer = setInterval(dai1monOnePPushTime, 1000);
        textchange1();
        clearInterval(dai1monsentakusi);
    }
}
function textchange1() {
    kotaeteText.innerText = "1P?????????1~4??????????????????????????????????????????????????????";
    kotaeteText.style.display = 'block';
}

function sentakusipush() {
    KSE.play();
    OnePAnswers = 1;
    dai1monShuyakuPushTime();
    clearInterval(dai1monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 1;
    sentakushi.style.display = 'none';
    sentakushi2.style.display = 'none';
    sentakushi3.style.display = 'none';
    sentakushi4.style.display = 'none';
}
function sentakusipush2() {
    KSE.play();
    OnePAnswers = 2;
    dai1monShuyakuPushTime();
    clearInterval(dai1monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 2;
    sentakushi.style.display = 'none';
    sentakushi2.style.display = 'none';
    sentakushi3.style.display = 'none';
    sentakushi4.style.display = 'none';
}
function sentakusipush3() {
    KSE.play();
    OnePAnswers = 3;
    dai1monShuyakuPushTime();
    clearInterval(dai1monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 3;
    sentakushi.style.display = 'none';
    sentakushi2.style.display = 'none';
    sentakushi3.style.display = 'none';
    sentakushi4.style.display = 'none';
}
function sentakusipush4() {
    KSE.play();
    OnePAnswers = 4;
    dai1monShuyakuPushTime();
    clearInterval(dai1monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 4;
    sentakushi.style.display = 'none';
    sentakushi2.style.display = 'none';
    sentakushi3.style.display = 'none';
    sentakushi4.style.display = 'none';
}

function dai1monOnePPushTime() {
    dai1monOnePsentakuTime++;
    if (OnePAnswers !== 0) {
        clearInterval(dai1monShuyakuPushTime);
    }
    if (dai1monOnePsentakuTime === 5 && OnePAnswers === 0) {
        KeikokuSE.play();
        T.innerText = 5;
        T.style.display = 'block';
    } else if (dai1monOnePsentakuTime === 5 && OnePAnswers !== 0) {
        T.style.display = 'none';
    }
    if (dai1monOnePsentakuTime === 6 && OnePAnswers === 0) {
        KeikokuSE.play();
        T.innerText = 4;
    } else if (dai1monOnePsentakuTime === 6 && OnePAnswers !== 0) {
        T.style.display = 'none';
    }
    if (dai1monOnePsentakuTime === 7 && OnePAnswers === 0) {
        KeikokuSE.play();
        T.innerText = 3;
    } else if (dai1monOnePsentakuTime === 7 && OnePAnswers !== 0) {
        T.style.display = 'none';
    }
    if (dai1monOnePsentakuTime === 8 && OnePAnswers === 0) {
        KeikokuSE.play();
        T.innerText = 2;
    } else if (dai1monOnePsentakuTime === 8 && OnePAnswers !== 0) {
        T.style.display = 'none';
    }
    if (dai1monOnePsentakuTime === 9 && OnePAnswers === 0) {
        KeikokuSE.play();
        T.innerText = 1;
    } else if (dai1monOnePsentakuTime === 9 && OnePAnswers !== 0) {
        T.style.display = 'none';
    }
    if (dai1monOnePsentakuTime === 10 && OnePAnswers === 0) {
        OnePAnswers = -1;
        T.style.display = 'none';
        sentakushi.style.display = 'none';
        sentakushi2.style.display = 'none';
        sentakushi3.style.display = 'none';
        sentakushi4.style.display = 'none';
        clearInterval(dai1monOnePPushTime);
        console.log(dai1monOnePsentakuTime);
        dai1monShuyakuPushTime();
    } else if (dai1monOnePsentakuTime === 10 && OnePAnswers !== 0) {
        T.style.display = 'none';
    }
}
function dai1monShuyakuPushTime() {
    kotaeteText.innerText = "???????????????5~8??????????????????????????????????????????????????????";
    if (odai === 0) {
        sentakushi21.innerText = "1, ???";
        sentakushi22.innerText = "2, ???";
        sentakushi23.innerText = "3, ???";
        sentakushi24.innerText = "4, ???";
        sentakushi21.style.display = 'block';
        sentakushi22.style.display = 'block';
        sentakushi23.style.display = 'block';
        sentakushi24.style.display = 'block';

    } else if (odai === 1) {
        sentakushi21.innerText = "1, ???";
        sentakushi22.innerText = "2, ???";
        sentakushi23.innerText = "3, ???";
        sentakushi24.innerText = "4, ???";
        sentakushi21.style.display = 'block';
        sentakushi22.style.display = 'block';
        sentakushi23.style.display = 'block';
        sentakushi24.style.display = 'block';
    }
    else if (odai === 2) {
        sentakushi21.innerText = "1, K-Pop";
        sentakushi22.innerText = "2, J-Pop";
        sentakushi23.innerText = "3, ??????????????????";
        sentakushi24.innerText = "4, ?????????";
        sentakushi21.style.display = 'block';
        sentakushi22.style.display = 'block';
        sentakushi23.style.display = 'block';
        sentakushi24.style.display = 'block';
    }
    else if (odai === 3) {
        sentakushi21.innerText = "1, ?????????????????????\n??????";
        sentakushi22.innerText = "2, ????????????????????????";
        sentakushi23.innerText = "3, ??????????????????????????????";
        sentakushi24.innerText = "4, ?????????????????????";
        sentakushi21.style.display = 'block';
        sentakushi22.style.display = 'block';
        sentakushi23.style.display = 'block';
        sentakushi24.style.display = 'block';
    }
    else if (odai === 4) {
        sentakushi21.innerText = "1, YouTube";
        sentakushi22.innerText = "2, Twitter";
        sentakushi23.innerText = "3, Instagram";
        sentakushi24.innerText = "4, TikTok";
        sentakushi21.style.display = 'block';
        sentakushi22.style.display = 'block';
        sentakushi23.style.display = 'block';
        sentakushi24.style.display = 'block';
    }
    else if (odai === 5) {
        sentakushi21.innerText = "1, ?????????";
        sentakushi22.innerText = "2, ??????";
        sentakushi23.innerText = "3, ?????????";
        sentakushi24.innerText = "4, ?????????";
        sentakushi21.style.display = 'block';
        sentakushi22.style.display = 'block';
        sentakushi23.style.display = 'block';
        sentakushi24.style.display = 'block';
    }
}

function sentakusipush21() {
    KSE.play();
    ShuyakuAnswers = 1;
    console.log(ShuyakuAnswers)
    dai1monSeikaihappyouTimer1 = setInterval(dai1monSeikaihappyou, 1000);
    sentakushi21.style.display = 'none';
    sentakushi22.style.display = 'none';
    sentakushi23.style.display = 'none';
    sentakushi24.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush22() {
    KSE.play();
    ShuyakuAnswers = 2;
    console.log(ShuyakuAnswers)
    dai1monSeikaihappyouTimer2 = setInterval(dai1monSeikaihappyou, 1000);
    sentakushi21.style.display = 'none';
    sentakushi22.style.display = 'none';
    sentakushi23.style.display = 'none';
    sentakushi24.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush23() {
    KSE.play();
    ShuyakuAnswers = 3;
    console.log(ShuyakuAnswers)
    dai1monSeikaihappyouTimer3 = setInterval(dai1monSeikaihappyou, 1000);
    sentakushi21.style.display = 'none';
    sentakushi22.style.display = 'none';
    sentakushi23.style.display = 'none';
    sentakushi24.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush24() {
    KSE.play();
    ShuyakuAnswers = 4;
    console.log(ShuyakuAnswers)
    dai1monSeikaihappyouTimer4 = setInterval(dai1monSeikaihappyou, 1000);
    sentakushi21.style.display = 'none';
    sentakushi22.style.display = 'none';
    sentakushi23.style.display = 'none';
    sentakushi24.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}

function dai1monSeikaihappyou() {
    dai1monSeikaihappyouTime++;
    if (dai1monSeikaihappyouTime === 1) {
        console.log(dai1monSeikaihappyouTime);
        kotaeteText.style.display = 'none';
        mondai.style.display = 'none';
        title.innerText = "?????????";
        title.style.display = 'block';
        DramSE.play();
    } else if (dai1monSeikaihappyouTime === 7) {
        console.log("a")
        if (ShuyakuAnswers === 1 && odai === 0) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers === 2 && odai === 0) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers === 3 && odai === 0) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers === 4 && odai === 0) {
            title.innerText = "??????????????????\n????????????!!";
        }

        if (ShuyakuAnswers === 1 && odai === 1) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers === 2 && odai === 1) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers === 3 && odai === 1) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers === 4 && odai === 1) {
            title.innerText = "??????????????????\n????????????!!";
        }

        if (ShuyakuAnswers === 1 && odai === 2) {
            title.innerText = "??????????????????\nK-Pop?????????!!";
        }
        if (ShuyakuAnswers === 2 && odai === 2) {
            title.innerText = "??????????????????\nJ-Pop?????????!!";
        }
        if (ShuyakuAnswers === 3 && odai === 2) {
            title.innerText = "??????????????????\n???????????????????????????!!";
        }
        if (ShuyakuAnswers === 4 && odai === 2) {
            title.innerText = "??????????????????\n??????????????????!!";
        }

        if (ShuyakuAnswers === 1 && odai === 3) {
            title.innerText = "??????????????????\n????????????????????????????????????!!";
        }
        if (ShuyakuAnswers === 2 && odai === 3) {
            title.innerText = "??????????????????\n?????????????????????????????????!!";
        }
        if (ShuyakuAnswers === 3 && odai === 3) {
            title.innerText = "??????????????????\n???????????????????????????????????????!!";
        }
        if (ShuyakuAnswers === 4 && odai === 3) {
            title.innerText = "??????????????????\n??????????????????????????????!!";
        }

        if (ShuyakuAnswers === 1 && odai === 4) {
            title.innerText = "??????????????????\nYouTube?????????!!";
        }
        if (ShuyakuAnswers === 2 && odai === 4) {
            title.innerText = "??????????????????\nTwitter?????????!!";
        }
        if (ShuyakuAnswers === 3 && odai === 4) {
            title.innerText = "??????????????????\nInstagram?????????!!";
        }
        if (ShuyakuAnswers === 4 && odai === 4) {
            title.innerText = "??????????????????\nTikTok?????????!!";
        }

        if (ShuyakuAnswers === 1 && odai === 5) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers === 2 && odai === 5) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers === 3 && odai === 5) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers === 4 && odai === 5) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
    } else if (dai1monSeikaihappyouTime === 11) {
        if (OnePAnswers === -1) {
            title.innerText = "1P?????????\n?????????";
        } else if (OnePAnswers === 1) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers === 2) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers === 3) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers === 4) {
            title.innerText = "1P?????????\n???";
        }
    } else if (dai1monSeikaihappyouTime === 13) {
        if (ShuyakuAnswers === OnePAnswers) {
            SeikaiSE.play();
            seikai()
            seigohanteitext.innerText = "??????!!";
            seigohanteitext.style.color = 'red';
            seigohanteitext.style.display = 'block';
        } else if (ShuyakuAnswers !== OnePAnswers) {
            HuseikaiSE.play();
            seigohanteitext.innerText = "?????????";
            seigohanteitext.style.color = 'navy';
            seigohanteitext.style.display = 'block';
        }
    } else if (dai1monSeikaihappyouTime === 15) {
        OnePAnswers === 0;
        ShuyakuAnswers === 0;
    } else if (dai1monSeikaihappyouTime === 16) {
        title.style.display = 'none';
        seigohanteitext.style.display = 'none';
        seigohanteitext.innerText = "";
    } else if (dai1monSeikaihappyouTime === 17) {
        clearInterval(dai1monSeikaihappyou);
        console.log(dai1monSeikaihappyouTime);
        push2();
    }
}
function push2() {
    dai2monhyoujijunbi();
}
function dai2monhyoujijunbi() {
    timer2 = setInterval(dai2monhyouji, 1000);
}
function dai2monhyouji() {
    time2++;
    if (time2 === 1) {
        QSE.play();
        title.innerText = "???2???";
        title.style.display = 'block';
    }
    if (time2 === 10) {
        title.style.display = 'none';
        clearInterval(dai2monhyouji);
        console.log(time2);
        dai2monTimer = setInterval(dai2mon, 1000);
    }
}
function dai2mon() {
    dai2monTime++;
    if (dai2monTime === 1) {
        ShutudaiSE.play();
        mondai.innerText = odais2[odai2];
        console.log(odai2);
        mondai.style.display = 'block';
    }
    if (dai2monTime === 3) {
        dai2monsentakusiTimer = setInterval(dai2monsentakusi, 1000);
        clearInterval(dai2mon);
    }
}
function dai2monsentakusi() {
    dai2monsentakusiTime++;
    if (dai2monsentakusiTime === 2 && odai2 === 0) {
        sentakushi5.innerText = "1, ??????";
        sentakushi6.innerText = "2, ????????????";
        sentakushi7.innerText = "3, ????????????????????????";
        sentakushi8.innerText = "4, ????????????";
        sentakushi5.style.display = 'block';
        sentakushi6.style.display = 'block';
        sentakushi7.style.display = 'block';
        sentakushi8.style.display = 'block';
        dai2monOnePsentakuTimer = setInterval(dai2monOnePPushTime, 1000);
        textchange2();
        clearInterval(dai2monsentakusi);
    } else if (dai2monsentakusiTime === 2 && odai2 === 1) {
        sentakushi5.innerText = "1, ??????????????????";
        sentakushi6.innerText = "2, ???????????????";
        sentakushi7.innerText = "3, ???????????????";
        sentakushi8.innerText = "4, ????????????";
        sentakushi5.style.display = 'block';
        sentakushi6.style.display = 'block';
        sentakushi7.style.display = 'block';
        sentakushi8.style.display = 'block';
        dai2monOnePsentakuTimer = setInterval(dai2monOnePPushTime, 1000);
        textchange2();
        clearInterval(dai2monsentakusi);
    } else if (dai2monsentakusiTime === 2 && odai2 === 2) {
        sentakushi5.innerText = "1, ?????????";
        sentakushi6.innerText = "2, ?????????";
        sentakushi7.innerText = "3, ??????";
        sentakushi8.innerText = "4, ??????";
        sentakushi5.style.display = 'block';
        sentakushi6.style.display = 'block';
        sentakushi7.style.display = 'block';
        sentakushi8.style.display = 'block';
        dai2monOnePsentakuTimer = setInterval(dai2monOnePPushTime, 1000);
        textchange2();
        clearInterval(dai2monsentakusi);
    } else if (dai2monsentakusiTime === 2 && odai2 === 3) {
        sentakushi5.innerText = "1, ??????";
        sentakushi6.innerText = "2, ??????";
        sentakushi7.innerText = "3, ?????????";
        sentakushi8.innerText = "4, ??????";
        sentakushi5.style.display = 'block';
        sentakushi6.style.display = 'block';
        sentakushi7.style.display = 'block';
        sentakushi8.style.display = 'block';
        dai2monOnePsentakuTimer = setInterval(dai2monOnePPushTime, 1000);
        textchange2();
        clearInterval(dai2monsentakusi);
    } else if (dai2monsentakusiTime === 2 && odai2 === 4) {
        sentakushi5.innerText = "1, ???????????????";
        sentakushi6.innerText = "2, ????????????";
        sentakushi7.innerText = "3, ??????????????????";
        sentakushi8.innerText = "4, ????????????";
        sentakushi5.style.display = 'block';
        sentakushi6.style.display = 'block';
        sentakushi7.style.display = 'block';
        sentakushi8.style.display = 'block';
        dai2monOnePsentakuTimer = setInterval(dai2monOnePPushTime, 1000);
        textchange2();
        clearInterval(dai2monsentakusi);
    } else if (dai2monsentakusiTime === 2 && odai2 === 5) {
        sentakushi5.innerText = "1, ????????????";
        sentakushi6.innerText = "2, ????????????";
        sentakushi7.innerText = "3, ?????????????????????";
        sentakushi8.innerText = "4, ?????????";
        sentakushi5.style.display = 'block';
        sentakushi6.style.display = 'block';
        sentakushi7.style.display = 'block';
        sentakushi8.style.display = 'block';
        dai2monOnePsentakuTimer = setInterval(dai2monOnePPushTime, 1000);
        textchange2();
        clearInterval(dai2monsentakusi);
    }
}
function textchange2() {
    kotaeteText.innerText = "1P?????????1~4?????????????????????????????????????????????";
    kotaeteText.style.display = 'block';
}
function sentakusipush5() {
    KSE.play();
    OnePAnswers2 = 1;
    dai2monShuyakuPushTime();
    clearInterval(dai2monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 1;
    sentakushi5.style.display = 'none';
    sentakushi6.style.display = 'none';
    sentakushi7.style.display = 'none';
    sentakushi8.style.display = 'none';
}
function sentakusipush6() {
    KSE.play();
    OnePAnswers2 = 2;
    dai2monShuyakuPushTime();
    clearInterval(dai2monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 2;
    sentakushi5.style.display = 'none';
    sentakushi6.style.display = 'none';
    sentakushi7.style.display = 'none';
    sentakushi8.style.display = 'none';
}
function sentakusipush7() {
    KSE.play();
    OnePAnswers2 = 3;
    dai2monShuyakuPushTime();
    clearInterval(dai2monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 3;
    sentakushi5.style.display = 'none';
    sentakushi6.style.display = 'none';
    sentakushi7.style.display = 'none';
    sentakushi8.style.display = 'none';
}
function sentakusipush8() {
    KSE.play();
    OnePAnswers2 = 4;
    dai2monShuyakuPushTime();
    clearInterval(dai2monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 4;
    sentakushi5.style.display = 'none';
    sentakushi6.style.display = 'none';
    sentakushi7.style.display = 'none';
    sentakushi8.style.display = 'none';
}
function dai2monOnePPushTime() {
    dai2monOnePsentakuTime++;
    if (OnePAnswers2 !== 0) {
        clearInterval(dai2monShuyakuPushTime);
    }
    if (dai2monOnePsentakuTime === 5 && OnePAnswers2 === 0) {
        KeikokuSE.play();
        T.innerText = 5;
        T.style.display = 'block';
    } else if (dai2monOnePsentakuTime === 5 && OnePAnswers2 !== 0) {
        T.style.display = 'none';
    }
    if (dai2monOnePsentakuTime === 6 && OnePAnswers2 === 0) {
        KeikokuSE.play();
        T.innerText = 4;
    } else if (dai2monOnePsentakuTime === 6 && OnePAnswers2 !== 0) {
        T.style.display = 'none';
    }
    if (dai2monOnePsentakuTime === 7 && OnePAnswers2 === 0) {
        KeikokuSE.play();
        T.innerText = 3;
    } else if (dai2monOnePsentakuTime === 7 && OnePAnswers2 !== 0) {
        T.style.display = 'none';
    }
    if (dai2monOnePsentakuTime === 8 && OnePAnswers2 === 0) {
        KeikokuSE.play();
        T.innerText = 2;
    } else if (dai2monOnePsentakuTime === 8 && OnePAnswers2 !== 0) {
        T.style.display = 'none';
    }
    if (dai2monOnePsentakuTime === 9 && OnePAnswers2 === 0) {
        KeikokuSE.play();
        T.innerText = 1;
    } else if (dai2monOnePsentakuTime === 9 && OnePAnswers2 !== 0) {
        T.style.display = 'none';
    }
    if (dai2monOnePsentakuTime === 10 && OnePAnswers2 === 0) {
        T.style.display = 'none';
        OnePAnswers2 = -1;
        sentakushi5.style.display = 'none';
        sentakushi6.style.display = 'none';
        sentakushi7.style.display = 'none';
        sentakushi8.style.display = 'none';
        clearInterval(dai2monOnePPushTime);
        console.log(dai2monOnePsentakuTime);
        dai2monShuyakuPushTime();
    } else if (dai2monOnePsentakuTime === 10 && OnePAnswers2 !== 0) {
        T.style.display = 'none';
    }
}
function dai2monShuyakuPushTime() {
    kotaeteText.innerText = "???????????????5~8??????????????????????????????????????????????????????";
    if (odai2 === 0) {
        sentakushi25.innerText = "1, ??????";
        sentakushi26.innerText = "2, ????????????";
        sentakushi27.innerText = "3, ????????????????????????";
        sentakushi28.innerText = "4, ????????????";
        sentakushi25.style.display = 'block';
        sentakushi26.style.display = 'block';
        sentakushi27.style.display = 'block';
        sentakushi28.style.display = 'block';
    } else if (odai2 === 1) {
        sentakushi25.innerText = "1, ??????????????????";
        sentakushi26.innerText = "2, ???????????????";
        sentakushi27.innerText = "3, ???????????????";
        sentakushi28.innerText = "4, ????????????";
        sentakushi25.style.display = 'block';
        sentakushi26.style.display = 'block';
        sentakushi27.style.display = 'block';
        sentakushi28.style.display = 'block';
    } else if (odai2 === 2) {
        sentakushi25.innerText = "1, ?????????";
        sentakushi26.innerText = "2, ?????????";
        sentakushi27.innerText = "3, ??????";
        sentakushi28.innerText = "4, ??????";
        sentakushi25.style.display = 'block';
        sentakushi26.style.display = 'block';
        sentakushi27.style.display = 'block';
        sentakushi28.style.display = 'block';
    } else if (odai2 === 3) {
        sentakushi25.innerText = "1, ??????";
        sentakushi26.innerText = "2, ??????";
        sentakushi27.innerText = "3, ?????????";
        sentakushi28.innerText = "4, ??????";
        sentakushi25.style.display = 'block';
        sentakushi26.style.display = 'block';
        sentakushi27.style.display = 'block';
        sentakushi28.style.display = 'block';
    } else if (odai2 === 4) {
        sentakushi25.innerText = "1, ???????????????";
        sentakushi26.innerText = "2, ????????????";
        sentakushi27.innerText = "3, ??????????????????";
        sentakushi28.innerText = "4, ????????????";
        sentakushi25.style.display = 'block';
        sentakushi26.style.display = 'block';
        sentakushi27.style.display = 'block';
        sentakushi28.style.display = 'block';
    } else if (odai2 === 5) {
        sentakushi25.innerText = "1, ????????????";
        sentakushi26.innerText = "2, ????????????";
        sentakushi27.innerText = "3, ?????????????????????";
        sentakushi28.innerText = "4, ?????????";
        sentakushi25.style.display = 'block';
        sentakushi26.style.display = 'block';
        sentakushi27.style.display = 'block';
        sentakushi28.style.display = 'block';
    }
}
function sentakusipush25() {
    KSE.play();
    ShuyakuAnswers2 = 1;
    console.log(ShuyakuAnswers)
    dai2monSeikaihappyouTimer4 = setInterval(dai2monSeikaihappyou, 1000);
    sentakushi25.style.display = 'none';
    sentakushi26.style.display = 'none';
    sentakushi27.style.display = 'none';
    sentakushi28.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush26() {
    KSE.play();
    ShuyakuAnswers2 = 2;
    console.log(ShuyakuAnswers)
    dai2monSeikaihappyouTimer4 = setInterval(dai2monSeikaihappyou, 1000);
    sentakushi25.style.display = 'none';
    sentakushi26.style.display = 'none';
    sentakushi27.style.display = 'none';
    sentakushi28.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush27() {
    KSE.play();
    ShuyakuAnswers2 = 3;
    console.log(ShuyakuAnswers)
    dai2monSeikaihappyouTimer4 = setInterval(dai2monSeikaihappyou, 1000);
    sentakushi25.style.display = 'none';
    sentakushi26.style.display = 'none';
    sentakushi27.style.display = 'none';
    sentakushi28.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush28() {
    KSE.play();
    ShuyakuAnswers2 = 4;
    console.log(ShuyakuAnswers)
    dai2monSeikaihappyouTimer4 = setInterval(dai2monSeikaihappyou, 1000);
    sentakushi25.style.display = 'none';
    sentakushi26.style.display = 'none';
    sentakushi27.style.display = 'none';
    sentakushi28.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function dai2monSeikaihappyou() {
    dai2monSeikaihappyouTime++;
    if (dai2monSeikaihappyouTime === 1) {
        console.log(dai2monSeikaihappyouTime);
        mondai.style.display = 'none';
        title.innerText = "?????????";
        title.style.display = 'block';
        DramSE.play();
    } else if (dai2monSeikaihappyouTime === 7) {
        console.log("a");
        if (ShuyakuAnswers2 === 1 && odai2 === 0) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers2 === 2 && odai2 === 0) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers2 === 3 && odai2 === 0) {
            title.innerText = "??????????????????\n?????????????????????????????????!!";
        }
        if (ShuyakuAnswers2 === 4 && odai2 === 0) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }

        if (ShuyakuAnswers2 === 1 && odai2 === 1) {
            title.innerText = "??????????????????\n???????????????????????????!!";
        }
        if (ShuyakuAnswers2 === 2 && odai2 === 1) {
            title.innerText = "??????????????????\n????????????????????????!!";
        }
        if (ShuyakuAnswers2 === 3 && odai2 === 1) {
            title.innerText = "??????????????????\n????????????????????????!!";
        }
        if (ShuyakuAnswers2 === 4 && odai2 === 1) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }

        if (ShuyakuAnswers2 === 1 && odai2 === 2) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers2 === 2 && odai2 === 2) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers2 === 3 && odai2 === 2) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers2 === 4 && odai2 === 2) {
            title.innerText = "??????????????????\n???????????????!!";
        }

        if (ShuyakuAnswers2 === 1 && odai2 === 3) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers2 === 2 && odai2 === 3) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers2 === 3 && odai2 === 3) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers2 === 4 && odai2 === 3) {
            title.innerText = "??????????????????\n???????????????!!";
        }

        if (ShuyakuAnswers2 === 1 && odai2 === 4) {
            title.innerText = "??????????????????\n????????????????????????!!";
        }
        if (ShuyakuAnswers2 === 2 && odai2 === 4) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers2 === 3 && odai2 === 4) {
            title.innerText = "??????????????????\n???????????????????????????!!";
        }
        if (ShuyakuAnswers2 === 4 && odai2 === 4) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }

        if (ShuyakuAnswers2 === 1 && odai2 === 5) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers2 === 2 && odai2 === 5) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers2 === 3 && odai2 === 5) {
            title.innerText = "??????????????????\n??????????????????????????????!!";
        }
        if (ShuyakuAnswers2 === 4 && odai2 === 5) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
    } else if (dai2monSeikaihappyouTime === 11) {
        if (OnePAnswers2 === -1) {
            title.innerText = "1P?????????\n?????????";
        } else if (OnePAnswers2 === 1) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers2 === 2) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers2 === 3) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers2 === 4) {
            title.innerText = "1P?????????\n???";
        }
    } else if (dai2monSeikaihappyouTime === 13) {
        if (ShuyakuAnswers2 === OnePAnswers2) {
            SeikaiSE.play();
            seigohanteitext.innerText = "??????!!";
            seikai();
            seigohanteitext.style.color = 'red';
            seigohanteitext.style.display = 'block';
        } else if (ShuyakuAnswers2 !== OnePAnswers2) {
            HuseikaiSE.play();
            seigohanteitext.innerText = "?????????";
            seigohanteitext.style.color = 'navy';
            seigohanteitext.style.display = 'block';
        }
    } else if (dai2monSeikaihappyouTime === 15) {
        OnePAnswers === 0;
        ShuyakuAnswers === 0;
    } else if (dai2monSeikaihappyouTime === 16) {
        title.style.display = 'none';
        seigohanteitext.style.display = 'none';
        seigohanteitext.innerText = "";
    } else if (dai2monSeikaihappyouTime === 17) {
        clearInterval(dai2monSeikaihappyou);
        console.log(dai2monSeikaihappyouTime);
        push3();
    }
}
function push3() {
    dai3monhyoujijunbi();
}
function dai3monhyoujijunbi() {
    timer3 = setInterval(dai3monhyouji, 1000);
}
function dai3monhyouji() {
    time3++;
    if (time3 === 1) {
        QSE.play();
        title.innerText = "???3???";
        title.style.display = 'block';
    }
    if (time3 === 10) {
        title.style.display = 'none';
        clearInterval(dai3monhyouji);
        console.log(time3);
        dai3monTimer = setInterval(dai3mon, 1000);
    }
}
function dai3mon() {
    dai3monTime++;
    if (dai3monTime === 1) {
        ShutudaiSE.play();
        mondai.innerText = odais3[odai3];
        console.log(odai3);
        mondai.style.display = 'block';
    }
    if (dai3monTime === 3) {
        dai3monsentakusiTimer = setInterval(dai3monsentakusi, 1000);
        clearInterval(dai3mon);
    }
}
function dai3monsentakusi() {
    dai3monsentakusiTime++;
    if (dai3monsentakusiTime === 2 && odai3 === 0) {
        sentakushi9.innerText = "1, ????????????";
        sentakushi10.innerText = "2, ??????????????????";
        sentakushi11.innerText = "3, ????????????";
        sentakushi12.innerText = "4, ????????????";
        sentakushi9.style.display = 'block';
        sentakushi10.style.display = 'block';
        sentakushi11.style.display = 'block';
        sentakushi12.style.display = 'block';
        dai3monOnePsentakuTimer = setInterval(dai3monOnePPushTime, 1000);
        textchange3();
        clearInterval(dai3monsentakusi);
    } else if (dai3monsentakusiTime === 2 && odai3 === 1) {
        sentakushi9.innerText = "1, ?????????";
        sentakushi10.innerText = "2, ?????????";
        sentakushi11.innerText = "3, ??????";
        sentakushi12.innerText = "4, ???????????????";
        sentakushi9.style.display = 'block';
        sentakushi10.style.display = 'block';
        sentakushi11.style.display = 'block';
        sentakushi12.style.display = 'block';
        dai3monOnePsentakuTimer = setInterval(dai3monOnePPushTime, 1000);
        textchange3();
        clearInterval(dai3monsentakusi);
    } else if (dai3monsentakusiTime === 2 && odai3 === 2) {
        sentakushi9.innerText = "1, ??????";
        sentakushi10.innerText = "2, ??????";
        sentakushi11.innerText = "3, ??????";
        sentakushi12.innerText = "4, ??????";
        sentakushi9.style.display = 'block';
        sentakushi10.style.display = 'block';
        sentakushi11.style.display = 'block';
        sentakushi12.style.display = 'block';
        dai3monOnePsentakuTimer = setInterval(dai3monOnePPushTime, 1000);
        textchange3();
        clearInterval(dai3monsentakusi);
    } else if (dai3monsentakusiTime === 2 && odai3 === 3) {
        sentakushi9.innerText = "1, ???????????????";
        sentakushi10.innerText = "2, ????????????";
        sentakushi11.innerText = "3, ?????????";
        sentakushi12.innerText = "4, ??????";
        sentakushi9.style.display = 'block';
        sentakushi10.style.display = 'block';
        sentakushi11.style.display = 'block';
        sentakushi12.style.display = 'block';
        dai3monOnePsentakuTimer = setInterval(dai3monOnePPushTime, 1000);
        textchange3();
        clearInterval(dai3monsentakusi);
    } else if (dai3monsentakusiTime === 2 && odai3 === 4) {
        sentakushi9.innerText = "1, ???";
        sentakushi10.innerText = "2, ???";
        sentakushi11.innerText = "3, ???";
        sentakushi12.innerText = "4, ???";
        sentakushi9.style.display = 'block';
        sentakushi10.style.display = 'block';
        sentakushi11.style.display = 'block';
        sentakushi12.style.display = 'block';
        dai3monOnePsentakuTimer = setInterval(dai3monOnePPushTime, 1000);
        textchange3();
        clearInterval(dai3monsentakusi);
    } else if (dai3monsentakusiTime === 2 && odai3 === 5) {
        sentakushi9.innerText = "1, ???????????????";
        sentakushi10.innerText = "2, ????????????\n???????????????";
        sentakushi11.innerText = "3, ?????????";
        sentakushi12.innerText = "4, ????????????????????????";
        sentakushi9.style.display = 'block';
        sentakushi10.style.display = 'block';
        sentakushi11.style.display = 'block';
        sentakushi12.style.display = 'block';
        dai3monOnePsentakuTimer = setInterval(dai3monOnePPushTime, 1000);
        textchange3();
        clearInterval(dai3monsentakusi);
    }
}
function textchange3() {
    kotaeteText.innerText = "1P?????????1~4?????????????????????????????????????????????";
    kotaeteText.style.display = 'block';
}
function sentakusipush9() {
    KSE.play();
    OnePAnswers3 = 1;
    dai3monShuyakuPushTime();
    clearInterval(dai3monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 1;
    sentakushi9.style.display = 'none';
    sentakushi10.style.display = 'none';
    sentakushi11.style.display = 'none';
    sentakushi12.style.display = 'none';
}
function sentakusipush10() {
    KSE.play();
    OnePAnswers3 = 2;
    dai3monShuyakuPushTime();
    clearInterval(dai3monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 2;
    sentakushi9.style.display = 'none';
    sentakushi10.style.display = 'none';
    sentakushi11.style.display = 'none';
    sentakushi12.style.display = 'none';
}
function sentakusipush11() {
    KSE.play();
    OnePAnswers3 = 3;
    dai3monShuyakuPushTime();
    clearInterval(dai3monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 3;
    sentakushi9.style.display = 'none';
    sentakushi10.style.display = 'none';
    sentakushi11.style.display = 'none';
    sentakushi12.style.display = 'none';
}
function sentakusipush12() {
    KSE.play();
    OnePAnswers3 = 4;
    dai3monShuyakuPushTime();
    clearInterval(dai3monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 4;
    sentakushi9.style.display = 'none';
    sentakushi10.style.display = 'none';
    sentakushi11.style.display = 'none';
    sentakushi12.style.display = 'none';
    
}
function dai3monOnePPushTime() {
    dai3monOnePsentakuTime++;
    if (OnePAnswers3 !== 0) {
        clearInterval(dai3monShuyakuPushTime);
    }
    if (dai3monOnePsentakuTime === 8 && OnePAnswers3 === 0) {
        KeikokuSE.play();
        T.innerText = 5;
        T.style.display = 'block';
    } else if (dai3monOnePsentakuTime === 8 && OnePAnswers3 !== 0) {
        T.style.display = 'none';
    }
    if (dai3monOnePsentakuTime === 9 && OnePAnswers3 === 0) {
        KeikokuSE.play();
        T.innerText = 4;
    } else if (dai3monOnePsentakuTime === 9 && OnePAnswers3 !== 0) {
        T.style.display = 'none';
    }
    if (dai3monOnePsentakuTime === 10 && OnePAnswers3 === 0) {
        KeikokuSE.play();
        T.innerText = 3;
    } else if (dai3monOnePsentakuTime === 10 && OnePAnswers3 !== 0) {
        T.style.display = 'none';
    }
    if (dai3monOnePsentakuTime === 11 && OnePAnswers3 === 0) {
        KeikokuSE.play();
        T.innerText = 2;
    } else if (dai3monOnePsentakuTime === 11 && OnePAnswers3 !== 0) {
        T.style.display = 'none';
    }
    if (dai3monOnePsentakuTime === 12 && OnePAnswers3 === 0) {
        KeikokuSE.play();
        T.innerText = 1;
    } else if (dai3monOnePsentakuTime === 12 && OnePAnswers3 !== 0) {
        T.style.display = 'none';
    }
    if (dai3monOnePsentakuTime === 13 && OnePAnswers3 === 0) {
        T.style.display = 'none';
        OnePAnswers3 = -1;
        sentakushi9.style.display = 'none';
        sentakushi10.style.display = 'none';
        sentakushi11.style.display = 'none';
        sentakushi12.style.display = 'none';    
        clearInterval(dai3monOnePPushTime);
        console.log(dai3monOnePsentakuTime);
        dai3monShuyakuPushTime();
    } else if (dai3monOnePsentakuTime === 13 && OnePAnswers3 !== 0) {
        T.style.display = 'none';
    }
}
function dai3monShuyakuPushTime() {
    kotaeteText.innerText = "???????????????5~8??????????????????????????????????????????????????????";
    if (odai3 === 0) {
        sentakushi29.innerText = "1, ????????????";
        sentakushi30.innerText = "2, ??????????????????";
        sentakushi31.innerText = "3, ????????????";
        sentakushi32.innerText = "4, ????????????";
        sentakushi29.style.display = 'block';
        sentakushi30.style.display = 'block';
        sentakushi31.style.display = 'block';
        sentakushi32.style.display = 'block';
    } else if (odai3 === 1) {
        sentakushi29.innerText = "1, ?????????";
        sentakushi30.innerText = "2, ?????????";
        sentakushi31.innerText = "3, ??????";
        sentakushi32.innerText = "4, ???????????????";
        sentakushi29.style.display = 'block';
        sentakushi30.style.display = 'block';
        sentakushi31.style.display = 'block';
        sentakushi32.style.display = 'block';
    } else if (odai3 === 2) {
        sentakushi29.innerText = "1, ??????";
        sentakushi30.innerText = "2, ??????";
        sentakushi31.innerText = "3, ??????";
        sentakushi32.innerText = "4, ??????";
        sentakushi29.style.display = 'block';
        sentakushi30.style.display = 'block';
        sentakushi31.style.display = 'block';
        sentakushi32.style.display = 'block';
    } else if (odai3 === 3) {
        sentakushi29.innerText = "1, ???????????????";
        sentakushi30.innerText = "2, ????????????";
        sentakushi31.innerText = "3, ?????????";
        sentakushi32.innerText = "4, ??????";
        sentakushi29.style.display = 'block';
        sentakushi30.style.display = 'block';
        sentakushi31.style.display = 'block';
        sentakushi32.style.display = 'block';
    } else if (odai3 === 4) {
        sentakushi29.innerText = "1, ???";
        sentakushi30.innerText = "2, ???";
        sentakushi31.innerText = "3, ???";
        sentakushi32.innerText = "4, ???";
        sentakushi29.style.display = 'block';
        sentakushi30.style.display = 'block';
        sentakushi31.style.display = 'block';
        sentakushi32.style.display = 'block';
    } else if (odai3 === 5) {
        sentakushi29.innerText = "1, ???????????????";
        sentakushi30.innerText = "2, ????????????\n???????????????";
        sentakushi31.innerText = "3, ?????????";
        sentakushi32.innerText = "4, ????????????????????????";
        sentakushi29.style.display = 'block';
        sentakushi30.style.display = 'block';
        sentakushi31.style.display = 'block';
        sentakushi32.style.display = 'block';
    }
}
function sentakusipush29() {
    KSE.play();
    ShuyakuAnswers3 = 1;
    console.log(ShuyakuAnswers)
    dai3monSeikaihappyouTimer1 = setInterval(dai3monSeikaihappyou, 1000);
    sentakushi29.style.display = 'none';
    sentakushi30.style.display = 'none';
    sentakushi31.style.display = 'none';
    sentakushi32.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush30() {
    KSE.play();
    ShuyakuAnswers3 = 2;
    console.log(ShuyakuAnswers)
    dai3monSeikaihappyouTimer2 = setInterval(dai3monSeikaihappyou, 1000);
    sentakushi29.style.display = 'none';
    sentakushi30.style.display = 'none';
    sentakushi31.style.display = 'none';
    sentakushi32.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush31() {
    KSE.play();
    ShuyakuAnswers3 = 3;
    console.log(ShuyakuAnswers)
    dai3monSeikaihappyouTimer3 = setInterval(dai3monSeikaihappyou, 1000);
    sentakushi29.style.display = 'none';
    sentakushi30.style.display = 'none';
    sentakushi31.style.display = 'none';
    sentakushi32.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush32() {
    KSE.play();
    ShuyakuAnswers3 = 4;
    console.log(ShuyakuAnswers)
    dai3monSeikaihappyouTimer4 = setInterval(dai3monSeikaihappyou, 1000);
    sentakushi29.style.display = 'none';
    sentakushi30.style.display = 'none';
    sentakushi31.style.display = 'none';
    sentakushi32.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function dai3monSeikaihappyou() {
    dai3monSeikaihappyouTime++;
    if (dai3monSeikaihappyouTime === 1) {
        console.log(dai3monSeikaihappyouTime);
        kotaeteText.style.display = 'none';
        sentakushi29.style.display = 'none';
        sentakushi30.style.display = 'none';
        sentakushi31.style.display = 'none';
        sentakushi32.style.display = 'none';
        mondai.style.display = 'none';
        title.innerText = "?????????";
        title.style.display = 'block';
        DramSE.play();
    } else if (dai3monSeikaihappyouTime === 7) {
        console.log("a")
        if (ShuyakuAnswers3 === 1 && odai3 === 0) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers3 === 2 && odai3 === 0) {
            title.innerText = "??????????????????\n???????????????????????????!!";
        }
        if (ShuyakuAnswers3 === 3 && odai3 === 0) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers3 === 4 && odai3 === 0) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }

        if (ShuyakuAnswers3 === 1 && odai3 === 1) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers3 === 2 && odai3 === 1) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers3 === 3 && odai3 === 1) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers3 === 4 && odai3 === 1) {
            title.innerText = "??????????????????\n????????????????????????!!";
        }

        if (ShuyakuAnswers3 === 1 && odai3 === 2) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers3 === 2 && odai3 === 2) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers3 === 3 && odai3 === 2) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers3 === 4 && odai3 === 2) {
            title.innerText = "??????????????????\n???????????????!!";
        }

        if (ShuyakuAnswers3 === 1 && odai3 === 3) {
            title.innerText = "??????????????????\n????????????????????????!!";
        }
        if (ShuyakuAnswers3 === 2 && odai3 === 3) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers3 === 3 && odai3 === 3) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers3 === 4 && odai3 === 3) {
            title.innerText = "??????????????????\n???????????????!!";
        }

        if (ShuyakuAnswers3 === 1 && odai3 === 4) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers3 === 2 && odai3 === 4) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers3 === 3 && odai3 === 4) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers3 === 4 && odai3 === 4) {
            title.innerText = "??????????????????\n????????????!!";
        }

        if (ShuyakuAnswers3 === 1 && odai3 === 5) {
            title.innerText = "??????????????????\n????????????????????????!!";
        }
        if (ShuyakuAnswers3 === 2 && odai3 === 5) {
            title.innerText = "??????????????????\n????????????????????????????????????!!";
        }
        if (ShuyakuAnswers3 === 3 && odai3 === 5) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers3 === 4 && odai3 === 5) {
            title.innerText = "??????????????????\n?????????????????????????????????!!";
        }
    } else if (dai3monSeikaihappyouTime === 11) {
        if (OnePAnswers3 === -1) {
            title.innerText = "1P?????????\n?????????";
        } else if (OnePAnswers3 === 1) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers3 === 2) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers3 === 3) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers3 === 4) {
            title.innerText = "1P?????????\n???";
        }
    } else if (dai3monSeikaihappyouTime === 13) {
        if (ShuyakuAnswers3 === OnePAnswers3) {
            SeikaiSE.play();
            seigohanteitext.innerText = "??????!!";
            seikai();
            seigohanteitext.style.color = 'red';
            seigohanteitext.style.display = 'block';
        } else if (ShuyakuAnswers3 !== OnePAnswers3) {
            HuseikaiSE.play();
            seigohanteitext.innerText = "?????????";
            seigohanteitext.style.color = 'navy';
            seigohanteitext.style.display = 'block';
        }
    } else if (dai3monSeikaihappyouTime === 15) {
        OnePAnswers === 0;
        ShuyakuAnswers === 0;
    } else if (dai3monSeikaihappyouTime === 16) {
        title.style.display = 'none';
        seigohanteitext.style.display = 'none';
        seigohanteitext.innerText = "";
    } else if (dai3monSeikaihappyouTime === 17) {
        clearInterval(dai3monSeikaihappyou);
        console.log(dai3monSeikaihappyouTime);
        push4();
    }
}
function push4() {
    dai4monhyoujijunbi();
}
function dai4monhyoujijunbi() {
    timer4 = setInterval(dai4monhyouji, 1000);
}
function dai4monhyouji() {
    time4++;
    if (time4 === 1) {
        QSE.play();
        title.innerText = "???4???";
        title.style.display = 'block';
    }
    if (time4 === 10) {
        title.style.display = 'none';
        clearInterval(dai4monhyouji);
        console.log(time2);
        dai4monTimer = setInterval(dai4mon, 1000);
    }
}
function dai4mon() {
    dai4monTime++;
    if (dai4monTime === 1) {
        ShutudaiSE.play();
        mondai.innerText = odais4[odai4];
        console.log(odai4);
        mondai.style.display = 'block';
    }
    if (dai4monTime === 3) {
        dai4monsentakusiTimer = setInterval(dai4monsentakusi, 1000);
        clearInterval(dai4mon);
    }
}
function dai4monsentakusi() {
    dai4monsentakusiTime++;
    if (dai4monsentakusiTime === 2 && odai4 === 0) {
        sentakushi13.innerText = "1, ?????????";
        sentakushi14.innerText = "2, ????????????";
        sentakushi15.innerText = "3, ???????????????";
        sentakushi16.innerText = "4, ????????????\n????????????";
        sentakushi13.style.display = 'block';
        sentakushi14.style.display = 'block';
        sentakushi15.style.display = 'block';
        sentakushi16.style.display = 'block';
        dai4monOnePsentakuTimer = setInterval(dai4monOnePPushTime, 1000);
        textchange4();
        clearInterval(dai4monsentakusi);
    } else if (dai4monsentakusiTime === 2 && odai4 === 1) {
        sentakushi13.innerText = "1, ???";
        sentakushi14.innerText = "2, ???";
        sentakushi15.innerText = "3, ???????????????";
        sentakushi16.innerText = "4, ??????";
        sentakushi13.style.display = 'block';
        sentakushi14.style.display = 'block';
        sentakushi15.style.display = 'block';
        sentakushi16.style.display = 'block';
        dai4monOnePsentakuTimer = setInterval(dai4monOnePPushTime, 1000);
        textchange4();
        clearInterval(dai4monsentakusi);
    } else if (dai4monsentakusiTime === 2 && odai4 === 2) {
        sentakushi13.innerText = "1, ?????????";
        sentakushi14.innerText = "2, ?????????";
        sentakushi15.innerText = "3, ???";
        sentakushi16.innerText = "4, ??????";
        sentakushi13.style.display = 'block';
        sentakushi14.style.display = 'block';
        sentakushi15.style.display = 'block';
        sentakushi16.style.display = 'block';
        dai4monOnePsentakuTimer = setInterval(dai4monOnePPushTime, 1000);
        textchange4();
        clearInterval(dai4monsentakusi);
    } else if (dai4monsentakusiTime === 2 && odai4 === 3) {
        sentakushi13.innerText = "1, ?????????";
        sentakushi14.innerText = "2, ???";
        sentakushi15.innerText = "3, ??????";
        sentakushi16.innerText = "4, ?????????";
        sentakushi13.style.display = 'block';
        sentakushi14.style.display = 'block';
        sentakushi15.style.display = 'block';
        sentakushi16.style.display = 'block';
        dai4monOnePsentakuTimer = setInterval(dai4monOnePPushTime, 1000);
        textchange4();
        clearInterval(dai4monsentakusi);
    } else if (dai4monsentakusiTime === 2 && odai4 === 4) {
        sentakushi13.innerText = "1, ???????????????";
        sentakushi14.innerText = "2, ???????????????";
        sentakushi15.innerText = "3, ?????????";
        sentakushi16.innerText = "4, ?????????";
        sentakushi13.style.display = 'block';
        sentakushi14.style.display = 'block';
        sentakushi15.style.display = 'block';
        sentakushi16.style.display = 'block';
        dai4monOnePsentakuTimer = setInterval(dai4monOnePPushTime, 1000);
        textchange4();
        clearInterval(dai4monsentakusi);
    } else if (dai4monsentakusiTime === 2 && odai4 === 5) {
        sentakushi13.innerText = "1, ?????????";
        sentakushi14.innerText = "2, ???????????????";
        sentakushi15.innerText = "3, ?????????";
        sentakushi16.innerText = "4, ??????";
        sentakushi13.style.display = 'block';
        sentakushi14.style.display = 'block';
        sentakushi15.style.display = 'block';
        sentakushi16.style.display = 'block';
        dai4monOnePsentakuTimer = setInterval(dai4monOnePPushTime, 1000);
        textchange4();
        clearInterval(dai4monsentakusi);
    }
}
function textchange4() {
    kotaeteText.innerText = "1P?????????1~4?????????????????????????????????????????????";
    kotaeteText.style.display = 'block';
}
function sentakusipush13() {
    KSE.play();
    OnePAnswers4 = 1;
    dai4monShuyakuPushTime();
    clearInterval(dai4monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 1;
    sentakushi13.style.display = 'none';
    sentakushi14.style.display = 'none';
    sentakushi15.style.display = 'none';
    sentakushi16.style.display = 'none';
}
function sentakusipush14() {
    KSE.play();
    OnePAnswers4 = 2;
    dai4monShuyakuPushTime();
    clearInterval(dai4monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 2;
    sentakushi13.style.display = 'none';
    sentakushi14.style.display = 'none';
    sentakushi15.style.display = 'none';
    sentakushi16.style.display = 'none';
}
function sentakusipush15() {
    KSE.play();
    OnePAnswers4 = 3;
    dai4monShuyakuPushTime();
    clearInterval(dai4monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 3;
    sentakushi13.style.display = 'none';
    sentakushi14.style.display = 'none';
    sentakushi15.style.display = 'none';
    sentakushi16.style.display = 'none';
}
function sentakusipush16() {
    KSE.play();
    OnePAnswers4 = 4;
    dai4monShuyakuPushTime();
    clearInterval(dai4monOnePPushTime);
    console.log(OnePAnswers)
    OnePsentaku = 4;
    sentakushi13.style.display = 'none';
    sentakushi14.style.display = 'none';
    sentakushi15.style.display = 'none';
    sentakushi16.style.display = 'none';
}

function dai4monOnePPushTime() {
    dai4monOnePsentakuTime++;
    if (OnePAnswers4 !== 0) {
        clearInterval(dai4monShuyakuPushTime);
    }
    if (dai4monOnePsentakuTime === 5 && OnePAnswers4 === 0) {
        KeikokuSE.play();
        T.innerText = 5;
        T.style.display = 'block';
    } else if (dai4monOnePsentakuTime === 5 && OnePAnswers4 !== 0) {
        T.style.display = 'none';
    }
    if (dai4monOnePsentakuTime === 6 && OnePAnswers4 === 0) {
        KeikokuSE.play();
        T.innerText = 4;
    } else if (dai4monOnePsentakuTime === 6 && OnePAnswers4 !== 0) {
        T.style.display = 'none';
    }
    if (dai4monOnePsentakuTime === 7 && OnePAnswers4 === 0) {
        KeikokuSE.play();
        T.innerText = 3;
    } else if (dai4monOnePsentakuTime === 7 && OnePAnswers4 !== 0) {
        T.style.display = 'none';
    }
    if (dai4monOnePsentakuTime === 8 && OnePAnswers4 === 0) {
        KeikokuSE.play();
        T.innerText = 2;
    } else if (dai4monOnePsentakuTime === 8 && OnePAnswers4 !== 0) {
        T.style.display = 'none';
    }
    if (dai4monOnePsentakuTime === 9 && OnePAnswers4 === 0) {
        KeikokuSE.play();
        T.innerText = 1;
    } else if (dai4monOnePsentakuTime === 9 && OnePAnswers4 !== 0) {
        T.style.display = 'none';
    }
    if (dai4monOnePsentakuTime === 10 && OnePAnswers4 === 0) {
        T.style.display = 'none';
        OnePAnswers4 = -1;
        sentakushi13.style.display = 'none';
        sentakushi14.style.display = 'none';
        sentakushi15.style.display = 'none';
        sentakushi16.style.display = 'none';
        clearInterval(dai4monOnePPushTime);
        console.log(dai4monOnePsentakuTime);
        dai4monShuyakuPushTime();
    } else if (dai4monOnePsentakuTime === 10 && OnePAnswers4 !== 0) {
        T.style.display = 'none';
    }
}
function dai4monShuyakuPushTime() {
    kotaeteText.innerText = "???????????????5~8??????????????????????????????????????????????????????";
    if (odai4 === 0) {
        sentakushi33.innerText = "1, ?????????";
        sentakushi34.innerText = "2, ????????????";
        sentakushi35.innerText = "3, ???????????????";
        sentakushi36.innerText = "4, ????????????\n????????????";
        sentakushi33.style.display = 'block';
        sentakushi34.style.display = 'block';
        sentakushi35.style.display = 'block';
        sentakushi36.style.display = 'block';
    } else if (odai4 === 1) {
        sentakushi33.innerText = "1, ???";
        sentakushi34.innerText = "2, ???";
        sentakushi35.innerText = "3, ???????????????";
        sentakushi36.innerText = "4, ??????";
        sentakushi33.style.display = 'block';
        sentakushi34.style.display = 'block';
        sentakushi35.style.display = 'block';
        sentakushi36.style.display = 'block';
    } if (odai4 === 2) {
        sentakushi33.innerText = "1, ?????????";
        sentakushi34.innerText = "2, ?????????";
        sentakushi35.innerText = "3, ???";
        sentakushi36.innerText = "4, ??????";
        sentakushi33.style.display = 'block';
        sentakushi34.style.display = 'block';
        sentakushi35.style.display = 'block';
        sentakushi36.style.display = 'block';
    } if (odai4 === 3) {
        sentakushi33.innerText = "1, ?????????";
        sentakushi34.innerText = "2, ???";
        sentakushi35.innerText = "3, ??????";
        sentakushi36.innerText = "4, ?????????";
        sentakushi33.style.display = 'block';
        sentakushi34.style.display = 'block';
        sentakushi35.style.display = 'block';
        sentakushi36.style.display = 'block';
    } if (odai4 === 4) {
        sentakushi33.innerText = "1, ???????????????";
        sentakushi34.innerText = "2, ???????????????";
        sentakushi35.innerText = "3, ?????????";
        sentakushi36.innerText = "4, ?????????";
        sentakushi33.style.display = 'block';
        sentakushi34.style.display = 'block';
        sentakushi35.style.display = 'block';
        sentakushi36.style.display = 'block';
    } if (odai4 === 5) {
        sentakushi33.innerText = "1, ?????????";
        sentakushi34.innerText = "2, ???????????????";
        sentakushi35.innerText = "3, ?????????";
        sentakushi36.innerText = "4, ??????";
        sentakushi33.style.display = 'block';
        sentakushi34.style.display = 'block';
        sentakushi35.style.display = 'block';
        sentakushi36.style.display = 'block';
    }
}
function sentakusipush33() {
    KSE.play();
    ShuyakuAnswers4 = 1;
    console.log(ShuyakuAnswers)
    dai4monSeikaihappyouTimer1 = setInterval(dai4monSeikaihappyou, 1000);
    sentakushi33.style.display = 'none';
    sentakushi34.style.display = 'none';
    sentakushi35.style.display = 'none';
    sentakushi36.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush34() {
    KSE.play();
    ShuyakuAnswers4 = 2;
    console.log(ShuyakuAnswers)
    dai4monSeikaihappyouTimer2 = setInterval(dai4monSeikaihappyou, 1000);
    sentakushi33.style.display = 'none';
    sentakushi34.style.display = 'none';
    sentakushi35.style.display = 'none';
    sentakushi36.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush35() {
    KSE.play();
    ShuyakuAnswers4 = 3;
    console.log(ShuyakuAnswers)
    dai4monSeikaihappyouTimer3 = setInterval(dai4monSeikaihappyou, 1000);
    sentakushi33.style.display = 'none';
    sentakushi34.style.display = 'none';
    sentakushi35.style.display = 'none';
    sentakushi36.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush36() {
    KSE.play();
    ShuyakuAnswers4 = 4;
    console.log(ShuyakuAnswers)
    dai4monSeikaihappyouTimer4 = setInterval(dai4monSeikaihappyou, 1000);
    sentakushi33.style.display = 'none';
    sentakushi34.style.display = 'none';
    sentakushi35.style.display = 'none';
    sentakushi36.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function dai4monSeikaihappyou() {
    dai4monSeikaihappyouTime++;
    if (dai4monSeikaihappyouTime === 1) {
        console.log(dai4monSeikaihappyouTime);
        kotaeteText.style.display = 'none';
        sentakushi33.style.display = 'none';
        sentakushi34.style.display = 'none';
        sentakushi35.style.display = 'none';
        sentakushi36.style.display = 'none';
        mondai.style.display = 'none';
        title.innerText = "?????????";
        title.style.display = 'block';
        DramSE.play();
    } else if (dai4monSeikaihappyouTime === 7) {
        console.log("a")
        if (ShuyakuAnswers4 === 1 && odai4 === 0) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers4 === 2 && odai4 === 0) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers4 === 3 && odai4 === 0) {
            title.innerText = "??????????????????\n????????????????????????!!";
        }
        if (ShuyakuAnswers4 === 4 && odai4 === 0) {
            title.innerText = "??????????????????\n?????????????????????????????????!!";
        }

        if (ShuyakuAnswers4 === 1 && odai4 === 1) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers4 === 2 && odai4 === 1) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers4 === 3 && odai4 === 1) {
            title.innerText = "??????????????????\n????????????????????????!!";
        }
        if (ShuyakuAnswers4 === 4 && odai4 === 1) {
            title.innerText = "??????????????????\n???????????????!!";
        }

        if (ShuyakuAnswers4 === 1 && odai4 === 2) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers4 === 2 && odai4 === 2) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers4 === 3 && odai4 === 2) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers4 === 4 && odai4 === 2) {
            title.innerText = "??????????????????\n???????????????!!";
        }

        if (ShuyakuAnswers4 === 1 && odai4 === 3) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers4 === 2 && odai4 === 3) {
            title.innerText = "??????????????????\n????????????!!";
        }
        if (ShuyakuAnswers4 === 3 && odai4 === 3) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers4 === 4 && odai4 === 3) {
            title.innerText = "??????????????????\n??????????????????!!";
        }

        if (ShuyakuAnswers4 === 1 && odai4 === 4) {
            title.innerText = "??????????????????\n????????????????????????!!";
        }
        if (ShuyakuAnswers4 === 2 && odai4 === 4) {
            title.innerText = "??????????????????\n????????????????????????!!";
        }
        if (ShuyakuAnswers4 === 3 && odai4 === 4) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers4 === 4 && odai4 === 4) {
            title.innerText = "??????????????????\n??????????????????!!";
        }

        if (ShuyakuAnswers4 === 1 && odai4 === 5) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers4 === 2 && odai4 === 5) {
            title.innerText = "??????????????????\n????????????????????????!!";
        }
        if (ShuyakuAnswers4 === 3 && odai4 === 5) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers4 === 4 && odai4 === 5) {
            title.innerText = "??????????????????\n???????????????!!";
        }
    } else if (dai4monSeikaihappyouTime === 11) {
        if (OnePAnswers4 === -1) {
            title.innerText = "1P?????????\n?????????";
        } else if (OnePAnswers4 === 1) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers4 === 2) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers4 === 3) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers4 === 4) {
            title.innerText = "1P?????????\n???";
        }
    } else if (dai4monSeikaihappyouTime === 13) {
        if (ShuyakuAnswers4 === OnePAnswers4) {
            SeikaiSE.play();
            seigohanteitext.innerText = "??????!!";
            seikai();
            seigohanteitext.style.color = 'red';
            seigohanteitext.style.display = 'block';
        } else if (ShuyakuAnswers4 !== OnePAnswers4) {
            HuseikaiSE.play();
            seigohanteitext.innerText = "?????????";
            seigohanteitext.style.color = 'navy';
            seigohanteitext.style.display = 'block';
        }
    } else if (dai4monSeikaihappyouTime === 15) {
        OnePAnswers === 0;
        ShuyakuAnswers === 0;
    } else if (dai4monSeikaihappyouTime === 16) {
        title.style.display = 'none';
        seigohanteitext.style.display = 'none';
        seigohanteitext.innerText = "";
    } else if (dai4monSeikaihappyouTime === 17) {
        clearInterval(dai4monSeikaihappyou);
        console.log(dai4monSeikaihappyouTime);
        push5();
    }
}
function push5() {
    dai5monhyoujijunbi();
}
function dai5monhyoujijunbi() {
    timer5 = setInterval(dai5monhyouji, 1000);
}
function dai5monhyouji() {
    time5++;
    if (time5 === 1) {
        QSE.play();
        title.innerText = "????????????";
        title.style.display = 'block';
    }
    if (time5 === 10) {
        title.style.display = 'none';
        clearInterval(dai5monhyouji);
        console.log(time5);
        dai5monTimer = setInterval(dai5mon, 1000);
    }
}
function dai5mon() {
    dai5monTime++;
    if (dai5monTime === 1) {
        ShutudaiSE.play();
        mondai.innerText = odais5[odai5];
        console.log(odai4);
        mondai.style.display = 'block';
    }
    if (dai5monTime === 3) {
        dai5monsentakusiTimer = setInterval(dai5monsentakusi, 1000);
        clearInterval(dai5mon);
    }
}
function dai5monsentakusi() {
    dai5monsentakusiTime++;
    if (dai5monsentakusiTime === 2 && odai5 === 0) {
        sentakushi17.innerText = "1, ??????????????????";
        sentakushi18.innerText = "2, ??????????????????";
        sentakushi19.innerText = "3, ?????????????????????";
        sentakushi20.innerText = "4, ??????????????????";
        sentakushi17.style.display = 'block';
        sentakushi18.style.display = 'block';
        sentakushi19.style.display = 'block';
        sentakushi20.style.display = 'block';
        dai5monOnePsentakuTimer = setInterval(dai5monOnePPushTime, 1000);
        textchange5();
        clearInterval(dai5monsentakusi);
    } else if (dai5monsentakusiTime === 2 && odai5 === 1) {
        sentakushi17.innerText = "1, ????????????";
        sentakushi18.innerText = "2, ?????????";
        sentakushi19.innerText = "3, ????????????";
        sentakushi20.innerText = "4, ?????????";
        sentakushi17.style.display = 'block';
        sentakushi18.style.display = 'block';
        sentakushi19.style.display = 'block';
        sentakushi20.style.display = 'block';
        dai5monOnePsentakuTimer = setInterval(dai5monOnePPushTime, 1000);
        textchange5();
        clearInterval(dai5monsentakusi);
    } else if (dai5monsentakusiTime === 2 && odai5 === 2) {
        sentakushi17.innerText = "1, ??????";
        sentakushi18.innerText = "2, ??????";
        sentakushi19.innerText = "3, ????????????";
        sentakushi20.innerText = "4, ?????????";
        sentakushi17.style.display = 'block';
        sentakushi18.style.display = 'block';
        sentakushi19.style.display = 'block';
        sentakushi20.style.display = 'block';
        dai5monOnePsentakuTimer = setInterval(dai5monOnePPushTime, 1000);
        textchange5();
        clearInterval(dai5monsentakusi);
    } else if (dai5monsentakusiTime === 2 && odai5 === 3) {
        sentakushi17.innerText = "1, ?????????????????????";
        sentakushi18.innerText = "2, ?????????????????????";
        sentakushi19.innerText = "3, ??????????????????";
        sentakushi20.innerText = "4, ?????????????????????";
        sentakushi17.style.display = 'block';
        sentakushi18.style.display = 'block';
        sentakushi19.style.display = 'block';
        sentakushi20.style.display = 'block';
        dai5monOnePsentakuTimer = setInterval(dai5monOnePPushTime, 1000);
        textchange5();
        clearInterval(dai5monsentakusi);
    } else if (dai5monsentakusiTime === 2 && odai5 === 4) {
        sentakushi17.innerText = "1, ??????";
        sentakushi18.innerText = "2, ??????";
        sentakushi19.innerText = "3, ?????????";
        sentakushi20.innerText = "4, ??????";
        sentakushi17.style.display = 'block';
        sentakushi18.style.display = 'block';
        sentakushi19.style.display = 'block';
        sentakushi20.style.display = 'block';
        dai5monOnePsentakuTimer = setInterval(dai5monOnePPushTime, 1000);
        textchange5();
        clearInterval(dai5monsentakusi);
    } else if (dai5monsentakusiTime === 2 && odai5 === 5) {
        sentakushi17.innerText = "1, ????????????";
        sentakushi18.innerText = "2, ??????";
        sentakushi19.innerText = "3, ????????????";
        sentakushi20.innerText = "4, ??????";
        sentakushi17.style.display = 'block';
        sentakushi18.style.display = 'block';
        sentakushi19.style.display = 'block';
        sentakushi20.style.display = 'block';
        dai5monOnePsentakuTimer = setInterval(dai5monOnePPushTime, 1000);
        textchange5();
        clearInterval(dai5monsentakusi);
    }
}
function textchange5() {
    kotaeteText.innerText = "1P?????????1~4?????????????????????????????????????????????";
    kotaeteText.style.display = 'block';
}
function sentakusipush17 () {
    KSE.play();
    OnePAnswers5 = 1;
    dai5monShuyakuPushTime();
    clearInterval(dai5monOnePPushTime);
    sentakushi17.style.display = 'none';
    sentakushi18.style.display = 'none';
    sentakushi19.style.display = 'none';
    sentakushi20.style.display = 'none';
}
function sentakusipush18 () {
    KSE.play();
    OnePAnswers5 = 2;
    dai5monShuyakuPushTime();
    clearInterval(dai5monOnePPushTime);
    sentakushi17.style.display = 'none';
    sentakushi18.style.display = 'none';
    sentakushi19.style.display = 'none';
    sentakushi20.style.display = 'none';
}
function sentakusipush19 () {
    KSE.play();
    OnePAnswers5 = 3;
    dai5monShuyakuPushTime();
    clearInterval(dai5monOnePPushTime);
    sentakushi17.style.display = 'none';
    sentakushi18.style.display = 'none';
    sentakushi19.style.display = 'none';
    sentakushi20.style.display = 'none';
}
function sentakusipush20 () {
    KSE.play();
    OnePAnswers5 = 4;
    dai5monShuyakuPushTime();
    clearInterval(dai5monOnePPushTime);
    sentakushi17.style.display = 'none';
    sentakushi18.style.display = 'none';
    sentakushi19.style.display = 'none';
    sentakushi20.style.display = 'none';
}
function dai5monOnePPushTime() {
    dai5monOnePsentakuTime++;
    if (OnePAnswers5 !== 0) {
        clearInterval(dai5monShuyakuPushTime);
    }
    if (dai5monOnePsentakuTime === 5 && OnePAnswers5 === 0) {
        KeikokuSE.play();
        T.innerText = 5;
        T.style.display = 'block';
    } else if (dai5monOnePsentakuTime === 5 && OnePAnswers5 !== 0) {
        T.style.display = 'none';
    }
    if (dai5monOnePsentakuTime === 6 && OnePAnswers5 === 0) {
        KeikokuSE.play();
        T.innerText = 4;
    } else if (dai5monOnePsentakuTime === 6 && OnePAnswers5 !== 0) {
        T.style.display = 'none';
    }
    if (dai5monOnePsentakuTime === 7 && OnePAnswers5 === 0) {
        KeikokuSE.play();
        T.innerText = 3;
    } else if (dai5monOnePsentakuTime === 7 && OnePAnswers5 !== 0) {
        T.style.display = 'none';
    }
    if (dai5monOnePsentakuTime === 8 && OnePAnswers5 === 0) {
        KeikokuSE.play();
        T.innerText = 2;
    } else if (dai5monOnePsentakuTime === 8 && OnePAnswers5 !== 0) {
        T.style.display = 'none';
    }
    if (dai5monOnePsentakuTime === 9 && OnePAnswers5 === 0) {
        KeikokuSE.play();
        T.innerText = 1;
    } else if (dai5monOnePsentakuTime === 9 && OnePAnswers5 !== 0) {
        T.style.display = 'none';
    }
    if (dai5monOnePsentakuTime === 10 && OnePAnswers5 === 0) {
        T.style.display = 'none';
        OnePAnswers4 = -1;
        sentakushi17.style.display = 'none';
        sentakushi18.style.display = 'none';
        sentakushi19.style.display = 'none';
        sentakushi20.style.display = 'none';
        clearInterval(dai5monOnePPushTime);
        console.log(dai5monOnePsentakuTime);
        dai5monShuyakuPushTime();
    } else if (dai5monOnePsentakuTime === 10 && OnePAnswers5 !== 0) {
        T.style.display = 'none';
    }
}
function dai5monShuyakuPushTime() {
    kotaeteText.innerText = "???????????????5~8??????????????????????????????????????????????????????";
    if (odai5 === 0) {
        sentakushi37.innerText = "1, ??????????????????";
        sentakushi38.innerText = "2, ??????????????????";
        sentakushi39.innerText = "3, ?????????????????????";
        sentakushi40.innerText = "4, ??????????????????";
        sentakushi37.style.display = 'block';
        sentakushi38.style.display = 'block';
        sentakushi39.style.display = 'block';
        sentakushi40.style.display = 'block';
    } else if (odai5 === 1) {
        sentakushi37.innerText = "1, ????????????";
        sentakushi38.innerText = "2, ?????????";
        sentakushi39.innerText = "3, ????????????";
        sentakushi40.innerText = "4, ?????????";
        sentakushi37.style.display = 'block';
        sentakushi38.style.display = 'block';
        sentakushi39.style.display = 'block';
        sentakushi40.style.display = 'block';
    } else if (odai5 === 2) {
        sentakushi37.innerText = "1, ??????";
        sentakushi38.innerText = "2, ??????";
        sentakushi39.innerText = "3, ????????????";
        sentakushi40.innerText = "4, ?????????";
        sentakushi37.style.display = 'block';
        sentakushi38.style.display = 'block';
        sentakushi39.style.display = 'block';
        sentakushi40.style.display = 'block';
    } else if (odai5 === 3) {
        sentakushi37.innerText = "1, ?????????????????????";
        sentakushi38.innerText = "2, ?????????????????????";
        sentakushi39.innerText = "3, ??????????????????";
        sentakushi40.innerText = "4, ?????????????????????";
        sentakushi37.style.display = 'block';
        sentakushi38.style.display = 'block';
        sentakushi39.style.display = 'block';
        sentakushi40.style.display = 'block';
    } else if (odai5 === 4) {
        sentakushi37.innerText = "1, ??????";
        sentakushi38.innerText = "2, ??????";
        sentakushi39.innerText = "3, ?????????";
        sentakushi40.innerText = "4, ??????";
        sentakushi37.style.display = 'block';
        sentakushi38.style.display = 'block';
        sentakushi39.style.display = 'block';
        sentakushi40.style.display = 'block';
    } else if (odai5 === 5) {
        sentakushi37.innerText = "1, ????????????";
        sentakushi38.innerText = "2, ??????";
        sentakushi39.innerText = "3, ????????????";
        sentakushi40.innerText = "4, ??????";
        sentakushi37.style.display = 'block';
        sentakushi38.style.display = 'block';
        sentakushi39.style.display = 'block';
        sentakushi40.style.display = 'block';
    }
}
function sentakusipush37() {
    KSE.play();
    ShuyakuAnswers5 = 1;
    console.log(ShuyakuAnswers)
    dai5monSeikaihappyouTimer1 = setInterval(dai5monSeikaihappyou, 1000);
    sentakushi37.style.display = 'none';
    sentakushi38.style.display = 'none';
    sentakushi39.style.display = 'none';
    sentakushi40.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush38() {
    KSE.play();
    ShuyakuAnswers5 = 2;
    console.log(ShuyakuAnswers)
    dai5monSeikaihappyouTimer2 = setInterval(dai5monSeikaihappyou, 1000);
    sentakushi37.style.display = 'none';
    sentakushi38.style.display = 'none';
    sentakushi39.style.display = 'none';
    sentakushi40.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush39() {
    KSE.play();
    ShuyakuAnswers5 = 3;
    console.log(ShuyakuAnswers)
    dai5monSeikaihappyouTimer3 = setInterval(dai5monSeikaihappyou, 1000);
    sentakushi37.style.display = 'none';
    sentakushi38.style.display = 'none';
    sentakushi39.style.display = 'none';
    sentakushi40.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function sentakusipush40() {
    KSE.play();
    ShuyakuAnswers5 = 4;
    console.log(ShuyakuAnswers)
    dai5monSeikaihappyouTimer4 = setInterval(dai5monSeikaihappyou, 1000);
    sentakushi37.style.display = 'none';
    sentakushi38.style.display = 'none';
    sentakushi39.style.display = 'none';
    sentakushi40.style.display = 'none';
    kotaeteText.style.display = 'none';
    mondai.style.display = 'none';
}
function dai5monSeikaihappyou() {
    dai5monSeikaihappyouTime++;
    if (dai5monSeikaihappyouTime === 1) {
        console.log(dai5monSeikaihappyouTime);
        kotaeteText.style.display = 'none';
        sentakushi37.style.display = 'none';
        sentakushi38.style.display = 'none';
        sentakushi39.style.display = 'none';
        sentakushi40.style.display = 'none';
        mondai.style.display = 'none';
        title.innerText = "?????????";
        title.style.display = 'block';
        DramSE.play();
    } else if (dai5monSeikaihappyouTime === 7) {
        console.log("a")
        if (ShuyakuAnswers5 === 1 && odai5 === 0) {
            title.innerText = "??????????????????\n???????????????????????????!!";
        }
        if (ShuyakuAnswers5 === 2 && odai5 === 0) {
            title.innerText = "??????????????????\n???????????????????????????!!";
        }
        if (ShuyakuAnswers5 === 3 && odai5 === 0) {
            title.innerText = "??????????????????\n??????????????????????????????!!";
        }
        if (ShuyakuAnswers5 === 4 && odai5 === 0) {
            title.innerText = "??????????????????\n???????????????????????????!!";
        }

        if (ShuyakuAnswers5 === 1 && odai5 === 1) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers5 === 2 && odai5 === 1) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers5 === 3 && odai5 === 1) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers5 === 4 && odai5 === 1) {
            title.innerText = "??????????????????\n??????????????????!!";
        }

        if (ShuyakuAnswers5 === 1 && odai5 === 2) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers5 === 2 && odai5 === 2) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers5 === 3 && odai5 === 2) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers5 === 4 && odai5 === 2) {
            title.innerText = "??????????????????\n??????????????????!!";
        }

        if (ShuyakuAnswers5 === 1 && odai5 === 3) {
            title.innerText = "??????????????????\n??????????????????????????????!!";
        }
        if (ShuyakuAnswers5 === 2 && odai5 === 3) {
            title.innerText = "??????????????????\n??????????????????????????????!!";
        }
        if (ShuyakuAnswers5 === 3 && odai5 === 3) {
            title.innerText = "??????????????????\n???????????????????????????!!";
        }
        if (ShuyakuAnswers5 === 4 && odai5 === 3) {
            title.innerText = "??????????????????\n??????????????????????????????!!";
        }

        if (ShuyakuAnswers5 === 1 && odai5 === 4) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers5 === 2 && odai5 === 4) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers5 === 3 && odai5 === 4) {
            title.innerText = "??????????????????\n??????????????????!!";
        }
        if (ShuyakuAnswers5 === 4 && odai5 === 4) {
            title.innerText = "??????????????????\n???????????????!!";
        }

        if (ShuyakuAnswers5 === 1 && odai5 === 5) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers5 === 2 && odai5 === 5) {
            title.innerText = "??????????????????\n???????????????!!";
        }
        if (ShuyakuAnswers5 === 3 && odai5 === 5) {
            title.innerText = "??????????????????\n?????????????????????!!";
        }
        if (ShuyakuAnswers5 === 4 && odai5 === 5) {
            title.innerText = "??????????????????\n???????????????!!";
        }
    } else if (dai5monSeikaihappyouTime === 11) {
        if (OnePAnswers5 === -1) {
            title.innerText = "1P?????????\n?????????";
        } else if (OnePAnswers5 === 1) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers5 === 2) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers5 === 3) {
            title.innerText = "1P?????????\n???";
        } else if (OnePAnswers5 === 4) {
            title.innerText = "1P?????????\n???";
        }
    } else if (dai5monSeikaihappyouTime === 13) {
        if (ShuyakuAnswers5 === OnePAnswers5) {
            SeikaiSE.play();
            seigohanteitext.innerText = "??????!!";
            seikai();
            seigohanteitext.style.color = 'red';
            seigohanteitext.style.display = 'block';
        } else if (ShuyakuAnswers5 !== OnePAnswers5) {
            HuseikaiSE.play();
            seigohanteitext.innerText = "?????????";
            seigohanteitext.style.color = 'navy';
            seigohanteitext.style.display = 'block';
        }
    } else if (dai5monSeikaihappyouTime === 15) {
        OnePAnswers === 0;
        ShuyakuAnswers === 0;
    } else if (dai5monSeikaihappyouTime === 16) {
        title.style.display = 'none';
        seigohanteitext.style.display = 'none';
        seigohanteitext.innerText = "";
    } else if (dai5monSeikaihappyouTime === 17) {
        clearInterval(dai5monSeikaihappyou);
        console.log(dai5monSeikaihappyouTime);
        kekkaTimer = setInterval (kekkahappyoujijunbi, 1000);
    }
}
function kekkahappyoujijunbi() {
    kekkaTime++;
    if (kekkaTime === 1) {
        KekkaSE.play();
        title.innerText = "????????????";
        title.style.display = 'block';
    }
    if (kekkaTime === 4) {
        title.style.display = 'none';
        title.innerText = "?????????\n" + seikaisu;
    }
    if (kekkaTime === 5) {
        title.style.display = 'block';
    }
    if (kekkaTime === 6) {
        mouitidoButton.style.display = 'block';
        clearInterval(kekkahappyoujijunbi);
    }
}
function seikai() {
    seikaisu++;
}
function mouitido() {
    document.location.reload();
}

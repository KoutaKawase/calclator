'use strict';

window.onload = function () {
    //ボタンを全て取得
    const buttons = document.getElementsByClassName('num-key');
    //インプットスクリーン取得
    const screen = document.getElementById('calclator-screen');
    //押された数字格納用
    let choicedNumber = 0;

    //全ての数字ボタンにクリック時の挙動設定
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            choicedNumber = buttons[i].getAttribute('value');
            //先頭が0なら消しておく
            if (screen.value[0] === '0') {
                //valueを空にして0を消す
                screen.value = '';
                screen.value += choicedNumber;
            } else {
                screen.value += choicedNumber;
            }
        }
    }
}
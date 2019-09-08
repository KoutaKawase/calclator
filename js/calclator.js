'use strict';

window.onload = function () {
    //ボタンを全て取得
    const buttons = document.getElementsByClassName('num-key');
    //インプットスクリーン取得
    const screen = document.getElementById('calclator-screen');
    //演算子ボタン取得
    const operatorButtons = document.getElementsByClassName('operator');
    //押された数字と演算子格納用
    let choicedNumber;
    let choicedOperator;


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

    //全ての演算子ボタンにオンクリック設定
    for (let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].onclick = function () {
            //演算子取得
            choicedOperator = operatorButtons[i].getAttribute('value');
            //取得した演算子をスクリーンに出力
            screen.value += choicedOperator;
        }
    }

}
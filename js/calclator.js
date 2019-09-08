'use strict';

window.onload = function () {
    //ボタンを全て取得
    const buttons = document.getElementsByClassName('num-key');
    //インプットスクリーン取得
    const screen = document.getElementById('calclator-screen');
    //演算子ボタン取得
    const operatorButtons = document.getElementsByClassName('operator');
    //ACボタン取得
    const allClearButonn = document.getElementById('all-clear');
    //小数点ボタン取得
    const decimalButton = document.getElementById('decimal');
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

    //ACが押されたら全て消す
    allClearButonn.onclick = function () {
        screen.value = '0';
    }

    //小数点ボタンが押されたらスクリーンに表示
    decimalButton.onclick = function () {
        //スクリーンの最後の文字を数値で取得
        const screenLastWord = parseInt(screen.value.slice(-1));
        //数字の後以外は小数点をつけられないようにする
        if (isFinite(screenLastWord)) {
            //スクリーン最後に小数点追加
            screen.value += decimalButton.getAttribute('value');
        } else {
            alert('小数点を連続では打てません！');
        }
    }
}
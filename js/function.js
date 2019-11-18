$(function() {
    $('#vegas').vegas({
        slides: [
            { src: './image/DSC_0001.jpg' },
            { src: './image/DSC_0010.jpg' },
            { src: './image/DSC_0012.jpg' },
            { src: './image/DSC_0019.jpg' }
        ],
        overlay: './js/overlays/02.png', //フォルダ『overlays』の中からオーバーレイのパターン画像を選択
        timer: false,
        transition: 'fade', //スライドを遷移させる際のアニメーション
        transitionDuration: 4000, //スライドの遷移アニメーションの時間
        delay: 10000, //スライド切り替え時の遅延時間
        animation: 'random', //スライド表示中のアニメーション
        animationDuration: 20000, //スライド表示中のアニメーションの時間

    });
});

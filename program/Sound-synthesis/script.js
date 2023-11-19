function synthesize() {
    // テキストエリアからテキストを取得
    var text = document.getElementById("text").value;

    // SpeechSynthesisUtteranceオブジェクトを作成
    var utterance = new SpeechSynthesisUtterance(text);

    // 音声合成を実行
    window.speechSynthesis.speak(utterance);

    // 音声を再生するためのaudio要素を取得
    var audioElement = document.getElementById("audio");

    // 音声合成が完了したら、音声を再生する
    utterance.onend = function() {
        // 音声データをURLに変換
        var audioURL = URL.createObjectURL(new Blob([utterance.audio], { type: 'audio/wav' }));

        // audio要素のsrc属性に音声データのURLを設定
        audioElement.src = audioURL;

        // 再生
        audioElement.play();
    };
}
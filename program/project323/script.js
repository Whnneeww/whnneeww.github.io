function speakText() {
    // URLパラメータからテキストを取得
    const urlParams = new URLSearchParams(window.location.search);
    const text = urlParams.get('text');
    
    // テキストを読み上げる
    if (text) {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    }
}

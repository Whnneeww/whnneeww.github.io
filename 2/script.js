window.onload = function() {
    var canvas = document.getElementById('oscilloscope');
    var context = canvas.getContext('2d');
  
    // グラフの描画範囲を設定します
    var width = canvas.width;
    var height = canvas.height;
  
    // 波形のデータを生成する関数
    function generateWaveData() {
        var data = [];
        var frequency = 1; // 周波数
        var amplitude = height / 2; // 振幅
        var phase = 0; // 位相
  
        for (var x = 0; x < width; x++) {
            var y = amplitude * Math.sin(2 * Math.PI * frequency * x / width + phase);
            data.push(y);
        }
  
        return data;
    }
  
    // オシロスコープを描画する関数
    function drawOscilloscope(data) {
        context.clearRect(0, 0, width, height);
  
        // 背景を描画します
        context.fillStyle = 'black';
        context.fillRect(0, 0, width, height);
  
        // 波形を描画します
        context.strokeStyle = 'green';
        context.beginPath();
        context.moveTo(0, height / 2);
        for (var x = 0; x < width; x++) {
            var y = height / 2 - data[x];
            context.lineTo(x, y);
        }
        context.stroke();
    }
  
    // 波形データを生成してオシロスコープを描画します
    var waveData = generateWaveData();
    drawOscilloscope(waveData);
};
// AIの返答
var responses = [
  "こんにちは！",
  "元気ですか？",
  "今日はいい天気ですね。",
  "どんな話をしたいですか？",
  "面白いことを教えてください！",
];

// AIの返答を生成する関数
function generateResponse() {
  var userText = document.getElementById("user-input").value;
  var conversationDiv = document.getElementById("conversation");

  // ユーザーの入力を表示
  conversationDiv.innerHTML += "<p>ユーザー: " + userText + "</p>";

  // AIの返答をランダムに選択
  var randomIndex = Math.floor(Math.random() * responses.length);
  var aiResponse = responses[randomIndex];

  // AIの返答を表示
  conversationDiv.innerHTML += "<p>AI: " + aiResponse + "</p>";
}

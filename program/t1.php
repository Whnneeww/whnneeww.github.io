<?php
// ファイル名を作成
$filename = date('Ymd') . '.txt';

// ファイルの内容を作成
$content = date('Y-m-d H:i:s');

// ファイルのMIMEタイプを設定
header('Content-Type: text/plain');
header('Content-Disposition: inline; filename="' . $filename . '"');

// ファイルの内容を表示
echo $content;

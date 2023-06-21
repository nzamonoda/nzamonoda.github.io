<!DOCTYPE html>
<html>
<head>
    <title>動的なウェブサイト</title>
</head>
<body>

<h1>ようこそ！</h1>

<?php
// ユーザー名を取得する
$username = $_GET['username'];

// ユーザー名が提供された場合にのみ表示する
if (!empty($username)) {
    echo "<p>こんにちは、{$username}さん！</p>";
}
?>

<form action="" method="GET">
    <label for="username">ユーザー名：</label>
    <input type="text" name="username" id="username">
    <input type="submit" value="送信">
</form>

</body>
</html>

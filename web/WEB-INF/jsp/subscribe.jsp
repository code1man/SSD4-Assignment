<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>关注页面</title>
    <link rel="stylesheet" href="./static/css/subscribe.css">
</head>
<body>

<!-- 关注列表 -->
<div class="follow-section">
    <div class="follow-section">
        <!-- 关注 1 -->
        <div class="follow-item">
            <p class="follow-content">花开富贵</p>
            <button id="follow-btn-1" class="follow-btn" onclick="followBack(1)">回关</button>
        </div>

        <!-- 关注 2 -->
        <div class="follow-item">
            <p class="follow-content">孙笑川258</p>
            <button id="follow-btn-2" class="follow-btn" onclick="followBack(2)">回关</button>
        </div>

        <!-- 关注 3 -->
        <div class="follow-item">
            <p class="follow-content">永雏塔菲</p>
            <button id="follow-btn-3" class="follow-btn" onclick="followBack(3)">回关</button>
        </div>
    </div>
</div>

<script src="static/js/subscribe.js"></script>
</body>
</html>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TopBar</title>
    <link rel="stylesheet" href="./static/css/TopBar.css">
    <link rel="stylesheet" href="./static/css/three.css">
</head>
<body>
<div class="TopBar">
    <div class="logo">
        <a href="index.jsp" class="image-link">
            <img src="./static/image/logo.jpeg" alt="Example Image" class="rounded-image">
        </a>
    </div>
    <div class="search-container">
        <input type="text" id="searchInput" class="search-input" placeholder="搜索，从这里开始..." oninput="showSuggestions()" onclick="showSuggestions()" autocomplete="off">
        <ul id="suggestionsList" class="suggestions-list">
            <!-- 下拉提示项 -->
            <li>穿搭</li>
            <li>美食</li>
            <li>彩妆</li>
            <li>影视</li>
            <li>职场</li><
            <li>情感</li>
            <li>家居</li>
            <li>游戏</li>
            <li>旅行</li>
            <li>健身</li>
            <li>穿搭</li>
        </ul>
    </div>
    <div class="menu">
        <a href="MyServlet?action=page1" id="link1">评论我的</a>
        <a href="MyServlet?action=page2" id="link2">点赞我的</a>
        <a href="MyServlet?action=page3" id="link3">新增关注</a>
    </div>

    <!-- 悬浮窗容器 -->
    <div id="tooltipContainer" class="tooltip">
        <div id="tooltipContent">
            <!-- 这里可以放置任意内容 -->
        </div>
    </div>

</div>
</body>
<script src="static/js/topbar.js"></script>
</html>
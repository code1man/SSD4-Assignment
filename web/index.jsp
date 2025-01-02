<%--
  Created by IntelliJ IDEA.
  User: ASUS
  Date: 2024/12/29
  Time: 23:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>盗版小红书</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="static/css/index.css">
    <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
</head>
<body>

<div class="sidebar">
    <ul>
        <li><a href="#"><span class="icon fa-discover"></span> 发现</a></li>
        <li><a href="#"><span class="icon fa-post"></span> 发布</a></li>
        <li><a href="#"><span class="icon fa-notification"></span> 通知</a></li>
        <li><a href="#"><span class="icon fa-user"></span> 我</a></li>
        <!-- 更多按钮 -->
        <li><a class="more"><span class="icon fa-ellipsis-v"></span> 更多</a></li>
        <div class="hover-card">
            <ul>
                <li><a href="feedback">反馈与评价该网站</a></li>
                <li id="login-button">登录</li>
            </ul>
        </div>
    </ul>
</div>


<!-- 主内容区域 -->
<div class="main-content">
    <!-- 顶部导航 -->
    <div class="top">
        <ul class="top-nav">
            <li class="active"><a href="#">推荐</a></li>
            <li><a href="#">穿搭</a></li>
            <li><a href="#">美食</a></li>
            <li><a href="#">彩妆</a></li>
            <li><a href="#">影视</a></li>
            <li><a href="#">职场</a></li>
            <li><a href="#">情感</a></li>
            <li><a href="#">家居</a></li>
            <li><a href="#">游戏</a></li>
            <li><a href="#">旅行</a></li>
            <li><a href="#">健身</a></li>
        </ul>
    </div>


    <!-- 动态内容 -->
    <div class="content-grid">
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本1</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
        <div class="content-item">
            <img src="static/image/毒液幕后特效，震撼大揭秘😱_1_欣欣_来自小红书网页版.jpg" alt="图片1">
            <p>描述文本2</p>
        </div>
    </div>
</div>
<div class="modal" style="display: none" id="modal">
    <jsp:include page="WEB-INF/jsp/Message.jsp"></jsp:include>
</div>
<div class="modal" style="display: none" id="login">
    <jsp:include page="WEB-INF/jsp/Login.jsp"></jsp:include>
</div>
<script src="static/js/index.js"></script>
</body>
</html>
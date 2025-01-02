<%--
  Created by IntelliJ IDEA.
  User: 黄程杰
  Date: 2025/1/2
  Time: 1:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>反馈与评价</title>
    <link rel="stylesheet" type="text/css" href="static/css/feedback.css">
    <link rel="stylesheet" type="text/css" href="static/css/global.css">
    <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
</head>
<body>
    <div class="container">
        <h1>反馈与评价</h1>
        <span>Hi，请输入您对我们网页的问题反馈或建议吧～</span><br><br>
        <form id="feedbackForm">

            <label for="feedback">反馈内容:</label><br>
            <textarea id="feedback" name="feedback" rows="4" cols="50" required></textarea><br><br>

            <label >上传“有效截图”，可以让问题<span class="blue">优先被发现</span>哦!</label>
            <div class="upload-container">
                <label for="imageUpload">=>点击此处上传图片</label>
                <input type="file" id="imageUpload" accept="image/*" multiple>
                <div id="imagePreview" class="image-preview"></div>
            </div>
            <div id="imageModal" class="image-modal">
                <span class="close-button">&times;</span>
                <img class="modal-image" alt="Preview">
            </div>
            <br><br>


            <label for="chat">选择您觉得<span class="blue">方便的联系方式</span>并提供给我们，方便后续向您反馈：</label><br>
            <select id="chat" name="chat" required>
                <option value="">请选择...</option>
                <option value="邮箱">邮箱</option>
                <option value="电话">电话</option>
                <option value="QQ">QQ</option>
                <option value="微信">微信</option>
                <option value="其他">其他</option>
            </select>
            <input type="text" id="chatInput" name="chatInput" placeholder="请输入具体的联系方式，如手机号码 / 邮箱等……" required><br><br>

            <input type="submit" value="提交">
        </form>
        <div id="feedbackMessage"></div>
    </div>

    <div id="feedbackModal" class="modal">
        <div class="modal-content">
            <p id="modalMessage"></p>
            <p id="modalSuggestion" class="blue"></p>
            <div class="modal-buttons">
                <button id="goHomeButton">回到主页</button>
                <button id="continueButton">继续反馈</button>
                <button id="resetButton">重新反馈</button>
            </div>
        </div>
    </div>


    <script src="static/js/feedback.js"></script>
</body>
</html>

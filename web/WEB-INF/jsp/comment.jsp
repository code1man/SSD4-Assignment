<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>评论区</title>
    <link rel="stylesheet" href="./static/css/comment.css">
</head>
<body>

<!-- 评论区 -->
<div class="comment-section">
    <!-- 评论 1 -->
    <div class="comment">
        <p class="comment-content">说的道理</p>
        <button class="reply-btn" onclick="toggleReplyBox(1)">回复</button>
        <div class="reply-box" id="reply-box-1">
            <textarea id="reply-text-1" placeholder="请输入回复..."></textarea>
            <button class="submit-reply" onclick="submitReply(1)">回复</button>
        </div>
    </div>

    <!-- 评论 2 -->
    <div class="comment">
        <p class="comment-content">转人工</p>
        <button class="reply-btn" onclick="toggleReplyBox(2)">回复</button>
        <div class="reply-box" id="reply-box-2">
            <textarea id="reply-text-2" placeholder="请输入回复..."></textarea>
            <button class="submit-reply" onclick="submitReply(2)">回复</button>
        </div>
    </div>

    <!-- 评论 3 -->
    <div class="comment">
        <p class="comment-content">哈哈哈哈哈哈哈</p>
        <button class="reply-btn" onclick="toggleReplyBox(3)">回复</button>
        <div class="reply-box" id="reply-box-3">
            <textarea id="reply-text-3" placeholder="请输入回复..."></textarea>
            <button class="submit-reply" onclick="submitReply(3)">回复</button>
        </div>
    </div>
</div>


</body>
<script src="static/js/comment.js"></script>
</html>

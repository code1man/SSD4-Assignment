<%--
  Created by IntelliJ IDEA.
  User: ASUS
  Date: 2024/12/29
  Time: 23:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>弹窗示例</title>
    <link rel="stylesheet" type="text/css" href="./static/css/Message.css">
    <link rel="stylesheet" type="text/css" href="./static/css/global.css">
</head>
<body>
<div class="modal-content">
    <!-- 左侧图片 -->
    <div class="modal-left"></div>

    <!-- 右侧内容 -->
    <div class="modal-right">
        <!-- 用户信息 -->
        <div class="user-info">
            <div class="user-avatar">
                <div class="tooltip">
                    <p><strong>用户名：</strong></p>
                    <p><strong>粉丝数：</strong></p>
                    <p><strong>简介：</strong></p>
                </div>
            </div>
            <div class="user-details">
                <h4></h4>
                <button class="follow-button" id="follow-button">关注</button>
                <button class="follow-button" id="filter-button">只看他/她</button>
            </div>
        </div>

        <!-- 可滚动区域 -->
        <div class="scrollable">
            <!-- 推文内容 -->
            <div class="post-content">
                <p id="post-content"></p>
            </div>

            <!-- 评论区域 -->
            <div class="comments" id="commentList">
                <div class="comment-item">
                    <div class="comment-header">
                        <strong>用户1：</strong>
                        <p class="comment-content">奶龙奶龙！</p>
                        <span class="reply-button">回复</span>
                    </div>
                    <div class="comment-reply"></div>
                </div>

                <div class="comment-item">
                    <div class="comment-header">
                        <strong>用户2：</strong>
                        <p class="comment-content">我也是奶龙！！！！！</p>
                        <span class="reply-button">回复</span>
                    </div>
                    <div class="comment-reply"></div>
                </div>
            </div>
        </div>

        <!-- 评论输入框 -->
        <div class="comment-box">
            <input type="text" class="comment-input" id="commentInput" placeholder="发表评论" disabled>
            <button class="comment-button" id="sendComment" disabled>发送</button>
        </div>
    </div>
</div>

</body>
<script src="./static/js/Message.js"></script>



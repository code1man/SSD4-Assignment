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
</head>
<body>

<!-- 弹窗 -->
<div class="modal">
    <div class="modal-content">
        <!-- 左侧图片 -->
        <div class="modal-left"></div>
        <!-- 右侧内容 -->
        <div class="modal-right">
            <!-- 用户信息 -->
            <div class="user-info">
                <div class="user-avatar">
                    <div class="tooltip">
                        <p><strong>用户名：</strong>Abu Dhabi 刘小仙女</p>
                        <p><strong>粉丝数：</strong>1万+</p>
                        <p><strong>简介：</strong>体验阿布扎比</p>
                    </div>
                </div>
                <div class="user-details">
                    <h4>Abu Dhabi 刘小仙女</h4>
                    <button class="follow-button">关注</button>
                </div>
            </div>

            <!-- 可滚动区域 -->
            <div class="scrollable">
                <!-- 推文内容 -->
                <div class="post-content">
                    <p>体验阿布扎比的沙漠、酒店、美食，感受全新的文化！</p>
                </div>

                <!-- 评论区域 -->
                <div class="comments" id="commentList">
                    <!-- 示例评论 -->
                    <div class="comment-item">
                        <div class="comment-header">
                            <strong>用户1：</strong>
                            <p class="comment-content">真好看！期待更新！</p>
                            <span class="reply-button">回复</span>
                        </div>
                        <div class="comment-reply"></div>
                    </div>

                    <div class="comment-item">
                        <div class="comment-header">
                            <strong>用户2：</strong>
                            <p class="comment-content">我也想去阿布扎比了！</p>
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
</div>
</body>
<script src="./static/js/Message.js"></script>
</html>


<%--
  Created by IntelliJ IDEA.
  User: ASUS
  Date: 2024/12/29
  Time: 23:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    session.setAttribute("albumNum",0);
%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户信息界面</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="static/css/index.css">
    <link rel="stylesheet" href="/static/css/personal.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
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
                <li>退出登录</li>
            </ul>
        </div>
    </ul>
</div>

<div class ="main-content">

    <div class="user-profile">
        <div class="avatar" >
            <img id="show-avatar" src="/static/image/nailong.gif" alt="用户头像">
        </div>
        <div class="user-info">
            <h2 id="show-username">小红薯6666FBED</h2>
            <p class="user-id">小红书号: 95290258569</p>

            <p style=" font-size: 14px; color: #000; margin-top: 20px;" id="show-bio">还没有简介</p>
            <span class="gender" id="show-gender">
                <img src="/static/image/gender1.png" alt="性别"/>
        </span>
            <br/>
            <span class="information">
                0 <span class ="smaller">关注 </span> &nbsp;
                0 <span class="smaller">粉丝</span> &nbsp;
                0 <span class="smaller" >获赞与收藏</span>
            </span>
            <br/>
            <button id="edit-info-btn">编辑资料</button>
        </div>
    </div>
    <div class="line"></div>

    <div class="tab-container">
        <div class="tabs">
            <button class="tab-btn active" data-tab="notes">笔记</button>
            <button class="tab-btn" data-tab="collections">收藏</button>
            <button class="tab-btn" data-tab="likes">点赞</button>
        </div>

        <div class="tab-content">
            <div class="tab-panel active" id="notes">
                <div class="temp-note">
                    <span style="margin-top: 50px;"><img style="width: 180px; height: auto;" src="/static/image/bg1.png" alt="笔记"></span><br/>
                    <span class="smaller">你还没有发布过任何内容哦</span>
                </div>
            </div>

            <div class="tab-panel" id="collections">
                <!-- 嵌套的标签按钮 -->
                <div class="inner-tabs">
                    <button class="inner-tab-btn active" data-inner-tab="inner-notes">笔记・0</button>
                    <button class="inner-tab-btn" data-inner-tab="albums" id="albums-btn-with-num">专辑・0</button>
                </div>
                <!-- 嵌套的标签内容 -->
                <div class="inner-tab-content">
                    <div class="inner-tab-panel active" id="inner-notes">
                        <div class="temp-collection">
                <span style="margin-top: 50px;">
                    <img style="width: 180px; height: auto;" src="/static/image/bg1.png" alt="笔记">
                </span>
                            <br/>
                            <span class="smaller">你还没有发布过任何笔记哦</span>
                        </div>
                    </div>

                    <div class="inner-tab-panel" id="albums">
                        <div class="temp-collection">
                <span style="margin-top: 50px;">
                    <img style="width: 180px; height: auto;" src="/static/image/bg1.png" alt="专辑">
                </span><br/>
                            <span class="smaller">你还没有创建过任何专辑哦</span>
                        </div>

                        <button class="create-album-btn">+ 创建专辑</button>
                    </div>
                </div>
            </div>

            <div class="tab-panel" id="likes">
                <div class="temp-like">
                    <span style="margin-top: 50px;"><img style="width: 180px; height: auto;" src="/static/image/bg1.png" alt="点赞"></span><br/>
                    <span class="smaller">你还没有点赞过任何内容哦</span>
                </div>
            </div>
        </div>
    </div>

    <%--个人信息模态框--%>
    <div class="modal" id="editInfoModal">
        <div class="modal-content">
            <div class="modal-body">
                <!-- 第一组：头像与名字 -->
                <div class="form-group">
                    <img class="avatar-preview" src="/static/image/nailong.gif" alt="用户头像" id="avatar-preview">
                    <label for="username">用户名</label>
                    <input type="text" id="username" placeholder="小红薯6666BEFD">
                    <label for="avatar">更改头像</label>
                    <input type="file" id="avatar">
                </div>

                <!-- 第二组：简介 -->
                <div class="form-group">
                    <label for="bio">简介</label>
                    <input type="text" id="bio" placeholder="介绍一下自己">
                </div>

                <!-- 第三组：性别、生日、地区、职业、学校 -->
                <div class="form-group">
                    <label for="gender">性别</label>
                    <select id="gender">
                        <option value="male">男</option>
                        <option value="female">女</option>
                    </select>
                    <label for="birthday">生日</label>
                    <input type="date" id="birthday">
                    <label for="district">所在地区</label>
                    <input type="text" id="district" placeholder="请输入所在地区">
                    <label for="profession">职业</label>
                    <input type="text" id="profession" placeholder="请输入职业">
                    <label for="school">学校</label>
                    <input type="text" id="school" placeholder="请输入学校">
                </div>
            </div>
            <div class="modal-footer">
                <button id="save-info-btn">保存</button>
                <button class="cancel" id="cancel-btn">取消</button>
            </div>
        </div>
    </div>
    <%--创建专辑模态框--%>
    <div id="album-modal" class="album-modal">
        <div class="album-modal-content">
            <div class="album-modal-header">
                <h3>创建专辑</h3>
                <span class="album-close-btn">&times;</span>
            </div>
            <div class="album-modal-body">
                <label for="album-title">标题</label>
                <input type="text" id="album-title" placeholder="请输入标题" onblur="validateInput(this, 'title-error')">
                <span id="title-error" style="color: red; display: none; font-size: 13px;">标题不能为空</span>

                <label for="album-description">简介</label>
                <textarea id="album-description" placeholder="请输入简介" onblur="validateInput(this, 'description-error')"></textarea>
                <span id="description-error" style="color: red; display: none; font-size: 13px;" >简介不能为空</span>

                <div class="album-toggle-container">
                    <label for="public-album">公开专辑</label>
                    <input type="checkbox" id="public-album" checked="checked">
                    <span class="smaller" id="alertInfo">关闭后其他人无法查看</span>
                </div>
            </div>
            <div class="album-modal-footer">
                <button class="album-cancel-btn">取消</button>
                <button class="album-confirm-btn">完成</button>
            </div>
        </div>
    </div>
</div>

<script>
    function validateInput(inputElement, errorElementId) {
        const errorElement = document.getElementById(errorElementId);
        const confirmButton = document.querySelector('.album-confirm-btn'); // 使用 querySelector 获取按钮
        if (inputElement.value.trim() === "") {
            errorElement.style.display = "inline";
            confirmButton.disabled = true; // 禁用按钮
        } else {
            errorElement.style.display = "none";
            confirmButton.disabled = false; // 启用按钮
        }
    }
</script>

<script src="/static/js/personal.js"></script>
</body>
</html>


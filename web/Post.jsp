<%--
  Created by IntelliJ IDEA.
  User: ASUS
  Date: 2024/12/29
  Time: 23:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="image/img01.jpg" type="image/x-icon">

    <title>笔记管理</title>
    <!-- 引入 Google 字体 -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <!-- 引入 Font Awesome 图标库 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- 引入 Emoji Button 库 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.2/dist/index.css">
    <style>
        /* CSS 变量定义，方便主题更改 */
        :root {
            --primary-color: lightblue; /* 主色调改为红色 */
            --secondary-color: #ffffff; /* 辅助色改为白色 */
            --accent-color: rgb(175, 238, 238);
            --background-color: #ffffff; /* 背景改为白色 */
            --text-color: #333;
            --sidebar-width: 250px;
            --transition-speed: 0.3s;
            --button-hover-color: lightblue;
            --button-active-color: lightblue;
            --preview-bg-color: #fefefe;
            --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --border-radius: 8px;
        }

        /* 全局样式 */
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--background-color);
            color: var(--text-color);
        }

        .container {
            display: flex;
            height: 100vh;
            /* overflow: hidden; */ /* 移除此行以确保 Emoji 选择器正常显示 */
        }

        /* 左侧菜单栏样式 */
        .sidebar {
            width: var(--sidebar-width);
            background-color: var(--primary-color);
            color: var(--secondary-color);
            display: flex;
            flex-direction: column;
            padding: 20px;
            transition: width var(--transition-speed);
            position: relative;
        }

        .sidebar.collapsed {
            width: 80px;
        }

        .sidebar .logo {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 30px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
        }

        .sidebar.collapsed .logo {
            display: none;
        }

        .sidebar ul {
            list-style: none;
            padding: 0;
            flex-grow: 1; /* 让导航链接占据可用空间 */
        }

        .sidebar ul li {
            margin-bottom: 20px;
        }

        .sidebar ul li a {
            color: var(--secondary-color);
            text-decoration: none;
            font-size: 18px;
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 4px;
            transition: background var(--transition-speed), transform var(--transition-speed);
            justify-content: flex-start;
        }

        .sidebar.collapsed ul li a {
            justify-content: center; /* 图标居中 */
        }

        .sidebar ul li a i {
            margin-right: 10px;
            min-width: 20px;
            text-align: center;
        }

        .sidebar.collapsed ul li a span {
            display: none;
        }

        .sidebar ul li a:hover {
            background-color: var(--accent-color);
            transform: translateX(5px);
        }

        .sidebar ul li a.active {
            background-color: var(--accent-color);
        }

        .sidebar .toggle-btn {
            background: none;
            border: none;
            color: var(--secondary-color);
            font-size: 20px;
            cursor: pointer;
            align-self: center; /* 居中显示 */
            margin-top: 20px;
            transition: transform var(--transition-speed);
            /* 移除绝对定位 */
            /* position: absolute;
            bottom: 20px;
            right: 20px; */
        }

        .sidebar.collapsed .toggle-btn {
            /* 不需要旋转，只更换图标 */
        }

        /* 新增品牌logo样式 */
        .brand-logo {
            margin-top: 20px;
            text-align: center;
        }

        .brand-logo img {
            width: 100px; /* 根据需要调整 */
            height: auto;
            border-radius: 8px; /* 圆角效果 */
        }

        /* 主体内容样式 */
        .main {
            flex-grow: 1;
            padding: 30px;
            background:
                    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3)),
                    linear-gradient(to bottom right, lightblue, white);
            overflow-y: auto;
            position: relative;
            transition: padding var(--transition-speed);
        }

        .main.collapsed {
            padding: 20px;
        }

        h2 {
            color: var(--primary-color);
            margin-bottom: 20px;
            font-weight: 500;
        }

        /* 表单样式 */
        form {
            display: flex;
            flex-direction: column;
            background:
                    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3)),
                    linear-gradient(to bottom right, cadetblue, white);


            padding: 20px;
            border-radius: var(--border-radius);
            box-shadow: var(--card-shadow);
            transition: box-shadow var(--transition-speed);
        }

        form:hover {
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        label {
            margin-bottom: 10px;
            font-weight: 500;
            font-size: 16px;
        }

        .textarea-container {
            position: relative;
            display: flex;
            align-items: center;
        }

        textarea {
            flex-grow: 1;
            margin-bottom: 20px;
            padding: 15px;
            padding-right: 40px; /* 为 Emoji 按钮留出空间 */
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 6px;
            resize: vertical;
            transition: border-color var(--transition-speed), box-shadow var(--transition-speed);
        }

        textarea:focus {

            border-color: var(--primary-color);
            box-shadow: 0 0 10px rgba(0,255,255, 0.9);
            outline: none;
        }

        /* Emoji 按钮样式 */
        .emoji-button {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            font-size: 20px;
            color: #666;
            transition: color var(--transition-speed);
            z-index: 1000; /* 确保按钮在选择器上方 */
        }

        .emoji-button:hover {
            color: var(--primary-color);
        }

        /* 修改上传图片按钮样式 */
        .custom-file-upload {
            display: inline-block;
            padding: 12px 10px;
            width: 150px;
            cursor: pointer;
            background-color: var(--primary-color);
            color: #fff;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            transition: background var(--transition-speed), transform var(--transition-speed), box-shadow var(--transition-speed);
            text-align: center;
            position: relative;
            margin-bottom: 20px;
        }

        .custom-file-upload:hover {
            background-color: var(--button-hover-color);
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(231, 76, 60, 0.2);
        }

        .custom-file-upload:active {
            background-color: var(--button-active-color);
            transform: scale(1);
            box-shadow: 0 2px 4px rgba(231, 76, 60, 0.2);
        }

        input[type="file"] {
            display: none;
        }

        button.submit-btn {
            padding: 12px;
            background-color: var(--primary-color);
            color: #fff;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            transition: background var(--transition-speed), transform var(--transition-speed), box-shadow var(--transition-speed);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        button.submit-btn i {
            margin-right: 8px;
        }

        button.submit-btn:hover {
            background-color: var(--button-hover-color);
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(231, 76, 60, 0.2);
        }

        button.submit-btn:active {
            background-color: var(--button-active-color);
            transform: scale(1);
            box-shadow: 0 2px 4px rgba(231, 76, 60, 0.2);
        }

        /* 预览窗口样式 */
        .preview {
            margin-top: 30px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: var(--border-radius);
            background:
                    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3)),
                    linear-gradient(to bottom right, aliceblue, white);
            box-shadow: var(--card-shadow);
            transition: box-shadow var(--transition-speed), transform var(--transition-speed);
        }
        #preview-text {
            font-size: 30px; /* 设置为所需的大小，例如24px */
            white-space: pre-wrap; /* 保持文本格式 */

        }
        .preview img {
            max-width: 100%;
            height: auto;
            border-radius: 4px;
            margin-top: 10px;
        }

        .preview h3 {
            margin-bottom: 10px;
            color: var(--primary-color);
        }

        /* 隐藏和显示的样式 */
        .section {
            display: none;
            animation: fadeIn var(--transition-speed) ease-in-out;
        }

        .section.active {
            display: block;
        }

        /* 动画效果 */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .sidebar {
                position: absolute;
                left: -250px;
                top: 0;
                height: 100%;
                z-index: 1000;
            }

            .sidebar.active {
                left: 0;
            }

            .main {
                padding: 20px;
            }

            .sidebar.collapsed {
                width: 250px;
            }
        }

        /* 通知弹窗样式 */
        .toast {
            visibility: hidden;
            min-width: 250px;
            background-color: var(--primary-color);
            color: #fff;
            text-align: center;
            border-radius: 4px;
            padding: 16px;
            position: fixed;
            z-index: 1001;
            left: 50%;
            bottom: 30px;
            transform: translateX(-50%);
            font-size: 17px;
            opacity: 0;
            transition: opacity var(--transition-speed), visibility var(--transition-speed);
        }

        .toast.show {
            visibility: visible;
            opacity: 1;
        }

        /* 我的笔记展示样式 */
        .notes-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        .note-card {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 12px;
            box-shadow: var(--card-shadow);
            width: calc(33.333% - 20px);
            overflow: hidden;
            transition: transform var(--transition-speed), box-shadow var(--transition-speed);
        }

        .note-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        .note-card img {
            width: 100%;
            height: 150px;
            object-fit: cover;
        }

        .note-card-content {
            padding: 15px;
        }

        .note-card-content p {
            margin: 0;
            color: var(--text-color);
            font-size: 14px;
            line-height: 1.5;
        }

        @media (max-width: 1024px) {
            .note-card {
                width: calc(50% - 20px);
            }
        }

        @media (max-width: 600px) {
            .note-card {
                width: 100%;
            }
        }


        /* 容器样式 */
        .emoji-container {
            position: relative;
            display: inline-block;
        }

        /* Emoji Picker 自定义样式 */
        .emoji-picker-element {
            width: 150px;               /* 宽度调整为3列 */
            height: 160px;              /* 高度调整为4行 */
            overflow: hidden;           /* 隐藏超出部分 */
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* 3列 */
            grid-auto-rows: 40px;       /* 每行高度40px */
        }

        /* 隐藏多余的表情按钮 */
        .emoji-picker-element button:nth-child(n+13) {
            display: none;
        }

        /* 调整表情按钮样式（可选） */
        .emoji-picker-element button {
            font-size: 24px;
            padding: 5px;
        }
    </style>
</head>
<body>
<div class="container">
    <!-- 左侧菜单栏 -->
    <div class="sidebar" id="sidebar">
        <div class="logo">笔记管理</div>
        <ul>
            <!-- 新增回到首页选项 -->
            <li>
                <a href="index.jsp" id="home-link">
                    <i class="fas fa-home"></i><span> 回到首页</span>
                </a>
            </li>
            <li>
                <a href="#" onclick="showSection('upload-section')" id="upload-link">
                    <i class="fas fa-upload"></i><span> 分享笔记</span>
                </a>
            </li>
            <li>
                <a href="#" onclick="showSection('all-section')" id="all-link">
                    <i class="fas fa-book"></i><span> 全部笔记</span>
                </a>
            </li>
            <li>
                <a href="#" onclick="showSection('published-section')" id="published-link">
                    <i class="fas fa-check-circle"></i><span> 已发布</span>
                </a>
            </li>
            <li>
                <a href="#" onclick="showSection('review-section')" id="review-link">
                    <i class="fas fa-hourglass-half"></i><span> 审核中</span>
                </a>
            </li>
            <li>
                <a href="#" onclick="showSection('rejected-section')" id="rejected-link">
                    <i class="fas fa-times-circle"></i><span> 未通过</span>
                </a>
            </li>
        </ul>
        <!-- 底部品牌logo和切换按钮 -->
<%--        <div class="brand-logo">--%>
<%--            <img src="image/img02.jpg" alt="xhs.co.ltd">--%>
<%--        </div>--%>
        <button class="toggle-btn" onclick="toggleSidebar()">
            <i class="fas fa-angle-double-left"></i>
        </button>
    </div>

    <!-- 主体内容 -->
    <div class="main" id="main-content">
        <!-- 上传笔记区域 -->
        <div id="upload-section" class="section active">
            <h2>分享你的笔记</h2>
            <form id="upload-form">
                <label for="note-text">输入文字</label>
                <div class="textarea-container">
                    <textarea id="note-text" name="noteText" rows="5" placeholder="写点什么..." required></textarea>
                    <!-- Emoji 按钮 -->
                    <button type="button" class="emoji-button" id="emoji-button">
                        <i class="fas fa-smile"></i>
                    </button>
                </div>

                <label for="image-upload">上传图片</label>
                <label class="custom-file-upload">
                    <i class="fas fa-image"></i> 选择图片
                    <input type="file" id="image-upload" name="imageUpload" accept="image/*">
                </label>

                <button type="submit" class="submit-btn">
                    <i class="fas fa-share-square"></i> 分享
                </button>
            </form>

            <!-- 预览窗口 -->
            <div class="preview" id="preview">
                <h3>笔记预览</h3>
                <p id="preview-text">笔记内容将在此显示...</p>
                <img id="preview-image" src="#" alt="预览图片" style="display: none;">
            </div>
        </div>

        <!-- 全部笔记管理区域 -->
        <div id="all-section" class="section">
            <h2>全部笔记</h2>
            <div class="notes-container" id="all-notes">
                <!-- 动态生成的笔记卡片将出现在这里 -->
            </div>
        </div>

        <!-- 已发布笔记管理区域 -->
        <div id="published-section" class="section">
            <h2>已发布笔记</h2>
            <div class="notes-container" id="published-notes">
                <!-- 动态生成的笔记卡片将出现在这里 -->
            </div>
        </div>

        <!-- 审核中的笔记管理区域 -->
        <div id="review-section" class="section">
            <h2>审核中的笔记</h2>
            <p>这里显示审核中的笔记...</p>
        </div>

        <!-- 未通过的笔记管理区域 -->
        <div id="rejected-section" class="section">
            <h2>未通过的笔记</h2>
            <p>这里显示未通过的笔记...</p>
        </div>
    </div>
</div>

<!-- 通知弹窗 -->
<div id="toast" class="toast">笔记已提交！</div>

<!-- 引入 Emoji Button 库的 JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.2/dist/index.min.js"></script>
<script>
    // 切换显示的区域
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        // 更新激活的链接
        const links = document.querySelectorAll('.sidebar ul li a');
        links.forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = document.getElementById(sectionId.split('-')[0] + '-link');
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // 如果在移动设备上，点击链接后自动关闭侧边栏
        if (window.innerWidth <= 768) {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.remove('active');
            sidebar.classList.add('collapsed');
            updateToggleIcon();
        }
    }

    // 切换侧边栏
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('main-content');
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('collapsed');
        updateToggleIcon();
    }

    // 更新切换按钮图标
    function updateToggleIcon() {
        const sidebar = document.getElementById('sidebar');
        const toggleBtnIcon = sidebar.querySelector('.toggle-btn i');

        if (sidebar.classList.contains('collapsed')) {
            toggleBtnIcon.classList.remove('fa-angle-double-left');
            toggleBtnIcon.classList.add('fa-angle-double-right');
        } else {
            toggleBtnIcon.classList.remove('fa-angle-double-right');
            toggleBtnIcon.classList.add('fa-angle-double-left');
        }
    }

    // 显示通知弹窗
    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = "toast show";
        setTimeout(() => {
            toast.className = toast.className.replace("show", "");
        }, 3000);
    }

    // 表单提交处理
    document.getElementById('upload-form').addEventListener('submit', function(event) {
        event.preventDefault(); // 防止默认提交行为

        const noteText = document.getElementById('note-text').value;
        const imageUpload = document.getElementById('image-upload').files[0];

        if (!noteText.trim()) {
            alert('请开始您的创作');
            return;
        }

        // 模拟提交过程
        setTimeout(() => {
            showToast('笔记已分享!');
            this.reset(); // 重置表单
            updatePreview(); // 清空预览
            addNoteToPublished(noteText, imageUpload); // 添加笔记到已发布区域
            addNoteToAllNotes(noteText, imageUpload); // 添加笔记到全部笔记区域
        }, 500);
    });

    // 实时更新预览
    document.getElementById('note-text').addEventListener('input', updatePreview);
    document.getElementById('image-upload').addEventListener('change', updatePreview);

    function updatePreview() {
        const noteText = document.getElementById('note-text').value;
        const imageUpload = document.getElementById('image-upload').files[0];
        const previewText = document.getElementById('preview-text');
        const previewImage = document.getElementById('preview-image');

        if (noteText.trim()) {
            previewText.innerHTML = noteText.replace(/(?:\r\n|\r|\n)/g, '<br>');
        } else {
            previewText.textContent = '笔记内容将在此显示...';
        }

        if (imageUpload) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';
            }
            reader.readAsDataURL(imageUpload);
        } else {
            previewImage.src = '#';
            previewImage.style.display = 'none';
        }
    }

    // 添加笔记到已发布区域
    function addNoteToPublished(text, image) {
        const publishedNotes = document.getElementById('published-notes');

        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');

        if (image) {
            const img = document.createElement('img');
            const reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result;
            }
            reader.readAsDataURL(image);
            noteCard.appendChild(img);
        }

        const content = document.createElement('div');
        content.classList.add('note-card-content');
        const p = document.createElement('p');
        p.innerHTML = text.length > 100 ? text.substring(0, 100) + '...' : text;
        content.appendChild(p);
        noteCard.appendChild(content);

        publishedNotes.prepend(noteCard); // 最新的笔记显示在最前面
    }

    // 添加笔记到全部笔记区域
    function addNoteToAllNotes(text, image) {
        const allNotes = document.getElementById('all-notes');

        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');

        if (image) {
            const img = document.createElement('img');
            const reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result;
            }
            reader.readAsDataURL(image);
            noteCard.appendChild(img);
        }

        const content = document.createElement('div');
        content.classList.add('note-card-content');
        const p = document.createElement('p');
        p.innerHTML = text.length > 100 ? text.substring(0, 100) + '...' : text;
        content.appendChild(p);
        noteCard.appendChild(content);

        allNotes.prepend(noteCard); // 最新的笔记显示在最前面
    }

    // 初始激活链接高亮
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('upload-link').classList.add('active');
    });

    // 处理窗口大小变化，确保侧边栏逻辑正确
    window.addEventListener('resize', () => {
        const sidebar = document.getElementById('sidebar');
        if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            updateToggleIcon();
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('emoji-button');
        const textarea = document.getElementById('note-text');
        const container = document.querySelector('.emoji-container');

        // 初始化 EmojiButton
        const picker = new EmojiButton.EmojiButton({
            position: 'top-start', // 可根据需要调整位置
            theme: 'auto',         // 根据系统主题自动调整
        });

        // 当点击 Emoji 按钮时，切换 Picker 的显示状态
        button.addEventListener('click', () => {
            picker.togglePicker(button);
        });

        // 当选择一个 Emoji 时，将其插入到 textarea 的光标位置
        picker.on('emoji', emoji => {
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const text = textarea.value;
            textarea.value = text.slice(0, start) + emoji + text.slice(end);
            // 移动光标到 Emoji 后
            textarea.selectionStart = textarea.selectionEnd = start + emoji.length;
            textarea.focus();
            // 更新预览（如果有相关功能）
            if (typeof updatePreview === 'function') {
                updatePreview();
            }
        });

        // 当鼠标离开 Emoji Picker 时，自动关闭 Picker
        picker.pickerElement.addEventListener('mouseleave', () => {
            picker.closePicker();
        });

        // 可选：当鼠标点击页面其他地方时，关闭 Picker
        document.addEventListener('click', (event) => {
            if (!container.contains(event.target) && event.target !== button) {
                picker.closePicker();
            }
        });
    });
</script>
</script>
</body>
</html>




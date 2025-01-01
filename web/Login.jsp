<%--
  Created by IntelliJ IDEA.
  User: ASUS
  Date: 2024/12/29
  Time: 23:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录弹框</title>
    <link rel="stylesheet" type="text/css" href="./static/css/login.css">
    <link rel="stylesheet" type="text/css" href="./static/css/global.css">
</head>
<body>
<div id="overlay" class="overlay">
    <div id="login-container" class="login-modal">
        <!-- 登录界面左侧 -->
        <div class="login-left">
            <h2>扫码登录</h2>
            <div class="logo">
                <img src="https://via.placeholder.com/100x50.png?text=%E5%B0%8F%E7%BA%A2%E4%B9%A6" alt="小红书">
            </div>
            <div class="qr-code">
                <img src="https://via.placeholder.com/150" alt="二维码">
            </div>
            <p>可用 <span class="green">微信</span> 扫码</p>
        </div>

        <!-- 登录界面右侧 -->
        <div class="login-right">
            <h2>手机号登录</h2>
            <form>
                <div class="input-group">
                    <label for="phone">+86</label>
                    <input type="text" id="phone" placeholder="输入手机号">
                </div>
                <div class="input-group">
                    <input type="text" id="code" placeholder="输入验证码">
                    <button type="button" class="get-code">获取验证码</button>
                </div>
                <p id="code-error" class="error-message" style="display: none; color: red;">验证码错误，请重新输入</p>
                <button id="login-btn" type="button" class="login-btn">登录</button>
                <div class="agreement">
                    <input type="checkbox" id="agreement">
                    <label for="agreement">我已阅读并同意
                        <a href="#">《用户协议》</a>
                        <a href="#">《隐私政策》</a>
                        <a href="#">《儿童/青少年个人信息保护规则》</a>
                    </label>
                </div>
            </form>
            <div class="switch-btn" id="switch-to-register">注册新用户</div>
        </div>
    </div>

    <!-- 注册界面 -->
    <div id="register-container" class="hidden login-modal">
        <!-- 注册界面左侧 -->
        <div class="login-left">
            <h2>扫码注册</h2>
            <div class="logo">
                <img src="https://via.placeholder.com/100x50.png?text=%E5%B0%8F%E7%BA%A2%E4%B9%A6" alt="小红书">
            </div>
            <div class="qr-code">
                <img src="https://via.placeholder.com/150" alt="二维码">
            </div>
            <p>可用 <span class="green">微信</span> 扫码</p>
        </div>

        <!-- 注册界面右侧 -->
        <div class="login-right">
            <h2>手机号注册</h2>
            <form>
                <div class="input-group">
                    <label for="phone-register">+86</label>
                    <input type="text" id="phone-register" placeholder="输入手机号">
                </div>
                <div class="input-group">
                    <input type="text" id="code-register" placeholder="输入验证码">
                    <button type="button" class="get-code">获取验证码</button>
                </div>
                <p id="code-error-register" class="error-message" style="display: none; color: red;">
                    验证码错误，请重新输入</p>
                <div class="input-group">
                    <label for="password-register">密码：</label>
                    <input type="password" id="password-register" placeholder="设置密码">
                </div>
                <div class="input-group">
                    <label for="password-register-again">再次输入密码：</label>
                    <input type="password" id="password-register-again" placeholder="设置密码">
                </div>
                <p id="password-error" class="error-message" style="display: none; color: red;">
                    两次输入的密码不同，请重新输入</p>
                <button type="button" class="register-btn" id="register-btn">注册</button>
                <div class="agreement">
                    <input type="checkbox" id="register-agreement">
                    <label for="register-agreement">我已阅读并同意
                        <a href="#">《用户协议》</a>
                        <a href="#">《隐私政策》</a>
                        <a href="#">《儿童/青少年个人信息保护规则》</a>
                    </label>
                </div>
            </form>
            <div class="switch-btn" id="switch-to-login">返回登录</div>
        </div>
    </div>
</div>
<!-- 自定义弹框 -->
<div id="custom-alert">登录成功</div>
</body>
<script src="static/js/login.js"></script>
</html>

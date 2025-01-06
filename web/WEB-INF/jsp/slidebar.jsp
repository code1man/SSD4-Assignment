<%--
  Created by IntelliJ IDEA.
  User: adolbook
  Date: 2025/1/5
  Time: 16:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="sidebar">
  <ul>
    <li><a href="/main"><span class="icon fa-eye"></span> 浏览</a></li>
    <li><span class="icon fa-discover"></span> 发现好友</li>
    <li><span class="icon fa-post"></span> 发布</li>
    <li><a href="/post"><span class="icon fa-notification"></span> 通知</a></li>
    <li><a href="/personal"><span class="icon fa-user"></span>我</a></li>
    <li><a class="more"><span class="icon fa-ellipsis-v"></span> 更多</a ></li>
    <div class="hover-card">
      <ul>
        <li>反馈与评价该网站</li>
        <li id="index-login-button">登录</li>
      </ul>
    </div>
  </ul>
</div>


<div id="modal1" class="modal1" style="display: none" >
  <jsp:include page="Login.jsp" />
</div>
<div id="overlay" class="overlay" style="display: none">
  <jsp:include page="Message.jsp" />
</div>


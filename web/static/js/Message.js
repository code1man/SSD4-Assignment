let isFilterMode = false; // 是否处于“只看他/她”模式
const followedUsers = new Set(); // 用于记录已关注用户
const isLoggedIn = true; // 模拟用户登录状态

const users = [
    {
        userId: 1,
        name: "奶龙",
        fans: "1000万+",
        bio: "我是奶龙",
        posts: ["我是奶龙", "我才是奶龙", "今夜星光闪闪", "我爱你的心满满"]
    },
    {
        userId: 2,
        name: "小七",
        fans: "1万+",
        bio: "奶龙又偷吃我的零食",
        posts: ["奶龙不要吃我的鸡腿", "奶龙去哪里了", "奶龙你是个榴莲大馒头"]
    },
    {
        userId: 3,
        name: "暴暴龙",
        fans: "3",
        bio: "我讨厌奶龙",
        posts: ["黄色，一切黄色和唐龙从我的世界消失", "我的蛋壳万众瞩目", "可恶的奶龙又坏我的好事"]
    },
    {
        userId: 4,
        name: "小紫兵",
        fans: "1",
        bio: "暴暴龙最帅",
        posts: ["老大最帅", "老大最强", "老大最迷人"]
    }
];


const messages = [
    { userId: 1, index: 0 }, // 对应奶龙的第1条消息
    { userId: 2, index: 0 }, // 对应小七的第1条消息
    { userId: 3, index: 0 }, // 对应暴暴龙的第1条消息
    { userId: 4, index: 0 }, // 对应小紫兵的第1条消息
    { userId: 1, index: 1 }, // 对应奶龙的第2条消息
    { userId: 2, index: 1 }, // 对应小七的第2条消息
    { userId: 3, index: 1 }, // 对应暴暴龙的第2条消息
    { userId: 4, index: 1 }, // 对应小紫兵的第2条消息
    { userId: 1, index: 2 }, // 对应奶龙的第3条消息
    { userId: 3, index: 2 }, // 对应暴暴龙的第3条消息
    { userId: 2, index: 2 }, // 对应小七的第3条消息
    { userId: 4, index: 2 }, // 对应小紫兵的第3条消息
    { userId: 3, index: 3 }, // 对应暴暴龙的第4条消息
    { userId: 1, index: 3 }  // 对应奶龙的第4条消息
];


$(function () {
    const commentList = document.getElementById("commentList");
    const commentInput = document.getElementById("commentInput");
    const sendComment = document.getElementById("sendComment");

    const currentUser = {
        name: "当前用户",
        avatar: "your-avatar-url.jpg",
    };

    // 初始化输入框状态
    if (isLoggedIn) {
        commentInput.disabled = false;
        sendComment.disabled = false;
    }

    // 发布评论
    sendComment.addEventListener("click", function () {
        const content = commentInput.value.trim();
        if (content === "") {
            alert("评论内容不能为空！");
            return;
        }

        // 构建评论元素
        const commentHTML = `
      <div class="comment-item">
        <div class="comment-header">
          <strong>${currentUser.name}：</strong>
          <p class="comment-content">${content}</p>
          <span class="reply-button">回复</span>
        </div>
        <div class="comment-reply"></div>
      </div>
    `;

        // 插入评论区
        commentList.insertAdjacentHTML("beforeend", commentHTML);

        // 清空输入框
        commentInput.value = "";
    });

    // 监听评论列表区域的点击事件
    commentList.addEventListener("click", function (e) {
        // 如果点击的是 "回复" 按钮
        if (e.target.classList.contains("reply-button")) {
            const parentComment = e.target.closest(".comment-item");
            const replyContainer = parentComment.querySelector(".comment-reply");

            // 创建回复输入框
            const replyInputHTML = `
            <div class="reply-box">
                <input type="text" class="comment-button" placeholder="写下你的回复..."></input>
                <button class="reply-send-button">发送</button>
            </div>
        `;

            // 避免重复插入输入框
            if (!replyContainer.innerHTML.trim()) {
                replyContainer.innerHTML = replyInputHTML;

                // 将焦点设置到新创建的输入框
                const replyInput = replyContainer.querySelector(".reply-input");
                replyInput.focus();
            }
        }

        // 如果点击的是 "发送" 按钮
        if (e.target.classList.contains("reply-send-button")) {
            const replyInput = e.target.previousElementSibling;
            const replyContent = replyInput.value.trim();

            if (replyContent === "") {
                alert("回复内容不能为空！");
                return;
            }

            // 构建回复内容
            const replyHTML = `
            <div class="comment-item">
                <div class="comment-header">
                    <strong>${currentUser.name}：</strong>
                    <p class="comment-content">${replyContent}</p>
                </div>
            </div>`;

            // 插入到回复区域
            const replyContainer = e.target.closest(".comment-reply");
            replyContainer.insertAdjacentHTML("beforeend", replyHTML);

            // 清空并隐藏回复框
            e.target.closest(".reply-box").remove();
        }
    });

    // 点击页面空白处隐藏输入框
    document.addEventListener("click", function (e) {
        // 检查点击的目标是否在评论区域内
        if (!e.target.closest(".comment-item")) {
            const allReplyBoxes = document.querySelectorAll(".reply-box");
            allReplyBoxes.forEach((box) => box.remove());
        }
    });

    // 定义消息索引
    let currentMessageIndex = 0;

    // 更新用户信息
    function updateUserInfo(messageIndex) {
        const message = messages[messageIndex];
        const user = users.find(user => user.userId === message.userId); // 根据 userId 查找用户信息

        $(".user-avatar .tooltip").html(`
        <p><strong>用户名：</strong>${user.name}</p>
        <p><strong>粉丝数：</strong>${user.fans}</p>
        <p><strong>简介：</strong>${user.bio}</p>
    `);

        $(".user-details h4").text(user.name);

        // 检查是否已关注
        if (followedUsers.has(user.userId)) {
            $("#follow-button").text("已关注");
        } else {
            $("#follow-button").text("关注");
        }
    }

    // 更新推文内容
    function updatePostContent(messageIndex) {
        const message = messages[messageIndex];
        const user = users.find(user => user.userId === message.userId);

        // 根据 message.index 获取用户的推文
        const postContent = user.posts[message.index];

        $("#post-content").text(postContent);
    }

    // 初始化页面
    updateUserInfo(currentMessageIndex);
    updatePostContent(currentMessageIndex);

    // 滚轮事件
    $(".scrollable").on("wheel", function (e) {
        if (isFilterMode) return; // 如果是“只看他/她”模式，则禁用滚轮切换

        if (e.originalEvent.deltaY > 0) {
            // 下一个消息
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        } else {
            // 上一个消息
            currentMessageIndex = (currentMessageIndex - 1 + messages.length) % messages.length;
        }

        updateUserInfo(currentMessageIndex);
        updatePostContent(currentMessageIndex);
    });

    // 关注按钮事件
    $('#follow-button').on("click", function () {
        const message = messages[currentMessageIndex];
        const user = users.find(user => user.userId === message.userId);

        if (followedUsers.has(user.userId)) {
            // 如果已关注，则取消关注
            followedUsers.delete(user.userId);
            $("#follow-button").text("关注");
        } else {
            // 如果未关注，则添加到已关注列表
            followedUsers.add(user.userId);
            $("#follow-button").text("已关注");
        }
    });

    // 只看他/她按钮事件
    $("#filter-button").on("click", function () {
        if (isFilterMode) {
            // 退出“只看他/她”模式
            isFilterMode = false;
            $("#filter-button").text("只看他/她");

            // 恢复滚轮功能
            $(".scrollable").on("wheel", function (e) {
                if (e.originalEvent.deltaY > 0) {
                    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                } else {
                    currentMessageIndex = (currentMessageIndex - 1 + messages.length) % messages.length;
                }

                updateUserInfo(currentMessageIndex);
                updatePostContent(currentMessageIndex);
            });
        } else {
            // 进入“只看他/她”模式
            isFilterMode = true;
            $("#filter-button").text("退出只看他/她");

            // 当前用户的 userId
            const currentUserId = messages[currentMessageIndex].userId;

            // 过滤出该用户的所有消息
            const userMessages = messages.filter(msg => msg.userId === currentUserId);

            // 设置过滤模式下的滚轮事件
            let filteredIndex = userMessages.findIndex(msg => msg.index === messages[currentMessageIndex].index);
            $(".scrollable").off("wheel").on("wheel", function (e) {
                if (e.originalEvent.deltaY > 0) {
                    // 下一个消息
                    filteredIndex = (filteredIndex + 1) % userMessages.length;
                } else {
                    // 上一个消息
                    filteredIndex = (filteredIndex - 1 + userMessages.length) % userMessages.length;
                }

                // 更新当前消息索引
                const newMessage = userMessages[filteredIndex];
                currentMessageIndex = messages.indexOf(newMessage);

                updateUserInfo(currentMessageIndex);
                updatePostContent(currentMessageIndex);
            });
        }
    });
});

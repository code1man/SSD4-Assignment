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
    {
        userId: 1,
        index: 0,
        comments: [
            { userId: 2, content: "奶龙真有意思！" },
            { userId: 3, content: "奶龙的发言一点都不好笑！" },
            { userId: 4, content: "奶龙说得对！老大也该学学！" }
        ]
    },
    {
        userId: 2,
        index: 0,
        comments: [
            { userId: 1, content: "小七别小气，我没吃你的鸡腿！" },
            { userId: 3, content: "小七，你的鸡腿都进奶龙肚子了！" },
            { userId: 4, content: "别管奶龙了，鸡腿都不重要！" }
        ]
    },
    {
        userId: 3,
        index: 0,
        comments: [
            { userId: 1, content: "暴暴龙真会埋怨人！" },
            { userId: 2, content: "别生气啦，暴暴龙！" },
            { userId: 4, content: "老大，我们支持你！" }
        ]
    },
    {
        userId: 4,
        index: 0,
        comments: [
            { userId: 1, content: "小紫兵，你是不是又在拍马屁？" },
            { userId: 3, content: "小紫兵说得不错，老大最帅！" },
            { userId: 2, content: "小紫兵，这有点过分了吧。" }
        ]
    },
    {
        userId: 1,
        index: 1,
        comments: [
            { userId: 3, content: "奶龙就爱炫耀自己！" },
            { userId: 2, content: "果然还是奶龙最会抢风头！" },
            { userId: 4, content: "奶龙的发言真的很强！" }
        ]
    },
    {
        userId: 2,
        index: 1,
        comments: [
            { userId: 1, content: "小七，你别一直盯着我。" },
            { userId: 3, content: "奶龙已经跑了，你还找什么？" },
            { userId: 4, content: "小七真可怜，被奶龙抢了鸡腿。" }
        ]
    },
    {
        userId: 3,
        index: 1,
        comments: [
            { userId: 1, content: "暴暴龙对黄色到底有什么意见？" },
            { userId: 2, content: "唐龙可能还真是暴暴龙的死对头！" },
            { userId: 4, content: "老大讨厌的东西我们也不喜欢！" }
        ]
    },
    {
        userId: 4,
        index: 1,
        comments: [
            { userId: 1, content: "小紫兵的老大滤镜快破了！" },
            { userId: 2, content: "小紫兵，你的语气真的太搞笑了！" },
            { userId: 3, content: "谢谢小紫兵的支持，老大最帅！" }
        ]
    },
    {
        userId: 1,
        index: 2,
        comments: [
            { userId: 3, content: "奶龙天天装深沉，真让人无语！" },
            { userId: 2, content: "星光和满满的心，奶龙还挺有诗意的。" },
            { userId: 4, content: "奶龙的心也许没有暴暴龙的大！" }
        ]
    },
    {
        userId: 3,
        index: 2,
        comments: [
            { userId: 1, content: "暴暴龙的蛋壳有这么厉害吗？" },
            { userId: 2, content: "你的蛋壳真的值得骄傲吗？" },
            { userId: 4, content: "老大的蛋壳比谁的都强！" }
        ]
    },
    {
        userId: 2,
        index: 2,
        comments: [
            { userId: 1, content: "小七，你可能真的太在意奶龙了！" },
            { userId: 3, content: "榴莲大馒头这个形容词太绝了！" },
            { userId: 4, content: "小七的文字表达真有意思！" }
        ]
    },
    {
        userId: 4,
        index: 2,
        comments: [
            { userId: 1, content: "老大的迷人之处在哪里？" },
            { userId: 2, content: "这马屁拍得有点太明显了吧！" },
            { userId: 3, content: "小紫兵的支持让我很满意！" }
        ]
    },
    {
        userId: 3,
        index: 3,
        comments: [
            { userId: 1, content: "暴暴龙，你真是奶龙的宿敌！" },
            { userId: 2, content: "暴暴龙一直在针对奶龙吧！" },
            { userId: 4, content: "老大的愤怒也很迷人！" }
        ]
    },
    {
        userId: 1,
        index: 3,
        comments: [
            { userId: 3, content: "奶龙的“爱”真的值这么多吗？" },
            { userId: 2, content: "满满的爱让我觉得有点假。" },
            { userId: 4, content: "奶龙表达得真情实感啊！" }
        ]
    }
];

$(function () {
    const commentList = document.getElementById("commentList");
    const commentInput = document.getElementById("commentInput");
    const sendComment = document.getElementById("sendComment");

    const currentUser = {
        name: "小蓝叔",
        avatar: "your-avatar-url.jpg",
    };

    // 初始化输入框状态
    if (isLoggedIn) {
        commentInput.disabled = false;
        sendComment.disabled = false;
    }

    $('#sendComment').on("click",  function () {
        const message = messages[currentMessageIndex];
        const inputField = $(".comment-input");
        const commentContent = inputField.val().trim();

        if (commentContent) {
            // 保存评论到当前推文的评论数组
            message.comments.push({
                user: currentUser.name,
                content: commentContent
            });

            // 清空输入框
            inputField.val("");

            // 更新评论显示
            updateComments(currentMessageIndex);
        } else {
            alert("评论不能为空！");
        }
    });

    // 监听评论列表区域的点击事件
    commentList.addEventListener("click", function (e) {
        // 如果点击的是 "回复" 按钮
        if (e.target.classList.contains("reply-button")) {
            // 添加前，清空其他回复框
            document.querySelectorAll(".reply-box").forEach(box => box.remove());

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

    function updatePostContent(messageIndex) {
        const message = messages[messageIndex];
        const user = users.find(user => user.userId === message.userId);
        const postContent = user.posts[message.index];

        $(".post-content").text(postContent);

        // 更新评论区域
        updateComments(messageIndex);
    }

    function updateComments(messageIndex) {
        const message = messages[messageIndex];
        const commentList = $("#commentList");

        // 清空旧评论
        commentList.empty();

        // 渲染当前推文的评论
        message.comments.forEach(comment => {
            commentList.append(`
            <div class="comment-item">
                <div class="comment-header">
                    <strong>${users[comment.userId - 1].name}：</strong>
                    <p class="comment-content">${comment.content}</p>
                    <span class="reply-button">回复</span>
                </div>
                <div class="comment-reply"></div>
            </div>
        `);
        });
    }

    // 初始化页面
    updateUserInfo(currentMessageIndex);
    updatePostContent(currentMessageIndex);
    updateComments(currentMessageIndex);

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
                    filteredIndex = (filteredIndex + 1) % userMessages.length;
                } else {
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

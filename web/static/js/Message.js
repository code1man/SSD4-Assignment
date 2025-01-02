// 点击外围关闭弹窗
const modal = document.querySelector('.modal');
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

$(function () {
    const commentList = document.getElementById("commentList");
    const commentInput = document.getElementById("commentInput");
    const sendComment = document.getElementById("sendComment");

    // 模拟用户登录状态
    const isLoggedIn = true; // 修改为 false 测试未登录状态
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

    // 事件委托：动态处理“回复”按钮
    commentList.addEventListener("click", function (e) {
        if (e.target.classList.contains("reply-button")) {
            const parentComment = e.target.closest(".comment-item");
            const replyContainer = parentComment.querySelector(".comment-reply");

            // 创建回复输入框
            const replyInputHTML = `
        <textarea class="reply-input" rows="2" placeholder="写下你的回复..."></textarea>
        <button class="reply-send-button">发送</button>
      `;

            // 避免重复插入输入框
            if (!replyContainer.innerHTML.trim()) {
                replyContainer.innerHTML = replyInputHTML;
            }
        }

        // 发送回复
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
        </div>
      `;

            // 插入到回复区域
            const replyContainer = e.target.parentElement;
            replyContainer.insertAdjacentHTML("beforeend", replyHTML);

            // 清空回复框
            replyInput.value = "";
        }
    });

    const users = [
        {
            name: "奶龙",
            fans: "1000万+",
            bio: "我是奶龙",
            posts: [
                "我是奶龙",
                "我才是奶龙",
                "今夜星光闪闪",
                "爱你的心满满"
            ],
        },
        {
            name: "小七",
            fans: "1万+",
            bio: "奶龙又偷吃我的零食",
            posts:[
                "奶龙不要吃我的鸡腿",
                "奶龙去哪里了",
                "奶龙你是个榴莲大馒头",
                "奶龙你的头怎么圆圆的"],
        },
        {
            name: "暴暴龙",
            fans: "3",
            bio: "我讨厌奶龙",
            posts:[
                "可恶的奶龙又坏我的好事",
                "可恶的奶龙这抹恶心的黄色能不能从世界消失",
                "我的蛋壳万众瞩目",
                "黄色，一切黄色和唐龙从我的世界消失!!!!!!!!"],
        },
        {
            name: "小紫兵",
            fans: "1",
            bio: "暴暴龙最帅",
            posts: [
                "老大最帅",
                "老大最强",
                "老大最迷人",
                "老大是无敌的"
            ]
        },
    ];
});

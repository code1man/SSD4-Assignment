//外部标签页选择
$(function() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 移除所有按钮的激活状态
            tabButtons.forEach(btn => btn.classList.remove("active"));
            // 隐藏所有面板
            tabPanels.forEach(panel => panel.classList.remove("active"));

            // 激活当前按钮
            button.classList.add("active");
            // 显示对应的面板
            const target = document.getElementById(button.dataset.tab);
            target.classList.add("active");
        });
    });

});


//个人信息模态框设计
$(function() {
    // 修改用户信息按钮事件
    const editInfoBtn = document.getElementById("edit-info-btn");
    const modal = document.getElementById("editInfoModal");
    const cancelBtn = document.getElementById("cancel-btn");
    const saveInfoBtn = document.getElementById("save-info-btn");
    const inputs = modal.querySelectorAll("input, select");

    // console.log(inputs);

    //在捕获阶段进行捕获，并阻止冒泡，防止被关闭函数监听到，我真是个天才
    editInfoBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // 阻止事件冒泡
        modal.style.display = "flex"; // 显示模态框
        if (inputs[0]) {
            inputs[0].focus(); // 聚焦到第一个输入框
        }
    },true);

    cancelBtn.addEventListener("click", () => {
        modal.style.display = "none"; // 关闭模态框
    });


    saveInfoBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const bio = document.getElementById("bio").value;
        const gender = document.getElementById("gender").value;
        const avatar = document.getElementById("avatar").files[0];

        const formData = new FormData();
        formData.append("username", username);
        formData.append("bio", bio);
        formData.append("gender", gender);
        if (avatar) {
            formData.append("avatar", avatar);
        }

        $.ajax({
            url: '/editInformation',
            type: 'POST',
            processData: false, // 告诉jQuery不要处理发送的数据
            contentType: false, // 告诉jQuery不要设置请求头
            data: formData,
            success: (response) => {
                console.log(response);
                $('#show-username').text(response.updateUsername);
                $('#show-bio').text(response.updateBio);
                if (response.updateGender === "male") {
                    $('#show-gender').html('<img src="/static/image/gender1.png" alt="性别"/>');
                } else {
                    $('#show-gender').html('<img src="/static/image/gender2.png" alt="性别"/>');
                }
                if (response.updateAvatar) {
                    $('#show-avatar').attr('src', response.updateAvatar); // 更新头像显示
                }
            },
            error: () => {
                console.log("update error");
            },
        });

        alert("信息已保存！");
        modal.style.display = "none"; // 关闭模态框
    });


    // 监听每个输入框的键盘事件
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (event) => {
            // 太多愚蠢的代码直接用css占全屏了
            event.stopPropagation(); // 阻止事件冒泡
            if (event.key === 'Enter') { // 如果按下的是回车键
                event.preventDefault(); // 阻止默认行为（避免表单提交）
                const nextInput = inputs[index + 1]; // 获取下一个输入框
                // console.log(nextInput);
                if (nextInput) {
                    nextInput.focus(); // 聚焦到下一个输入框
                    console.log("focus next input");
                    console.log(nextInput);
                } else {
                    // 如果是最后一个输入框，聚焦到保存按钮
                    const saveButton = document.getElementById('save-info-btn');
                    saveButton.focus();
                }
            }
        });
    });

    window.addEventListener("click", (event) => {
        if (modal && modal.style.display === "flex" && !modal.contains(event.target)) {
            modal.style.display = "none";
            console.log(event.target)
        }
    },false)

    //在冒泡阶段进行捕获
});


// 内部标签页选择
$(function() {
    const innerTabButtons = document.querySelectorAll(".inner-tab-btn");
    const innerTabPanels = document.querySelectorAll(".inner-tab-panel");

    innerTabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 移除所有嵌套标签按钮的激活状态
            innerTabButtons.forEach(btn => btn.classList.remove("active"));
            // 隐藏所有嵌套标签面板
            innerTabPanels.forEach(panel => panel.classList.remove("active"));

            // 激活当前嵌套标签按钮
            button.classList.add("active");
            // 显示对应的嵌套标签面板
            const target = document.getElementById(button.dataset.innerTab);
            target.classList.add("active");
        });
    });
});


// 创建专辑
$(function(){
    const successBtn = document.querySelector(".album-confirm-btn");
    const modal = document.getElementById("album-modal");
    const createBtn = document.querySelector(".create-album-btn");
    const closeBtn = document.querySelector(".album-close-btn");
    const cancelBtn = document.querySelector(".album-cancel-btn");
    const alertInfo = document.getElementById("alertInfo");
    const publicAlbum = document.getElementById("public-album");
    const inputs = modal.querySelectorAll("input[type='text'], textarea");

    // 打开模态框
    createBtn.addEventListener("click", () => {
        modal.style.display = "flex";
        if(!publicAlbum.checked){
            alertInfo.style.display = "block";
        }
        else{
            alertInfo.style.display = "none";
        }

        if(inputs[0]) {
            inputs[0].focus(); // 聚焦到第一个输入框
        }

    });

    // 关闭模态框
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    cancelBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    successBtn.addEventListener("click", () => {
        const albumsdiv = document.getElementById("albums");
        const albumName = document.getElementById("album-title").value;
        const albumDesc = document.getElementById("album-description").value;

        $.ajax({
            url: '/createAlbum',
            type: 'POST',
            data: {
                albumName: albumName,
                albumDesc: albumDesc,
            },
            success: (response) => {
                // 'display: flex; justify-content: flex-start; width: 100%; margin-bottom: 20px;'
                // 更新顶部的专辑数量按钮
                $('#albums-btn-with-num').text("专辑・" + response.albumNum);
                $('inner-tab-panel').css(
                'display','flex',
                'justify-content','flex-start',
                    );
                // 清空 albumsdiv 并添加新的专辑框
                albumsdiv.innerHTML = `
      <div class="album-container" style="display: flex; justify-content: flex-start; width: 100%; margin-bottom: 20px;">
    <div class="album" style="width: 50%; display: flex; flex-direction:column;justify-content: flex-start; padding: 100px; border: 1px solid #ddd; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <div class="album-info" style="flex: 1; padding-left: 5px;padding-top: 5px;">
            <h3 class="album-title" style="font-size: 18px; color: #333; margin-bottom: 8px;">${albumName}</h3>
            <p class="album-desc" style="font-size: 14px; color: #666;">${albumDesc}</p>
        </div>
        <div class="album-btn" style="display: flex; flex-direction: row; gap: 10px; justify-content: flex-start; align-items: flex-start;">
            <button class="album-btn-edit" style="padding: 8px 16px; background-color: #007BFF; color: white; border: none; border-radius: 5px; margin-bottom: 10px; cursor: pointer;">查看</button>
        </div>
    </div>
</div>
    <button class="create-album-btn">+ 创建专辑</button>
    `;
            },

            error: () => {
                console.log("create error");
            }
        });


        modal.style.display = "none";
    });

    // 点击模态框外部关闭模态框
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });


    publicAlbum.addEventListener("click", () => {
        if(!publicAlbum.checked){
            alertInfo.style.display = "block";
        }
        else{
            alertInfo.style.display = "none";
        }
    });


    // 监听每个输入框的键盘事件
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') { // 如果按下的是回车键
                event.preventDefault(); // 阻止默认行为（避免表单提交）
                const nextInput = inputs[index + 1]; // 获取下一个输入框
                if (nextInput) {
                    nextInput.focus(); // 聚焦到下一个输入框
                } else {
                    // 如果是最后一个输入框，聚焦到保存按钮
                    const saveButton = document.querySelector(".album-confirm-btn");
                    saveButton.focus();
                }
            }
        });
    });


});


// 专辑详情页
$(function () {
    const $albumsDiv = $("#albums"); // 获取专辑容器

    // 动态绑定“查看”按钮事件
    $albumsDiv.on("click", ".album-btn-edit", function () {
        // 获取当前点击的专辑框内容
        const $album = $(this).closest(".album");
        const albumName = $album.find(".album-title").text();
        const albumDesc = $album.find(".album-desc").text();

        // 创建详细框
        const $detailView = $(`
            <div id="detail-view" style="position: fixed; top: 200px; left: 500px;width: 400px; height: 500px; background-color: white; z-index: 1000; padding: 20px; overflow-y: auto; opacity: 0; transition: opacity 0.5s;">
                <h1 style="font-size: 24px; margin-bottom: 16px;">${albumName}</h1>
                <p style="font-size: 16px; color: #666; margin-bottom: 24px;">${albumDesc}</p>
                <div id="detail-content" style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
                    <!-- 动态生成小框 -->
                </div>
                <button id="back-button" style="padding: 10px 20px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;">返回</button>
            </div>
        `);

        // 动态生成白色背景小框（假设生成10个）
        const $detailContent = $detailView.find("#detail-content");
        for (let i = 1; i <= 3; i++) {
            const $box = $("<div>", {
                style: "width: 100px; height: 100px; background: #f1f1f1; border-radius: 8px; display: flex; align-items: center; justify-content: center;",
            });
            $detailContent.append($box);
        }

        // 将详细框添加到页面
        $("body").append($detailView);

        // 动画显示详细框并隐藏专辑框
        setTimeout(() => {
            $detailView.css("opacity", 1);
            $albumsDiv.css("opacity", 0);
        }, 10);

        // 绑定返回按钮事件
        $detailView.on("click", "#back-button", function () {
            // 动画隐藏详细框并显示专辑框
            $detailView.css("opacity", 0);
            setTimeout(() => {
                $detailView.remove();
                $albumsDiv.css("opacity", 1);
            }, 500);
        });
    });
});


// 用户名处理
$(function () {
    const $usernameInput = $("#username");
    const $usernameError = $("#username-error");

    // 失去焦点时验证用户名是否存在
    $usernameInput.on("blur", function () {
        console.log("blur");
        const username = $usernameInput.val().trim();

        console.log(username);
        if (username === "") {
            $usernameError.text("用户名不能为空");
            $usernameError.css("display", "block");
            return;
        }
        $.ajax({
            url: '/checkUsername',
            type: 'POST',
            data: { username: username },
            success: function (response) {
                if (response.error) {
                    $usernameError.text(response.error);
                    $usernameError.css("display", "block");
                } else {
                    $usernameError.css("display", "none");
                }
            },
            error: () => {
                console.log("check username error");
            }
        });
    });
});

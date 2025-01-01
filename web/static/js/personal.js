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



    // 修改用户信息按钮事件
    const editInfoBtn = document.getElementById("edit-info-btn");
    const modal = document.getElementById("editInfoModal");
    const cancelBtn = document.getElementById("cancel-btn");
    const saveInfoBtn = document.getElementById("save-info-btn");
    const inputs = modal.querySelectorAll("input, select");


    editInfoBtn.addEventListener("click", () => {
        modal.style.display = "flex"; // 显示模态框
        if(inputs[0]) {
            inputs[0].focus(); // 聚焦到第一个输入框
        }
    });

    cancelBtn.addEventListener("click", () => {
        modal.style.display = "none"; // 关闭模态框
    });


    saveInfoBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const bio = document.getElementById("bio").value;
        const gender = document.getElementById("gender").value;
        const avatar = document.getElementById("avatar").files[0];

        // if (!username || !bio || !gender) {
        //     alert("请填写完整信息！");
        //     return;
        // }

        // 这里可以发送AJAX请求将数据提交到后台
        // 例如:
        // const formData = new FormData();
        // formData.append("username", username);
        // formData.append("bio", bio);
        // formData.append("gender", gender);
        // formData.append("avatar", avatar);

        alert("信息已保存！");
        modal.style.display = "none"; // 关闭模态框
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
                    const saveButton = document.getElementById('save-info-btn');
                    saveButton.focus();
                }
            }
        });
    });


});



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
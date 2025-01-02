$(document).ready(function () {

    const $chatSelect = $('#chat'); // 下拉列表
    const $chatInput = $('#chatInput'); // 联系方式输入框
    const $feedbackForm = $('#feedbackForm'); // 表单
    const $errorMessage = $('<p></p>'); // 错误提示元素


    $('#imageUpload').on('change', function (event) {
        var files = event.target.files;
        var imagePreview = $('#imagePreview');

        $.each(files, function (index, file) {
            if (!file.type.startsWith('image/')) {
                alert('仅支持图片文件!');
                return;
            }

            var reader = new FileReader();
            reader.onload = function (e) {
                // 创建预览项
                var previewItem = $('<div></div>').addClass('preview-item');
                var img = $('<img>').attr('src', e.target.result).attr('alt', 'Uploaded image');
                var deleteIcon = $('<div></div>').addClass('delete-icon');

                previewItem.append(img);
                previewItem.append(deleteIcon);
                imagePreview.append(previewItem);

                // 点击预览图片显示模态框
                img.on('click', function () {
                    var modal = $('#imageModal');
                    modal.find('.modal-image').attr('src', e.target.result);
                    modal.css('display', 'flex');
                });

                // 点击垃圾桶图标删除图片
                deleteIcon.on('click', function () {
                    previewItem.remove(); // 从 DOM 中移除当前预览项
                });
            };
            reader.readAsDataURL(file);
        });
    });

    // 模态框关闭功能
    $('.close-button').on('click', function () {
        $('#imageModal').css('display', 'none');
    });

    // 点击模态框背景关闭
    $('#imageModal').on('click', function (event) {
        if (event.target === this) {
            $(this).css('display', 'none');
        }
    });

    document.getElementById('feedbackForm').addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表单默认提交

        const imageUpload = document.getElementById('imageUpload');
        const modal = document.getElementById('feedbackModal');
        const modalMessage = document.getElementById('modalMessage');
        const modalSuggestion = document.getElementById('modalSuggestion');

        // 显示弹窗内容
        modalMessage.textContent = '感谢您宝贵的反馈！这将是我们前进的动力！';

        if (imageUpload.files.length === 0) {
            modalSuggestion.textContent = '建议上传图片，这将帮助我们更快定位问题哦！(您可以点击继续反馈哦~)';
        } else {
            modalSuggestion.textContent = ''; // 没有提醒
        }

        // 显示弹窗
        modal.style.display = 'flex';

        // 按钮逻辑
        document.getElementById('goHomeButton').onclick = function () {
            modal.style.display = 'none';
            window.location.href = './'; // 跳转到主页
        };

        document.getElementById('continueButton').onclick = function () {
            modal.style.display = 'none'; // 关闭弹窗，保留表单数据
        };

        document.getElementById('resetButton').onclick = function () {
            modal.style.display = 'none';
            document.getElementById('feedbackForm').reset(); // 清空表单数据
            document.getElementById('imagePreview').innerHTML = ''; // 清空图片预览
        };
    });

    // 设置错误提示样式
    $errorMessage
        .css({
            color: 'red',
            fontSize: '14px',
            marginTop: '5px',
            display: 'none', // 默认隐藏
        })
        .insertAfter($chatInput); // 插入到输入框后面

    // 验证输入值函数
    function validateInput() {
        const selectedOption = $chatSelect.val(); // 获取选中值
        const inputValue = $chatInput.val().trim(); // 获取输入框值

        if (selectedOption === '邮箱') {
            // 邮箱正则验证
            const emailRegex = /^[^\s@]+@[^\s@]+\.(com|cn)$/i;
            if (!emailRegex.test(inputValue)) {
                $errorMessage.text('请输入有效的邮箱地址。比如123@qq.com').show();
                return false;
            }
        } else if (selectedOption === '电话') {
            // 电话号码验证
            const phoneRegex = /^1\d{10}$/;
            if (!phoneRegex.test(inputValue)) {
                $errorMessage.text('请输入有效的11位手机号码，以1开头。比如19313198586').show();
                return false;
            }
        }

        // 如果验证通过，隐藏错误提示
        $errorMessage.hide();
        return true;
    }

    // 实时验证输入框内容
    $chatInput.on('input', validateInput);

    // 切换下拉选项时清空输入框并隐藏错误提示
    $chatSelect.on('change', function () {
        $chatInput.val(''); // 清空输入框
        $errorMessage.hide(); // 隐藏错误提示
    });

    // 表单提交时进行验证
    $feedbackForm.on('submit', function (event) {
        if (!validateInput()) {
            event.preventDefault(); // 阻止表单提交
        }
    });


});

let correctCode = Math.floor(1000000 + Math.random() * 90000000); // 验证码
// 模拟已注册号码
const registeredNumbers = ["1", "2", "3"];
const overlay = document.getElementById("overlay");

document.addEventListener("DOMContentLoaded", () => {
    // 模拟显示弹框
    setTimeout(() => {
        overlay.style.display = "flex";
    }, 500);

    // 模拟关闭弹框的逻辑
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });
});

// 切换登录和注册界面
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");
const switchToRegister = document.getElementById("switch-to-register");
const switchToLogin = document.getElementById("switch-to-login");
const registerButton = document.getElementById("register-btn");

const phoneInputLogin = document.getElementById("phone");
const codeInputLogin = document.getElementById("code");
const phoneInputRegister = document.getElementById("phone-register");
const codeInputRegister = document.getElementById("code-register");

const loginButton = document.getElementById("login-btn");

// 切换到注册界面
switchToRegister.addEventListener("click", () => {
    correctCode = Math.floor(100000 + Math.random() * 90000000); // 验证码重新打乱
    loginContainer.classList.add("hidden");
    registerContainer.classList.remove("hidden");
});

// 切换到登录界面
switchToLogin.addEventListener("click", () => {
    correctCode = Math.floor(100000 + Math.random() * 900000000); // 验证码重新打乱
    registerContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
});

// 模拟注册按钮自动跳回登录
registerButton.addEventListener("click", () => {
    alert("注册成功！请登录");
    registerContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
    // 初始化默认焦点
    phoneInputLogin.focus();

    // 切换到注册界面
    switchToRegister.addEventListener("click", function () {
        loginContainer.classList.add("hidden");
        registerContainer.classList.remove("hidden");
        phoneInputRegister.focus();
    });

    // 切换回登录界面
    switchToLogin.addEventListener("click", function () {
        registerContainer.classList.add("hidden");
        loginContainer.classList.remove("hidden");
        phoneInputLogin.focus();
    });

    // 键盘事件监听：方向键切换焦点，回车键移动到下一个输入框或提交按钮
    document.addEventListener("keydown", function (e) {
        const activeElement = document.activeElement;
        if (activeElement.tagName === "INPUT" || activeElement.tagName === "BUTTON") {
            const inputs = Array.from(document.querySelectorAll("input, button"));
            [inputs[1], inputs[2]] = [inputs[2], inputs[1]];
            [inputs[6], inputs[7]] = [inputs[7], inputs[6]];
            const currentIndex = inputs.indexOf(activeElement);

            if (e.key === "ArrowDown") {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % inputs.length;
                inputs[nextIndex].focus();
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + inputs.length) % inputs.length;
                inputs[prevIndex].focus();
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (activeElement.tagName === "BUTTON") {
                    activeElement.click();
                } else if (currentIndex + 1 < inputs.length) {
                    inputs[currentIndex + 1].focus();
                }
            }
        }
    });

    // 验证码校验
    function validateCode(inputElement, correctCode) {
        const inputValue = inputElement.value; // 当前输入的验证码

        let errorElement = null;
        if (inputElement === codeInputLogin)
            errorElement = document.getElementById("code-error"); // 获取隐藏的错误提示元素
        else {
            errorElement = document.getElementById("code-error-register");
        }

        if (inputValue !== correctCode && phoneInputLogin.value !== "") {
            // 验证码错误
            inputElement.classList.add("error"); // 添加红色边框或其他样式
            inputElement.value = ""; // 清空输入框
            errorElement.style.display = "block"; // 显示错误提示
        } else {
            // 验证码正确
            inputElement.classList.remove("error"); // 移除红色边框
            errorElement.style.display = "none"; // 隐藏错误提示
        }
    }

    // 检查电话号码是否已经注册
    function checkPhoneNumber(inputElement) {
        const phoneNumber = inputElement.value;
        const parent = inputElement.parentElement;
        const errorElement = parent.querySelector(".error-message");

        if (registeredNumbers.includes(phoneNumber)) {
            inputElement.classList.add("error");
            if (!errorElement) {
                const error = document.createElement("div");
                error.className = "error-message";
                error.style.color = "red";
                error.textContent = "该电话号码已注册，请更换号码";
                parent.appendChild(error);
            }
        } else {
            inputElement.classList.remove("error");
            if (errorElement) {
                parent.removeChild(errorElement);
            }
        }
    }

    // 验证码框校验事件
    codeInputLogin.addEventListener("blur", function () {
        validateCode(codeInputLogin,'' + correctCode);
    });

    codeInputRegister.addEventListener("blur", function () {
        validateCode(codeInputRegister, '' + correctCode);
    });

    // 电话号码框失去焦点事件（注册界面）
    phoneInputRegister.addEventListener("blur", function () {
        checkPhoneNumber(phoneInputRegister);
    });
});

// 获取按钮元素
const getCodeButtons = document.querySelectorAll('.get-code');

// 随机生成验证码（6位数）
function generateCaptcha() {
    return Math.floor(100000 + Math.random() * 900000);  // 生成一个6位随机数
}

// 点击按钮时弹出 alert 弹框显示验证码
getCodeButtons.forEach((getCodeButton)=>{
    getCodeButton.addEventListener('click', function() {
        correctCode = generateCaptcha();  // 生成验证码
        alert('验证码: ' + correctCode);  // 弹出包含验证码的 alert

        // 自动聚焦到输入框
        const inputElement = getCodeButton.closest('.input-group').querySelector('input');
        inputElement.value = "";
        inputElement.focus(); // 聚焦到验证码输入框
    });
});

// 获取密码输入框和错误提示元素
const passwordInput = document.getElementById("password-register");
const passwordAgainInput = document.getElementById("password-register-again");
const passwordError = document.getElementById("password-error");

// 监听密码输入框的输入事件，实时验证两次密码是否一致
function validatePasswords() {
    const password = passwordInput.value;
    const passwordAgain = passwordAgainInput.value;

    // 如果两次密码不一致，显示错误信息
    if (password !== passwordAgain && passwordAgain !== "") {
        passwordError.style.display = "block";
    } else {
        // 否则隐藏错误信息
        passwordError.style.display = "none";
    }
}

// 也可以考虑在密码框失去焦点时进行验证
passwordInput.addEventListener("blur", validatePasswords);
passwordAgainInput.addEventListener("blur", validatePasswords);

loginButton.addEventListener("click",()=>{
    overlay.style.display = "none";

    showCustomAlert("登录成功");
});

function showCustomAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    alertBox.textContent = message; // 设置弹框内容
    alertBox.style.display = 'block'; // 显示弹框

    // 0.5秒后自动关闭弹框
    setTimeout(function() {
        alertBox.style.display = 'none'; // 隐藏弹框
    }, 500); // 500 毫秒即 0.5 秒
}

const phoneLoginContainer = document.getElementById("phone-login-container");
const passwordLoginContainer = document.getElementById("password-login-container");

const switchToPassword = document.getElementById("switch-to-password");
const switchToPhone = document.getElementById("switch-to-phone");

// 切换到密码登录
switchToPassword.addEventListener("click", function (e) {
    e.preventDefault();
    phoneLoginContainer.classList.add("hidden");
    passwordLoginContainer.classList.remove("hidden");
});

// 切换到手机号登录
switchToPhone.addEventListener("click", function (e) {
    e.preventDefault();
    passwordLoginContainer.classList.add("hidden");
    phoneLoginContainer.classList.remove("hidden");
});
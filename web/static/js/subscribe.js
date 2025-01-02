function followBack(userId) {
    // 获取对应的按钮
    const followButton = document.querySelector(`#follow-btn-${userId}`);

    // 修改按钮内容
    followButton.textContent = '已关注';

    // 修改按钮样式（设置为灰色，禁用样式）
    followButton.style.backgroundColor = '#d3d3d3';  // 灰色背景
    followButton.style.cursor = 'not-allowed';  // 改为禁用鼠标样式
    followButton.disabled = true;  // 禁用按钮，防止多次点击
}

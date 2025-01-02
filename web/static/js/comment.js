// 切换显示/隐藏回复框
function toggleReplyBox(commentId) {
    const replyBox = document.getElementById(`reply-box-${commentId}`);
    if (replyBox.style.display === 'none' || replyBox.style.display === '') {
        replyBox.style.display = 'block';
    } else {
        replyBox.style.display = 'none';
    }
}

// 提交回复
function submitReply(commentId) {
    const replyText = document.getElementById(`reply-text-${commentId}`).value;

    if (replyText.trim() === '') {
        alert('请输入回复内容!');
        return;
    }

    // 模拟回复成功
    alert('回复成功!');

    // 清空回复框并隐藏
    document.getElementById(`reply-text-${commentId}`).value = '';
    document.getElementById(`reply-box-${commentId}`).style.display = 'none';
}

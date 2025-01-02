// 获取搜索框和下拉提示列表
const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestionsList');

// 当输入内容时显示提示项
function showSuggestions() {
    const query = searchInput.value.trim();

    if (query.length > 0) {
        // 如果有输入内容，显示下拉提示项并进行过滤
        suggestionsList.style.display = 'block';
        const items = suggestionsList.getElementsByTagName('li');
        for (let item of items) {
            const text = item.textContent.toLowerCase();
            if (text.includes(query.toLowerCase())) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    } else {
        // 如果没有输入内容，显示全部提示项
        suggestionsList.style.display = 'block'; // 显示下拉列表
        const items = suggestionsList.getElementsByTagName('li');
        for (let item of items) {
            item.style.display = 'block'; // 显示所有提示项
        }
    }
}

// 点击下拉项时，填充搜索框并隐藏提示项
suggestionsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        searchInput.value = e.target.textContent;
        suggestionsList.style.display = 'none';
    }
});

// 点击搜索框外部时隐藏提示项
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        suggestionsList.style.display = 'none';
    }
});

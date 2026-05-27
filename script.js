// ===== 手风琴卡片展开 =====
function expandCard(clickedCard) {
    const slider = document.getElementById('accordionSlider');
    const allCards = slider.querySelectorAll('.accordion-card');
    
    // 如果点击的已经是展开的，不做任何事
    if (clickedCard.classList.contains('active')) return;
    
    // 移除所有卡片的 active 状态
    allCards.forEach(card => {
        card.classList.remove('active');
    });
    
    // 给点击的卡片添加 active
    clickedCard.classList.add('active');
}

// ===== 故事卡片展开 =====
function toggleStory(card) {
    const isOpen = card.classList.contains('open');
    
    // 关闭其他
    document.querySelectorAll('.story-card.open').forEach(c => {
        if (c !== card) {
            c.classList.remove('open');
            const toggle = c.querySelector('.story-toggle');
            if (toggle) toggle.textContent = '展开 ↓';
        }
    });
    
    // 切换当前
    card.classList.toggle('open');
    const toggle = card.querySelector('.story-toggle');
    if (toggle) {
        toggle.textContent = isOpen ? '展开 ↓' : '收起 ↑';
    }
}

// ===== 导航栏滚动效果 =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== 自动轮播（可选）=====
// let autoplayIndex = 0;
// const autoplayInterval = setInterval(() => {
//     const cards = document.querySelectorAll('.accordion-card');
//     autoplayIndex = (autoplayIndex + 1) % cards.length;
//     expandCard(cards[autoplayIndex]);
// }, 5000);

// // 鼠标悬停时暂停
// document.querySelector('.accordion-slider').addEventListener('mouseenter', () => {
//     clearInterval(autoplayInterval);
// });

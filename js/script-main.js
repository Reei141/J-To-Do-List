const startBtn = document.querySelector('.start-btn');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        window.location.href = 'main-page.html';
    });
}

document.querySelector('.add-btn').addEventListener('click', () => {
    document.querySelector('.add-menu').classList.toggle('active');
});

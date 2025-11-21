// START BUTTON
const startBtn = document.querySelector('.start-btn');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        window.location.href = 'main-page.html';
    });
}

// ADD MENU TOGGLE
const addBtn = document.querySelector('.add-btn');
if (addBtn) {
    addBtn.addEventListener('click', () => {
        document.querySelector('.add-menu').classList.toggle('active');
    });
}

// OPEN POPUP FUNCTION (PAKE BLUR)
function openPop(type) {
    const pop = document.querySelector('.pop');
    const wrapper = document.querySelector('.wrapper');
    const title = document.querySelector('.pop-content h3');

    // Ganti judul popup sesuai tipe
    if (type === "daily") title.textContent = "Add Daily Task";
    if (type === "monthly") title.textContent = "Add Monthly Task";
    if (type === "on-date") title.textContent = "Add On-Date Task";

    pop.classList.add('active');
    wrapper.classList.add('inactive'); // blur aktif
}

// BUTTON DAILY
const addDaily = document.querySelector('.add-daily');
if (addDaily) {
    addDaily.addEventListener('click', () => {
        openPop("daily");
    });
}

// BUTTON MONTHLY (kalau ada)
const addMonthly = document.querySelector('.add-monthly');
if (addMonthly) {
    addMonthly.addEventListener('click', () => {
        openPop("monthly");
    });
}

// BUTTON ON-DATE
const addOnDate = document.querySelector('.add-on-date');
if (addOnDate) {
    addOnDate.addEventListener('click', () => {
        openPop("on-date");
    });
}

// CLOSE POPUP
const cancelBtn = document.querySelector('.cancel-btn');
if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
        document.querySelector('.pop').classList.remove('active');
        document.querySelector('.wrapper').classList.remove('inactive'); // hilangin blur
    });
}

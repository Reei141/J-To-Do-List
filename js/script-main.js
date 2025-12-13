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
    const tittle = document.querySelector('.pop-content h3');

    // Ganti judul popup sesuai tipe
    if (type === "daily") tittle.textContent = "Add Daily Task";
    if (type === "monthly") tittle.textContent = "Add Monthly Task";
    if (type === "on-date") tittle.textContent = "Add On-Date Task";

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

// SAVE TASK
const saveBtn = document.querySelector('.save-btn');
if( saveBtn) {
    saveBtn.addEventListener('click', () => {
        const input = document.querySelector('.task-input');
        const taskText = input.value.trim();
        const tittle = document.querySelector('.pop-content h3').textContent;

        if (taskText == "") {
            alert("tASK TIDAK BOLEH KOSONG!");
            return;
        }

        // Buat elemen task baru
        const newTask = document.createElement('div');
        newTask.classList.add('task-item');
        newTask.textContent = taskText;

        //Tentukan container berdasarkan tipe tugas
        if (tittle.includes("Daily")) {
            document.querySelector('.daily-tasks').appendChild(newTask);
        } else if (tittle.includes("Monthly")) {
            document.querySelector('.monthly-tasks').appendChild(newTask);
        } else if (tittle.includes("On-Date")) {
            document.querySelector('.on-date-tasks').appendChild(newTask);
        }

        //Reset input dan tutup popup
        input.value = "";
        document.querySelector('.pop').classList.remove('active');
        document.querySelector('.wrapper').classList.remove('inactive'); // hilangin blur
    });
}
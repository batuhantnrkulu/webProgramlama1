// DOM Elements

const user = document.querySelector('.user');
const sidebar =document.querySelector('.sidebar');

const sidebarWrapper = document.querySelector('.sidebar-cropper');
const xBtn = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

const postBtn = document.querySelector(".post-button");
const textBtn = document.querySelector(".text-button");
const modalWrapper = document.querySelector(".modal-cropper");
const modal = document.querySelector(".modal");
const postModalX = document.querySelector(".modal-header i");
const modalPostBtn = document.querySelector(".modal-header button");
const modalFooterPlus = document.querySelector(".modal-footer span");
const modalInput = document.querySelector(".modal-input");

/*********************/ 

postBtn.addEventListener("click", () => {
    modal.style.display = "block";
    modalWrapper.classList.add("modal-cropper-display");
});

textBtn.addEventListener("click", () => {
    modal.style.display = "block";
    modalWrapper.classList.add("modal-cropper-display");
});

const changeOpacity = x => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
}

postModalX.addEventListener("click", () => {
    modal.style.display = "none";
    modalWrapper.classList.remove("modal-cropper-display");

    if (modalInput.value !== "") {
        modalInput.value = "";
        changeOpacity(0.5);
    }
});

modalInput.addEventListener("keypress", e => {
    if (e.target.value !== "") {
        changeOpacity(1);
    }
});

modalInput.addEventListener("blur", e => {
    if (e.target.value === "") {
        changeOpacity(0.5);
    }
});

user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-cropper-display');
})

xBtn.addEventListener('click', () =>{
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-cropper-display');
})

const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lighTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

toggle.addEventListener('click', () => {
	circle.classList.toggle('move');
	Array.from(darkElements1).map(darkEl1 => darkEl1.classList.toggle('dark-version-1'));
	Array.from(darkElements2).map(darkEl2 => darkEl2.classList.toggle('dark-version-2'));
	Array.from(lighTexts).map(lighText => lighText.classList.toggle('light'));
	Array.from(borders).map(border => border.classList.toggle('border-color'));
});

$(".hover").mouseleave(
    function() {
        $(this).removeClass("hover");
    }
);
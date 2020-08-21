document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelectorAll(".modal");
    const options = {};
    const instances = M.Modal.init(modal, options);
});

function openModal() {
    const instance = M.Modal.getInstance(document.getElementById('modal-1'));
    instance.open();
}

function closeModal() {
    const instance = M.Modal.getInstance(document.getElementById('modal-1'));
    instance.close();
}


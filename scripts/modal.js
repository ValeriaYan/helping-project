const btnsForModals = document.querySelectorAll('[data-modal-btn]');
const cases = document.querySelectorAll('.case__content');
const modalWhitSlider = document.querySelector('.modal-slider');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelectorAll('.close-btn');

function openModal(dataModal) {
    overlay.classList.add('_active');
    modal.classList.add('_active');
    const requestBlock = modal.querySelector(`[data-modal='${dataModal}']`);
    requestBlock.classList.add('_active');
    document.body.classList.add('open-modal');
}

function closeModal() {
    overlay.classList.remove('_active');
    modal.classList.remove('_active');
    modalWhitSlider.classList.remove('_active');
    const requestBlock = modal.querySelector(`._active`);
    requestBlock?.classList.remove('_active');
    document.body.classList.remove('open-modal')
}

btnsForModals.forEach((btn) => {
    btn.addEventListener('click', () => {
        closeModal();
        openModal(btn.dataset.modalBtn);
    })
})

cases.forEach((c) => {
    c.addEventListener('click', () => {
        closeModal();
        modalWhitSlider.classList.add('_active');
        overlay.classList.add('_active');
        document.body.classList.add('open-modal');
    })
})

modal.addEventListener('click', (e) => {
    if(!e.target.closest('.modal__content')) {
        closeModal();
    }
})

modalWhitSlider.addEventListener('click', (e) => {
    if(!e.target.closest('.modal-slider__content')) {
        closeModal();
    }
})

closeModalBtn.forEach((btn) => {
    btn.addEventListener('click', () =>  closeModal())
})

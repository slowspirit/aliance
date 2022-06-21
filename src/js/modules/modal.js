export default function () {
    const headerBtn = document.querySelector('.header__btn');
    const modalWindow = document.querySelector('.modal');
    const modalWindowReuest = document.querySelector('.modal__window--request');
    const modalWindowThanks = document.querySelector('.modal__window--thanks');
    const modalInputName = document.getElementById('modalInputName');
    const modalInputPhone = document.getElementById('modalInputPhone');
    const requestInputName = document.getElementById('requestInputName');
    const requestInputPhone = document.getElementById('requestInputPhone');
    const closeBtn = document.querySelector('#closeBtn');
    const closeBtnImg = document.querySelector('#closeBtnImg');
    const closeBtnThx = document.querySelector('#closeBtnThx');
    const closeBtnImgThx = document.querySelector('#closeBtnImgThx');
    const formBtnSubmit = document.querySelector('#formBtnSubmit');
    const requestBtn = document.querySelector('#requestBtn');
    const body = document.querySelector('body');

    function openModal() {
        modalWindow.style.display = 'block';
        body.classList.add('overflow-hidden');
    }

    function refreshInputs() {


    }

    function refreshModal() {
        modalWindowReuest.style.display = 'block';
        modalWindowThanks.style.display = 'none';
    }

    function toThanksModal() {
        modalWindowReuest.style.display = 'none';
        modalWindowThanks.style.display = 'block';
    }

    function closeModal(e) {
        if (e.target.id === 'overlay' ||
            e.target == closeBtn ||
            e.target == closeBtnImg ||
            e.target == closeBtnThx ||
            e.target == closeBtnImgThx) {
            modalWindow.style.display = 'none';
            body.classList.remove('overflow-hidden');
            refreshModal();
        }
    }

    function veryfyInputName(input) {
        console.log(input.value);
        if (input.value === '') {
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = 'darkgreen';
            return 'checked';
        }
    }

    function veryfyInputPhone(input) {
        console.log(input.value);
        if (input.value.length !== 18) {
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = 'darkgreen';
            return 'checked';
        }
    }

    function veryfyInputsModal(name, phone) {
        if (name === 'checked' && phone === 'checked') {
            toThanksModal();
        }
    }

    function veryfyInputsRequest(name, phone) {
        if (name === 'checked' && phone === 'checked') {
            openModal();
            toThanksModal();
        }
    }

    headerBtn.addEventListener('click', openModal);
    modalWindow.addEventListener('click', closeModal);

    formBtnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        veryfyInputsModal(veryfyInputName(modalInputName), veryfyInputPhone(modalInputPhone));
    })

    requestBtn.addEventListener('click', (e) => {
        e.preventDefault();
        veryfyInputsRequest(veryfyInputName(requestInputName), veryfyInputPhone(requestInputPhone));
    });
}
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-icecream-open]"),
      closeModalBtn: document.querySelector("data-icecream-close]"),
      modal: document.querySelector("[data-icecream-menu]"),
      body: document.querySelector("body"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();
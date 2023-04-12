
var close = document.getElementsByClassName('close');
var openBtn = document.getElementsByClassName('openingModal');
Array.from(close, closeButton =>{
  closeButton.addEventListener('click',  e => e.target.parentNode.parentNode.style.diplay = 'none');
});
Array.from(openBtn, openButton => {
  openButton.addEventListener('click',  e => {
    let modalId = e.target.getAttribute('data-id');
    document.getElementById(modalId).style.display = 'flex';
  });
})





// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-buy-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })()

// function showWindow1() {
//   var wnd = $("#modal-one").data("kendoWindow");
//   wnd.title("Window 1");
//   wnd.center();
//   wnd.open();
// };

// function showWindow2() {
//   var wnd = $("#modal-two").data("kendoWindow");
//   wnd.title("Window 2");
//   wnd.center();
//   wnd.open();
// };

// $("#window2").kendoWindow({
//   width: "500px",
//   height: "160px",
//   modal: true,
//   draggable: true,
//   resizable: false,
//   visible: false
// });

// $("#window1").kendoWindow({
//   width: "500px",
//   height: "160px",
//   modal: true,
//   draggable: true,
//   resizable: false,
//   visible: false
// })

const buttons = [
  ...document.querySelectorAll(".cat")
];

const sections = [
  ...document.querySelectorAll(".section")
];

const products = [
  ...document.querySelectorAll(".product")
];


// ===============================
// فیلتر دسته‌بندی
// ===============================

buttons.forEach((btn) => {

  btn.addEventListener("click", () => {

    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    btn.classList.add("active");

    const filter = btn.dataset.filter;

    sections.forEach((section) => {

      if (
        filter === "all" ||
        section.dataset.section === filter
      ) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }

    });

  });

});


// ===============================
// جستجوی محصولات
// ===============================

document
  .getElementById("search")
  .addEventListener("input", (event) => {

    const query = event.target.value
      .trim()
      .toLowerCase();

    products.forEach((product) => {

      const name = product.dataset.name
        .toLowerCase();

      const content = product.innerText
        .toLowerCase();

      const matched =
        name.includes(query) ||
        content.includes(query);

      product.style.display = matched
        ? ""
        : "none";

    });

  });


// ===============================
// باز کردن Modal
// ===============================

function openModal(button) {

  const card = button.closest(".product");

  const img = card.querySelector(".photo img");

  const title = card
    .querySelector(".title")
    .innerText;

  const desc = card
    .querySelector(".desc")
    .innerText;

  const price = card
    .querySelector(".price")
    .innerText;


  const modal = document.getElementById("modal");

  const modalImg = document.getElementById("modalImg");

  const modalTitle = document.getElementById("modalTitle");

  const modalDesc = document.getElementById("modalDesc");

  const modalPrice = document.getElementById("modalPrice");


  modalImg.src = img ? img.src : "";

  modalImg.alt = title;

  modalTitle.innerText = title;

  modalDesc.innerText = desc;

  modalPrice.innerText = price;


  modal.classList.add("open");
}


// ===============================
// بستن Modal
// ===============================

function closeModal() {

  document
    .getElementById("modal")
    .classList.remove("open");

}


// ===============================
// بستن Modal با دکمه Escape
// ===============================

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
  }

});
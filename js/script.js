// Atualiza o ano do rodapé
document.getElementById('ano') && (document.getElementById('ano').textContent = new Date().getFullYear());

// --- Menu mobile ---
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal ul');
if (toggle) {
  toggle.addEventListener('click', () => menu.classList.toggle('show'));
}

// --- Modal de imagens ---
const modalHome = document.getElementById("modalHome");
const modalImgHome = document.getElementById("modalImgHome");
const closeModal = modalHome?.querySelector(".close");

if (modalHome && modalImgHome && closeModal) {
  document.querySelectorAll("#galeria .item img").forEach(img => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      modalHome.style.display = "flex";
      modalImgHome.src = img.src;
      document.body.style.overflow = "hidden";
    });
  });

  closeModal.addEventListener("click", () => {
    modalHome.style.display = "none";
    modalImgHome.src = "";
    document.body.style.overflow = "auto";
  });

  modalHome.addEventListener("click", (e) => {
    if (e.target === modalHome) {
      modalHome.style.display = "none";
      modalImgHome.src = "";
      document.body.style.overflow = "auto";
    }
  });
}

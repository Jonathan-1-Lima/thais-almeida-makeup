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
// --- Modal de vídeos da Home ---
const videoModal = document.getElementById("modalVideoHome");
const videoPlayer = document.getElementById("videoHomePlayer");
const closeVideo = videoModal?.querySelector(".close");

if (videoModal && videoPlayer && closeVideo) {
  // Quando o usuário clicar na miniatura do vídeo
  document.querySelectorAll(".video-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const videoSrc = thumb.dataset.video; // pega o caminho do vídeo
      if (videoSrc) {
        videoPlayer.querySelector("source").src = videoSrc;
        videoPlayer.load();
        videoPlayer.play();

        videoModal.style.display = "flex";
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Fechar o modal
  closeVideo.addEventListener("click", () => {
    videoModal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.querySelector("source").src = "";
    document.body.style.overflow = "auto";
  });

  // Fechar clicando fora do vídeo
  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      videoModal.style.display = "none";
      videoPlayer.pause();
      videoPlayer.querySelector("source").src = "";
      document.body.style.overflow = "auto";
    }
  });
}

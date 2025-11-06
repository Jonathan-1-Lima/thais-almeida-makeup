// script.js - interações do site
document.getElementById('ano') && (document.getElementById('ano').textContent = new Date().getFullYear());

// --- Menu toggle mobile ---
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal ul');
if (toggle) {
  toggle.addEventListener('click', () => menu.classList.toggle('show'));
}

// --- Botão "Agendar" (abre chat se já estiver na página de agendamento) ---
const agendarBtns = document.querySelectorAll('#agendar-btn, #agendar a');
agendarBtns.forEach(b => b.addEventListener('click', (e) => {
  const isAgendamentoPage = window.location.pathname.includes('agendamento.html');
  if (isAgendamentoPage) {
    e.preventDefault();
    try {
      if (window.botpressWebChat) {
        window.botpressWebChat.open();
      } else {
        const chat = document.getElementById('botpress-webchat');
        if (chat) chat.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      console.log('Botpress open failed', err);
    }
  }
}));

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

// --- Modal de vídeos (corrigido para usar o existente no HTML) ---
const videoModal = document.getElementById("modalVideoHome");
const videoPlayer = document.getElementById("videoHomePlayer");
const closeVideo = videoModal?.querySelector(".close");

if (videoModal && videoPlayer && closeVideo) {
  document.querySelectorAll(".video-thumb").forEach(v => {
    v.addEventListener("click", () => {
      videoModal.style.display = "flex";
      videoPlayer.src = v.dataset.video;
      videoPlayer.play();
      document.body.style.overflow = "hidden";
    });
  });

  closeVideo.addEventListener("click", () => {
    videoModal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.src = "";
    document.body.style.overflow = "auto";
  });

  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      videoModal.style.display = "none";
      videoPlayer.pause();
      videoPlayer.src = "";
      document.body.style.overflow = "auto";
    }
  });
}
// ====== Modal para ampliar imagem ======
document.querySelectorAll(".page-maquiagens .galeria img").forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal-maquiagem");
    modal.innerHTML = `
      <span class="close">&times;</span>
      <img src="${img.src}" alt="">
    `;
    document.body.appendChild(modal);
    modal.style.display = "flex";

    modal.querySelector(".close").addEventListener("click", () => modal.remove());
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.remove();
    });
  });
});

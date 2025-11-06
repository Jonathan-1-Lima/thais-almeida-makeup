// js/agendamento.js
document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('abrir-chat');

  if (botao) {
    botao.addEventListener('click', (e) => {
      e.preventDefault();

      // Abre o chat do Botpress
      window.botpressWebChat.sendEvent({ type: 'show' });

      // Envia mensagem inicial com as informações do site
      window.botpressWebChat.sendEvent({
        type: 'proactive-trigger',
        payload: {
          text: `
Olá! 👋 Sou a assistente da Thaís Almeida 💄✨

Antes de agendarmos seu horário, aqui vão algumas informações importantes:

💰 *Formas de pagamento:*
- Pix ✅
- Crédito (acréscimo de 6%)
- Débito (acréscimo de 3%)

🧴 *Observação para penteados:*
Não realizamos lavagem no salão. O cabelo deve estar limpo e de úmido a seco.

Deseja continuar para confirmar seu horário?
          `
        }
      });
    });
  }
});

document.getElementById('abrirChat').addEventListener('click', function(e) {
  e.preventDefault();

  // Abre o chat do Botpress se ainda não estiver aberto
  if (window.botpressWebChat) {
    window.botpressWebChat.sendEvent({
      type: 'show'
    });

    // Inicia o fluxo "Agendamento"
    window.botpressWebChat.sendEvent({
      type: 'proactive-trigger',
      channel: 'web',
      payload: {
        text: 'agendar'
      }
    });
  } else {
    alert('O assistente Belle está carregando... tente novamente em alguns segundos.');
  }
});

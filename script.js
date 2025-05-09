// Script para o ano atual no rodapé
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Exemplo de funcionalidade para FAQ (expandir/recolher respostas)
// Pode ser aprimorado ou usar bibliotecas prontas
const faqItems = document.querySelectorAll('.faq-item h3');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// Adicionar aqui outros scripts, como validação de formulário, animações suaves de scroll, etc.

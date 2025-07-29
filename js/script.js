const thumbnails = document.querySelectorAll('.imgs-galeria img');
const imagemPrincipal = document.getElementById('imagem-principal');

thumbnails.forEach(img => {
    img.addEventListener('click', () => {
        // Atualiza imagem, titulo e descrição
        const novaSrc = img.getAttribute('src');

        // Remove a classe 'ativo' de todas as miniaturas
        thumbnails.forEach(thumbnail => thumbnail.classList.remove('ativo'));
        
        // Adiciona a classe 'ativo' na miniatura clicada
        img.classList.add('ativo');

        imagemPrincipal.src = novaSrc;
    })
})

// Define a imagem como ativa
if(thumbnails.length > 0){
    thumbnails[0].classList.add('ativo');
}

// Configurações do botão do WhatsApp fixo no canto inferior
window.addEventListener('scroll', function(){
    const btn = document.getElementById('whatsapp-btn');
    const scrollY = window.scrollY;

    // Define o ponto onde o botão aparece
    if(scrollY > 200){
        btn.classList.add('show');
    } else{
        btn.classList.remove('show');
    }
});

// Animação das sections
function animarAoScroll() {
    const elementos = document.querySelectorAll('[data-anima]');
    const windowTop = window.scrollY + window.innerHeight * 0.85;

    elementos.forEach(el => {
        if (el.offsetTop < windowTop) {
            el.classList.add('animado');
        }
    });
}

window.addEventListener('scroll', animarAoScroll);
window.addEventListener('load', animarAoScroll);

// Fecha o menu quando um link do NAV é clicado
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide();
    });
});
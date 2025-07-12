const thumbnails = document.querySelectorAll('.imgs-galeria img');
const imagemPrincipal = document.getElementById('imagem-principal');
const tituloPrincipal = document.getElementById('titulo-principal');
const descricaoPrincipal = document.getElementById('descricao-principal');

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
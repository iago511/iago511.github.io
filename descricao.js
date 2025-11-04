// Espera a pagina carregar
window.onload = function() {
    //aqui ele pega aquela parte da ? para saber que filme é
    const urlParams = new URLSearchParams(window.location.search);
    //aqui pego o nome dele
    const idDoFilme = urlParams.get('filme'); 
    //crio um contante que recebe os dados do banco respectivo ao filme
    const filmeData = filmesDB[idDoFilme];
    //se tiver filme vou pegar os dados dele
    if (filmeData) {
        document.getElementById('filme-titulo').innerText = filmeData.titulo;
        document.getElementById('filme-nota').innerText = 'Nota: ' + filmeData.nota;
        document.getElementById('filme-descricao').innerText = filmeData.descricao;
        document.getElementById('filme-trailer').src = filmeData.trailerUrl;
       
    } else {
        document.getElementById('filme-titulo').innerText = "Filme não encontrado";
        document.getElementById('filme-descricao').innerText = "O filme que você está procurando não existe ou a URL está incorreta.";
    }
};
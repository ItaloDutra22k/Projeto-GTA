let nome = document.querySelector(".nome")
    let personagem = document.querySelector(".personagem")

    function escolherPersonagem(nomePersonagem, imagemPersonagem, cor){

    nome.innerHTML = nomePersonagem
    personagem.src = imagemPersonagem
    nome.style.color = cor
}

function escolherPersonagem(nomePersonagem, imagemPersonagem, cor){

    nome.innerHTML = nomePersonagem
    personagem.src = imagemPersonagem
    nome.style.color = cor
}


function lerFoto(foto){
// ALERTA - ESSA PARTE É CHATINHA, ENTÃO ME ACOMPANHA
// TEM COISAS QUE VOCE NAO TEM QUE ENTENDER AGORA, SÓ FAZ
// BOMBA, POMBA ? ANTES DE P e B é M
// onchange() = quando mudar algo, faça algo
// onclick() = quando clicar em algo, faça algo
// onload() = quando carregar algo, faça algo
// toda vez que eu tenho que ir no SERVIDOR - ASYNC / AWAIT 

let leitor = new FileReader() // FileReader = Leitor de arquivos
leitor.readAsDataURL(foto.files[0]) // readAsDataURL = fiz a leitura da foto, e transformei em URL (link)

leitor.onload = async function(){

  let desenho =  await puter.ai.txt2img("Transforme a pessoa desta foto em um personagem de videogame: contorno preto grosso, cores vivas, meio corpo, mantendo o rosto parecido. Fundo totalmente transparente: sem cenário, sem chão e sem sombra.", 
        {
            model: "replicate:openai/gpt-image-2.5-flare",
            provider: "openai",
            input_image: leitor.result,
            quality: "medium",
            providerOptions: { background: "transparent" }
        })

    escolherPersonagem("Você", desenho, '#b9b604')
}

}

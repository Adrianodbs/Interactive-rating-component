const circulo = document.querySelectorAll('.circulo')
const botao = document.querySelector('#botao')
const card = document.querySelector('#principal')

circulo.forEach(nota => {
  nota.addEventListener('click', () => {
    const notaSelecionada = document.querySelector('.ativo')

    notaSelecionada.classList.remove('ativo')
    nota.classList.add('ativo')
  })
})

function votar() {
  botao.addEventListener('click', () => {
    const notaSelecionada = document.querySelector('.ativo')
    card.classList.add('votado')
    card.innerHTML = `    
    <img
      class="img-votado"
      src="./images/illustration-thank-you.svg"
      alt="Obrigado"
    />
    <span class="span-votado">Você selecionou ${notaSelecionada.textContent} de 5</span>
    <h3 class="h3-votado">Obrigado</h3>
    <p class="p-votado">
      Nós agradecemos muito a sua partipação, sua nota vai nos ajudar a
      melhorar os nossos serviços
    </p>

    `
  })
}

votar()

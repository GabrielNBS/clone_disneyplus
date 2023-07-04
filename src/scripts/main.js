document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); // Seleciona todos os botões das abas
    const questions  = document.querySelectorAll('[data-faq-question]'); // Seleciona todas as perguntas do FAQ

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight; // Obtém a altura da seção hero

    // Função que verifica a posição do scroll e oculta/exibe os elementos do header conforme necessário
    function verificaPosicaoScroll() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosHeader();
        } else {
            exibeElementosDoHeader();
        }
    }

    // Função que oculta os elementos do header
    function ocultaElementosHeader() {
        const header = document.querySelector('header');

        header.classList.add('header--is-hidden');
    }

    // Função que exibe os elementos do header
    function exibeElementosDoHeader() {
        const header = document.querySelector('header');

        header.classList.remove('header--is-hidden');
    }

    // Função que abre ou fecha a resposta de uma pergunta do FAQ
    function abreOuFechaResposta(elemento) {
        const classe = 'faq__questions__item--is-open';
        const elementoPai = elemento.target.parentNode;

        elementoPai.classList.toggle(classe);
    }

    // Função que remove a classe ativa dos botões das abas
    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active');
        }
    }

    // Função que esconde todas as abas
    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }

    // Chama a função ao carregar a página para garantir que os elementos do header estejam corretos inicialmente
    verificaPosicaoScroll();

    // Adiciona o event listener para verificar a posição do scroll e atualizar os elementos do header
    window.addEventListener('scroll', verificaPosicaoScroll);

    // Programação das abas da seção de atrações
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            escondeTodasAbas(); // Esconde todas as abas
            aba.classList.add('shows__list--is-active'); // Exibe a aba selecionada
            removeBotaoAtivo(); // Remove a classe ativa dos botões das abas
            botao.target.classList.add('shows__tabs__button--is-active'); // Adiciona a classe ativa ao botão clicado
        });
    }

    // Acordeão do FAQ
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});

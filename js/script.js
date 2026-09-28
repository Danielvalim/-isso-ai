const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual sua opinião sobre a prova da SAEB?",
        alternativas: [
            {
                texto: "Muito ruim!",
                afirmacao: "O governo precionou muito os alunos com muitos simulados deixando-os cansados."
            },
            {
                texto: "Muito bom para os alunos e professores!",
                afirmacao: "Garante mais aprendizado e conhecimento."
            }
        ]
    },
    {
        enunciado: "Você acha que foi bom a mudança do novo Ensino Médio?",
        alternativas: [
            {
                texto: "Não, péssima escolha!",
                afirmacao: "Foi uma mudança mal planejada que pode afetar os alunos futuramente.",
            },
            {
                texto: "Sim, uma boa escolha!.",
                afirmacao: "Uma escolha que ajuda os jovens a se dedicarem mais no ramo de estudos que apreciam e que planejam em seu futuro utilizar."
            }
        ]
    },
    {
        enunciado: "Qual sua conclusão sobre se ter dois professores em sala de aula na matéria de recomposição?",
        alternativas: [
            {
                texto: "Muito bom.",
                afirmacao: "Ajuda os alunos pois enquanto um professor explica a aula o outro pode tirar dúvidas dos alunos."
            },
            {
                texto: "Ruim.",
                afirmacao: "Não da certo pois cada um tem um jeito de explicar."
            }
        ]
    },
    {
        enunciado: "O colégio tem boas refeições?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "São boas e todos os alunos gostam."
            },
            {
                texto: "Não.",
                afirmacao: "Poderiam melhorar."
            }
        ]
    },
    {
        enunciado: "No colégio você pratica bastante atividades diferentes que incluem os conteúdos de aprendizado? ",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Os professores fazem isso o que ajuda na aprendizagem."
            },
            {
                texto: "Não.",
                afirmacao: "A maioria não faz atividades diferenciadas. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
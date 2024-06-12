import { Actor, Color, Engine, Keys, Scene, SceneActivationContext, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {
    // Declaração do elemento texto sobre gamificação
    elementoTextoGamificacao?: HTMLElement

    // Método para esmaecer um elemento HTML
    fadeOutElement(elemento: HTMLElement) {
        // Pegar opacidade do elemento HTML
        let opacidade = parseFloat(elemento.style.opacity)

        // Repetir diminuição da opacidade
        setInterval(() => {
            // Se elemento ainda está visível
            if (opacidade > 0) {
                // Diminuir a opacidade
                opacidade -= 0.03
    
                // Atualizar a opacidade do elemento
                elemento.style.opacity = opacidade.toString()
            }
        }, 20)
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        // Criar elemento com o texto sobre gamificação
        this.elementoTextoGamificacao = document.createElement("div") as HTMLElement

        // Definir opacidade do elemento para 1 - visível
        this.elementoTextoGamificacao.style.opacity = "1"

        // Inserir elementoTextoGamificacao no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame?.appendChild(this.elementoTextoGamificacao)

        // Adicionar classe na div criada (elementoTextoGamificacao)
        this.elementoTextoGamificacao.classList.add("sobre-gamificacao")

        // Adicionar título e parágrafo dentro do conteúdo da div
        this.elementoTextoGamificacao.innerHTML = `<h2>O que é gamificação?</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.</p>`

        this.elementoTextoGamificacao.classList.add("gamificacao")

        // Adicionar imagem de gamificação
        //Configurar actor da imagem de gamificação
        let actorImagemGamificacao = new Actor({
            pos: vec(300, engine.halfDrawHeight)
        })

        //Carregando a imagem de gamificação
        let imagemGamificacao = Resources.Gamificacao.toSprite()
        imagemGamificacao.scale = vec(0.7, 0.7)

        // Adicionar a imagem no actor
        actorImagemGamificacao.graphics.add(imagemGamificacao)

        // Renderizar o actor na cena
        this.add(actorImagemGamificacao)

        // Configurar a cena para monitorar o evento de tecla pressionada
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                // Criar transição suave do elemento texto / ? - elemento pode ser indefinido/nulo; ! - diz que o elemento não vai ser nulo
                this.fadeOutElement(this.elementoTextoGamificacao!)

                // Direcionar para a próxima cena
                engine.goToScene("exposicao")
            }
        })
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementoTextoGamificacao?.remove()
    }
}
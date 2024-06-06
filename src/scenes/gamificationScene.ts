import { Actor, Color, Engine, Scene, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {
    // Declaração do elemento texto sobre gamificação
    elementoTextoGamificacao?: HTMLElement

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        // Criar elemento com o texto sobre gamificação
        this.elementoTextoGamificacao = document.createElement("div") as HTMLElement

        // Definir opacidade do elemento para 1 - visível
        this.elementoTextoGamificacao.style.opacity = "1"

        // Inserir elementoTextoGamificacao no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTextoGamificacao)

        // Adicionar classe na div criada (elementoTextoGamificacao)
        this.elementoTextoGamificacao.classList.add("sobre-gamificacao")

        // Adicionar título e parágrafo dentro do conteúdo da div
        this.elementoTextoGamificacao.innerHTML = `<h2>O que é gamificação?</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.</p>`

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
    }
}
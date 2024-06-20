import { Actor, CollisionType, Color, Engine, FadeInOut, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";
import { npc } from "../actors/npc";

export class expoScene extends Scene {
    // Ao entrar ou sair da cena, utiliza o feito transição lenta
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        // Ativar o modo de debug
        engine.toggleDebug()

        // Carregar musica de fundo (BGM) - Background Music
        let musicaFundo = Resources.RitmadaBGM
        
        // Configurar a musica e executar
        musicaFundo.loop = true
        // musicaFundo.play(0.5)

        // Carregar o mapa
        let tiledMap = Resources.Mapa

        // Definir offset para renderização do mapa 
        let offsetX = 138
        let offsetY = 100

        // Adicionar o mapa na cena
        tiledMap.addToScene(this, {
            pos: vec(offsetX, offsetY),
        })

        // Definir zoom da camera para aumentar um pouco a visualização
        this.camera.zoom = 1.4

        // Carregar spawn point do player
        let spawnPoint = tiledMap.getObjectsByName("player_spawn")[0]

        // Criação e configuração do Player
        let jogador = new Player(vec(spawnPoint.x + offsetX, spawnPoint.y + offsetY))

        // Define z-index do player, útil se algum outro elemento ficar "por cima" do jogador
        jogador.z = 1

        // Adicionar o player na cena
        this.add(jogador)

        // Pegar Spawn Point dos NPCs
        let npcSpawnPointA = tiledMap.getObjectsByName("npc_a")[0]
        let npcSpawnPointB = tiledMap.getObjectsByName("npc_b")[0]
        let npcSpawnPointC = tiledMap.getObjectsByName("npc_c")[0]

        // Configurar NPC
        let npcA = new npc (
            vec(npcSpawnPointA.x + offsetX, npcSpawnPointA.y + offsetY),
            npcSpawnPointA.tiledObject.name!
        )

        let npcB = new npc (
            vec(npcSpawnPointB.x + offsetX, npcSpawnPointB.y + offsetY),
            npcSpawnPointB.tiledObject.name!
        )

        let npcC = new npc (
            vec(npcSpawnPointC.x + offsetX, npcSpawnPointC.y + offsetY),
            npcSpawnPointC.tiledObject.name!
        )
        
        // Adicionar os NPCs
        this.add(npcA)
        this.add(npcB)
        this.add(npcC)

        // Focar a camera no Player
        this.camera.strategy.lockToActor(jogador)
        // this.camera.zoom = 2

        // Adicionar colisão com cada objeto
        // Pegar a camada de objetos colisores, como retorna um array, seleciona só o primeiro
        let camadaObjetosColisores = tiledMap.getObjectLayers("ObjetosColisores")[0]

        console.log(camadaObjetosColisores);

        // Percorrer os objetos com foreach e para cada objeto, renderizar um actor
        camadaObjetosColisores.objects.forEach(objeto => {
            // Configurar o actor
            const objetoAtual = new Actor({
                name: objeto.name,
                x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
                y: objeto.y + offsetY + (objeto.tiledObject.height! / 2),
                width: objeto.tiledObject.width,
                height: objeto.tiledObject.height,
                collisionType: CollisionType.Fixed,
                //color: Color.Red
                // z: 99
            })

            // Adicionar o colisor do objeto na cena
            this.add(objetoAtual)
        })
    }
}
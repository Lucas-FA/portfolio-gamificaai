import { Actor, Animation, CollisionType, Color, Engine, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../resources";

export class npc extends Actor {
    constructor(posicao: Vector, cor: Color, nome: string) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: nome,
            color: cor,
            collisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine: Engine<any>): void {
        // Criar as animações
        const duracaoFrameAnimacao = 70

        // Animações Idle
        // Importa SpriteSheet do NPC A
        const npcASpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.NpcASpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            }, 
            spacing: {
                originOffset: {
                    // espaço no topo do sprite
                    y: 0
                }
            }
        })

        // Idle baixo NPC A
        const downIdleNpcA = new Animation({
            frames:[
                {graphic: npcASpriteSheet.getSprite(18, 1)},
                {graphic: npcASpriteSheet.getSprite(19, 1)},
                {graphic: npcASpriteSheet.getSprite(20, 1)},
                {graphic: npcASpriteSheet.getSprite(21, 1)},
                {graphic: npcASpriteSheet.getSprite(22, 1)},
                {graphic: npcASpriteSheet.getSprite(23, 1)}
            ], frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-idle-npca", downIdleNpcA)

        // Importa SpriteSheet do NPC B
        const npcBSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.NpcBSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            }, 
            spacing: {
                originOffset: {
                    // espaço no topo do sprite
                    y: 0
                }
            }
        })

        // Idle baixo NPC B
        const downIdleNpcB = new Animation({
            frames:[
                {graphic: npcBSpriteSheet.getSprite(18, 1)},
                {graphic: npcBSpriteSheet.getSprite(19, 1)},
                {graphic: npcBSpriteSheet.getSprite(20, 1)},
                {graphic: npcBSpriteSheet.getSprite(21, 1)},
                {graphic: npcBSpriteSheet.getSprite(22, 1)},
                {graphic: npcBSpriteSheet.getSprite(23, 1)}
            ], frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-idle-npcb", downIdleNpcB)

        // Importa SpriteSheet do NPC C
        const npcCSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.NpcCSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            }, 
            spacing: {
                originOffset: {
                    // espaço no topo do sprite
                    y: 0
                }
            }
        })

        // Idle baixo NPC C
        const downIdleNpcC = new Animation({
            frames:[
                {graphic: npcCSpriteSheet.getSprite(18, 1)},
                {graphic: npcCSpriteSheet.getSprite(19, 1)},
                {graphic: npcCSpriteSheet.getSprite(20, 1)},
                {graphic: npcCSpriteSheet.getSprite(21, 1)},
                {graphic: npcCSpriteSheet.getSprite(22, 1)},
                {graphic: npcCSpriteSheet.getSprite(23, 1)}
            ], frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-idle-npcc", downIdleNpcC)
    }
}
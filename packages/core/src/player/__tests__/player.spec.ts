import { PlayerType } from "../../shared/PlayerTyper";
import { PlayerProps, Player } from "../Player";

describe('Classe Player', () => {
    let playerProps: PlayerProps;

    beforeEach(() => {
        playerProps = {
            name: 'John Doe',
            type: PlayerType.O,
            score: 50,
        };
    });

    describe('Método construtor', () => {
        it('deve criar um jogador com pontuação padrão se não fornecida', () => {
            const player = new Player({
                name: 'Alice',
                type: PlayerType.X,
                score: 0,
            });

            expect(player.name).toBe('Alice');
            expect(player.type).toBe(PlayerType.X);
            expect(player.score).toBe(0);
        });

        it('deve criar um jogador com as propriedades fornecidas', () => {
            const player = new Player(playerProps);

            expect(player).toEqual(playerProps);
        });
    });

    describe('Método addScore', () => {
        it('deve retornar o mesmo jogador se a pontuação a ser adicionada for 0', () => {
            const player = new Player(playerProps);
            const newPlayer = player.addScore(0);

            expect(newPlayer).toEqual(player);
        });

        it('deve adicionar corretamente a pontuação ao jogador', () => {
            const player = new Player(playerProps);
            const newPlayer = player.addScore(30);

            expect(newPlayer).toEqual({
                name: playerProps.name,
                type: playerProps.type,
                score: playerProps.score + 30,
            });
        });
    });

    describe('Método clear', () => {
        it('deve criar um novo jogador com o mesmo nome e tipo, mas com pontuação 0', () => {
            const player = new Player(playerProps);
            const clearedPlayer = player.clear();

            expect(clearedPlayer).toEqual({
                name: playerProps.name,
                type: playerProps.type,
                score: 0,
            });
        });
    });
});

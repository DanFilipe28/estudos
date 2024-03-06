import { PlayerType } from "../shared/PlayerTyper";

export type PlayerProps = {
    name: string;
    type: PlayerType;
    score: number;
}
export class Player { 
    readonly name: string;
    readonly type: PlayerType;
    readonly score: number;

    constructor(props: PlayerProps) {
        this.name = props.name;
        this.type = props.type;
        this.score = props.score ?? 0;
    }
    addScore(score: number) {
        if(score === 0) return this;
        return new Player({
            name: this.name,
            type: this.type,
            score: this.score + score
        });
    }

    clear() {
        return new Player({
            name: this.name,
            type: this.type,
            score: 0
        });
    }

}
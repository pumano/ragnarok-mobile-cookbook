import { Monster } from './Monster';

export class Ingredient {
    constructor(
        readonly name: string,
        readonly type: 'common' | 'rare',
        readonly image?: string,
        public monsters?: string[],
        public monsterList?: Monster[]
    ) {}
}
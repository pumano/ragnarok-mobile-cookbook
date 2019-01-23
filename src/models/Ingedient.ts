import { Monster } from './Monster';

export class Ingredient {
    constructor(
        // readonly id: number,
        readonly name: string,
        readonly image?: string,
        public monsters?: any[],
    ) {}
}
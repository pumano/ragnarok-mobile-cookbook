import { Monster } from './Monster';

export class Ingredient {
    constructor(
        readonly name: string,
        readonly image?: string,
        public monsters?: any[],
    ) {}
}
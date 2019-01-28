import { Ingredient } from './Ingredient';

export class Recipe {
    constructor(
        public id?: number,
        readonly name?: string,
        readonly description?: string,
        readonly image?: string,
        readonly type?: 'Luxury Worktop' | 'Wild Life BBQ' | 'Pressure Cooker' | 'Beverage Stall',
        readonly stars?: number,
        readonly lvl?: number,
        public ingredients?: string[],
        public ingredientList?: Ingredient[]
    ) {}
}
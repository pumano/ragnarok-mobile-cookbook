export class Recipe {
    constructor(
        readonly name: string,
        readonly description: string,
        readonly image?: string,
        readonly type?: 'Luxury Worktop' | 'Wild Life BBQ' | 'Pressure Cooker' | 'Beverage Stall',
        readonly stars?: number,
        readonly lvl?: number,
        public ingredients?: any[],
    ) {}
}
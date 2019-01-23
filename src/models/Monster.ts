export class Monster {
    constructor(
        readonly name: string,
        readonly image?: string,
        readonly lvl?: number,
        readonly locations?: string[],
    ) {}
}
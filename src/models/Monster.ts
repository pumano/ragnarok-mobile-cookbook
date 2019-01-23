export class Monster {
    constructor(
        // readonly id: number,
        readonly name: string,
        readonly image?: string,
        readonly lvl?: number,
        readonly locations?: string[],
    ) {}
}
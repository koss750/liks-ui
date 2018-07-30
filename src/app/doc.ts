export class Doc {
    number: number;
    type: string;
    id: string;
    link: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
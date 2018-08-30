export class Programme {
    id: string;
    reference: string;
    name: string;
    start: string;
    end: string;
    destination: string;
    score: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
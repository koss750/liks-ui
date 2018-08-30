export class Doc {
    number: number;
    type: string;
    id: string;
    link: string;
    issued_by: string;
    issued_by_code: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
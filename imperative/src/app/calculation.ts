export interface Calculation {
    name: string;
    operator: string;
    operation: { (param1, param2): number };
}

export class Addition implements Calculation {
    name: string;
    operator: string;

    constructor() {
        this.name = 'Add';
        this.operator = '+';
    }

    operation(param1, param2): number {
        return param1 + param2;
    }
}

export class Subtraction implements Calculation {
    name: string;
    operator: string;

    constructor() {
        this.name = 'Subtract';
        this.operator = '-';
    }

    operation(param1, param2): number {
        return param1 - param2;
    }
}

export class Multiplication implements Calculation {
    name: string;
    operator: string;

    constructor() {
        this.name = 'Multiply';
        this.operator = 'x';
    }

    operation(param1, param2): number {
        return param1 * param2;
    }
}

export class Division implements Calculation {
    name: string;
    operator: string;

    constructor() {
        this.name = 'Divide';
        this.operator = '÷';
    }

    operation(param1, param2): number {
        return param1 / param2;
    }
}

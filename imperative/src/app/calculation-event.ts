import {Calculation} from './calculation';

export class CalculationEvent {
    calculation: Calculation;
    parameters: Array<number>;

    constructor(calculation, params) {
        this.calculation = calculation;
        this.parameters = params;
    }
}

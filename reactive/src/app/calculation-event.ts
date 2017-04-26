import {Calculation} from './calculation';

export class CalculationEvent {
    public calculation: Calculation;
    public parameters: Array<number>;

    constructor(calculation, params) {
        this.calculation = calculation;
        this.parameters = params;
    }
}

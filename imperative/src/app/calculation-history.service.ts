import {Injectable} from '@angular/core';
import {CalculationEvent} from './calculation-event';
import {Calculation} from './calculation';

@Injectable()
export class CalculationHistoryService {
    calculationHistory: Array<CalculationEvent>;

    constructor() {
        this.calculationHistory = Array<CalculationEvent>();
    }

    addCalculation(calculation: Calculation, params: Array<number>) {
        this.calculationHistory.push(new CalculationEvent(calculation, params));
    }
}

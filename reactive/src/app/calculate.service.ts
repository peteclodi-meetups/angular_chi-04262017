import { Injectable } from '@angular/core';
import {CalculationEvent} from './calculation-event';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CalculateService {
    eventSubject: BehaviorSubject<CalculationEvent>;
    resultSubject: BehaviorSubject<number>;

    constructor() {
        this.eventSubject = new BehaviorSubject(undefined);
        this.resultSubject = new BehaviorSubject(0);
    }

    performCalculation(calculationEvent: CalculationEvent): void {
        this.resultSubject.next(calculationEvent.calculation.operation(calculationEvent.parameters[0], calculationEvent.parameters[1]));
        this.eventSubject.next(calculationEvent);
    }
}

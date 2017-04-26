import {Injectable} from '@angular/core';
import {CalculationEvent} from './calculation-event';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {CalculateService} from './calculate.service';

@Injectable()
export class CalculationHistoryService {
    calculationHistory: Array<CalculationEvent>;
    historySubject: ReplaySubject<CalculationEvent>;

    constructor(calculateService: CalculateService) {
        this.calculationHistory = new Array<CalculationEvent>();
        this.historySubject = new ReplaySubject();
        calculateService.eventSubject.subscribe(calculationEvent => this.addCalculation(calculationEvent));
    }

    addCalculation(calculationEvent: CalculationEvent) {
        if(calculationEvent) {
            // Potentially perform some more interesting actions on this stored data
            this.calculationHistory.push(calculationEvent);
            this.historySubject.next(calculationEvent);
        }
    }
}

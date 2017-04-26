import {Component, OnInit} from '@angular/core';
import {CalculationEvent} from '../calculation-event';
import {CalculationHistoryService} from '../calculation-history.service';

@Component({
   selector: 'calculation-history',
   templateUrl: './calculation-history.component.html',
   styleUrls: ['./calculation-history.component.scss']
})

export class CalculationHistoryComponent implements OnInit {

    calculationHistory: Array<CalculationEvent>;
    calculationHistoryService: CalculationHistoryService;

    constructor(calculationHistoryService: CalculationHistoryService) {
        this.calculationHistory = new Array<CalculationEvent>();
        this.calculationHistoryService = calculationHistoryService;
    }

    ngOnInit() {
        this.calculationHistoryService.historySubject.subscribe(calculationEvent => this.processHistoryUpdate(calculationEvent));
    }

    processHistoryUpdate(calculationEvent: CalculationEvent) {
        if(calculationEvent) {
            this.calculationHistory.push(calculationEvent);
        }
    }
}

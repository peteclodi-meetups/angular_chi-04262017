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
        this.calculationHistory = undefined;
        this.calculationHistoryService = calculationHistoryService;
    }

    ngOnInit() {
        // This is a HUGE Pull action
        // If you find yourself doing this then you need to re-evaluate the architecture of this flow
        // But, we'll keep it here to illustrate the totally contrived example of Imperative Programming
        setInterval(() => {
            this.calculationHistory = this.calculationHistoryService.calculationHistory;
        }, 500);
    }
}

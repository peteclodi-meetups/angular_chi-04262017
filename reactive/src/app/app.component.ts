import {Component, OnInit} from '@angular/core';
import {Calculation, Addition, Subtraction, Multiplication, Division} from './calculation';
import {CalculationHistoryService} from './calculation-history.service';
import {CalculateService} from './calculate.service';
import {Observable} from 'rxjs/Observable';
import {CalculationEvent} from './calculation-event';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = 'Reactive Programming Example';
    calculationHistoryService: CalculationHistoryService;
    value1: number;
    value2: number;
    result: Observable<number>;
    selectedCalculation: Calculation;
    calculations: Array<Calculation>;
    calculateService: CalculateService;

    constructor(calculationHistoryService: CalculationHistoryService, calculateService: CalculateService) {
        this.calculationHistoryService = calculationHistoryService;
        this.calculations = new Array<Calculation>();
        this.calculateService = calculateService;
        this.result = this.calculateService.resultSubject;
    }

    ngOnInit() {
        this.value1 = this.value2 = 0;
        this.calculations.push(new Addition(), new Subtraction(), new Multiplication(), new Division());
        this.selectedCalculation = this.calculations[0];
    }

    calculationParamChanged() {
        if(this.selectedCalculation && (this.value1 !== null || this.value1 !== undefined) && (this.value2 !== null || this.value2 !== undefined)) {
            this.calculateService.performCalculation(new CalculationEvent(this.selectedCalculation, new Array<number>(this.value1, this.value2)));
        }
    }
}

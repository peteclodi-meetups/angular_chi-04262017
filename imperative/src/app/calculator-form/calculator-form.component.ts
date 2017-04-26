import { Component, OnInit } from '@angular/core';
import {Addition, Calculation, Division, Multiplication, Subtraction} from '../calculation';
import {CalculationHistoryService} from '../calculation-history.service';

@Component({
  selector: 'calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss']
})
export class CalculatorFormComponent implements OnInit {
    calculationHistoryService: CalculationHistoryService;
    value1: number;
    value2: number;
    result: number;
    selectedCalculation: Calculation;
    calculations: Array<Calculation>;

    constructor(calculationHistoryService: CalculationHistoryService) {
        this.calculationHistoryService = calculationHistoryService;
        this.calculations = new Array<Calculation>();
    }

    ngOnInit() {
        this.value1 = this.value2 = this.result = 0;
        this.calculations.push(new Addition(), new Subtraction(), new Multiplication(), new Division());
        this.selectedCalculation = this.calculations[0];
    }

    calculate() {
        this.result = this.selectedCalculation.operation(this.value1, this.value2);
        this.calculationHistoryService.addCalculation(this.selectedCalculation, new Array<number>(this.value1, this.value2));
    }
}

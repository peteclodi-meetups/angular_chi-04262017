import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdInputModule,
    MdOptionModule,
    MdSelectModule,
    MdToolbarModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {CalculationHistoryComponent} from './calculation-history/calculation-history.component';
import {CalculationHistoryService} from './calculation-history.service';
import {CalculateService} from './calculate.service';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';

@NgModule({
    declarations: [
        AppComponent,
        CalculationHistoryComponent,
        CalculatorFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCardModule,
        MdCheckboxModule,
        MdInputModule,
        MdOptionModule,
        MdSelectModule,
        MdToolbarModule
    ],
    providers: [
        CalculationHistoryService,
        CalculateService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

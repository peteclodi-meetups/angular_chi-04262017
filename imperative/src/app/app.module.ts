import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdOptionModule,
    MdSelectModule,
    MdToolbarModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {CalculationHistoryComponent} from './calculation-history/calculation-history.component';
import {CalculationHistoryService} from './calculation-history.service';

@NgModule({
    declarations: [
        AppComponent,
        CalculationHistoryComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdInputModule,
        MdOptionModule,
        MdSelectModule,
        MdToolbarModule
    ],
    providers: [
        CalculationHistoryService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

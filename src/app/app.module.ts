import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DataFilterPipe }   from './demo/data-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

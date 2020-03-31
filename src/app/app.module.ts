import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { ValidationPipe } from './pipes/validation.pipe';
import { ProductsPreviewComponent } from './products-preview/products-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsComponent,
    InputComponent,
    ValidationPipe,
    ProductsPreviewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Angular Material and ngx-formly
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AppComponent } from './app.component';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};
// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader => new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyMaterialModule
  ],
  providers: [{
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: appearance
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

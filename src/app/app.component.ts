import { Component } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'topicName',
      type: 'input',
      templateOptions: {
        label: 'Topic Name',
        placeholder: 'Input Topic Name',
        required: true,
      }
    },
    {
      key: 'parameterName',
      type: 'input',
      templateOptions: {
        label: 'Parameter Name',
        placeholder: 'Input Parameter Name',
        required: true,
      }
    },
    {
      key: 'isCumulative',
      type: 'checkbox',
      templateOptions: {
        label: 'Is Cumulative',
      }
    },
    {
      key: 'engineType',
      type: 'select',
      templateOptions: {
        label: 'Engine Type',
        placeholder: 'Select Engine Type',
        required: true,
        options: [
          { label: 'BS4', value: '1' },
          { label: 'BS6 2', value: '2' },
        ]
      }
    },
    {
      key: 'isNumeric',
      type: 'radio',
      templateOptions: {
        label: 'Is Numeric Field',
        required: true,
        options: [
          { label: 'Yes', value: '1' },
          { label: 'No', value: '2' },
        ]
      }
    }
  ];

  constructor(
    private electronService: ElectronService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    console.log('APP_CONFIG', APP_CONFIG);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }
  }

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }
}

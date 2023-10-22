import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'selenium-ui';
  sampleForm: FormGroup = new FormGroup({
    fullName: new FormControl(undefined, Validators.required),
  });

  alertName() {
    alert("Your name is " + this.sampleForm.value.fullName);
  }
}

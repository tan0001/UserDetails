import { Component } from '@angular/core';

import { USER } from '../User';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent {
  user = USER;
  name = new FormControl(this.user.name, [
    Validators.required,
    Validators.minLength(3)
  ]);
  mail = new FormControl(this.user.email, [
    Validators.required,
    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
  ]);
  address = new FormControl(this.user.address);
  contact = new FormControl(this.user.contact_no,[
    Validators.required,
    Validators.pattern('[1-9]{1}[0-9]{9}')
  ]);

  updateUser() {
    this.user.name = <string>this.name.value;
    this.user.email = <string>this.mail.value;
    this.user.contact_no = <string>this.contact.value;
    this.user.address = <string>this.address.value;
  }
}

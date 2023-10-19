import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
  });

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() editItemEvent = new EventEmitter<string>();

  isEdit = false;

  @Input() set editdata(data: any) {
    if (Object.keys(data).length !== 0) {
      this.isEdit = true;
      this.editData(data);
    }
  }

  editData(data: any) {
    this.form.controls.id.setValue(data.id);
    this.form.controls.nombre.setValue(data.nombre);
    this.form.controls.genero.setValue(data.genero);
  }

  guardar() {
    if (this.form.valid) {
      if (this.isEdit) {
        this.editItemEvent.emit(this.form.value);
        this.isEdit = false;
      } else {
        this.form.controls.id.setValue(Math.floor(Math.random() * 10));
        this.newItemEvent.emit(this.form.value);
      }
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}

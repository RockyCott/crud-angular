import { Component, ViewChild } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent {
  persona: any = {};
  editPersona: any = {};

  @ViewChild('table') table!: PersonTableComponent;
  edad!: number;
  addPerson(data: any) {
    this.table.setData(data);
  }

  deletePerson(data: any) {
    const acepta = true;
    this.persona = {};
    const confirmacion = confirm('¿Está seguro de eliminar este registro?');
    if (confirmacion) {
      this.table.deleteRowById(data.id);
    }
  }

  editPerson(data: any) {
    this.editPersona = data;
  }

  editPersonTable(data: any) {
    this.table.editRowInput(data);
  }
}

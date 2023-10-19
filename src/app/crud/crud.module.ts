import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CrudComponent } from './crud.component';
import { CrudRoutingModule } from './crud-routing.module';
import { AddFormComponent } from './components/add-form/add-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { PersonTableComponent } from './components/person-table/person-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    CrudRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  declarations: [CrudComponent, AddFormComponent, PersonTableComponent],
  exports: [CrudComponent],
})
export class CrudModule {}

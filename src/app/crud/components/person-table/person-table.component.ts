import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss'],
})
export class PersonTableComponent {
  displayedColumns: string[] = ['nombre', 'genero', 'acciones'];
  dataSource: any = [];

  @ViewChild(MatTable) table!: MatTable<any>;

  @Output() deleteRowEvent = new EventEmitter<any>();

  @Output() editRowEvent = new EventEmitter<any>();

  @Input() set data(data: any) {
    if (Object.keys(data).length !== 0) {
      this.setData(data);
    }
  }

  setData(data: any) {
    const currentData = this.dataSource;
    const newData = JSON.parse(JSON.stringify(data));
    this.dataSource = [...currentData, newData];
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  deleteRow(row: any) {
    this.deleteRowEvent.emit(row);
  }

  deleteRowById(id: number) {
    const index = this.dataSource.findIndex((item: any) => item.id === id);
    this.dataSource.splice(index, 1);
    this.table.renderRows();
  }

  editRow(row: any) {
    this.editRowEvent.emit(row);
  }

  editRowInput(data: any) {
    const index = this.dataSource.findIndex((item: any) => item.id === data.id);
    this.dataSource[index] = data;
    this.table.renderRows();
  }
}

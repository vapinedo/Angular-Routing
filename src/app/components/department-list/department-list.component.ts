import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  
  departmentList = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "React" },
    { "id": 3, "name": "Node JS" },
    { "id": 4, "name": "Javascript" },
    { "id": 5, "name": "Next JS" },
  ];

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onSelect(department: any) {
    this._router.navigate(['/departments', department.id]);
  }

}

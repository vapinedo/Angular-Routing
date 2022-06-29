import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss'],
})
export class DepartmentListComponent implements OnInit {
  public selectedId: any;
  public departmentList = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Node JS' },
    { id: 4, name: 'Javascript' },
    { id: 5, name: 'Next JS' },
  ];

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
    });
  }

  onSelect(department: any) {
    this._router.navigate(['/departments', department.id]);
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  }

}

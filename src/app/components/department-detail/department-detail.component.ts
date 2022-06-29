import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{ departmentId }}</h3>

    <div class="my-4">
      <button (click)="showOverview()" class="btn btn-outline-primary">
        Overview
      </button>
      <button (click)="showContact()" class="btn btn-outline-primary mx-3">
        Contact
      </button>
    </div>
    
    <router-outlet></router-outlet>

    <hr>
    <button (click)="goPrevious()" class="btn btn-outline-primary">
      Prev
    </button>
    <button (click)="goNext()" class="btn btn-outline-primary mx-3">
      Next
    </button>

    <button (click)="gotoDeparments()" class="btn btn-outline-danger">
      Go Back
    </button>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // let id = this._activatedRoute.snapshot.paramMap.get('id');
    // this.departmentId = id;
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id')
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = parseInt(this.departmentId) - 1;
    this._router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = parseInt(this.departmentId) + 1;
    this._router.navigate(['/departments', nextId]);
  }

  gotoDeparments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this._router.navigate(['/departments', { id: selectedId }]);
  }

  showOverview() {
    this._router.navigate(['overview'], { relativeTo: this._activatedRoute });
  }
  
  showContact() {
    this._router.navigate(['contact'], { relativeTo: this._activatedRoute });
  }

}

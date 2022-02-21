import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference-search-files',
  templateUrl: './preference-search-files.component.html',
})
export class PreferenceSearchFilesComponent implements OnInit {
  public schoolList: any[] = [];

  public planList: any[] = [];

  public cycleList: any[] = [];

  schoolSelected: any;

  constructor() {}

  ngOnInit(): void {
    this.buildSchoolList();
    this.buildPlanList();
    this.buildCycleList();
  }

  buildSchoolList() {
    this.schoolList.push(
      { id: '01', name: 'EP Ingeniería de Sistemas' },
      { id: '02', name: 'EP Ingeniería de Software' }
    );
  }

  buildPlanList() {
    this.planList.push(
      { id: '01', name: 'Plan 2014', selected: false },
      { id: '02', name: 'Plan 2018', selected: false }
    );
  }

  buildCycleList() {
    this.cycleList.push(
      { id: '01', name: '1', selected: false },
      { id: '02', name: '2', selected: false },
      { id: '03', name: '3', selected: false },
      { id: '04', name: '4', selected: false },
      { id: '05', name: '5', selected: false },
      { id: '06', name: '6', selected: false },
      { id: '07', name: '7', selected: false },
      { id: '08', name: '8', selected: false },
      { id: '09', name: '9', selected: false },
      { id: '10', name: '10', selected: false }
    );
  }

  changeSchool(school: any) {
    console.log(school);

    this.schoolSelected = school;
  }

  changePlan(plan: any, checked: boolean) {
    console.log(plan);
    plan.selected = checked;
  }

  changeCycle(cycle: any, checked: boolean) {
    console.log(cycle);
    cycle.selected = checked;
  }

  save() {

    let school = this.schoolSelected.id;

    let plans = this.planList.filter((p) => p.selected).map((p) => p.id);

    let cycles = this.cycleList.filter((c) => c.selected).map((c) => c.id);

    localStorage.setItem('preferences-facultad', school);
    localStorage.setItem('preferences-plans', plans.toString());
    localStorage.setItem('preferences-cycles', cycles.toString());
  }
}

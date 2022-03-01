import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PreferencesService } from 'src/app/core/services/preferences.service';
import { StudyPlansService } from 'src/app/core/services/study-plans.service';

@Component({
  selector: 'app-preference-search-files',
  templateUrl: './preference-search-files.component.html',
})
export class PreferenceSearchFilesComponent implements OnInit {
  public schoolList: any[] = [];

  public planList: any[] = [];

  public cycleList: any[] = [];

  schoolSelected: any;

  public showErrorSchool: boolean;
  public showErrorPlan: boolean;
  public showErrorCycle: boolean;

  constructor(
    public dialogRef: MatDialogRef<PreferenceSearchFilesComponent>,
    private studyPlansService: StudyPlansService,
    private preferencesService: PreferencesService
  ) {}

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

  async buildPlanList() {
    this.planList = await this.studyPlansService.getPlansBySchool();
    console.log(this.planList);
    
    /* this.planList.push(
      { id: '01', name: 'Plan 2014', selected: false },
      { id: '02', name: 'Plan 2018', selected: false }
    ); */
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
    this.schoolSelected = school;
    this.showErrorSchool = false;
  }

  changePlan(plan: any, checked: boolean) {
    plan.selected = checked;
    this.showErrorPlan = false;
  }

  changeCycle(cycle: any, checked: boolean) {
    cycle.selected = checked;
    this.showErrorCycle = false;
  }

  validationPreferences(plans: any[], cycles: any[]) {
    if (!this.schoolSelected) {
      this.showErrorSchool = true;
    }

    if (plans.length === 0) {
      this.showErrorPlan = true;
    }

    if (cycles.length === 0) {
      this.showErrorCycle = true;
    }

    return !this.showErrorSchool && !this.showErrorPlan && !this.showErrorCycle;
  }
  save() {
    let plans = this.planList.filter((p) => p.selected).map((p) => p.id);

    let cycles = this.cycleList.filter((c) => c.selected).map((c) => c.id);

    if (this.validationPreferences(plans, cycles)) {
      let school = this.schoolSelected.id;
      this.preferencesService.savePreferences(school, plans, cycles);

      this.dialogRef.close();
    }
  }
}

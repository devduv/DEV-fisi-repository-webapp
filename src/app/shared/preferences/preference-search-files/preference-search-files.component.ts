import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PreferencesService } from 'src/app/core/services/preferences.service';
import { SchoolsService } from 'src/app/core/services/schools.service';
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

  loading: boolean = true;

  public showErrorSchool: boolean;
  public showErrorPlan: boolean;
  public showErrorCycle: boolean;

  constructor(
    public dialogRef: MatDialogRef<PreferenceSearchFilesComponent>,
    private schoolsService: SchoolsService,
    private studyPlansService: StudyPlansService,
    private preferencesService: PreferencesService
  ) {}

  async ngOnInit() {
    await this.getSchoolList();
    await this.getPlanList();
    this.buildCycleList();
    this.loadLocalPreferences();
  }

  async getSchoolList() {
    this.schoolList = await this.schoolsService.getSchools();
  }

  async getPlanList() {
    this.planList = await this.studyPlansService.getPlansBySchool();
    this.loading = false;
  }

  loadLocalPreferences() {
    this.preferencesService.loadLocalPreferences();
    let preferences = this.preferencesService.getPreferences();
    if (preferences !== undefined) {
      this.schoolSelected = this.schoolList.find(
        (s) => s.id == preferences.school.id
      );

      this.planList.forEach((p) => {
        preferences.plans?.forEach((q: any) => {
          if (q.id == p.id) {
            p.selected = true;
          }
        });
      });

      this.cycleList.forEach((p) => {
        preferences.cycles?.forEach((q: any) => {
          if (q.id == p.id) {
            p.selected = true;
          }
        });
      });
    }
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
    let plans = this.planList.filter((p) => p.selected);

    let cycles = this.cycleList.filter((c) => c.selected);

    if (this.validationPreferences(plans, cycles)) {
      let school = this.schoolSelected;
      this.preferencesService.savePreferences(school, plans, cycles);

      this.dialogRef.close();
    }
  }
}

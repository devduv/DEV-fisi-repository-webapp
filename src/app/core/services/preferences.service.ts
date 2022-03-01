import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preference } from '../models/preferences.model';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  constructor(private http: HttpClient) {}

  public savePreferences(school: any, plans: any[], cycles: any[]) {
    localStorage.setItem('preferences-school', school);
    localStorage.setItem('preferences-plans', plans.toString());
    localStorage.setItem('preferences-cycles', cycles.toString());
  }

  public loadLocalPreferences() {
    let school = localStorage.getItem('preferences-school');
    let plans = localStorage.getItem('preferences-plans');
    let cycles = localStorage.getItem('preferences-cycles');

    let preferences;
    if (school != null && plans != null && cycles != null) {
      preferences = {
        school: school,
        plans: plans.split(','),
        cycles: cycles.split(','),
      };
      
      
    }

    return preferences;
  }
}

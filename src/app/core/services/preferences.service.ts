import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preference } from '../models/preferences.model';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  preferences: Preference;

  constructor(private http: HttpClient) {
    this.loadLocalPreferences();
  }

  public savePreferences(school: any, plans: any[], cycles: any[]) {
    localStorage.setItem('preferences-school', JSON.stringify(school));
    localStorage.setItem('preferences-plans', JSON.stringify(plans));
    localStorage.setItem('preferences-cycles', JSON.stringify(cycles));

    this.preferences = {
      school: school,
      plans: plans,
      cycles: cycles,
    };
  }

  public loadLocalPreferences() {
    let school = localStorage.getItem('preferences-school');
    let plans = localStorage.getItem('preferences-plans');
    let cycles = localStorage.getItem('preferences-cycles');
    
    if (school != null && plans != null && cycles != null) {
      this.preferences = {
        school: JSON.parse(school),
        plans: JSON.parse(plans),
        cycles: JSON.parse(cycles),
      };
    }
  }

  getPreferences() {
    return this.preferences;
  }
}

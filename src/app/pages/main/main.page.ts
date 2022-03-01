import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreferencesService } from 'src/app/core/services/preferences.service';
import { PreferencesComponent } from 'src/app/shared/preferences/preferences.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
})
export class MainPage implements OnInit {
  public showMenu: boolean = true;

  constructor(
    private dialog: MatDialog,
    private preferencesService: PreferencesService
  ) {}

  ngOnInit() {
    this.validatePreferences();
  }

  showMenuEmmitter() {
    this.showMenu = !this.showMenu;
  }

  validatePreferences() {
    let preferences = this.preferencesService.loadLocalPreferences();
    console.log(preferences);
    
    if (preferences == undefined) {
      this.showPreferencesEmmitter();
    }
  }

  showPreferencesEmmitter() {
    const dialogRef = this.dialog.open(PreferencesComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}

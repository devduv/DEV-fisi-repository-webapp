import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreferencesService } from 'src/app/core/services/preferences.service';
import { PreferencesComponent } from 'src/app/shared/preferences/preferences.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
})
export class MainPage implements OnInit {
  public showMenu: boolean = false;

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
    this.preferencesService.loadLocalPreferences();

    let preferences = this.preferencesService.getPreferences();
   
    if (preferences == undefined) {
      this.showPreferencesEmmitter();
    }
  }

  showPreferencesEmmitter() {
    const dialogRef = this.dialog.open(PreferencesComponent, {
      disableClose: this.preferencesService.getPreferences() == undefined,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}

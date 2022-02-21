import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesComponent } from './preferences.component';
import { PreferenceSearchFilesComponent } from './preference-search-files/preference-search-files.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PreferencesComponent, PreferenceSearchFilesComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [PreferencesComponent],
})
export class PreferencesModule {}

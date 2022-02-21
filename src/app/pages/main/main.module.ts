import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageRoutingModule } from './main-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MainPage } from './main.page';
import { MenuPageModule } from 'src/app/layout/menu/menu.module';
import { ToolbarPageModule } from 'src/app/layout/toolbar/toolbar.module';
import { PreferencesModule } from 'src/app/shared/preferences/preferences.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainPageRoutingModule,
    MenuPageModule,
    ToolbarPageModule,
    PreferencesModule,
    MatDialogModule,
  ],
  declarations: [MainPage],
})
export class MainPageModule {}

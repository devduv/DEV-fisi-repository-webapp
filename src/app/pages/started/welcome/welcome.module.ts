import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';

@NgModule({
  imports: [CommonModule, FormsModule, WelcomePageRoutingModule],
  declarations: [WelcomePage],
})
export class WelcomePageModule {}

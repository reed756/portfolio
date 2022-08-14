import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToggleComponent } from './toggle.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ToggleComponent],
  exports: [ToggleComponent]
})

export class ToggleComponentModule { }

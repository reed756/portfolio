import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialRowComponent } from './social-row.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [SocialRowComponent],
  exports: [SocialRowComponent]
})

export class SocialRowComponentModule { }

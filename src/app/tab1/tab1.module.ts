import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { FooterComponentModule } from '../footer/footer.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ToggleComponentModule } from '../toggle/toggle.module';
import { SocialRowComponentModule } from '../social-row/social-row.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FooterComponentModule,
    Tab1PageRoutingModule,
    ToggleComponentModule,
    SocialRowComponentModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { FooterComponentModule } from '../footer/footer.module';
import { SwiperModule } from 'swiper/angular';
import { ToggleComponentModule } from '../toggle/toggle.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    FooterComponentModule,
    SwiperModule,
    ToggleComponentModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule { }

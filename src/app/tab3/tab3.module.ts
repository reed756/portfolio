import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { FooterComponentModule } from '../footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { ToggleComponentModule } from '../toggle/toggle.module';
import { SocialRowComponentModule } from '../social-row/social-row.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FooterComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToggleComponentModule,
    SocialRowComponentModule
  ],
  declarations: [Tab3Page],
})
export class Tab3PageModule { }

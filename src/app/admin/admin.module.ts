import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ManageCardsComponent } from './manage-cards/manage-cards.component';

@NgModule({
  declarations: [AdminComponent, ManageCardsComponent],
  imports: [MatMenuModule,
            MatButtonModule,
            BrowserAnimationsModule],
  exports: [AdminComponent]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AdminComponent],
  imports: [MatMenuModule,
            MatButtonModule,
            BrowserAnimationsModule],
  exports: [AdminComponent]
})
export class AdminModule { }

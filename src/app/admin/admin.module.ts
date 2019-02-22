import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [AdminComponent],
  imports: [MatMenuModule,
            MatIconModule,
            MatButtonModule],
  exports: [AdminComponent]
})
export class AdminModule { }

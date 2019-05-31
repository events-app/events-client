import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ManageCardsComponent } from './manage-cards/manage-cards.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, ManageCardsComponent],
  imports: [MatMenuModule,
            MatButtonModule,
            MatFormFieldModule,
            BrowserAnimationsModule,
            MatInputModule,
            FormsModule],
  exports: [AdminComponent]
})
export class AdminModule { }

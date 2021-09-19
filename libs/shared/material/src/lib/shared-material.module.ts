import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/Button';
import { MatButtonToggleModule } from '@angular/material/Button-Toggle';
import { MatCardModule } from '@angular/material/Card';
import { MatCheckboxModule } from '@angular/material/Checkbox';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/Form-Field';
import { MatGridListModule } from '@angular/material/Grid-List';
import { MatIconModule } from '@angular/material/Icon';
import { MatInputModule } from '@angular/material/Input';
import { MatListModule } from '@angular/material/List';
import { MatMenuModule } from '@angular/material/Menu';
import { MatSelectModule } from '@angular/material/Select';
import { MatSidenavModule } from '@angular/material/Sidenav';
import { MatSliderModule } from '@angular/material/Slider';
import { MatSnackBarModule } from '@angular/material/Snack-Bar';
import { MatTableModule } from '@angular/material/Table';
import { MatToolbarModule } from '@angular/material/Toolbar';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonToggleModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class SharedMaterialModule {}

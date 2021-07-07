import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,    
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class ComponentsModule {}

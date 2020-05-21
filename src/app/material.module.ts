import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from "@angular/material/stepper";
import { MatChipsModule } from "@angular/material/chips";
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OverlayModule,
    MatSliderModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatMenuModule,
    HttpClientModule,
    MatStepperModule,
    MatChipsModule
  ],
  exports: [
    MatSliderModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatMenuModule,
    HttpClientModule,
    MatStepperModule,
    MatChipsModule
  ]
})
export class MaterialModule { }

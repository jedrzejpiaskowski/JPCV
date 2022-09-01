import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabRegistryService } from '../services/tab-registry.service';
import { TabBase } from '../tabs/tab-base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends TabBase {

  public iconName = 'pan_tool';

  constructor(router: Router, tabRegistry: TabRegistryService) {
    super('Home', 'pan_tool', router, tabRegistry);
   }
}

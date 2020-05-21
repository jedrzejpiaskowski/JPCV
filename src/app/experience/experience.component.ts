import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TabBase } from '../tabs/tab-base';
import { Router } from '@angular/router';
import { TabRegistryService } from '../services/tab-registry.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent extends TabBase{

  public iconName: string = 'timeline';

  constructor(router: Router, tabRegistry: TabRegistryService) {
    super('timeline', router, tabRegistry);
      this.url = this.router.url;
  }
}

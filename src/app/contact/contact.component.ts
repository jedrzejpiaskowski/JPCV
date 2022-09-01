import { Component, OnInit } from '@angular/core';
import { TabBase } from '../tabs/tab-base';
import { Router } from '@angular/router';
import { TabRegistryService } from '../services/tab-registry.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends TabBase {
  public iconName = 'alternate_email'
  public e0: 'jd.';
  public e1: 'piaskowski';
  public gm: '@gmai.com';

  constructor(router: Router, tabRegistry: TabRegistryService) {
    super('Contact', 'alternate_email', router, tabRegistry);
   }
}

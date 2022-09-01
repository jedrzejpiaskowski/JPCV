import { OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { TabRegistryService } from '../services/tab-registry.service';

export abstract class TabBase implements OnInit {
	public tabName: string;
    public url: string;
	public iconName: string;
    
    constructor(tabName: string, iconName: string, public router: Router, public tabRegistry: TabRegistryService) {
        this.iconName = iconName;
        this.url = router.url;
        console.log(this.url);
        this.tabName = tabName;
        this.tabRegistry.activate(this);
    }

	ngOnInit(): void {
	}
}

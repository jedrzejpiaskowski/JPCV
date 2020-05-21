import { OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { TabRegistryService } from '../services/tab-registry.service';

export abstract class TabBase implements OnInit {
	public tabName: string;
    public url: string;
	public iconName: string;
    
    constructor(iconName: string, public router: Router, public tabRegistry: TabRegistryService) {
        this.iconName = iconName;
        this.url = router.url;
        let tName = this.constructor.name;
        const cIndex = tName.indexOf('Component');
        if (cIndex > 0) {
            tName = tName.substring(0, cIndex);
            this.tabName = tName;
        } else {
            this.tabName = tName;
        }
        this.tabRegistry.activate(this);
    }

	ngOnInit(): void {
	}
}

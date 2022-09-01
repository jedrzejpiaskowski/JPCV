import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { TabBase } from "../tabs/tab-base";
import { Router } from "@angular/router";
import { TabRegistryService } from '../services/tab-registry.service';

@Component({
	selector: "app-skills",
	templateUrl: "./skills.component.html",
    styleUrls: ["./skills.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class SkillsComponent extends TabBase {

    public iconName = 'format_list_bulleted';

	constructor(router: Router, tabRegistry: TabRegistryService) {
		super('Skills', 'format_list_bulleted', router, tabRegistry);
	}
}

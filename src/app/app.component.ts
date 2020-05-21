import { Component } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { SettingsComponent } from "./settings/settings.component";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "JPCV";

	constructor(
		private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private translate: TranslateService
	) {
        this.matIconRegistry.addSvgIcon("linked-in", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin.svg"));
        this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github.svg"));
        this.matIconRegistry.addSvgIcon('email', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/email.svg"));
        this.translate.use('pl');
        this.translate.use('en');
        this.translate.setDefaultLang('en');

        console.log(this.translate.currentLang);
    }
    
    toggleLanguage() {
        if (this.translate.currentLang === 'en') {
            this.translate.use('pl');
        } else if (this.translate.currentLang === 'pl') {
            this.translate.use('en');
        }
    }
}

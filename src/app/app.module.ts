import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MaterialModule } from "../app/material.module";
import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillProgressComponent } from "./skill-progress/skill-progress.component";
import { SettingsComponent } from "./settings/settings.component";
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutMeComponent,
		SkillsComponent,
		ContactComponent,
		TabsComponent,
		ExperienceComponent,
		SkillProgressComponent,
		SettingsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

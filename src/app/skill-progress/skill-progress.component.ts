import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent {

  constructor() { }

  @Input() skillName: string;
  @Input() skillLevel: number;
}

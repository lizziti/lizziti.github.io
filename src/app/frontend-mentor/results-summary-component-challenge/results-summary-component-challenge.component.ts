import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results-summary-component-challenge',
  templateUrl: './results-summary-component-challenge.component.html',
  styleUrls: ['./results-summary-component-challenge.component.scss']
})
export class ResultsSummaryComponentChallengeComponent {
  data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];
  colors: string[] = [ 'hsl(0, 100%, 67%)', 'hsl(39, 100%, 56%)', 'hsl(166, 100%, 37%)', 'hsl(234, 85%, 45%)' ];
}

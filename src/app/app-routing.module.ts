import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontendMentorComponent} from "./frontend-mentor/frontend-mentor.component";
import {
  ResultsSummaryComponentChallengeComponent
} from "./frontend-mentor/results-summary-component-challenge/results-summary-component-challenge.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'FrontendMentor', component: FrontendMentorComponent, children: [
      { path: 'ResultsSummaryComponentChallenge', component: ResultsSummaryComponentChallengeComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

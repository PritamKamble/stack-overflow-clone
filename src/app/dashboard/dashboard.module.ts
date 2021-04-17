import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TagViewComponent } from './tag-view/tag-view.component';
import { UserQuestionsComponent } from './user-questions/user-questions.component';


@NgModule({
  declarations: [
    DashboardComponent,
    QuestionsComponent,
    ProfileComponent,
    TagViewComponent,
    UserQuestionsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }

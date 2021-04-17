import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsResponse } from 'src/app/interfaces/questions-response.interface';
import { StackExchangeService } from 'src/app/services/stack-exchange/stack-exchange.service';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.css']
})
export class UserQuestionsComponent implements OnInit {

  isLoading = false;
  isError = false;
  userId: number = +this.active.snapshot.params.id;
  questionsResponse!: QuestionsResponse;

  constructor(
    private readonly active: ActivatedRoute,
    private readonly stackExchangeService: StackExchangeService
  ) { }

  ngOnInit(): void {
    this.getQuestionsById();
  }

  getQuestionsById(): void {
    this.isLoading = true;
    this.isError = false;
    this.stackExchangeService.getQuestionsById(this.userId).subscribe(res => {
      this.questionsResponse = res;
      this.isLoading = false;
    }, () => {
      this.isError = true;
      this.isLoading = false;
    });
  }

}

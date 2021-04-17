import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionsResponse } from 'src/app/interfaces/questions-response.interface';
import { StackExchangeService } from 'src/app/services/stack-exchange/stack-exchange.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  isLoading = false;
  isError = false;
  questionsForm: FormGroup;
  questionsResponse!: QuestionsResponse;

  constructor(
    private readonly stackExchangeService: StackExchangeService,
    private readonly fb: FormBuilder
  ) {
    this.questionsForm = this.buildQuestionsForm();
  }

  ngOnInit(): void {
    // this.getQuestions();
  }


  buildQuestionsForm(): FormGroup {
    return this.fb.group({
      pageSize: [null],
      order: ['desc'],
      sort: ['activity'],
    });
  }

  get pageSize(): FormControl {
    return this.questionsForm.get('pageSize') as FormControl;
  }

  get order(): FormControl {
    return this.questionsForm.get('order') as FormControl;
  }

  get sort(): FormControl {
    return this.questionsForm.get('sort') as FormControl;
  }

  public getQuestions(): void {
    this.isLoading = true;
    this.isError = false;
    this.stackExchangeService.getQuestions(this.questionsForm.value).subscribe(res => {
      this.questionsResponse = res;
      this.isLoading = false;
    }, () => {
      this.isError = true;
      this.isLoading = false;
    });
  }

  resetPageSize(pageSize: number): void {
    if (pageSize > 100) {
      this.pageSize.setValue(100);
    }

    if (pageSize < 0) {
      this.pageSize.setValue(0);
    }
  }

}

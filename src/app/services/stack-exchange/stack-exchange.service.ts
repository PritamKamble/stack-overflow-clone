import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsListRequest } from 'src/app/interfaces/question-list-request.interface';
import { QuestionsResponse } from 'src/app/interfaces/questions-response.interface';

import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class StackExchangeService {

  constructor(
    private readonly http: HttpService
  ) { }

  getQuestions(req: QuestionsListRequest): Observable<QuestionsResponse> {
    return this.http.get(`/questions/featured?pagesize=${req.pageSize ? req.pageSize : '10'}&order=${req.order}&sort=${req.sort}&site=stackoverflow`);
  }
}

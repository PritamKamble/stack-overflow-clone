import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfilesResponse } from 'src/app/interfaces/profiles-response.interface';
import { QuestionsListRequest } from 'src/app/interfaces/question-list-request.interface';
import { QuestionsResponse } from 'src/app/interfaces/questions-response.interface';
import { TagsResponse } from 'src/app/interfaces/tags-response.interface';

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

  getProfiles(userId: number): Observable<ProfilesResponse> {
    return this.http.get(`/users/${userId}?order=desc&sort=reputation&site=stackoverflow`);
  }

  getTags(userId: number): Observable<TagsResponse> {
    return this.http.get(`/users/${userId}/tags?order=desc&sort=popular&site=stackoverflow`);
  }

  getQuestionsById(id: number): Observable<QuestionsResponse> {
    return this.http.get(`/users/${id}/questions?order=desc&sort=activity&site=stackoverflow`);
  }
}

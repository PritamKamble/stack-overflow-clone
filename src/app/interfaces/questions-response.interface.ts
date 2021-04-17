import { Question } from './question.interface';

export interface QuestionsResponse {
    items: Question[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
}

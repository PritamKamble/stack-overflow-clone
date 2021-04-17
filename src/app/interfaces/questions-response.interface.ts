import { Item } from './item.interface';

export interface QuestionsResponse {
    items: Item[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
}
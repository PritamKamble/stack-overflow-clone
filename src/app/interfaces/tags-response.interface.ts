export interface Tag {
    has_synonyms: boolean;
    user_id: number;
    is_moderator_only: boolean;
    is_required: boolean;
    count: number;
    name: string;
}

export interface TagsResponse {
    items: Tag[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
}



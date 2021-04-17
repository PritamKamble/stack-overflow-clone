import { Profile } from './profile.interface';

export interface ProfilesResponse {
    items: Profile[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
}



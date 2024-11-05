import { apiPost, apiTag, apiUser } from '@/feature/api';
import { PostsResponse, TagsResponse} from '@/feature/transversal/types';
import { UsersResponse } from '@/feature/users/types/user';


export const getPost = (): Promise<PostsResponse> =>
 apiPost.get('/');

export const getUsers = (): Promise<UsersResponse> =>
    apiUser.get('/');

export const getTags = (): Promise<TagsResponse> =>
    apiTag.get('/');
import { apiPost, apiTag, apiUser } from '@/feature/api';
import { PostsResponse, TagsResponse, UsersResponse } from '@/feature/transversal/types';


export const getPost = (): Promise<PostsResponse> =>
 apiPost.get('/');

export const getUsers = (): Promise<UsersResponse> =>
    apiUser.get('/');

export const getTags = (): Promise<TagsResponse> =>
    apiTag.get('/');
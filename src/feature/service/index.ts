import { api } from '@/feature/api';


export const getTags = (): Promise<any> =>
    api.get('/tag')
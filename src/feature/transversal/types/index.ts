
export enum Role {
  Administrator = 'Admin',

}

export interface LoginCredential {
  username: string;
  password: string;
}


export type Option = {
  id: number;
  name: string;
};

export type Options = Option[];

export type Tag = {
  id: number;
  name: string;
};

export type Tags = Tag[];

export type TagsResponse = {
  tags: Tags;
}

 type User = {
  userId: number;
  userName: string;
};




export type Post = {
  id: number;
  title: string;
  imagen: string;
  tags: Tags;
  user: User

};

export type Posts = Post[];

export type PostsResponse = {
  posts: Posts;
}

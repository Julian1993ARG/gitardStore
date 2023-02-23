import { BlogsResponse, Blog } from '@/models/blogsResponse';
import { strapiApi } from '@/services';

export const getBlogs = async (): Promise<BlogsResponse> => {
  const { data } = await strapiApi.get('blogs?populate=*&');
  return data;
};

export const getBlogById = async (id:string): Promise<Blog> => {
  if (!id) throw new Error('id is required');
  if (typeof id !== 'string') throw new Error('id must be a string');

  const { data } = await strapiApi.get(`blogs/${id}?populate=*&sort[0]=createdAt%3Adesc`);
  return data.data;
};

export const getBlogByURL = async (url:string): Promise<Blog> => {
  if (!url) throw new Error('url is required');
  if (typeof url !== 'string') throw new Error('url must be a string');

  const { data } = await strapiApi.get(`blogs?populate=*&filters[url][$eq]=${url}`);
  return data.data[0];
};

export const getLimitBlogs = async (limit:number): Promise<Blog[]> => {
  if (!limit) throw new Error('limit is required');
  if (typeof limit !== 'number') throw new Error('limit must be a number');

  const { data } = await strapiApi.get(`blogs?populate=*&sort[0]=createdAt%3Adesc&pagination[limit]=${limit}`);
  return data.data;
};

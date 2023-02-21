import { BlogsResponse, Blog } from '@/models/blogsResponse';
import { strapiApi } from '@/services';

export const getBlogs = async (): Promise<BlogsResponse> => {
  const { data } = await strapiApi.get('blogs?populate=*');
  return data;
};

export const getBlogById = async (id:string): Promise<Blog> => {
  if (!id) throw new Error('id is required');
  if (typeof id !== 'string') throw new Error('id must be a string');

  const { data } = await strapiApi.get(`blogs/${id}?populate=*`);
  return data.data;
};

export const getBlogByURL = async (url:string): Promise<Blog> => {
  if (!url) throw new Error('url is required');
  if (typeof url !== 'string') throw new Error('url must be a string');

  const { data } = await strapiApi.get(`blogs?populate=*&filters[url][$eq]=${url}`);
  return data.data[0];
};

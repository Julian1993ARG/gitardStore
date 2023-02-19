import { BlogsResponse } from '@/models/blogsResponse';
import { strapiApi } from '@/services';

const getBlogs = async (): Promise<BlogsResponse> => {
  const { data } = await strapiApi.get('blogs?populate=*');
  return data;
};

export default getBlogs;

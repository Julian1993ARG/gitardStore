import { CourseResponse } from '@/models/courseResponse';
import { strapiApi } from '@/services';

export const getCourse = async ():Promise<CourseResponse> => {
  const { data } = await strapiApi.get('course?populate=*&');
  return data.data;
};

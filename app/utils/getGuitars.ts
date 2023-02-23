import { strapiApi } from '@/services';
import { GuitarResponse } from '../../models/guitarResponse';

export const getAllGuitars = async ():Promise<GuitarResponse[]> => {
  const { data } = await strapiApi.get('guitars?populate=*');
  return data.data;
};

export const getGuitarsByURL = async (url:string): Promise<GuitarResponse> => {
  if (!url) throw new Error('url is required');
  if (typeof url !== 'string') throw new Error('url must be a string');

  const { data } = await strapiApi.get(`guitars?populate=*&filters[url][$eq]=${url}`);
  return data.data[0];
};

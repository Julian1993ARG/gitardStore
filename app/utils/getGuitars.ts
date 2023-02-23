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

export const getLimitGuitar = async (limit:number): Promise<GuitarResponse[]> => {
  if (!limit) throw new Error('limit is required');
  if (typeof limit !== 'number') throw new Error('limit must be a number');

  const { data } = await strapiApi.get(`guitars?populate=*&sort[0]=createdAt%3Adesc&pagination[limit]=${limit}`);
  return data.data;
};

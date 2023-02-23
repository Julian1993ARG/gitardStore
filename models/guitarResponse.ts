/* eslint-disable no-use-before-define */
export interface GuitarResponse {
  id: number;
  attributes: GuitarAttributes
}

interface GuitarAttributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  price: number;
  url: string;
  image: GuitarImage
}

interface GuitarImage {
  data: GuitarImageData
}

interface GuitarImageData {
  id: number;
  attributes: GuitarImageDataAttributes
}

interface GuitarImageDataAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: GuitarImageFormats
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;

}

interface GuitarImageFormats {
  thumbnail: GuitarImageFormat;
}

interface GuitarImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

/* eslint-disable no-use-before-define */
export interface CourseResponse {
  id: number;
  attributes: CourseAttributes
}

interface CourseAttributes {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content: string;
  image: imageCourse
}

interface imageCourse {
  data: dataImage
}

interface dataImage {
  id: number;
  attributes: attributesImage
}

interface attributesImage {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: formatsImage;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;

}

interface formatsImage {
  thumbnail: formatImageAttributes;
  medium: formatImageAttributes;
  small: formatImageAttributes;
}

interface formatImageAttributes {
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

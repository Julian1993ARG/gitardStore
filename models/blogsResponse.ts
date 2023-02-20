/* eslint-disable no-use-before-define */
export interface BlogsResponse {
    data: Blog[];
}

export interface Blog {
    id: number;
    attributes: BlogAttributes;
}

interface BlogAttributes {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    details: string;
    description: string;
    image: Image;
}

interface Image {
    data: ImageData;
}

interface ImageData {
    id: number;
    attributes: ImageAttributes;
}

interface ImageAttributes {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
}

interface Formats {
    thumbnail: Thumbnail;
}

interface Thumbnail {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string;
    size: number;
    width: number;
}

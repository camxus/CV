import { StaticImageData } from "next/image"

export type Project = {
    id: string,
    title: string,
    media: string | StaticImageData,
    short_desc: string,
    long_desc: string
    github: string,
    url: string
}
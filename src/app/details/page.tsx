'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { H1, Paragraph } from '@/components/Template'
import axios from 'axios'
import qs from "qs"
import { Project } from '@/types/projects'
import { ArrowLeft, ExternalLink, GitHub } from 'react-feather'
import Intro from '@/components/Intro'

function Details() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const projectId = searchParams.get("project")

    const [project, setProject] = useState<Project>()

    useEffect(() => {
        axios.get(`/api/project?${qs.stringify({ project: projectId })}`)
            .then((res) => {
                setProject(res.data.project)
            })
            .catch(() => router.push("404"))
    }, [])

    if (!project) {
        <main>
        </main>
    } else {
        return (
            <main>
                <Intro title={project.title} />
                <a className="fixed z-50 p-5 animate-fade" href='/'>
                    <ArrowLeft className="absolute animate-ping" color='white' />
                    <ArrowLeft className='absolute' color='white' />
                </a>
                <div className='md:flex h-screen'>
                    {project.media && <div className="bg-white relative md:w-[30%] hover:md:w-[40%] w-100 md:h-full h-[30%] hover:h-[60%] hover:md:h-full transition-[height, width] ease-in-out duration-300">
                        <Image className='object-cover' src={project.media} alt={''} layout='fill' />
                    </div>}
                    <div className="bg-black md:flex flex-col justify-center w-full min-h-full p-4 md:px-20">
                        <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
                            <H1 className='text-white'>{project.title}</H1>
                            <div className="flex gap-2">
                                {project.github && <a href={project.github}><GitHub color='white' /></a>}
                                {project.url && <a href={project.url}><ExternalLink color='white' /></a>}
                            </div>
                        </div>
                        <div className='description text-white py-4' dangerouslySetInnerHTML={{ __html: project.long_desc }} />
                    </div>
                </div>
            </main>
        )
    }
}

export default Details
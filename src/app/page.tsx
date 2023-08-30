"use client"
import Button from '@/components/Button'
import Intro from '@/components/Intro'
import H1 from '@/components/Template/H1'
import { Project } from '@/types/projects'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [projects, setProjects] = useState<Project[]>()

  useEffect(() => {
    axios.get(`/api/projects`)
      .then((res) => {
        setProjects(res.data.projects)
      })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Intro title="CAMILLUS KONKWO"/>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#555454] before:dark:opacity-10 after:dark:from-[#2c2c2c] after:dark:via-[#dddddd] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <H1 className="">Camillus Konkwo <br />Portfolio</H1>
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {
          projects?.map(
            p => <Button key={p.id} href={`/details?project=${p.id}`} title={`${p.title}`} short_desc={`${p.short_desc}`} />
          )
        }
      </div>
    </main>
  )
}

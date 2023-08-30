import projects from "@/data/projects.js"
import { Project } from "@/types/projects"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: { req: NextRequest }) {
  try {
    const id = req.nextUrl.searchParams.get("project")
    const project: Project | undefined = projects.find(p => p.id === id)
    if (!project) throw new Error("INVALID_PROJECT")
    return NextResponse.json({ project })
  } catch (e) {
    return NextResponse.json({ error: 'INVALID_PROJECT' }, { status: 404 })
  }
}
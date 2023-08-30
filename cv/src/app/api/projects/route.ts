import p from "@/data/projects.js"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    const projects = p.map(p => { return { id: p.id, title: p.title, short_desc: p.short_desc } })
    return NextResponse.json({ projects })
}
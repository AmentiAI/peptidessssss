import { NextResponse } from "next/server"

const INDEXNOW_KEY = "8876bd26540e4653f86a090273df54d1"
const HOST = "www.peptidesmaxxing.com"
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`

export async function POST(req: Request) {
  const auth = req.headers.get("authorization")
  if (auth !== `Bearer ${INDEXNOW_KEY}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }

  const body = (await req.json().catch(() => null)) as { urls?: string[] } | null
  const urls = body?.urls?.filter((u) => u.startsWith(`https://${HOST}/`))
  if (!urls || urls.length === 0) {
    return NextResponse.json({ error: "no urls" }, { status: 400 })
  }

  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  })

  return NextResponse.json({ submitted: urls.length, status: res.status })
}

export async function GET() {
  return NextResponse.json({
    host: HOST,
    keyLocation: KEY_LOCATION,
    usage: "POST { urls: string[] } with Authorization: Bearer <key>",
  })
}

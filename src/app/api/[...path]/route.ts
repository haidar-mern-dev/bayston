import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "http://localhost:8000/api";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.pathname.replace("/api/", "");
  const response = await fetch(`${BACKEND_URL}/${path}`);
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const path = req.nextUrl.pathname.replace("/api/", "");

  if (path === "addDocument") {
    const formData = await req.formData();
    const response = await fetch(`${BACKEND_URL}/${path}`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return NextResponse.json(data);
  } else if (path === "getAnswerArticle") {
    const formData = await req.formData();
    const response = await fetch(`${BACKEND_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify({
        topic: formData,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return NextResponse.json(data);
  } else if (path === "getAnswerPresentation") {
    const formData = await req.formData();
    const response = await fetch(`${BACKEND_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify({
        topic: formData,
        template_name: "template_3",
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return NextResponse.json(data);
  } else {
    const body = await req.json();
    const response = await fetch(`${BACKEND_URL}/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return NextResponse.json(data);
  }
}

export async function DELETE(req: NextRequest) {
  const path = req.nextUrl.pathname.replace("/api/", "");
  const response = await fetch(`${BACKEND_URL}/${path}`, { method: "DELETE" });
  const data = await response.json();
  return NextResponse.json(data);
}

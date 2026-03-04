export const dynamic = "force-static";

export async function GET() {
  const body = "google.com, pub-2933794446563458, DIRECT, f08c47fec0942fa0";

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}


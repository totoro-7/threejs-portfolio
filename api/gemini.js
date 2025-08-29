// api/gemini.js
export const config = { runtime: "edge" };

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405, headers: { "content-type": "application/json" },
    });
  }

  try {
    const { contents } = await req.json();
    if (!Array.isArray(contents)) {
      return new Response(JSON.stringify({ error: "contents[] required" }), {
        status: 400, headers: { "content-type": "application/json" },
      });
    }

    const key = process.env.GEMINI_API_KEY; // server-only
    if (!key) {
      return new Response(JSON.stringify({ error: "GEMINI_API_KEY missing" }), {
        status: 500, headers: { "content-type": "application/json" },
      });
    }

    const upstream = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=" + key,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ contents }),
      }
    );

    const data = await upstream.json();
    if (!upstream.ok) {
      const msg = data?.error?.message || "Gemini API error";
      return new Response(JSON.stringify({ error: msg }), {
        status: upstream.status, headers: { "content-type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200, headers: { "content-type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Unexpected server error" }), {
      status: 500, headers: { "content-type": "application/json" },
    });
  }
}

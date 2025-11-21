// lib/getSeo.ts
export interface SeoData {
  title: string;
  keywords: string;
  description: string;
}


export async function getSeo() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Seo`);

    if (!res.ok) {
      console.error("Backend returned error:", res.status, res.statusText);
      return null;
    }

    const data = await res.json();
    return data.data || null;
  } catch (err) {
    console.error("Failed to fetch SEO:", err);
    return null;
  }
}


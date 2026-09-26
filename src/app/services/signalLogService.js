/**
 * Signal Log Service
 * Fetches dynamic Markdown logs and metadata, converting Markdown text
 * into sanitized HTML.
 */

export async function fetchSignalLogs() {
  try {
    const res = await fetch("/posts/logs.json");
    if (!res.ok) return [];

    const files = await res.json();
    if (!Array.isArray(files) || files.length === 0) return [];

    const { marked } = await import("marked");

    const posts = await Promise.all(
      files.map(async (file) => {
        try {
          const mdRes = await fetch(`/posts/${file}`);
          if (!mdRes.ok) return null;
          const text = await mdRes.text();

          // Extract SIDE_TEXT comment if present
          const sideTextMatch = text.match(/<!--\s*SIDE_TEXT:\s*(.*?)\s*-->/);
          const sideText = sideTextMatch ? sideTextMatch[1] : null;
          const cleanText = text.replace(/<!--\s*SIDE_TEXT:\s*(.*?)\s*-->/, "");

          return {
            id: file,
            content: marked.parse(cleanText),
            sideText,
          };
        } catch {
          return null;
        }
      }),
    );

    return posts.filter(Boolean);
  } catch (e) {
    console.log("SIGNAL_LOG_READY: Waiting for /posts/logs.json");
    return [];
  }
}

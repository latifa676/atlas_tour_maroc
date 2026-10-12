import { useEffect } from "react";

const SITE_URL = "https://atlastour-iota.vercel.app";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SEO({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
  structuredData
}) {
  const normalizedDescription = description.replace(/\s+/g, " ").trim();
  const metaDescription = normalizedDescription.length > 160
    ? `${normalizedDescription.slice(0, 157).trimEnd()}...`
    : normalizedDescription;
  const structuredDataJson = structuredData ? JSON.stringify(structuredData) : "";

  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).href;
    const imageUrl = image ? new URL(image, SITE_URL).href : undefined;
    document.title = title;
    setMeta("name", "description", metaDescription);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Morocco Excursions");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", metaDescription);
    setMeta("property", "og:url", canonicalUrl);
    if (imageUrl) {
      setMeta("property", "og:image", imageUrl);
      setMeta("name", "twitter:image", imageUrl);
    } else {
      document.head.querySelector('meta[property="og:image"]')?.remove();
      document.head.querySelector('meta[name="twitter:image"]')?.remove();
    }
    setMeta("name", "twitter:card", imageUrl ? "summary_large_image" : "summary");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", metaDescription);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (noIndex) {
      canonical?.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    let schema = document.getElementById("page-structured-data");
    if (structuredDataJson) {
      if (!schema) {
        schema = document.createElement("script");
        schema.id = "page-structured-data";
        schema.type = "application/ld+json";
        document.head.appendChild(schema);
      }
      schema.textContent = structuredDataJson;
    } else {
      schema?.remove();
    }
  }, [image, metaDescription, noIndex, path, structuredDataJson, title]);

  return null;
}

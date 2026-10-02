import { useEffect } from "react";

const SITE_URL = "https://ali-najjar.vercel.app";

/** Set the tab title, meta description and canonical URL for the current page. */
export function usePageMeta(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", SITE_URL + path);
  }, [title, description, path]);
}

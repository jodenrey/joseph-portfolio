/** Return the configured site origin, or omit absolute metadata until deployed. */
export function getSiteUrl(): URL | undefined {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) return undefined;

  try {
    const url = new URL(configuredUrl);

    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.username ||
      url.password
    ) {
      return undefined;
    }

    // The portfolio is served from the root; discard query strings and fragments.
    return new URL(url.origin);
  } catch {
    return undefined;
  }
}

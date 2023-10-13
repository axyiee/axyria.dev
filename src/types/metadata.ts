export type Metadata = OpenGraphMetadata | DiscordMetadata;

export enum OpenGraphMetadata {
  Title = "og:title",
  SiteName = "og:site_name",
  Image = "og:image",
  Description = "og:description",
  Type = "og:type",
}

export enum DiscordMetadata {
  ThemeColor = "theme-color",
}

export function getDefaultMetadata(metadata: Metadata): string | undefined {
  switch (metadata) {
    case OpenGraphMetadata.Title:
      return "Axyie's Lounge";
    case OpenGraphMetadata.SiteName:
      return "Axyie's Lounge";
    case OpenGraphMetadata.Image:
      return undefined;
    case OpenGraphMetadata.Description:
      return "An autistic person who loves learning new stuff.";
    case DiscordMetadata.ThemeColor:
      return "#9280d3";
  }
}

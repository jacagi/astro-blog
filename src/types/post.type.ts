export interface Post {
  frontmatter: {
    layout: string;
    title: string;
    description: string;
    pubDate: string;
    tags?: string[];
  };
  url: string;
}

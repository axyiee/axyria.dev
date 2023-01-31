interface Post {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
}

export interface PageResult {
  params: {
    slug: string;
  };
  props: {
    frontmatter: Post;
    Content: any;
  };
}

export default Post;

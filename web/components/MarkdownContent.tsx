import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

interface MarkdownContentProps {
  content: string;
}

export default async function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg max-w-none
      prose-headings:font-bold 
      prose-h1:text-4xl prose-h1:mb-6
      prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
      prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-gray-700 prose-p:leading-relaxed
      prose-a:text-black prose-a:underline hover:prose-a:opacity-70
      prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
      prose-pre:bg-gray-900 prose-pre:text-gray-100
      prose-ul:my-6 prose-li:my-2
      prose-strong:font-bold prose-strong:text-black">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight, rehypeSlug],
          },
        }}
      />
    </div>
  );
}


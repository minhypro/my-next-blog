import React from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  slug: string;
  excerpt: string;
};

function BlogPreview({ title, slug, excerpt }: Props) {
  return (
    <article className='prose lg:prose-xl'>
      <h3>{title}</h3>
      <p>
        For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with
        the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for
        Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up
        around the country.
      </p>
      <p>
        {excerpt}
        ...
        <Link
          href={{
            pathname: 'blog/[...blogSlug]',
            query: { blogSlug: slug },
          }}>
          Read more
        </Link>
      </p>
    </article>
  );
}

export default BlogPreview;

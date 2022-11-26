import React from 'react'
import Link from 'next/link';
import { BlogTypes } from '../../types/globalTypes';

function BlogDetails({title, slug, excerpt }: BlogTypes) {
  return (
    <article key={slug} className='prose lg:prose-xl'>
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
          pathname: '/blog',
        }}>
        Back
      </Link>
    </p>
  </article>
  )
}

export default BlogDetails
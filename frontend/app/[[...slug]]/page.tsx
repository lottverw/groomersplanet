import apolloClient from '@/lib/apolloClient';
import PAGE_QUERY from '@/queries/page';

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;

  const { data: page } = await apolloClient.query({
    query: PAGE_QUERY,
    variables: {
      slug: !slug ? ['home'] : slug,
    }
  });

  return (
    <div>
      <h1>{page.entry?.title ?? 'not found'}</h1>
      <div>
        {page.entry.pageContentGrid.map((content) => {
          if(!content.enabled) return null;
          return (
            <h1 key={content.uid}>{content.typeHandle} enabled { content.enabled ? 'Y' : 'n'}</h1>
          )
        })}
    </div>
    </div>
  );
}
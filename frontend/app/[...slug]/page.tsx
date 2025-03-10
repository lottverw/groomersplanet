export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <h1>Catch-all Route</h1>
      <p>Path segments: {params.slug.join('/')}</p>
    </div>
  );
}
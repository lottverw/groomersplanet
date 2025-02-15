import { getStoryblokApi } from "@storyblok/react";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ConcertPage = async (props: any) => {
  const client = getStoryblokApi();
  const routeParams = await props.params;

  const response = await client.getStory(routeParams.slug, {});

  return (

    <div>
      <h1>{response.data.story.content.title}</h1>

      <p>{response.data.story.content.descr}</p>

    </div>

  );

};


export default ConcertPage;
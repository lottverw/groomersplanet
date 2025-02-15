import { getStoryblokApi } from "@storyblok/react";
import Link from "next/link";

export default async function Home() {
  const client = getStoryblokApi();

  const response = await client.getStories({ content_type: "concert" });
  


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <ul>
          {response.data.stories.map((story) => (
            <li key={story.id}>
              <Link href={`/${story.slug}`}>{story.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

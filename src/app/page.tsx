import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const post = await prisma.post.findMany();
  console.log(post);

  return (
    <div>
      <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
        <h1 className="text-3xl font-semibold">All Post ({post.length})</h1>

        <ul className="border-t border-b border-black/10 py-5 leading-8">
          {post.map((value, index) => {
            return (
              <li key={value.id}>
                <Link href={`/posts/${value.slug}`}>{value.title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

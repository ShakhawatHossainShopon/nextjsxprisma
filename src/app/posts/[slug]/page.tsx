import { prisma } from "@/lib/db";
const post = async ({ params }: { params: { id: string } }) => {
  const { slug } = params;
  const post = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });
  return (
    <div>
      <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
        <h1>Post Title: {post?.title}</h1>
        <p>{post?.content}</p>
      </main>
    </div>
  );
};

export default post;

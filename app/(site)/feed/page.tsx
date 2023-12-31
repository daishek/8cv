import Navbar from "@/components/navbar";
// import { getFeed } from "@/lib/get-feed";
import FeedHead from "./components/feed-head";
import FeedCard from "./components/feed-card";
// import { Feed } from "@/types";
import prismadb from "@/lib/prismadb";
import FirstCard from "./components/first-card";

export const revalidate = 3600;

const FeedPage = async () => {
  const feed = await prismadb.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      profile: true,
      images: true,
    },
  });

  return (
    <main className="h-full flex flex-col">
      <Navbar />
      <div className="felx-1">
        <FeedHead />
        <section className="px-5 columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
          <FirstCard />
          {feed.map((item) => (
            <FeedCard key={item.id} data={item} />
          ))}
        </section>
      </div>
      <footer className="pt-20 pb-5 text-center text-muted-foreground text-xs">
        made with 😡 by da;chekkal
      </footer>
    </main>
  );
};

export default FeedPage;

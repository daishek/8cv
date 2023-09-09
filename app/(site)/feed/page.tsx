import Navbar from "@/components/navbar";
import { getFeed } from "@/lib/get-feed";
import FeedHead from "./components/feed-head";
import FeedCard from "./components/feed-card";
import { Feed } from "@/types";

const FeedPage = async () => {
  const feed: Feed[] = await getFeed();
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <div className="felx-1">
        <FeedHead />
        <section className="px-5 columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
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

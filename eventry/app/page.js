import Header from "@/components/landing/Header";
import EventList from "@/components/landing/EventList";
import { Suspense } from "react";

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container px-4 md:px-6">
      <div className="animate-fade-in-up">
        <Header />
      </div>
      <Suspense key={query} fallback={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden animate-shimmer" style={{ height: '380px' }} />
          ))}
        </div>
      }>
        <EventList query={query} />
      </Suspense>
    </section>
  );
}


import { getAllEvents } from "@/db/queries";
import EventCard from "./EventCard"

const EventList = async ({ query }) => {
  const allEvents = await getAllEvents({ query });

  if (!allEvents || allEvents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-fade-in-up">
        <svg className="w-16 h-16 text-[var(--text-muted)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p className="text-lg text-[var(--text-secondary)]">No events found</p>
        <p className="text-sm text-[var(--text-muted)] mt-1">Try a different search term</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allEvents?.map((event, index) => (
        <div key={event.id} className={`animate-fade-in-up stagger-${index + 1}`}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  )
}

export default EventList
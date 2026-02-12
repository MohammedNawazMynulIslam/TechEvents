import HeroSection from "@/components/details/HeroSection"
import EventDetails from "@/components/details/EventDetails"
import EventVenue from "@/components/details/EventVenue"
import { getEventById } from "@/db/queries"

export async function generateMetadata({ params: { id } }) {
  const event = await getEventById(id);
  return {
    title: `Eventry – ${event?.name}`,
    description: event?.details,
    openGraph: {
      images: [event?.imageUrl],
    },
  };
}

const page = async ({ params: { id } }) => {
  const eventInfo = await getEventById(id)

  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <section className="container px-4 md:px-6">
        <div className="grid grid-cols-5 gap-8 md:gap-12 my-12">
          <EventDetails details={eventInfo?.details} swags={eventInfo?.swags} />
          <EventVenue eventInfo={eventInfo} />
        </div>
      </section>
    </>
  )
}

export default page
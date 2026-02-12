import Image from 'next/image';
import ActionButtons from '../ActionButtons';

const HeroSection = async ({ eventInfo }) => {
  return (
    <section className="container px-4 md:px-6">
      {/* Hero image with gradient overlay */}
      <div className="relative rounded-2xl overflow-hidden animate-fade-in-up">
        <Image
          src={eventInfo?.imageUrl}
          alt={eventInfo?.name}
          className="w-full h-[350px] md:h-[450px] object-cover"
          width={1200}
          height={600}
          priority
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[rgba(10,10,15,0.4)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,15,0.5)] to-transparent" />
      </div>

      {/* Event info bar */}
      <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-20 relative z-10 px-4 md:px-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
        <div className="flex-1">
          <h1 className="font-extrabold text-3xl md:text-4xl text-[var(--text-primary)] leading-tight">
            {eventInfo?.name}
          </h1>
          <div className="flex items-center gap-2 mt-3">
            <svg className="w-4 h-4 text-[var(--accent-blue)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <p className="text-[var(--text-secondary)] text-base">
              {eventInfo?.location}
            </p>
          </div>

          {/* Stats badges */}
          <div className="flex items-center gap-4 mt-4">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: 'rgba(102, 126, 234, 0.1)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]"></span>
              {eventInfo?.interested_ids?.length} Interested
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: 'rgba(240, 147, 251, 0.1)',
                border: '1px solid rgba(240, 147, 251, 0.2)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent-pink)]"></span>
              {eventInfo?.going_ids?.length} Going
            </span>
          </div>
        </div>

        <ActionButtons
          fromDetails={true}
          eventId={eventInfo?.id}
          interestedUserIds={eventInfo?.interested_ids}
          goingUserIds={eventInfo?.going_ids}
        />
      </div>
    </section>
  )
}

export default HeroSection
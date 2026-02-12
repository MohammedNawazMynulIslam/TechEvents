import Image from 'next/image';
import Link from 'next/link';
import ActionButtons from '../ActionButtons';
import { EventSchemaScript } from '../meta/EventSchemaScript';

const EventCard = ({ event }) => {
  return (
    <div className="glass-card overflow-hidden rounded-2xl"
      style={{ transform: 'translateZ(0)' }}
    >
      <EventSchemaScript event={event} />

      {/* Image container */}
      <div className="relative overflow-hidden">
        <Image
          src={event?.imageUrl}
          alt={event?.name}
          className="w-full h-52 object-cover"
          width={500}
          height={300}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,15,0.8)] via-transparent to-transparent opacity-60" />

        {/* Location badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
          style={{
            background: 'rgba(10, 10, 15, 0.6)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <svg className="w-3 h-3 text-[var(--accent-blue)]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-[var(--text-primary)]">{event?.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <Link href={`/details/${event?.id}`} className="font-bold text-lg text-[var(--text-primary)]">
          {event?.name}
        </Link>

        <p className="text-[var(--text-secondary)] text-sm mt-2 line-clamp-2 leading-relaxed">
          {event?.details}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-4 mt-4 text-xs font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]"></span>
            <span className="text-[var(--text-muted)]">{event?.interested_ids?.length} Interested</span>
          </span>
          <span className="w-px h-3 bg-[var(--glass-border)]"></span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-pink)]"></span>
            <span className="text-[var(--text-muted)]">{event?.going_ids?.length} Going</span>
          </span>
        </div>

        <ActionButtons eventId={event?.id} interestedUserIds={event?.interested_ids} goingUserIds={event?.going_ids} />
      </div>
    </div>
  );
};

export default EventCard;

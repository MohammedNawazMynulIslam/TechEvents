const EventVenue = ({ eventInfo }) => {
  const latitude = eventInfo?.latitude || 0;
  const longitude = eventInfo?.longitude || 0;
  const location = eventInfo?.location || '';

  return (
    <div className="col-span-5 lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="glass-card overflow-hidden h-full flex flex-col">
        {/* Map embed */}
        <div className="w-full flex-1 min-h-[350px]">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9563.048507081372!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1711180232846!5m2!1sen!2sbd`}
            width="100%"
            height="100%"
            style={{ border: "0", minHeight: "350px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-t-2xl"
          ></iframe>
        </div>

        {/* Location info */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-[var(--accent-blue)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <p className="text-[var(--text-primary)] font-medium">{location}</p>
          </div>

          {/* Coordinates display */}
          {(latitude !== 0 || longitude !== 0) && (
            <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] font-mono">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                Lat: {latitude.toFixed(4)}
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                Lng: {longitude.toFixed(4)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventVenue;

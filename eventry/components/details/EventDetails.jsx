const EventDetails = ({ details, swags }) => {
  return (
    <div className="col-span-5 lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      <div className="glass-card p-6 md:p-8 h-full">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 rounded-full" style={{ background: 'var(--accent-gradient)' }}></div>
          <h2 className="font-bold text-2xl text-[var(--text-primary)]">Event Details</h2>
        </div>

        {/* Description */}
        <div className="text-[var(--text-secondary)] space-y-4 leading-relaxed">
          <p>{details}</p>
        </div>

        {/* Swags section */}
        {swags && swags.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4">
              What You Get
            </h3>
            <div className="flex flex-wrap gap-2">
              {swags.map((swag) => (
                <span
                  key={swag}
                  className="px-4 py-2 rounded-full text-sm font-medium text-[var(--text-primary)]"
                  style={{
                    background: 'rgba(102, 126, 234, 0.1)',
                    border: '1px solid rgba(102, 126, 234, 0.2)',
                  }}
                >
                  {swag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;

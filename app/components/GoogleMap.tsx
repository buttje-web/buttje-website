export default function GoogleMap() {
  const address = "Stephansplatz 8, 1010 Wien";
  const encodedAddress = encodeURIComponent(address);
  const mapsUrl = `https://www.google.com/maps/place/${encodedAddress}`;

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg relative bg-white">
      <a 
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10 flex items-center justify-center hover:bg-black/5 transition-colors"
        aria-label="Öffne in Google Maps"
      >
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-6 p-8">
          <div className="flex items-center gap-4">
            <svg 
              viewBox="0 0 24 24" 
              className="w-8 h-8 text-[var(--primary)]"
              fill="none" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <div className="text-left">
              <h3 className="font-bold text-gray-900 text-lg">buttje</h3>
              <p className="text-gray-600">Stephansplatz 8, 1010 Wien</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[var(--primary)] font-medium">
            <span>In Google Maps öffnen</span>
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5"
              fill="none" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
} 
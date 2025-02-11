export default function GoogleMap() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg relative">
      <a 
        href="https://www.google.com/maps/place/Stephansplatz+8,+1010+Wien/@48.2083075,16.3709481,17z/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label="Öffne in Google Maps"
      >
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
      </a>
      <img
        src="https://maps.googleapis.com/maps/api/staticmap?center=Stephansplatz+8,1010+Wien&zoom=15&size=800x400&scale=2&markers=color:red%7CStephansplatz+8,1010+Wien&key=YOUR_API_KEY"
        alt="buttje Standort auf der Karte"
        className="w-full h-full object-cover"
      />
    </div>
  );
} 
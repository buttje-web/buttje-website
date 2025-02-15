export default function GoogleMap() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0243075563837!2d16.37094807638775!3d48.20830747912648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e7d7dd1ab%3A0x3a40a1f0d6b89c48!2sStephansplatz%208%2C%201010%20Wien!5e0!3m2!1sde!2sat!4v1710861445040!5m2!1sde!2sat"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="buttje Standort auf der Karte"
      />
      <a 
        href="https://www.google.com/maps/place/Stephansplatz+8,+1010+Wien/@48.2083075,16.3709481,17z/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label="Öffne in Google Maps"
      >
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
      </a>
    </div>
  );
} 
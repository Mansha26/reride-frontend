// src/components/branch.jsx

import { MapPin, Clock, ExternalLink } from 'lucide-react';

// Data structure holding the specific hub content from the images
const hubs = [
  {
    title: "Jalahalli HQ",
    isMain: true,
    address: "No 1, Jalahalli Cross, NH 4, Tumkur Rd, T. Dasarahalli, Bengaluru, Karnataka 560057",
    time: "8 PM",
    link: "#",
  },
  {
    title: "Mysore Road – Deepanjali Nagar",
    address: "No 28, Kullappa Circle, PNS Layout, Subbanna Palya, Banaswadi, Bengaluru 560026",
    time: "7:30 PM",
    link: "#",
  },
  {
    title: "Bhadrappa Layout",
    address: "No 2, Bhadrappa Layout, Outer Ring Rd, Nagashetty Halli, Devinagar, Bengaluru 560094",
    time: "8 PM",
    link: "#",
  },
  {
    title: "Nelamangala town",
    address: "No 12, Nelamangala Cross, Kunigal Rd, Nelamangala Town, Bengaluru, Karnataka 560123",
    time: "8 PM",
    link: "#",
  },
];

const Branch = () => {
  return (
    <div className="backdrop-blur-xl rounded-[2.5rem] p-8 md:p-5 shadow-xl border border-gray-300/20 relative overflow-hidden h-full">
      <div className="flex items-center gap-3 mb-4 pb-3">
        <div className="bg-brand-primary/10 p-3 rounded-2xl text-brand-primary">
          <MapPin className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold text-brand-primary tracking-tight">
          Our Hubs in Bengaluru
        </h2>
      </div>

      {/* Scrollable list container */}
      <div className="max-h-[500px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
        {hubs.map((hub, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md border border-gray-300 shadow-md rounded-3xl p-6 relative group hover:border-brand-primary/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors">
                {hub.title}
              </h3>
              {hub.isMain && (
                <span className="text-xs font-bold text-black bg-brand-primary px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Main
                </span>
              )}
            </div>

            <p className="text-brand-gray/80 text-sm mb-5 max-w-sm leading-relaxed">
              {hub.address}
            </p>

            <div className="flex items-center gap-6 text-sm text-brand-gray/80 pt-4 border-t border-brand-primary/5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-primary/60" />
                <span>Open till {hub.time}</span>
              </div>
              <a
                href={hub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-semibold text-brand-primary hover:text-brand-accent transition-colors"
              >
                <span>Directions</span>
                <ExternalLink className="w-4 h-4" /></a>
              </div>
            </div>

        ))}
      </div>
</div>

  );
};

export default Branch;
// src/components/map.jsx

function Map() {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden border border-gray-300 shadow-lg">
        <iframe
          title="Our Jalahalli HQ on Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.3362096773!2d77.53589335607062!3d13.011689269784373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16422204eb8d%3A0xc68e7b301c34a6e4!2sJalahalli%20HQ%2C%20No%201%2C%20Jalahalli%20Cross%2C%20NH%204%2C%20Tumkur%20Rd%2C%20T.%20Dasarahalli%2C%20Bengaluru%2C%20Karnataka%20560057!5e0!3m2!1sen!2sin!4v1712211470500!5m2!1sen!2sin"
           className="w-full h-full rounded-3xl overflow-hidden border border-gray-300 shadow-lg p-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  );
};

export default Map;
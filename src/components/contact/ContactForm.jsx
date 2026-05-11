function ContactForm() {
  return (
    <>

    <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100">
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Message Sent Successfully!');
        }}
      >
        <div className="grid sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/10 transition-all text-black placeholder:text-gray-400"
              placeholder="Enter your first name..."
            />
          </div>
          {/* Last Name */}
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              required
              className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/10 transition-all text-black placeholder:text-gray-400"
              placeholder="Enter your last name..."
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/10 transition-all text-black placeholder:text-gray-400"
            placeholder="Enter your email address..."
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-gray-700">
            How can we help you?
          </label>
          <textarea
            id="message"
            rows="5"
            required
            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/10 transition-all text-black resize-none placeholder:text-gray-400"
            placeholder="Enter your message..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-black text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span className="font-medium text-base">Send Message</span>
            <div className="bg-white text-black rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default ContactForm;
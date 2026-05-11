import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactForm from '../components/contact/ContactForm'
import Branch from '../components/contact/Branch'
import Map from '../components/contact/map'

const Contact = () => {
  return (
    <>
      <Nav />
      {/* Light background for the whole section to make the white form pop */}
      <section className="pt-10 pb-20 px-6 lg:px-8 relative overflow-hidden bg-primary">
        <div className="max-w-7xlmx-auto grid lg:grid-cols-2 gap-12 lg:gap-12 items-start animate-fade-in-up">
           <div className="pt-8 rounded-[2.5rem] p-8 md:p-8 relative group">
          {/* <div className="pt-8 backdrop-blur-xl bg-white/70 rounded-[2.5rem] p-8 md:p-8 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100 relative group"> */}
            <h1 className="text-5xl md:text-6xl font-semibold text-black tracking-tight mb-6">
              Get in <span className="inline-block w-16 h-[3px] bg-black align-middle ml-2 mb-2"></span><br/>
              touch with us
            </h1>
            <p className="text-gray-600 mb-12 max-w-md text-lg leading-relaxed">
              We're here to help! Whether you have a question about our services, looking to buy, sell, or just need some advice on your

          next two-wheeler 
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-gray-600 text-sm mb-1">Email:</p>
                <a href="mailto:info@reride.com" className="text-xl font-medium text-black hover:opacity-70 transition-opacity">
                  info@reride.com
                </a>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1 ">Phone:</p>
                <a href="+91 87221666" className="text-xl font-medium text-black hover:opacity-70 transition-opacity">
                  +91 87221666
                </a>
                <p className="text-xs text-gray-500 mt-2">Available Monday to Friday, 9 AM - 8 PM GMT</p>
              </div>
            

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium text-gray-500 mr-2">Follow us:</p>
              
              {/* Instagram */}
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-all shadow-sm hover:shadow"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm hover:shadow"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
</div>
          </div>

          {/* Right Column Form */}
          <div className="lg:mt-0 mt-8 mr-4">
            <ContactForm/>
          </div>
           </div>

<div class="max-w-7xl mx-auto mt-10 animate-fade-in-up">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="w-full lg:h-[650px] p-0">
              <Branch/>
            </div>
            <div className="w-full h-full lg:h-[650px] p-0"> {/* Fixed height for map on desktop */}
              <Map/>
            </div>
          </div>
        </div>
       
      </section>
      <Footer />
    </>
  )
}

export default Contact
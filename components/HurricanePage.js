import React from 'react';

const HurricanePage = () => {
  // URL of your hosted Streamlit app
  const streamlitUrl = 'https://natural-disaster-codefury-b2wswuvw8vvvpoki5oenso.streamlit.app/'; // Replace with your actual URL
  
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Step-by-Step Guide to Hurricane Preparedness</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Know Your Risk</h2>
        <p className="mb-4">Understand the hurricane risk in your area. Check local weather services for updates and warnings.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Create an Emergency Plan</h2>
        <p className="mb-4">Make a family emergency plan that includes evacuation routes, emergency contacts, and meeting points.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Prepare an Emergency Kit</h2>
        <p className="mb-4">Pack an emergency kit with essentials like non-perishable food, water, medications, and a flashlight.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Secure Your Home</h2>
        <p className="mb-4">Make sure your home is secure. Install storm shutters or board up windows and doors.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Stay Informed</h2>
        <p className="mb-4">Monitor weather updates and follow local authorities’ instructions.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Helpful Videos</h2>
        <div className="flex flex-col gap-4">
          <div>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/your-video-id" 
              title="Hurricane Safety Tips" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <p className="mt-2">How to Prepare for a Hurricane </p>
          </div>
          <div>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/another-video-id" 
              title="Emergency Kit Essentials" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <p className="mt-2">What to Include in Your Emergency Kit</p>
          </div>
        </div>
      </section>

      {/* Added Streamlit Map Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Interactive Disaster Map</h2>
        <div className="w-full h-96">
          <iframe
            src={streamlitUrl}
            title="Disaster Events Map"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
      </section>
    </div>
  );
};

export default HurricanePage;

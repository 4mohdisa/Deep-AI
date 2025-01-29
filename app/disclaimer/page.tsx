import React from "react";

export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-6">Last updated: January 29, 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Not Financial Advice</h2>
          <p>
            The information provided on this website is for general informational purposes only. 
            Nothing on this site should be construed as financial advice. All investments carry risk, 
            and all investment decisions of an individual remain the responsibility of that individual.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">No Guarantees</h2>
          <p>
            While we make every effort to keep the information up-to-date and accurate, we make no 
            representations or warranties of any kind, express or implied, about the completeness, 
            accuracy, reliability, suitability, or availability of the website or the information, 
            products, services, or related graphics contained on the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Meme Content</h2>
          <p>
            The memes and content shared on this platform are for entertainment purposes only. 
            We do not claim ownership of user-submitted content, and all copyrights belong to 
            their respective owners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">External Links</h2>
          <p>
            Our website may contain links to external sites. We are not responsible for the 
            content or practices of these sites and encourage users to read their individual 
            terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Disclaimer</h2>
          <p>
            We reserve the right to modify this disclaimer at any time. Changes will be 
            effective immediately upon posting to the website.
          </p>
        </section>
      </div>
    </div>
  );
}

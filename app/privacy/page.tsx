import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-6">Last updated: January 29, 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information Collection and Use</h2>
          <p>
            We respect your privacy and are committed to protecting your personal information. 
            We do not collect any personal information unless explicitly provided by you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
          <p>
            We use essential cookies to ensure the basic functionality of our website. 
            These cookies do not track your personal information or browsing behavior.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for 
            the privacy practices or content of these external sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p>
            We reserve the right to update this privacy policy at any time. Changes will be 
            effective immediately upon posting to the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about our privacy policy, please contact us through 
            our social media channels.
          </p>
        </section>
      </div>
    </div>
  );
}


"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

function TermsAndConditionsContent() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <>
      <style jsx>{`
        .terms-content h2 {
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .terms-content p,
        .terms-content ul {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .terms-content a {
          text-decoration: underline !important;
          color: hsl(var(--primary));
        }
        
        .terms-content a:hover {
          color: hsl(var(--primary));
        }
      `}</style>
      
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter font-headline text-primary">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-lg text-neutral-400">Last Updated: {currentDate}</p>
        </header>

        <div className="terms-content prose prose-invert prose-lg mx-auto text-neutral-300 prose-h2:text-primary prose-h2:font-bold prose-a:text-primary prose-a:underline hover:prose-a:text-primary">
          <p>Welcome to MotoSpark!</p>
          
          <p>
            These terms and conditions outline the rules and regulations for the use of MotoSpark's Website, located at{' '}
            <Link href="/">https://auto-spark.vercel.app/</Link>.
          </p>
          
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use MotoSpark if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2>Cookies</h2>
          
          <p>
            We employ the use of cookies. By accessing MotoSpark, you agreed to use cookies in agreement with the MotoSpark's{' '}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
          
          <p>
            Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
          </p>

          <h2>License</h2>
          
          <p>
            Unless otherwise stated, MotoSpark and/or its licensors own the intellectual property rights for all material on MotoSpark. All intellectual property rights are reserved. You may access this from MotoSpark for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          
          <p>You must not:</p>
          
          <ul>
            <li>Republish material from MotoSpark</li>
            <li>Sell, rent or sub-license material from MotoSpark</li>
            <li>Reproduce, duplicate or copy material from MotoSpark</li>
            <li>Redistribute content from MotoSpark</li>
          </ul>

          <h2>Disclaimer</h2>
          
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          </p>
          
          <ul>
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          
          <p>
            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
          </p>
          
          <p>
            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
          </p>
        </div>
      </div>
    </>
  );
}


export default function TermsAndConditionsPage() {
    return <TermsAndConditionsContent />;
}

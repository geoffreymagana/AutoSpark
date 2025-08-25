"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PrivacyPolicyPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <>
      <style jsx>{`
        .privacy-content h2 {
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .privacy-content p,
        .privacy-content ul {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .privacy-content a {
          text-decoration: underline !important;
        }
        
        .privacy-content a:hover {
          text-decoration: underline !important;
        }
      `}</style>
      
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter font-headline text-primary">
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-neutral-400">Last Updated: {currentDate}</p>
        </header>

        <div className="privacy-content prose prose-invert prose-lg mx-auto text-neutral-300 prose-h2:text-primary prose-h2:font-bold prose-a:text-primary hover:prose-a:text-accent">
          <p>
            At AutoSpark, accessible from{' '}
            <Link href="/">https://auto-spark.vercel.app/</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by AutoSpark and how we use it.
          </p>
          
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>

          <h2>Log Files</h2>
          
          <p>
            AutoSpark follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>

          <h2>Cookies and Web Beacons</h2>
          
          <p>
            Like any other website, AutoSpark uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. For more general information on cookies, please read our{' '}
            <Link href="/cookies">Cookie Policy</Link>.
          </p>

          <h2>Privacy Policies</h2>
          
          <p>
            You may consult this list to find the Privacy Policy for each of the advertising partners of AutoSpark.
          </p>
          
          <p>
            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on AutoSpark, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          
          <p>
            Note that AutoSpark has no access to or control over these cookies that are used by third-party advertisers.
          </p>

          <h2>Children's Information</h2>
          
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          </p>
          
          <p>
            AutoSpark does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
          </p>

          <h2>Online Privacy Policy Only</h2>
          
          <p>
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in AutoSpark. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>

          <h2>Consent</h2>
          
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its <Link href="/terms">Terms and Conditions</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
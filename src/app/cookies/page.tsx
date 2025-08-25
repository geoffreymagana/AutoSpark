"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookiePolicyPage() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <>
      <style jsx>{`
        .cookie-content h2 {
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .cookie-content p,
        .cookie-content ul {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .cookie-content li {
          margin-bottom: 1rem;
        }

        .cookie-content a {
          text-decoration: underline !important;
          display: inline;
        }

        .cookie-content a:hover {
          text-decoration: underline !important;
          display: inline;
        }

        .cookie-content strong {
          font-weight: bold;
        }
      `}</style>

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter font-headline text-primary">
            Cookie Policy
          </h1>
          <p className="mt-2 text-lg text-neutral-400">
            Last Updated: {currentDate}
          </p>
        </header>

        <div className="cookie-content prose prose-invert prose-lg mx-auto text-neutral-300 prose-h2:text-primary prose-h2:font-bold prose-a:text-primary hover:prose-a:text-accent">
          <p>
            This is the Cookie Policy for AutoSpark, accessible from{" "}
            <Link href="/">https://auto-spark.vercel.app/</Link>.
          </p>

          <h2>What Are Cookies</h2>

          <p>
            As is common practice with almost all professional websites, this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or 'break'
            certain elements of the site's functionality.
          </p>

          <h2>How We Use Cookies</h2>

          <p>
            We use cookies for a variety of reasons detailed below.
            Unfortunately, in most cases, there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>

          <h2>Disabling Cookies</h2>

          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of this
            site. Therefore it is recommended that you do not disable cookies.
          </p>

          <h2>The Cookies We Set</h2>

          <ul>
            <li>
              <strong>Account related cookies:</strong> If you create an account
              with us then we will use cookies for the management of the signup
              process and general administration. These cookies will usually be
              deleted when you log out however in some cases they may remain
              afterwards to remember your site preferences when logged out.
            </li>
            <li>
              <strong>Login related cookies:</strong> We use cookies when you
              are logged in so that we can remember this fact. This prevents you
              from having to log in every single time you visit a new page.
              These cookies are typically removed or cleared when you log out to
              ensure that you can only access restricted features and areas when
              logged in.
            </li>
            <li>
              <strong>Site preferences cookies:</strong> In order to provide you
              with a great experience on this site we provide the functionality
              to set your preferences for how this site runs when you use it. In
              order to remember your preferences we need to set cookies so that
              this information can be called whenever you interact with a page
              is affected by your preferences.
            </li>
          </ul>

          <h2>Third Party Cookies</h2>

          <p>
            In some special cases we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site.
          </p>

          <p>
            This site uses Google Analytics which is one of the most widespread
            and trusted analytics solution on the web for helping us to
            understand how you use the site and ways that we can improve your
            experience. These cookies may track things such as how long you
            spend on the site and the pages that you visit so we can continue to
            produce engaging content.
          </p>

          <h2>More Information</h2>

          <p>
            Hopefully that has clarified things for you. If you are still
            looking for more information then you can contact us through one of
            our preferred contact methods:
          </p>

          <p>
            Email:{" "}
            <Link href="mailto:contact@autospark.co.ke">
              contact@autospark.co.ke
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

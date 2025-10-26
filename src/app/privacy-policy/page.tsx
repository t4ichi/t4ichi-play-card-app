import { env } from "@/config/env";
import type { Metadata } from "next";

const baseUrl = env.SITE_URL;

export const metadata: Metadata = {
  title: "プライバシーポリシー | taichi no heya",
  description: "アプリのプライバシーポリシーに関する情報です。",
  alternates: {
    canonical: `${baseUrl}/privacy-policy`,
  },
  openGraph: {
    title: "プライバシーポリシー | taichi no heya",
    description: "アプリのプライバシーポリシーに関する情報です。",
    url: `${baseUrl}/privacy-policy`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "プライバシーポリシー | taichi no heya",
    description: "アプリのプライバシーポリシーに関する情報です。",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <p>
          The app was built as a Free app. The SERVICE is provided at no cost
          and is intended for use as is.
        </p>

        <p>
          This page informs visitors about policies regarding collection, use,
          and disclosure of Personal Information for the Service.
        </p>

        <p>
          By using the Service, you agree to the collection and use of
          information as described in this policy. Personal Information
          collected will be used for providing and improving the Service.
          Information will not be shared except as described in this Privacy
          Policy.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Information Collection and Use
          </h2>
          <p>
            For a better experience, the app may require providing personally
            identifiable information. Requested information will be retained on
            the device and not collected by the app.
          </p>
          <p>
            The app uses third-party services that may collect identifying
            information:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>AdMob</li>
            <li>Google Analytics for Firebase</li>
            <li>Unity</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Log Data</h2>
          <p>
            When using the Service, error log data may be collected, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Device IP address</li>
            <li>Device name</li>
            <li>Operating system version</li>
            <li>App configuration</li>
            <li>Time and date of Service use</li>
            <li>Other statistics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p>
            The Service does not explicitly use cookies, but third-party code
            may use cookies to collect information and improve services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Service Providers</h2>
          <p>Third-party companies may be employed to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Facilitate the Service</li>
            <li>Provide the Service</li>
            <li>Perform Service-related tasks</li>
            <li>Analyze Service usage</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p>
            Commercially acceptable protection methods are used, but absolute
            security cannot be guaranteed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Links to Other Sites</h2>
          <p>
            The Service may contain links to external sites. Users are advised
            to review their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p>
            The Service does not address users under 13. No personally
            identifiable information from children is knowingly collected.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Changes to Privacy Policy
          </h2>
          <p>
            The policy may be updated periodically. Users are advised to review
            this page for changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            Questions or suggestions can be sent to{" "}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              className="text-blue-600 hover:underline"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

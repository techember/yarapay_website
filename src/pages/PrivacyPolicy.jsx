export default function PrivacyPolicy() {
  return (
    <section className="bg-gradient-to-br from-[#f3e8ff] via-[#e8d6ff] to-[#f0e6ff] min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6 space-y-8">

        {/* Page Header */}
        <h1 className="text-4xl font-extrabold text-[#471d7d] mb-6">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#ead6ff]">
          <p className="text-[#3a1667] leading-relaxed mb-6">
            When you visit or buy something from <strong>YaraPay</strong>, this Privacy Policy applies
            and explains how your personal data is collected, used, and shared.
          </p>

          {/* Sections */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-[#471d7d] mb-2">
                Information we collect:
              </h2>
              <p className="text-[#3a1667]">
                We automatically gather certain information about your device when you
                access YaraPay, including your browser, IP address, time zone, and cookies.
                We also track pages you view, search keywords, and interactions. This is
                called <strong>Device Information</strong>.
              </p>
              <p className="text-[#3a1667] mt-2">
                Additionally, we collect <strong>Personal Information</strong> when you
                use our services or platform, including name, address, phone number, email,
                and contacts. This helps us provide services and improve your experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#471d7d] mb-2">
                Technologies we use:
              </h2>
              <ul className="list-disc list-inside text-[#3a1667] space-y-1">
                <li>Cookies — files on your device containing a unique ID</li>
                <li>Log files — track site activity, IP, browser type, and timestamps</li>
                <li>Order information — name, billing/shipping address, payment info</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#471d7d] mb-2">
                How we use your information:
              </h2>
              <p className="text-[#3a1667]">
                To fulfill orders, handle payments, setup shipments, and send order confirmations.
                We also use this data to contact you, check for fraud, and send relevant offers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#471d7d] mb-2">
                Sharing of collected information:
              </h2>
              <p className="text-[#3a1667]">
                We may share information with third parties like analytics providers for insights,
                or to comply with legal requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#471d7d] mb-2">
                Behavioral advertising:
              </h2>
              <p className="text-[#3a1667]">
                We may send marketing emails or ads tailored to your interests.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#471d7d] mb-2">
                Data retention:
              </h2>
              <p className="text-[#3a1667]">
                We keep order information for 5 years unless you request deletion earlier.
                Data is securely deleted or anonymized after this period.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#471d7d] mb-2">
                Updates:
              </h2>
              <p className="text-[#3a1667]">
                We may update this policy to reflect changes in practices or regulations.
                Contact us at{" "}
                <a href="mailto:yarapay@zohomail.in" className="font-medium text-[#7c3aed] hover:underline">
                  yarapay@zohomail.in
                </a>{" "}
                for questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

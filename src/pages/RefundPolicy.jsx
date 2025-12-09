export default function RefundPolicy() {
  return (
    <section className="bg-gradient-to-br from-[#f3e8ff] via-[#e8d6ff] to-[#f0e6ff] py-16 min-h-screen">
      <div className="max-w-7xl mx-auto p-6 sm:p-10">

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#ead6ff]">

          <h1 className="text-3xl font-bold mb-6 text-[#471d7d]">
            Refund Policy
          </h1>

          <p className="text-[#3a1667] leading-relaxed">
            Thank you for choosing <strong>YaraPay</strong>, a premier mobile recharge and utility 
            payments platform. We are committed to delivering exceptional service and ensuring 
            customer satisfaction.  
            This refund policy explains how refunds work for mobile recharge and other transactions 
            made through the <strong>YaraPay</strong> platform.
          </p>

          {/* Eligibility Section */}
          <section id="eligibility">
            <h2 className="text-lg font-bold text-[#471d7d] mt-8 mb-4">
              Eligibility for Refunds
            </h2>
            <p className="text-[#3a1667] mt-4">
              <strong>1.1</strong> Refunds will be provided only in the following case:
            </p>
            <p className="mt-2 text-[#3a1667]">
              a) If a mobile recharge, utility payment, or other transaction fails due to technical
              issues or errors on our platform.
            </p>
            <p className="mt-2 text-[#3a1667]">
              <strong>1.2</strong> Refund requests must be reported within 48 hours of the failed transaction.
            </p>
          </section>

          {/* Request Process */}
          <section id="request">
            <h2 className="text-lg font-bold text-[#471d7d] mt-8 mb-4">
              Refund Request Process
            </h2>

            <p className="text-[#3a1667] mb-4">
              <strong>2.1</strong> To request a refund, the user must contact YaraPay customer support 
              within 48 hours of the failed transaction.
            </p>

            <p className="text-[#3a1667] mb-2">
              <strong>2.2</strong> Refund requests must include:
            </p>

            <ul className="list-disc list-inside mb-6 text-[#3a1667]">
              <li>Transaction ID</li>
              <li>Date and time of the transaction</li>
              <li>Mobile number or account details used</li>
              <li>A brief description of the issue</li>
            </ul>

            <p className="text-[#3a1667] mb-4">
              <strong>2.3</strong> Refund requests can be submitted via email or phone through our website.
            </p>
          </section>

          {/* Processing */}
          <section id="processing">
            <h2 className="text-lg font-bold text-[#471d7d] mt-8 mb-4">
              Refund Processing
            </h2>

            <p className="text-[#3a1667] mb-4">
              <strong>3.1</strong> YaraPay will review the refund request within 7 working days.
            </p>

            <p className="text-[#3a1667] mb-4">
              <strong>3.2</strong> If approved, the refund amount will be credited to the user’s YaraPay
              wallet within 3–5 working days.
            </p>

            <p className="text-[#3a1667] mb-4">
              <strong>3.3</strong> The refunded amount can only be used for future recharges and utility
              payments on YaraPay.
            </p>
          </section>

          {/* Exceptions */}
          <section id="exceptions">
            <h2 className="text-lg font-bold text-[#471d7d] mt-8 mb-4">
              Refund Exceptions
            </h2>

            <p className="text-[#3a1667] mb-4">
              <strong>4.1</strong> No refunds for failures caused by incorrect user inputs, including wrong 
              mobile numbers.
            </p>

            <p className="text-[#3a1667] mb-4">
              <strong>4.2</strong> Refund requests made after 48 hours will not be accepted.
            </p>

            <p className="text-[#3a1667] mb-4">
              <strong>4.3</strong> Wallet balance cannot be withdrawn. It can only be used for recharges and 
              utility payments.
            </p>
          </section>

          {/* Changes */}
          <section id="changes">
            <h2 className="text-lg font-bold text-[#471d7d] mt-8 mb-4">
              Changes to the Refund Policy
            </h2>

            <p className="text-[#3a1667] mb-4">
              <strong>5.1</strong> YaraPay reserves the right to modify this policy anytime. Changes take effect 
              immediately upon posting on our website.
            </p>

            <p className="text-[#3a1667] mb-4">
              <strong>5.2</strong> Users should regularly review the refund policy for updates.
            </p>
          </section>

          {/* Contact */}
          <p className="text-[#3a1667]">
            For queries about our refund policy, contact us at{" "}
            <a
              href="mailto:yarapay@zohomail.in"
              className="text-[#7c3aed] font-semibold hover:underline"
            >
              yarapay@zohomail.in
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
}

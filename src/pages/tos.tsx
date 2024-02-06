export default function Tos() {
  return (
    <div className="">
      <section
        id="hero"
        className="flex max-w-6xl flex-col content-center items-center justify-center self-center lg:flex-row"
      >
        <div className="mt-4 flex flex-col ">
          <img
            className="w-1/2 self-center"
            src="src/assets/xtralogo1.png"
            alt="Our logo"
          />
        </div>
        <div className="m-4 mr-8 flex flex-col content-center justify-around space-x-4 space-y-4">
          {" "}
          <h1 className="my-4 text-center font-serif text-2xl font-extrabold lg:mt-8">
            Arkansas Duty Duty
          </h1>
          <h2 className="my-4 text-center font-serif text-2xl font-bold">
            Terms of Service
          </h2>
          <p className="">
            Arkansas Doody Duty is a Pet Waste Management service owned and
            operated by Arkansas Doody Duty L.L.C. (we, us, our). We are
            registered in Arkansas and currently operate in Cabot, Ward, Beebe,
            Searcy, and surrounding areas.
          </p>
        </div>
      </section>
      <section className="text-lg child:p-6">
        <p className="">
          Please read the following terms and conditions carefully. Upon
          acceptance of a Service Charge Quote, provided online through our
          website (www.ARDoodyDuty.com) or through e-mail, services will begin
          and continue indefinitely and on a recurring basis, until canceled in
          accordance with these Terms. <br /> <br />
          If you do not accept these Terms, do not register for service. We may
          update these Terms at any time. Please review the Terms regularly. You
          will be notified via e-mail of any changes. Your continued use of the
          Service after the terms have changed indicated your agreement to be
          legally bound to the updated and/or amended Terms.
        </p>
        <h4 className="ml-8 text-xl font-bold">Cancellation</h4>
        <p className="">
          A client may cancel its Service at any time for any reasion without
          penalty. To request cancellation, please call&nbsp;
          {import.meta.env.VITE_CONTACT_PHONE + " "}or email&nbsp;
          {import.meta.env.VITE_CONTACT_EMAIL}. Any outstanding payment for
          services rendered prior to cancellation shall be due and payable at
          the time the client&apos;s Service is terminated.
        </p>
        <h4 className="ml-8 text-xl font-bold">Pausing Service</h4>
        <p className="">
          At any time, a client may pause their service. If client has an
          outstanding payment due at the time of pausing service, payment will
          be due before service resumes, or at latest forty-five days after the
          client first paused service. Additional charges may apply upon
          resuming service.
        </p>
        <h4 className="ml-8 text-xl font-bold">Client Responsibilities</h4>
        <p className="">
          It is the client&apos;s responsibility to understand and accept these
          terms prior to accepting a Service Charge Quote. Acceptance of a
          Service Charge Quote is also acceptance of these Terms. Clients are
          responsible for providing accurate information necessary for Service,
          including but not limited to address, name, phone number, and using
          authorized payment methods.
        </p>
        <h4 className="ml-8 text-xl font-bold">Payment</h4>
        <p className="">
          Payment is due upon acceptance of the Service Charge Quote. If client
          lives in an area where sales tax is required, client will also be
          responsible for the tax amount. Client shall submit accurate payment
          information which we may securely store and charge for the fees owed
          under these Terms. Should client&apos;s payment information fail, and
          the client fails to update payment information within five business
          days, we may terminate the Service.
        </p>
        <h4 className="ml-8 text-xl font-bold">Requirements for Service</h4>
        <p className="child:block child:p-2">
          <span className="">
            Services will be performed on the day of the week specified when
            accepting your Service Charge Quote, unless you are otherwise
            notified. Please ensure we will have access to your yard and any
            areas needing serviced. If we cannot access client&apos;s yard,
            client will be notified and charged for the visit. We will attempt
            to secure all gates upon exit, however we do not assume
            responsibility for securing client&apos;s gates. <br />
          </span>
          <span className="">
            We are happy to work with friendly animals, however any aggressive
            animals must be put away during Service. If we cannot access
            client&apos;s yard or cannot complete service because of an
            aggressive animal, client will be notified and charged for the
            visit. If the service provider is injured by a client&apos;s
            aggressive animal, the client is responsible for all medical fees
            within a reasonable amount of time. <br />
          </span>
          <span className="">
            If Client fails to make a scheduled payment, service may be
            postponed until all amounts due are recieved. If client&apos;s
            service is suspended and client does not pay in full within 30 days,
            service will be terminated. <br />
          </span>
          <span className="">
            We care about the safety of our service providers, and as a result,
            AR Doody Duty L.L.C. maintains the right to postpone, cancel, or
            terminate a client&apos;s service for certain events, without
            liability. These events include but are not limited to snow, heavy
            rain, lightning, strong winds, extreme temperatures, acts of
            government, acts of god, or other circumstances out of our control.
          </span>
        </p>
        <h4 className="ml-8 text-xl font-bold">Service Times</h4>
        <p className="">
          We are unable to provide any client with time-specific visits. We
          begin cleaning yards at sunrise and end at sundown. Client&apos;s
          service day depends on client&apos;s address and our established
          routes. This helps to keep prices low. Certain holidays will require a
          client&apos;s service to be rescheduled.
        </p>
        <h4 className="ml-8 text-xl font-bold">Liability</h4>
        <p className="">
          Arkansas Doody Duty L.L.C. and its members, at no time shall be liable
          for any indirect, incidental, special, or consequential damages
          arising from or relating to our Service. This includes but is not
          limited to, damaged grass, open gates, and escaped animals.
        </p>
        {/* PRIVACY POLICY
        <h4 className="ml-8 text-xl font-bold">Cancellation</h4>
        <p className=""></p> */}
      </section>
    </div>
  );
}

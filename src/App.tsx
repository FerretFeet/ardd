import { Link } from "react-router-dom";

function Index() {
  /*###########################
  SPOT TO WRITE ACCEPTED PAYMENTS
  BEAUTIFY HEADING TRANSITIONS */
  return (
    <div className="flex flex-col content-center justify-center bg-off-white">
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
          <h4 className="m-2 p-3 text-center text-xl font-bold underline">
            I Do My Business After They Do Theirs
          </h4>
        </div>
        <div className="m-4 mr-8 flex flex-col content-center justify-around space-x-4 space-y-4">
          {" "}
          <h1 className="my-4 text-center font-serif text-2xl font-extrabold lg:mt-8">
            Arkansas Duty Duty
          </h1>
          <h2 className="order-2 my-4 text-center font-serif text-xl font-bold">
            Pet Waste Pickup
          </h2>
          <p className="order-3 my-4 text-center text-lg font-bold">
            Currently serving Cabot, Ward, Beebe, Searcy, and Surrounding Areas
          </p>
          <div
            id="center-container-button"
            className="order-1 flex content-center justify-center lg:order-4"
          >
            <Link
              reloadDocument
              to="/services"
            >
              <button className="mb-6 mt-4 flex content-center justify-center rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:underline hover:opacity-90">
                See Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ######### NEXT SECTION ################ */}
      <section
        id="intro"
        className="pb-6 text-center text-xl"
      >
        <h2 className="m-8 font-bold ">Don&apos;t Let Things Pile Up</h2>
        <div
          className="flex flex-col lg:flex-row"
          id="intro-container"
        >
          <div className="flex flex-col space-y-4 p-4 text-center text-lg">
            <img
              className="max-w-32 self-center"
              src="src/assets/calendar.png"
              alt="A calendar."
            />
            <h4 className="text-xl font-bold hover:underline">
              Schedule a Visit
            </h4>
            <p className="">
              Online or by phone, I offer biweekly, weekly, or one-time visits.
            </p>
          </div>
          <div className="flex flex-col space-y-4 p-4 text-center text-lg">
            <img
              className="max-w-32 self-center"
              src="src/assets/dogwpoop.png"
              alt="A dog with poop."
            />
            <a
              className="text-xs"
              href="http://www.freepik.com"
            >
              Designed by studiogstock / Freepik
            </a>

            <h4 className="text-xl font-bold hover:underline">
              I&apos;ll Do My Business
            </h4>
            <p className="">
              I&apos;ll come and pick up your yard, while you relax or run
              errands.
            </p>
          </div>
          <div className="flex flex-col space-y-4 p-4 text-center text-lg">
            <img
              className="max-w-32 self-center"
              src="src/assets/yardvector.png"
              alt="A clean yard."
            />
            <h4 className="text-xl font-bold hover:underline">
              Enjoy Your Yard
            </h4>
            <p className="">
              Get out and enjoy your clean yard, without ever getting your hands
              or feet dirty!
            </p>
          </div>
        </div>
      </section>
      <section
        id="whyUs"
        className="p-6"
      >
        <h2 className="m-6 text-center text-2xl font-bold">Why Choose Us?</h2>

        {/* IMAGES BETWEEN AT MD:
        flex flex-col flex-wrap 
        lg:flex-row */}
        <div className="grid justify-items-center space-x-8 p-8 lg:grid-cols-3">
          <img
            src="./src/assets/dog1.png"
            alt="a drawn dog with one ear perked."
            className="mx-auto my-8 w-64"
          />
          <div className="order-2 max-w-lg">
            <h4 className="mb-4 ml-8 mt-8 text-xl font-bold">
              Superior Customer Service
            </h4>
            <p className="text-lg">
              &ensp;I pride myself on making sure every customer is satisfied
              every time. With Arkansas Doody Duty you can rest easy knowing
              that I&apos;ll take care of any and all questions or problems you
              have with my service.
            </p>
          </div>
          <div className="order-3 max-w-lg">
            <h4 className="mb-4 ml-8 mt-8 text-xl font-bold">Hassle-Free</h4>
            <p className="text-lg">
              &ensp;I will notify you via text once I am on my way to service
              you and again once finished. All that is needed from you is access
              to the yard. I will leave your yard 100% doody-free every time.
            </p>
          </div>
          <div className="order-4 max-w-lg">
            <h4 className="mb-4 ml-8 mt-8 text-xl font-bold">
              It Needs to Go Somehow
            </h4>
            <p className="text-lg">
              &ensp;Dog doody can be bad to keep around for several reasons. It
              hosts bacteria, you could step in it and track it inside (your
              dogs probably are), and unlike cattle dung, dog doody is bad for
              grass due to their high-protein diet. So it obviously can’t stay,
              and you don&apos;t want to get your hands dirty, so just contact
              us!
            </p>
          </div>
          <img
            src="./src/assets/dog2.png"
            alt="a drawn dog running."
            className="order-5 m-auto w-64 lg:order-1"
          />
          <img
            src="./src/assets/dog3.png"
            alt="a drawn dog relieving himself."
            className="m-auto hidden w-64 lg:order-1 lg:block"
          />
        </div>
        <Link
          reloadDocument
          to="/contact-us"
        >
          <button className="mx-auto my-6 flex h-20 w-40 items-center justify-center rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:bg-prim-a">
            Get Started
          </button>
        </Link>
      </section>
      <section
        id="about"
        className="flex flex-col items-center justify-center space-x-8 lg:flex-row lg:p-16"
      >
        <div className="">
          <h2 className="m-6 text-center text-2xl font-bold">Meet the Owner</h2>

          <img
            className="w-screen max-w-screen-sm border-4"
            src="src/assets/MeandGirlscrop.jpg"
            alt="The owner with his two black and white dogs"
          />
        </div>
        <p className="p-6 text-justify text-lg lg:text-left">
          &ensp;Owning a dog is one of the many joys in life, but unfortunately
          comes with a few crappy downsides. That&apos;s where I come in. At
          Arkansas&nbsp;Doody&nbsp;Duty I care about your yards cleanliness and
          your pets&apos; health. I offer weekly, biweekly, and one-time
          clean-ups so that you can enjoy your yard. This is a licensed business
          that I hope can launch me into a career of animal care.
        </p>
      </section>
    </div>
  );
}

export default Index;

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="">
      <section className="px-8 pb-8">
        <section className="m-auto flex max-w-6xl flex-col content-center items-center justify-center lg:flex-row">
          <img
            src="src/assets/services-splash.jpg"
            alt="Dog lying on grass"
            className="lg:w-3/4"
          />
          <div className="flex flex-col items-center justify-center p-4 child:p-2">
            <h4 className="mt-5 text-center font-sans text-xl">
              Get Started Doing Your Doody Duty Today
            </h4>
            <div className="flex">
              <Link
                reloadDocument
                to="/contact-us"
              >
                <button className="mx-auto mt-8 w-64 rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:bg-prim-a">
                  <p>Get Your Quote</p>
                </button>
              </Link>
            </div>

            <p className="mt-8 text-center font-serif text-lg">
              Payments Processed Through Paypal.
              <br />
              <span className="italic">Venmo and CashApp Also Accepted.</span>
            </p>
          </div>
        </section>
        <h1 className="mt-12 text-center font-serif text-3xl font-extrabold lg:pt-6">
          Our Services
        </h1>
        <p className="mt-5 text-center font-serif text-lg">
          Services performed on Sat-Mon, 8am-5pm
        </p>
        <div className="items-center justify-center p-8 lg:grid lg:grid-cols-2">
          <div className="flex flex-col">
            <img
              src="./src/assets/house.png"
              alt="a drawn house with a yard."
              className="mx-auto my-8 w-64 lg:order-2"
            />
            <h4 className="mt-10 text-center text-2xl font-bold lg:order-1">
              Yard Cleaning
            </h4>
            <Link
              reloadDocument
              to="/contact-us"
            >
              <button className="order-3 mx-auto mb-6 mt-4 hidden content-center justify-center rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:underline hover:opacity-90 lg:flex">
                Free Quote!
              </button>
            </Link>
          </div>
          <div className="">
            <div className="lg:px-8">
              <h5 className="mt-10 text-xl font-semibold">&ensp;One-Time</h5>
              <p className="mt-5 text-left font-sans text-lg">
                Starting at $60, and including 5.0 gallons of waste removal, if
                more is required, we charged $40 for each additional 5.0 gallon
                bucket used.{" "}
                <Link
                  className="underline hover:italic"
                  reloadDocument
                  to="/contact-us"
                >
                  Contact us for more information
                </Link>
              </p>
            </div>
            <div className="lg:px-8">
              <h5 className="mt-10 text-xl font-semibold">&ensp;Weekly</h5>
              <p className="mt-5 text-left font-sans text-lg">
                Starting at $18/visit for one dog. +5/dog. additional charges
                apply for large yard areas greater than .25 acres.
              </p>
            </div>
            <div className="lg:px-8">
              <h5 className="mt-10 text-xl font-semibold">&ensp;Bi-Weekly</h5>
              <p className="mt-5 text-left font-sans text-lg">
                Starting at $27/visit for one dog. +5/dog. additional charges
                apply for large yard areas greater than .25 acres.
              </p>
            </div>

            <div className="lg:px-8">
              <h5 className="mt-10 text-xl font-semibold">
                &ensp;Waste Removal
              </h5>
              <p className="mt-5 text-left font-sans text-lg">
                <span className="italic">
                  *Only included with One-Time CleanUps
                  <br />
                  Available for all services.
                  <br />
                </span>
                For $7 I&apos;ll take your pet&apos;s waste away with me.
                Otherwise I&apos;ll leave it in your outside trash can.
              </p>
            </div>
            <Link
              reloadDocument
              to="/contact-us"
            >
              <button className="mx-auto mb-6 mt-4 flex content-center justify-center rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:underline hover:opacity-90 lg:hidden">
                Free Quote!
              </button>
            </Link>
          </div>
        </div>
        <div className="content-center items-center justify-center p-8 child:p-4 lg:grid lg:grid-cols-3">
          <div className="">
            <div className="mx-auto lg:size-64">
              <img
                src="./src/assets/horse.png"
                alt="a drawn horse."
                className="mx-auto my-8 w-64"
              />
            </div>
            <h4 className="mt-14 text-center text-2xl font-bold">
              Non-Residential Cleaning
            </h4>
            <p className="mt-5 px-4 text-left font-sans text-lg">
              Have a pet related business or a lot of outdoor space littered
              with trash or poop? Have larger animals and tired of the manure
              everywhere? Contact Us and we&apos;ll see what we can do!
            </p>
            <Link
              reloadDocument
              to="/contact-us"
              className="lg:hidden"
            >
              <button
                type="button"
                className="mx-auto mb-6 mt-4 flex content-center justify-center rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:underline hover:opacity-90 lg:hidden"
              >
                Contact Us!
              </button>
            </Link>
          </div>
          <div className="">
            <div className="mx-auto lg:size-64">
              <img
                src="./src/assets/kennel.png"
                alt="a drawn dog house."
                className="mx-auto my-8 w-64"
              />
            </div>
            <h4 className="mt-14 text-center text-2xl font-bold">
              Kennel Cleaning
            </h4>
            <p className="mt-5 px-4 text-left font-sans text-lg">
              Is your pet as messy as a pig? Need a professional to tackle the
              cleaning and disinfecting of your dog&apos;s kennel? Look no
              further, starting from $50 for smaller jobs. Contact Us and
              we&apos;ll see what we can do!
            </p>
            <Link
              reloadDocument
              to="/contact-us"
              className="lg:hidden"
            >
              <button
                type="button"
                className="mx-auto mb-6 mt-4 flex content-center justify-center rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:underline hover:opacity-90 lg:hidden"
              >
                Contact Us!
              </button>
            </Link>
          </div>
          <div className="">
            <div className="mx-auto lg:size-64">
              <img
                src="./src/assets/dog-walk-1.png"
                alt="a dog struggling against it's leash."
                className="mx-auto my-8 w-64"
              />
            </div>
            <h4 className="mt-14 text-center text-2xl font-bold">
              Dog Walking
            </h4>
            <p className="mt-5 px-4 text-left font-sans text-lg">
              Do your dogs have more energy than you? Need someone to help wear
              them out? For $35 I&apos;ll take your dog for a 60-minute walk.
            </p>
            <p className="text-base">
              (+$20 for two dogs, +$15 for a third dog.)
              <br />
              (only available evenings and weekends.)
            </p>
          </div>
        </div>
        <Link
          reloadDocument
          to="/contact-us"
        >
          <button
            type="button"
            className="mx-auto mb-6 mt-4 flex content-center justify-center rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:underline hover:opacity-90"
          >
            Get A Quote!
          </button>
        </Link>
      </section>

      <section
        id="faq"
        className="m-10"
      >
        <h4 className="p-4 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h4>
        <div className="m-8 rounded-2xl bg-off-white shadow-2xl child:w-full">
          <Disclosure>
            <Disclosure.Button className="flex items-center justify-between border-b-2 p-4 text-xl child:m-4">
              How will payment work?{" "}
              <ChevronRightIcon className="w-8 ui-open:rotate-90" />
            </Disclosure.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-6 pt-4 text-lg">
                Payment is due before service. I accept payments authorized
                through PayPal(also accepts debit and credit), as well as
                through CashApp and Venmo.
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="flex items-center justify-between border-b-2 p-4 text-xl child:m-4">
              When will you visit my yard?
              <ChevronRightIcon className="w-8 ui-open:rotate-90" />
            </Disclosure.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-6 pt-4 text-lg">
                I currently run Saturday and Sunday, between 8am-5pm. After
                signing up, you will be added to the most effecient spot in my
                route. As such, I cannot provide accurate or consistent service
                times. However I will always alert you via text before I head
                your way and after I leave.
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="flex items-center justify-between border-b-2 p-4 text-xl child:m-4">
              Do I need to be home?
              <ChevronRightIcon className="w-8 ui-open:rotate-90" />
            </Disclosure.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-6 pt-4 text-lg">
                I do not require that you be home while I clean your yard, only
                that you leave me a way inside and if necessary, your dogs put
                up. However if when we show up for service and the gate is
                locked, we will leave and consider your service completed.
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="flex items-center justify-between border-b-2 p-4 text-xl child:m-4">
              Do my dogs need to be put up?
              <ChevronRightIcon className="w-8 ui-open:rotate-90" />
            </Disclosure.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-6 pt-4 text-lg">
                If your dogs are friendly, I&apos;m more than happy to work
                alongside them and might even play with them some. However if
                your dogs are not friendly, then yes, please leave them locked
                up somewhere so that I may safely clean your yard. You are
                responsible for any medical bills I incur from your dogs.
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>
      </section>
    </div>
  );
}

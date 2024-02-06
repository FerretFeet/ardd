import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-beige">
      <div className="flex flex-col items-center gap-6 border-b-2 bg-off-white p-6 py-8">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Don&apos;t Wait, Start Today!
        </h2>
        <div className="flex w-full flex-row content-around justify-around gap-6">
          <div className="hidden w-2/5 gap-4 text-center md:flex md:flex-col">
            <p className="text-center text-2xl font-bold">Service Area</p>
            <img
              src="src/assets/mapimage.jpg"
              alt="A map of our service area, including Cabot, Beebe, and Searcy."
            />
            {/* <iframe
              title="serviceArea"
              src="https://www.google.com/maps/d/u/0/embed?mid=11DIm96v_APpdeS9oCpjI21n9YO1nHJM&ehbc=2E312F&noprof=1"
              width="640"
              height="480"
            ></iframe> */}
          </div>

          <div className="flex flex-col items-center justify-evenly gap-6 px-8 py-16">
            <div className="min-w-min max-w-64 bg-tert-1 p-3 md:mt-10 md:max-w-96 ">
              <img
                className="-rotate-3 drop-shadow-2xl"
                src="src/assets/footerpic.jpg"
                alt="A dog"
              />
            </div>
            <Link
              reloadDocument
              to="/contact-us"
            >
              <button className="rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:bg-prim-a lg:text-3xl">
                <p>Get Your Quote</p>
              </button>
            </Link>
            <p className="text-center text-xl font-semibold lg:text-3xl">
              Or Call #{import.meta.env.CONTACT_PHONE}
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 py-8">
        <p className="leading-loose">
          <span>
            <span className="font-semibold">Arkansas Doody Duty L.L.C. </span>
            is licensed and registered in the state of Arkansas.{" "}
            <br className="lg:hidden" />
          </span>
          <span>Owned and Operated by Brandon West.</span>
        </p>
        <nav className="flex flex-row font-medium underline">
          <ul className="w-1/2">
            <li className="my-6">
              <a href="/">Home</a>
            </li>
            {/* <li className="my-6">
              <a href="./about">About</a>
            </li> */}
            <li className="my-6">
              <a href="/services">Services</a>
            </li>
          </ul>
          <ul className="w-1/2">
            <li className="my-6">
              <a href="/services#faq">Frequently Asked Questions</a>
            </li>
            <li className="my-6">
              <a href="/terms-of-service">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

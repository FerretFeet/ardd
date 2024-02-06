import ContactForm from "../components/ContactForm";
export default function ContactUs() {
  const temp = import.meta.env.VITE_CONTACT_PHONE;
  console.log(".env test" + temp);

  return (
    <section className="">
      <h1 className="my-8 text-center font-serif text-3xl font-extrabold lg:mt-8">
        Contact Us
      </h1>
      {/* add with form, so cta still visible from top of page
      <h4>
        or Get Started With Your <button className="">Free Quote</button>
      </h4> */}
      {/* <p className="my-4 p-4 text-center font-serif text-lg">
        Call&nbsp;
        <span className="hover:underline">
          {import.meta.env.VITE_CONTACT_PHONE}
          <br />
          <br />
        </span>
        Or Send an E-Mail To&nbsp;
        <span className="hover:underline">
          {import.meta.env.VITE_CONTACT_EMAIL}
          <br />
        </span>
        {
          //FORM TO SEND EMAIL, HIDDEN UNTIL WORKED OUT
        }
        <span className="hidden">Or fill out the form below</span>
      </p> */}
      <ContactForm />
    </section>
  );
}

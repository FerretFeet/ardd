import { Form } from "react-router-dom";

export default function QuoteForm() {
  return (
    <div className="my-8">
      <h2 className="text-center text-3xl font-bold">Get Your Quote</h2>
      <Form
        method="post"
        className="m-8 flex flex-col items-center justify-center gap-6 text-xl children:mb-6"
      >
        <section className="w-full p-8">
          <div className="flex w-full justify-center gap-8 pb-8">
            <label htmlFor="zipcode">Zipcode:</label>
            <input
              className="border-2"
              type="text"
              name="zipcode"
              id="zipcode"
              max={5}
            />
          </div>
          <button className="mx-auto mt-4 flex content-center justify-center rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:underline hover:opacity-90">
            Check If You&apos;re In Our Service Area
          </button>
          {/* if yes, show next step, if no, redirect to contact-form */}
        </section>
        <section className="space-y-8">
          <p className="pb-8 text-center text-2xl">Choose from our services.</p>
          <div className="mx-auto grid w-full grid-cols-2 children:mx-4 children:gap-4">
            <div className="mb-4 flex items-center">
              <input
                id="yardCleaning"
                type="checkbox"
                value=""
                className="size-4 rounded focus:ring-2"
              />
              <label
                htmlFor="yardCleaning"
                className="ms-2 text-lg font-medium"
              >
                Yard Cleaning
              </label>
            </div>
            <div className="mb-4 flex items-center">
              <input
                id="dogWalking"
                type="checkbox"
                value=""
                className="size-4 rounded focus:ring-2"
              />
              <label
                htmlFor="dogWalking"
                className="ms-2 text-lg font-medium"
              >
                Dog Walking
              </label>
            </div>
            <div className="mb-4 flex items-center">
              <input
                id="nonResidentialYardCleaning"
                type="checkbox"
                value=""
                className="size-4 rounded focus:ring-2"
              />
              <label
                htmlFor="nonResidentialYardCleaning"
                className="ms-2 text-lg font-medium"
              >
                Non-Residential Yard Cleaning
              </label>
            </div>
            <div className="mb-4 flex items-center">
              <input
                id="kennelCleaning"
                type="checkbox"
                value=""
                className="size-4 rounded focus:ring-2"
              />
              <label
                htmlFor="kennelCleaning"
                className="ms-2 text-lg font-medium"
              >
                Kennel Cleaning
              </label>
            </div>
          </div>
          <button className="mx-auto mb-6 mt-4 flex content-center justify-center rounded-md bg-prim-1 p-4 text-xl font-semibold text-off-white hover:underline hover:opacity-90">
            Next
          </button>
        </section>
        <section id="quotePrep">
          <section
            id="yardCleaningOptions"
            className=""
          >
            <h4 className="mb-2 text-xl">Yard Cleaning</h4>
            <p className="mb-6 text-base italic">
              Once or Weekly Pet Waste Pickup
            </p>

            <div className="relative mb-14">
              <label htmlFor="amntDogsClean">How many dogs do you own?</label>
              <input
                className="h-2 w-full cursor-pointer"
                type="range"
                id="amntDogsClean"
                min={1}
                max={9}
              />
              <span className="absolute -bottom-6 start-0 text-sm">1</span>
              <span className="absolute -bottom-6 start-1/4 text-sm">3</span>
              <span className="absolute -bottom-6 start-1/2 text-sm">5</span>
              <span className="absolute -bottom-6 start-3/4 text-sm">7</span>
              <span className="absolute -bottom-6 end-0 text-sm">9</span>
            </div>
            <div className="relative mb-6">
              <label htmlFor="yardFreq">
                How often do you need your yard cleaned?
              </label>
              <input
                className="h-2 w-full cursor-pointer"
                type="range"
                id="yardFreq"
                min={1}
                max={3}
              />
              <span className="absolute -bottom-6 start-0 text-sm">Once</span>
              <span className="absolute -bottom-6 start-1/2 -translate-x-1/4 text-sm">
                Weekly
              </span>
              <span className="absolute -bottom-6 end-0 text-sm">
                Bi-Weekly
              </span>
            </div>
          </section>
          <section
            id="dogWalking"
            className=""
          >
            <h4 className="mb-2 mt-20 text-xl">Dog Walking</h4>
            <p className="mb-6 text-base italic">Hour long dog walks</p>
            <div className="relative mb-14">
              <label htmlFor="amntDogsClean">How many dogs do you own?</label>
              <input
                className="h-2 w-full cursor-pointer"
                type="range"
                id="amntDogsClean"
                min={1}
                max={9}
              />
              <span className="absolute -bottom-6 start-0 text-sm">1</span>
              <span className="absolute -bottom-6 start-1/4 text-sm">3</span>
              <span className="absolute -bottom-6 start-1/2 text-sm">5</span>
              <span className="absolute -bottom-6 start-3/4 text-sm">7</span>
              <span className="absolute -bottom-6 end-0 text-sm">9</span>
            </div>
            <div className="">
              <div className="relative mb-6">
                <label htmlFor="yardFreq">
                  How frequently do you want me to walk your dog(s)? Per week
                </label>
                <input
                  className="h-2 w-full cursor-pointer"
                  type="range"
                  id="yardFreq"
                  min={1}
                  max={5}
                />
                <span className="absolute -bottom-6 start-0 text-sm">1</span>
                <span className="absolute -bottom-6 start-1/4 text-sm">2</span>
                <span className="absolute -bottom-6 start-1/2 text-sm">3</span>
                <span className="absolute -bottom-6 start-3/4 text-sm">4</span>
                <span className="absolute -bottom-6 end-0 text-sm">5</span>
              </div>
            </div>
          </section>
          <button className="mx-auto mt-20 flex content-center justify-center rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:underline hover:opacity-90">
            Get Your Quote
          </button>
        </section>
        <section id="quoteDisplay">
          {/* with add-ons for yard cleaning 
          outlet maybe*/}
        </section>
        <section
          id="personalInfo"
          className=""
        >
          <div className="">
            <div className="">
              <label
                className=""
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className=""
              />
            </div>
            <div className="">
              <label
                className="block sm:inline"
                htmlFor="firstName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="firstName"
                className=""
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <label
                className="block sm:inline "
                htmlFor="email"
              >
                Email:{" "}
              </label>
              <input
                type="email"
                id="email"
                className=""
              />
            </div>
            <div className="">
              <label
                className="block sm:inline "
                htmlFor="phone"
              >
                Phone Number:
              </label>
              <input
                type="phone"
                id="phone"
                className=""
              />
            </div>
          </div>
        </section>
        <section
          id="yardCleaningDetails"
          className=""
        ></section>
        <section
          id="dogWalkingDetails"
          className=""
        ></section>
        <section
          id="finalizingInputs"
          className=""
        ></section>
        {/* TERMS AND CONDITIONS
        <div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
</div> */}
      </Form>
    </div>
  );
}

/*
zipcode: make sure in service area


Which service:
// give desc of each service
  yard cleaning, 
  dog walking, 
  non-residential yard cleaning,
  kennel cleaning
non-residential and kennel refer to contact me
dont redirect, finish on this form

// // show price effects live


// if yardCleaning
//   freq: once, once/2weeks once/week
//   number of dogs: 1-8
//   deodorizor? n/y
//   waste removal: default no, yes

// // disclose hours, 5pm-8pm tues-fri 7am-7pm sat-mon
// if dog-walking
//   freq: 1,2,3,4,5/week
//   #dogs
//   group? w/ other dogs? hide until available

GIVE QUOTE

if non-residential yard cleaning OR Kennel Cleaning
  // QUOTE is not available for this service
  // please call ### finish filling out the form below,
  // with any relevant job-details in the final 
  // textbox.

Sign Up
  first name
  last name
  email
  phone
  address
    street
    city
    zip //used earlier
    //show state?

  if yardCleaning
    for.each.dog
      is it safe for us to be in the yard with your dog
      addt'l comment
    which areas should we clean?

  if dogWalking
    for.each.dog
      
    time for service

  addt'l comments

  referral?
  TOS checkbox
  submit



*/

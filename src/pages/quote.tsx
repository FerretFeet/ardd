import QuoteForm from "../components/QuoteForm";

export default function Quote() {
  return (
    <div className="">
      <div className="mt-4 flex flex-col ">
        <img
          className="w-1/4 self-center"
          src="src/assets/xtralogo1.png"
          alt="Our logo"
        />
      </div>
      <QuoteForm />
    </div>
  );
}

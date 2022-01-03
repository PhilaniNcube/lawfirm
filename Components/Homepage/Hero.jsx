import Link from 'next/link';

export default function Hero() {
  return (
    <div className="overflow-y-hidden">
      <div className="relative flex justify-center items-center md:justify-start md:items-center overflow-y-hidden bg-slate-700 bg-opacity-60 mix-blend-darken">
        <img
          className="hidden lg:block w-full object-cover min-h-[80vh] max-h-[82vh] bg-slate-700 bg-opacity-60 mix-blend-multiply"
          src="/images/lawyer-1.jpg"
          alt="lawyer"
        />
        <img
          className="md:block lg:hidden hidden w-full object-cover min-h-[80vh] max-h-[82vh] bg-slate-700 bg-opacity-60 mix-blend-multiply"
          src="/images/lawyer-1.jpg"
          alt="lawyer"
        />
        <img
          className="md:hidden w-full object-cover min-h-[80vh] max-h-[82vh] bg-slate-700 bg-opacity-60 mix-blend-multiply"
          src="/images/lawyer-1.jpg"
          alt="lawyer"
        />
        <div className="flex absolute justify-start flex-col md:flex-row items-center py-20 sm:py-40 md:py-10 xl:py-20 md:space-y-0">
          <div className="h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col  lg:px-20 xl:px-20">
            <p className="text-xl md:w-64 xl:w-2/4 md:text-2xl xl:text-4xl font-semibold leading-10 text-gray-100 ">
              Your Reliable Law Firm
            </p>
            <p className="mt-4 text-center md:w-64 xl:w-2/4 md:text-left  text-base leading-normal text-gray-200">
              Start off the new year by hitting the ground running with this
              purpose built workmans bag. A culmination of productivity and
              luxury
            </p>
            <Link href="/services" passHref>
              <button className="mt-6 space-x-2 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-2 px-5 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-800  text-white">
                <p>Find Out Our Services</p>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA_XIII-svg1.svg"
                  alt="arrow"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

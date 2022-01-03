export default function Features() {
  return (
    <div>
      <div
        className="relative h-full"
        style={{
          background:
            'linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(215, 219, 255, 1) 99%)',
        }}
      >
        <section className="max-w-8xl mx-auto container py-16">
          <div>
            <div className="flex items-left flex-col px-4">
              <a className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-gray-800">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-left leading-tight lg:w-7/12 md:w-9/12 pt-4">
                  We provide quality legal services for all your needs
                </h2>
              </a>
              <p className="text-md text-left mt-14 text-gray-600 leading-normal lg:w-7/12 md:w-9/12">
                Convallis turpis erat tempus, viverra aliquet. Nullam viverra
                nam auctor sit ipsum malesuada a, duis volutpat. Convallis
                turpis erat tempus, viverra aliquet. Nullam viverra nam auctor
                sit ipsum malesuada a, duis volutpat.
              </p>
            </div>
            <div className="mt-20 flex flex-wrap justify-between px-4">
              <div className="flex sm:w-full md:w-5/12 pb-20">
                <div className="w-10/12">
                  <a className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-gray-800">
                    <h4 className="text-2xl font-bold leading-tight">
                      Medical Malpractice
                    </h4>
                  </a>
                  <p className="text-base text-gray-600 leading-normal pt-2">
                    Vitae nulla nunc euismod vel nunc euismod velpretium tellus
                    accumsan nulla nunc euismod ve semper turpis erat tempus,
                    viverra aliquet.
                  </p>
                </div>
              </div>
              <div className="flex sm:w-full md:w-5/12 pb-20">
                <div className="w-10/12">
                  <a className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-gray-800">
                    <h4 className="text-2xl font-bold leading-tight">
                      Trademarks
                    </h4>
                  </a>
                  <p className="text-base text-gray-600 leading-normal pt-2">
                    Vitae nulla nunc euismod vel nunc euismod velpretium tellus
                    accumsan nulla nunc euismod ve semper turpis erat tempus,
                    viverra aliquet.
                  </p>
                </div>
              </div>
              <div className="flex sm:w-full md:w-5/12 pb-20">
                <div className="w-10/12">
                  <a className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-gray-800">
                    <h4 className="text-2xl font-bold leading-tight">
                      Litigations
                    </h4>
                  </a>
                  <p className="text-base text-gray-600 leading-normal pt-2">
                    Vitae nulla nunc euismod vel nunc euismod velpretium tellus
                    accumsan nulla nunc euismod ve semper turpis erat tempus,
                    viverra aliquet.
                  </p>
                </div>
              </div>
              <div className="flex sm:w-full md:w-5/12 pb-20">
                <div className="w-10/12">
                  <a className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-gray-800">
                    <h4 className="text-2xl font-bold leading-tight">
                      Commercial Law
                    </h4>
                  </a>
                  <p className="text-base text-gray-600 leading-normal pt-2">
                    Vitae nulla nunc euismod vel nunc euismod velpretium tellus
                    accumsan nulla nunc euismod ve semper turpis erat tempus,
                    viverra aliquet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute top-0 right-20">
          <img
            className="invisible md:visible lg:w-auto lg:h-auto w-48 h-48"
            src="https://i.ibb.co/0V7KqPk/Group-1.png"
            alt="Group-1"
          />
        </div>
      </div>
    </div>
  );
}

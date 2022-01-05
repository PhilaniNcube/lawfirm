/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';

export default function Services() {
  return (
    <Fragment>
      <div className="bg-slate-800 xl:px-20 md:px-6 px-4 md:py-20 py-14 w-full flex flex-col items-center justify-center">
        <h1 className="text-gray-100 lg:text-4xl md:text-2xl text-xl lg:leading-9 md:leading-6 font-semibold leading-10">
          Your Legal Services, Without Limits
        </h1>
        <p className="text-base leading-6 mt-4 text-center text-gray-200 lg:w-4/12 w-8/12">
          Protect yourself and your business with quality legal services.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-24 gap-y-11 mt-11">
          <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-1.svg"
              className="w-14 h-14"
              alt="Vector-1"
            />
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Road Accident Fund
            </p>
            <p className="w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center">
              Get your road accident fund claim processed more quickly
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-2.png"
              className="w-14 h-14"
              alt="Vector-1"
            />
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Labour Law
            </p>
            <p className="w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center">
              Get CCMA representation to navigate legal issues related to work
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-3.png"
              className="w-14 h-14"
              alt="Vector-1"
            />
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Commercial Law
            </p>
            <p className="w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center">
              Top practitioners in Corporate law
            </p>
          </div>
          <div className="lg:hidden flex flex-col md:items-start items-center md:justify-start justify-center">
            <div className="w-14 h-14 flex items-center justify-center">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-4.png"
                className="w-14 h-10"
                alt="Vector-1"
              />
            </div>
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Copyright
            </p>
            <p className="w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center">
              Get copyright protections for your intellectual property
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-24 gap-y-11 mt-11">
          <div className="lg:block hidden">
            <div className="w-14 h-14 flex items-center justify-center">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-4.png"
                className="w-14 h-10"
                alt="Vector-1"
              />
            </div>
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Family Law
            </p>
            <p className="w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center">
              From divorce to child maintenance and custody
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-5.png"
              className="w-14 h-14"
              alt="Vector-1"
            />
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Property Law
            </p>
            <p className="w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center">
              Make sure you are protected when buying or selling property
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
            <div className="w-14 h-14 flex items-center justify-center">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-6.png"
                className="w-14 h-12"
                alt="Vector-1"
              />
            </div>
            <p className="text-base font-bold leading-4 mt-6 text-white">
              Criminal Law
            </p>
            <p className="w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center">
              Get representation in court proceeding for criminal cases
            </p>
          </div>
        </div>
        <button className="text-base font-medium leading-5 md:w-auto w-full hover:bg-gray-100 py-3.5 lg:px-8 px-6 bg-white rounded-md mt-12">
          Back To Home Page
        </button>
      </div>
    </Fragment>
  );
}

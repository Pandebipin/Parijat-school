// src/ContactSection.js

import React, { useEffect } from "react";

const Contactsection = () => {
  return (
    <div className="bg-gray-100 py-12 mt-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Contact Us
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.8626237789314!2d83.04251805357285!3d27.661597628620008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996f9b62f9dea11%3A0x7a2153a7d51ff41c!2sBuddhabhumi%20computer%20centre!5e0!3m2!1sen!2snp!4v1719330765905!5m2!1sen!2snp"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="mt-8 flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2 md:pr-8">
            <p className="mt-4 text-lg leading-6 text-gray-600">
              We'd love to hear from you! Whether you have a question about
              features, trials, pricing, need a demo, or anything else, our team
              is ready to answer all your questions.
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Our Office</h3>
              <p className="mt-2 text-base text-gray-600">
                Buddha-bhumi-2,gorusinge
              </p>
              <p className="mt-2 text-base text-gray-600">
                Email: contact@company.com
              </p>
              <p className="mt-2 text-base text-gray-600">
                Phone: (123) 456-7890
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <form
              action="#"
              method="POST"
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactsection;

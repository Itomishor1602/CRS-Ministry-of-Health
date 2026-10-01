import React from "react";

import placeholder from "../assets/placeholder.jpg";
import commissioner from "../assets/commissioner.jpg";
import nursing from "../assets/nursing.jpeg";
import ps from "../assets/PS.jpeg";
import medical from "../assets/medical.jpeg";
import da from "../assets/DA.jpeg"

const About = () => {
  const complaintSteps = [
    {
      number: "01",
      title: "Submit Your Complaint",
      description:
        "All complaints will, in the first instance, be received at the front desk.",
    },
    {
      number: "02",
      title: "Initial Resolution",
      description:
        "Effort will be made to resolve complaints at the front desk as soon as the complaint is made.",
    },
    {
      number: "03",
      title: "Referral to Senior Staff",
      description:
        "Complaints that cannot be addressed at the front desk will be referred immediately to an appropriate senior person within the relevant service window or department.",
    },
    {
      number: "04",
      title: "SERVICOM Referral",
      description:
        "Complaints may be referred from the front desk officer to the SERVICOM unit when further assistance or escalation is required.",
    },
    {
      number: "05",
      title: "Departmental Action",
      description:
        "Complaints referred to a department must be recorded and dealt with immediately by complaints officers at an appropriately senior level.",
    },
    {
      number: "06",
      title: "Investigation",
      description:
        "Where an investigation is required, the customer will be informed when an outcome is expected.",
    },
    {
      number: "07",
      title: "Progress Updates",
      description:
        "During prolonged investigations, customers will be kept up to date about the progress of the investigation.",
    },
  ];

  return (
    <div id="about" aria-labelledby="about-heading" className="bg-gray-50">
      {/* ==================== ABOUT ==================== */}
    

         {/* ==================== MINISTRY INFORMATION ==================== */}
      <section
        id="ministry-information"
        aria-labelledby="ministry-information-heading"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              About the Ministry
            </p>

            <h2
              id="ministry-information-heading"
              className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Our Vision, Mission & Commitment
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Learn more about the Cross River State Ministry of Health,
              its vision, mission, values, and commitment to serving the
              people of Cross River State.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Vision */}
            <article className="rounded-2xl border border-blue-100 bg-blue-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                V
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Vision Statement
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                A First-Class Health Service
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-700">
                To build a first class health service that is good enough for
                all people in Cross River State to use whenever the need
                arises.
              </p>
            </article>

            {/* Mission */}
            <article className="rounded-2xl border border-green-100 bg-green-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                M
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-green-600">
                Mission Statement
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Delivering Quality Healthcare
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-700">
                To create and sustain a professionally run health service that
                will deliver the best possible care for the people in Cross
                River State nearest where they live and work.
              </p>
            </article>
          </div>

          {/* Motto */}
          <article className="mt-6 rounded-2xl bg-gray-900 p-8 text-center text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              Our Motto
            </p>

            <blockquote className="mx-auto mt-4 max-w-3xl text-2xl font-semibold leading-relaxed sm:text-3xl">
              “Protecting Patients, whilst supporting Health Practitioners”
            </blockquote>
          </article>

          {/* ==================== COMPLAINTS ==================== */}
          <div id="complaints" className="mt-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                SERVICOM & Patient Support
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                Complaint Redress Mechanism
              </h2>

              <p className="mt-4 text-base leading-7 text-gray-600">
                The Ministry of Health provides a process for receiving,
                addressing, escalating, and following up on complaints from
                members of the public.
              </p>
            </div>

            {/* Complaint Cards */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {complaintSteps.map((step) => (
                <article
                  key={step.number}
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white"
                  >
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            {/* Important Notice */}
            <div className="mt-10 rounded-xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-gray-900">
                When a complaint requires further attention
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-700">
                A complaint may be referred to the SERVICOM unit when the
                front desk officer is unable to contact an appropriately senior
                officer, when the customer is not satisfied with the redress
                offered, when the complaint is repeated or more serious, or
                when the officer does not understand the request or is unable
                to provide assistance.
              </p>
            </div>

            {/* Complaint CTA */}
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-blue-600 p-8 text-white sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-bold">
                  Do you have a complaint or concern?
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-50">
                  We encourage members of the public to raise concerns so that
                  they can be properly received and addressed.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md bg-white px-6 py-3 font-medium text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Submit a Complaint
              </a>
            </div>
          </div>
        </div>
      </section>
    

      {/* ==================== LEADERSHIP ==================== */}
      <section
        id="leadership"
        aria-labelledby="leadership-heading"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16"
      >
        <div className="mb-10">
          <h2
            id="leadership-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            CRSMOH Leadership
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Meet the leadership team committed to improving healthcare
            services across Cross River State.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Commissioner */}
          <article className="group overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl xl:col-span-2">
            <div className="relative">
              <img
                src={commissioner}
                alt="Dr. Henry Egbe Ayuk"
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                  Honorable Commissioner
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                  Dr. Henry Egbe Ayuk
                </h3>
              </div>
            </div>

            <div className="border-t-4 border-blue-600 p-6">
              <p className="text-sm leading-6 text-gray-600">
                Honorable Commissioner, Cross River State Ministry of Health.
              </p>
            </div>
          </article>

          {/* Leader 2 */}
          <article className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src={ps}
              alt="Dr. Jonah Offor"
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Dr. Jonah Offor
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Permanent Secretary
              </p>
            </div>
          </article>

          {/* Leader 3 */}
          <article className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src={medical}
              alt="Dr. Stephen Agbor"
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Dr. Stephen Agbor
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Director, Medical and Dental Services
              </p>
            </div>
          </article>

          {/* Leader 4 */}
          <article className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src={nursing}
              alt="Mrs. Obo-ojor Ogar"
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Mrs. Obo-ojor Ogar
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Director, Nursing and Midwifery Services
              </p>
            </div>
          </article>

          {/* Leader 5 */}
          <article className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src={placeholder}
              alt="Mr. Christopher Ushuasung"
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Mr. Christopher Ushuasung
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Director, Research and Planning
              </p>
            </div>
          </article>

          {/* Leader 6 */}
          <article className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src={da}
              alt="Leadership team member"
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Name
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Director of Administration 
              </p>
            </div>
          </article>

          {/* Leader 7 */}
          <article className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src={placeholder}
              alt="Leadership team member"
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Name
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Position
              </p>
            </div>
          </article>

          {/* Leader 8 */}
          <article className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src={placeholder}
              alt="Leadership team member"
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Name
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Position
              </p>
            </div>
          </article>

          {/* Leader 9 */}
          <article className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src={placeholder}
              alt="Leadership team member"
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Name
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Position
              </p>
            </div>
          </article>

          {/* Leader 10 */}
          <article className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src={placeholder}
              alt="Leadership team member"
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Name
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Position
              </p>
            </div>
          </article>
        </div>
      </section>

     
    </div>
  );
};

export default About;

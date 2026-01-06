"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const PraktischePage = () => {
  return (
    <div className="w-full bg-white">
      {/* 🔹 Top Title Section */}
      <section className="text-center py-6 bg-[#2AAA8A] text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">INFORMATION</h1>
      </section>

      {/* 🔹 Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/infor-room.jpeg"
            alt="Clinic Entrance"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 px-4">
          <button className="bg-[#2AAA8A] hover:bg-[#238f74] text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300">
            Book an Appointment
          </button>

          <p className="mt-4 text-sm md:text-base text-gray-100 tracking-wide">
            OR CALL US
          </p>

          <p className="text-2xl md:text-3xl font-bold mt-1">+92 313 5620039</p>
        </div>
      </section>

      {/* 🔹 Scrollable Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 space-y-10 leading-relaxed">
        {/* Section Heading */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#2AAA8A]">
            Xypniosis – Psychology of Conscience and Awareness
          </h2>
          <p>
            Xypniosis is an advanced therapeutic technique that views the human
            self as a complete organism consisting of four interconnected
            components: body, mind, heart, and soul. Each component has its own
            unique properties, but all are interdependent, influencing physical,
            mental, emotional, and spiritual wellbeing.
          </p>
        </div>

        {/* Introduction */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Understanding Conscience and Consciousness
          </h3>
          <p>
            In xypniosis, <strong>conscience</strong> is an inner sense residing
            in the heart and brain that distinguishes between right and wrong.{" "}
            <strong>Consciousness</strong> is the awareness or knowledge
            processed by the conscience. Together, they help individuals
            navigate decisions, actions, and understanding in life.
          </p>
          <p>
            A simple analogy: conscience acts like a hard drive, storing and
            evaluating information, while consciousness functions like software
            that accesses and interprets this information.
          </p>
        </div>

        {/* Levels of Consciousness */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Levels of Consciousness
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Normal:</strong> Daily awareness and routine activities.
            </li>
            <li>
              <strong>High:</strong> Activated during learning, concentration,
              or stressful situations (fight-or-flight responses).
            </li>
            <li>
              <strong>Low:</strong> Relaxed and calm state.
            </li>
            <li>
              <strong>Unconscious:</strong> Not aware of surroundings or
              actions.
            </li>
          </ul>
        </div>

        {/* Forces in Xypniosis */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Forces Affecting the Self
          </h3>
          <p>Xypniosis identifies two primary forces within the human self:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Divine Force:</strong> Innate drive toward goodness,
              obedience, and overall wellbeing of the body, mind, heart, and
              soul.
            </li>
            <li>
              <strong>Diabolic Force:</strong> External or acquired influence
              (e.g., Qarin) that promotes harmful thoughts, emotions, and
              actions.
            </li>
          </ul>
          <p>
            Individuals also have <strong>free will</strong>, which chooses
            between these forces. Decisions depend on both internal factors
            (heredity, physiology, personality) and external factors (family,
            knowledge, culture).
          </p>
        </div>

        {/* Health and Sickness */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Health and Sickness in Xypniosis
          </h3>
          <p>
            <strong>Healthy Self (Nafse Mutmainna):</strong> Achieved through
            awareness and care of all four components – body, mind, heart, and
            soul – by providing proper nutrition, exercise, good intentions, and
            fulfilling spiritual duties.
          </p>
          <p>
            <strong>Unsatisfied Self (Nafse Amara):</strong> Results from
            neglect of physical, mental, emotional, or spiritual needs, leading
            to harmful habits, unhealthy thoughts, and spiritual deficiency.
          </p>
        </div>

        {/* Therapeutic Approach */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Xypniotherapy Techniques
          </h3>
          <p>
            Xypniotherapy uses guided exercises to enhance self-awareness across
            body, mind, heart, and soul. These exercises help release
            physiological, mental, and spiritual stress, eliminate toxins, and
            restore balance in the human organism.
          </p>
          <p>
            Xypniotherapy also helps build a healthy personality and can assist
            in overcoming dependencies such as alcohol, smoking, or excessive
            phone use.
          </p>
        </div>

        {/* Tests and Evaluation */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Evaluation and Testing
          </h3>
          <p>There are six tests in xypniotherapy:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Physical Awareness</li>
            <li>Mental Awareness</li>
            <li>Heart Awareness</li>
            <li>Spiritual Awareness</li>
            <li>Awareness of Surroundings</li>
            <li>Personality Assessment</li>
          </ul>
          <p>
            The first four tests measure the individual’s self-awareness across
            the four components. The fifth test evaluates environmental
            awareness, and the sixth helps understand personality strengths and
            weaknesses.
          </p>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Benefits of Xypniotherapy
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Improves self-awareness and consciousness of the whole self.
            </li>
            <li>
              Eliminates harmful thoughts like depression, anxiety, or anger.
            </li>
            <li>
              Supports mental, emotional, physical, and spiritual wellbeing.
            </li>
            <li>
              Assists in personality development and overcoming dependencies.
            </li>
          </ul>
        </div>
      </section>

      {/* 🔹 Wachtpost / About Section */}
      <section className="min-h-screen bg-white py-12 px-6 md:px-16">
        {/* Title */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2AAA8A] mb-3">
            Serving Patients Since 1996
          </h2>
          <p className="text-gray-600">
            <strong>20 years of experience in Switzerland</strong>,{" "}
            <strong>2 years in UK</strong>,<br />
            Now serving in Pakistan at <strong>Pak-Swiss</strong> as a Unani
            Herbal Medical Practitioner.
          </p>
          <p className="text-gray-700">
            Author of different books 📚 in the field of alternative medicine
            <br />
            Founder of <strong>Meteopathic Cure</strong> in Switzerland
            <br />
            Founder of <strong>XYPNIOSIS</strong>
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#2AAA8A] mb-2">
                <Check className="w-5 h-5" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Working Days
                </h3>
              </div>
              <p className="text-gray-700">
                Clinic is open from <strong>Monday to Friday</strong>.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#2AAA8A] mb-2">
                <Check className="w-5 h-5" />
                <h3 className="text-lg font-semibold text-gray-900">Weekend</h3>
              </div>
              <p className="text-gray-700">
                Clinic remains <strong>closed on Saturday and Sunday</strong>.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <Image
              src="/shop-pic.jpeg"
              alt="Clinic Image"
              width={400}
              height={250}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#2AAA8A] mb-2">
                <Check className="w-5 h-5" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Contact Number
                </h3>
              </div>
              <p className="text-gray-700">
                <strong>+92 313 5620039</strong>
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#2AAA8A] mb-2">
                <Check className="w-5 h-5" />
                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
              </div>
              <p className="text-gray-700">
                Islampura Road, Phallaian,
                <br />
                <strong>Jhelum, Pakistan</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PraktischePage;

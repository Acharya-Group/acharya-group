"use client";

import React from "react";

const YogaCertificate = () => {
  const pdfLinks = {
    guidance: "/images/mspl/Indian Candidate 2.pdf",
    registration: "/images/mspl/MSPL Exam Guideline.pdf",
    indianCandidate: "/images/mspl/Registration-Procees.pdf",
  };

  // Function to download PDF
  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
   link.download = url.split("/").pop() || "download.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-10 font-sans text-primary">
      <p className="text-lg text-gray-700 mb-2">
        Excellence in Yoga Education, Training, Therapy & Certification
      </p>

      {/* About MSPL */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-primary">About MSPL-Personnel Certification Body</h2>
        <p>
          MSPL-Personnel Certification Body acts as a Centre of Excellence in Yoga. It provides customer-oriented,
          efficient, and cost-effective certifications backed by highly qualified assessment personnel.
        </p>
        <p>
          The word Yoga is derived from Sanskrit <strong>"Yuj"</strong> – meaning to unite or integrate. The Ministry
          of AYUSH and Hon’ble Prime Minister have endorsed credible systems to ensure quality Yoga practices worldwide.
        </p>
        <p>
          MSPL provides comprehensive facilities for research, workshops, seminars, and practical application of Yoga
          techniques, integrating ancient texts with modern approaches. It also conducts <strong>online exams</strong> and
          issues <strong>government-recognized certificates</strong> for all qualified candidates. For more information, visit{" "}
          <a href="https://msplyoga.com/newReg.aspx" className="text-blue-600 underline" target="_blank" rel="noreferrer">
            MSPL Yoga Official Page
          </a>.
        </p>
      </section>

      {/* Objectives */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-primary">Objectives of MSPL</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Maintain and promote Indian Yoga traditions.</li>
          <li>Certify competent Yoga professionals nationally and internationally.</li>
          <li>Provide research facilities for fundamental and clinical studies in Yoga.</li>
          <li>Conduct workshops, seminars, and research programs across India.</li>
          <li>Develop modern techniques based on Ancient Yoga texts and Granthas.</li>
          <li>Impart certifications for Yoga education, therapy, and training programs.</li>
          <li>Ensure impartial and independent judgment in all assessments.</li>
          <li>Maintain the highest standards and quality of Yoga practice and education.</li>
        </ul>
      </section>

      {/* About Yoga */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-primary">About Yoga</h2>
        <p>
          Yoga is a mental, physical, and spiritual practice originating in India about 5000 years ago. It is globally
          recognized through International Yoga Day on June 21 every year, promoting health, wellness, and inner peace.
        </p>
        <p>
          Yoga encompasses Hatha Yoga, meditation, pranayama, and mindfulness. Practitioners benefit from stress relief,
          increased flexibility, and enhanced mental clarity.
        </p>
        <p>
          Whether you are a beginner or an advanced practitioner, structured certification helps deepen your knowledge
          and expand your teaching capabilities. Detailed guidance can be found at{" "}
          <a href="https://msplyoga.com/newReg.aspx" className="text-blue-600 underline" target="_blank" rel="noreferrer">
            MSPL Yoga Registration
          </a>.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-primary">Mission & Vision</h2>
        <p>
          <strong>Mission:</strong> Promote excellence in Yoga education, research, therapy, and certification for
          aspirants, researchers, and practitioners.
        </p>
        <p>
          <strong>Vision:</strong> Establish MSPL as a globally recognized certification body for Yoga professionals,
          upholding the highest standards in teaching and training.
        </p>
      </section>

      {/* Benefits of Certification */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-primary">Benefits of Yoga Certification</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>International recognition of skills and expertise.</li>
          <li>Improved credibility as a professional Yoga instructor or therapist.</li>
          <li>Opportunities for teaching, research, and therapeutic practices worldwide.</li>
          <li>Access to a network of certified Yoga professionals and institutions.</li>
          <li>Structured learning and evaluation ensuring mastery of skills.</li>
          <li>Boosts confidence in conducting workshops, classes, and online sessions.</li>
          <li>Provides career advancement and higher employability.</li>
          <li>Official documentation recognized by Ministry of AYUSH and Yoga institutions.</li>
          <li>Enhances personal growth, discipline, and mindfulness practices.</li>
          <li>Opportunity to participate in research, seminars, and national Yoga events.</li>
          <li>Eligibility for government-recognized certificates and credentials.</li>
          <li>Convenience of taking exams online from anywhere in India.</li>
        </ul>
      </section>

      {/* PDF Download Buttons */}
      <section className="flex flex-wrap gap-6 justify-start mt-6">
        <button
          onClick={() => handleDownload(pdfLinks.guidance)}
          className="bg-primary text-white font-semibold px-6 hover:bg-secondary duration-300 cursor-pointer py-3 rounded-lg shadow-lg hover:bg-primary-dark transition flex items-center gap-2"
        >
          📄 MSPL Exam Guidance
        </button>
        <button
          onClick={() => handleDownload(pdfLinks.registration)}
          className="bg-primary text-white font-semibold px-6 hover:bg-secondary duration-300 cursor-pointer py-3 rounded-lg shadow-lg hover:bg-primary-dark transition flex items-center gap-2"
        >
          📄 Registration Process
        </button>
        <button
          onClick={() => handleDownload(pdfLinks.indianCandidate)}
          className="bg-primary text-white font-semibold px-6 hover:bg-secondary duration-300 cursor-pointer py-3 rounded-lg shadow-lg hover:bg-primary-dark transition flex items-center gap-2"
        >
          📄 Indian Candidate Info
        </button>
      </section>
    </div>
  );
};

export default YogaCertificate;

"use client";

import React from "react";
import { MapPin, Clock, CheckCircle, FileText } from "lucide-react";

export default function KioskBank() {
  return (
    <section className="max-w-7xl mx-auto p-6 md:p-10 bg-white rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      {/* LEFT CONTENT */}
      <div className="lg:col-span-3">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Bank BC — Banking Services
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Achariya Technologies Pvt. Ltd. — Financial & Social inclusion via BC Kiosks
          </p>
        </header>

        {/* Overview */}
        <article className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Overview</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Achariya Technologies Pvt. Ltd. has emerged as a leading player at the forefront of driving financial inclusion and
            social inclusion initiatives through its network of BC Kiosks providing Business Correspondent Banking Services. We are a
            Corporate Business Correspondent to Bank of Baroda offering a real-time, paperless, interoperable banking platform that
            delivers a unique service experience to customers. Our BC Kiosks render comprehensive banking services to the unbanked and
            under-banked population of India.
          </p>
        </article>

        {/* Service Offerings */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">Service Offerings</h3>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Bank Account Opening under Pradhan Mantri Jan Dhan Yojana</li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Cash Deposits, Withdrawals, Money Transfer</li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Fixed and Recurring Deposits</li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Balance Enquiry, Statement of Accounts</li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Disbursement under Direct Benefit Transfer</li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Lead generation for various loan products of Bank</li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary" size={18} /> Enrollments: PMSBY, PMJJBY, Atal Pension Yojana, Sukanya Samriddhi, PPF</li>
          </ul>
        </section>

        {/* Key Features and Benefits */}
        <section className="mt-6">
          <h3 className="text-base font-semibold text-gray-800">Key Features and Benefits</h3>
          <ol className="mt-3 list-decimal list-inside space-y-2 text-gray-700">
            <li>Our outlets are located at the Gram Panchayat level or village locations so that the customers need not travel long distances</li>
            <li>Our outlets are open for banking services beyond normal banking hours thus providing convenience</li>
            <li>All our outlets offer paperless and biometric enabled banking to enable the uneducated rural population to do transactions in ease</li>
            <li>We provide interoperable banking across banks if the user’s account is linked to Aadhaar number</li>
            <li>Facility to open zero balance accounts under the scheme PMJDY, which is a financial inclusion initiative</li>
          </ol>
        </section>

        {/* Who can become BC */}
        <section className="mt-8 overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Who can become Bank Business Correspondent for Banks?</h3>
          <table className="w-full border border-gray-200 text-sm text-left text-gray-700">
            <tbody>
              <tr className="border-b"><td className="p-3">Non-Governmental Organisations (NGOs)</td><td className="p-3">Farmers clubs</td></tr>
              <tr className="border-b"><td className="p-3">Self Help Groups (SHGs)</td><td className="p-3">Community based organisations</td></tr>
              <tr className="border-b"><td className="p-3">Micro Finance Institutions (MFIs)</td><td className="p-3">Village Knowledge Centres</td></tr>
              <tr className="border-b"><td className="p-3">Post Offices</td><td className="p-3">Agri Clinics / Agri Business Centers</td></tr>
              <tr className="border-b"><td className="p-3">Insurance agents</td><td className="p-3">Krishi Vigyan Kendras</td></tr>
              <tr className="border-b"><td className="p-3">Panchayats</td><td className="p-3">Khadi and Village Industries units</td></tr>
              <tr><td className="p-3">Civil Society Organisations (CSOs)</td><td className="p-3">Corporate entities with IT outlets in rural parts</td></tr>
            </tbody>
          </table>
        </section>

        {/* Services Offered */}
        <section className="mt-8 overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Services Offered By BC (Bank Mitra)</h3>
          <table className="w-full border border-gray-200 text-sm text-left text-gray-700">
            <tbody>
            <tr className="border-b">
  <td className="p-3 font-medium">Savings Account</td>
  <td className="p-3">Balance Enquiry / Mini Statement</td>
  <td className="p-3">Cash Deposit / Cash Withdrawal</td>
</tr>
              <tr className="border-b"><td className="p-3">Fixed Deposit / E-KYC Enrolment</td><td className="p-3">Aadhaar Enabled Payment System (AEPS)</td><td className="p-3">Rupay ATM Card / Identity Card</td></tr>
              <tr className="border-b"><td className="p-3">Loan Deposit / Recurring Deposit</td><td className="p-3">Social Security Schemes (PMJJBY, PMSBY & APY)</td><td className="p-3">Pass Book Printing</td></tr>
              <tr><td className="p-3">DBT Enabled Facility in Accounts</td><td className="p-3">Saving Account Opening</td><td className="p-3">3rd Party Financial Products (Insurance, Pension etc.)</td></tr>
            </tbody>
          </table>
        </section>

        {/* How to become a BC */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">How to Become a Banking Correspondent (BC)</h3>
          <ol className="mt-3 list-decimal list-inside space-y-2 text-gray-700">
            <li>Download the application form and BC selection format from the website.</li>
            <li>Submit filled forms with self-attested copies of Aadhaar, PAN, qualification certificate (min. 10th), and latest police verification report by email to <strong>fi@Achariyagroup.com</strong>.</li>
            <li>Company verifies documents and checks location availability in consultation with the Bank.</li>
            <li>Company forwards the candidate request with appointment letter to the concerned Bank of Baroda branch to open a BC settlement account and complete bank formalities.</li>
            <li>After account opening, Company applies to Bank for K.O.Code generation for the BC.</li>
            <li>On receipt of K.O.Code the technical team assists with software installation on the BC system and provides primary training to start operations.</li>
            <li>The BC must operate as per PMJDY norms and schemes of GOI and the partnering Banks.</li>
          </ol>
        </section>

        {/* PMJDY Benefits */}
        <section className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2"><FileText size={16}/> PMJDY Benefits</h3>
          <ul className="mt-2 text-gray-700 space-y-2 text-sm">
            <li>Zero minimum balance</li>
            <li>Accidental insurance cover of Rs. 2,00,000</li>
            <li>Life insurance cover of Rs. 30,000 (subject to eligibility)</li>
            <li>Direct Benefit Transfer for government schemes</li>
            <li>Overdraft facility up to Rs. 10,000 (one account per household)</li>
            <li>Affordable premiums for PMSBY &amp; PMJJBY</li>
            <li>Atal Pension Yojana: pension Rs.1,000–5,000 p.m. for eligible members</li>
          </ul>
        </section>

        {/* Location & Hours */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <MapPin size={18} />
            <div>
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p className="text-sm text-gray-600">Outlets at Gram Panchayat / Village level for local access</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock size={18} />
            <div>
              <h4 className="font-semibold text-gray-800">Hours</h4>
              <p className="text-sm text-gray-600">Open beyond normal banking hours for customer convenience</p>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-sm text-gray-500">
          <p>
            <span className="font-medium text-gray-700">Note:</span> Content provided is intended for informational purposes and
            follows PMJDY and related Government of India scheme descriptions.
          </p>
        </footer>
      </div>

     {/* RIGHT SIDEBAR */}
<aside className="lg:col-span-1 space-y-6">
  {/* Download Section */}
  <div className="p-4 border rounded-xl bg-gray-50">
    <h3 className="font-semibold text-gray-800 mb-3">Download Application Form</h3>
    <ul className="space-y-2 text-sm text-primary">
      {/* ✅ PDF downloads */}
      <li>
        <a 
          href="/pdf/combined.pdf" 
          download="BankBC.pdf" 
          className="hover:underline font-semibold text-primary"
        >
          Bank BC
        </a>
      </li>
      <li>
        <a 
          href="/pdf/combined.pdf" 
          download="BC-Selection-Format.pdf" 
          className="hover:underline font-semibold text-primary"
        >
          BC Selection Format
        </a>
      </li>
      <li>
        <a 
          href="/files/rmgb_installation.docs" 
          download="RMGB-Installation-Process.pdf" 
          className="hover:underline"
        >
          RMGB Installation Process
        </a>
      </li>
      <li>
        <a 
          href="/files/Windows_RDService_V2.0.1.42_HTTPs_127.0.0.1.zip" 
          download="Windows-RD-Service.pdf" 
          className="hover:underline"
        >
          Windows RD Service V2.0.1
        </a>
      </li>
      <li>
        <a 
          href="/files/BOB_MorphoMSO1300Esetup 2.2.1.8_06July2017.zip" 
          download="BOB_MorphoMSO1300Esetup 2.2.1.8_06July2017.zip" 
          className="hover:underline"
        >
          BOB Morpho MSO 1300 Esetup
        </a>
      </li>
      {/* Others as normal links */}
      <li><a href="/pdf/BOB-BANNER.pdf" download="BOB-BANNER.pdf" className="hover:underline">BOB Banner</a></li>
      <li><a href="/pdf/BOB-REGISTER.pdf" download="BOB-REGISTER.pdf" className="hover:underline">BOB Register</a></li>
      <li><a href="/pdf/BRKGB-BANNER.pdf" download="RGB-BANNER.pdf" className="hover:underline">RGB Banner</a></li>
      <li><a href="/pdf/BRKGB-REGISTER.pdf" download="RGB-REGISTER.pdf" className="hover:underline">RGB Register</a></li>
    </ul>
  </div>
  {/* Categories Section */}
  <div className="p-4 border rounded-xl bg-gray-50">
    <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
    <ul className="space-y-2 text-sm text-primary">
      <li><a href="/e-mitra" className="hover:underline">e-Mitra</a></li>
      <li><a href="/kiosk-banking" className="hover:underline">Kiosk Banking</a></li>
      <li><a href="/aadhar" className="hover:underline">Aadhar</a></li>
      <li><a href="/fastag" className="hover:underline">Fastag</a></li>
      <li><a href="/insurance" className="hover:underline">Insurance</a></li>
      <li><a href="/school-easy" className="hover:underline">School Easy</a></li>
      <li><a href="/rkcl" className="hover:underline">RKCL</a></li>
    </ul>
  </div>
</aside>
    </section>
  );
}

import { bankCommissions } from "@/lib/utils";
import React from "react";

const BankBcCommission = () => {
 

  const sections = [
    {
      title: "Retail Loans",
      rows: [
        {
          no: 45,
          product: (
            <>
              Home Loan & Mortgage Loans <br />
              <span className="text-xs italic">
                * Take over Loans: Additional payout of 0.05% of loan amount <br />
                * Payout to be paid after minimum disbursement of 20% of the sanctioned limit
              </span>
            </>
          ),
          commission: "0.20% of the loan amount on conversion of leads*",
        },
        {
          no: 46,
          product: (
            <>
              Education Loan <br />
              <span className="text-xs italic">
                * Payout to be paid after minimum disbursement of 20% of the sanctioned limit
              </span>
            </>
          ),
          commission: "0.25% of the loan amount on conversion of leads*",
        },
        {
          no: 47,
          product: "Auto Loans (4 Wheelers & 2 Wheelers)",
          commission: "@ 0.25% of loan amount (disbursed amount on Car (New and Pre-owned) & Two Wheelers)",
        },
      ],
    },
    {
      title: "Credit Card",
      rows: [
        { no: 48, product: "Commission on Application Login", commission: "Rs. 30/-" },
        { no: "", product: "Commission on Credit Card Approval", commission: "Rs. 30/-" },
        {
          no: "",
          product:
            "Commission on Activation of Credit Card (to be paid in next quarter basis Rs. 20 @ 90 days activation period)",
          commission: "Rs. 20/-",
        },
      ],
      footer: "Hence Gross Total Commission = Rs. 80/-",
    },
    {
      title: "Current Account",
      rows: [
        {
          no: 49,
          product:
            "Current Account with monthly minimum balance as applicable to Rural/Semi-Urban/Urban/Metro",
          commission: "Rs. 50/-",
        },
        {
          no: "",
          product:
            "Quarterly average balance of Rs.2.0 lacs with digital transaction i.e. Mobile Banking, Net Banking, Internet Banking",
          commission: "Rs. 200/-",
        },
        {
          no: "",
          product:
            "Quarterly average balance of Rs.5.0 lacs with digital transaction i.e. Mobile Banking, Net Banking, Internet Banking",
          commission: "Rs. 500/-",
        },
      ],
    },
    {
      title: "Mutual Funds",
      rows: [
        {
          no: 50,
          product:
            "Commission for sourcing of Mutual Fund leads shall be advised separately",
          commission: "—",
        },
      ],
    },
    {
      title: "Agriculture Gold Loan",
      rows: [
        {
          no: 51,
          product: (
            <>
              Gold Loan <br />
              <span className="text-xs italic">
                0.10% of loan amount subject to minimum of ₹100 & maximum of ₹1,000 per account.
                <br />
                0.50% of loan amount subject to a minimum of ₹75 and maximum ₹5,000.
                <br />
                The incentive shall be payable on the accounts sanctioned for ₹5,000 and above.
                50% of the amount payable shall be paid after first disbursement of the loan and
                rest 50% shall be payable on year thereafter (one year should be counted after
                completion of moratorium if any) if the account continues to be standard asset till then.
              </span>
            </>
          ),
          commission: "—",
        },
        { no: 52, product: "BKCC Lead Generation", commission: "—" },
      ],
    },
    {
      title: "Agriculture Loans: Tractor / Four Wheeler and Two Wheeler finance to Farmers",
      rows: [
        {
          no: 53,
          product: (
            <div className="overflow-x-auto">
              <table className="min-w-[300px] border border-black text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-black px-2 py-1">Product & Scheme Codes in Finacle</th>
                    <th className="border border-black px-2 py-1">No. of Cases disbursed in the month</th>
                    <th className="border border-black px-2 py-1">Incentive</th>
                    <th className="border border-black px-2 py-1">Amount to be paid on disbursement (50% of Incentive)</th>
                    <th className="border border-black px-2 py-1">On submission of PDD within 60 days of disbursement (10% of Incentive)</th>
                    <th className="border border-black px-2 py-1">After completion of 1 year if account remains standard (40% of Incentive)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black px-2 py-1" rowSpan={3}>Tractors (LA-434, LA-435, LA-436)</td>
                    <td className="border border-black px-2 py-1">1–2</td>
                    <td className="border border-black px-2 py-1">3,000</td>
                    <td className="border border-black px-2 py-1">1,500</td>
                    <td className="border border-black px-2 py-1">300</td>
                    <td className="border border-black px-2 py-1">1,200</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1">3–4</td>
                    <td className="border border-black px-2 py-1">4,000</td>
                    <td className="border border-black px-2 py-1">2,000</td>
                    <td className="border border-black px-2 py-1">400</td>
                    <td className="border border-black px-2 py-1">1,600</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1">5 & above</td>
                    <td className="border border-black px-2 py-1">5,000</td>
                    <td className="border border-black px-2 py-1">2,500</td>
                    <td className="border border-black px-2 py-1">500</td>
                    <td className="border border-black px-2 py-1">2,000</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1">LA-402</td>
                    <td className="border border-black px-2 py-1">NA</td>
                    <td className="border border-black px-2 py-1">1,500</td>
                    <td className="border border-black px-2 py-1">750</td>
                    <td className="border border-black px-2 py-1">150</td>
                    <td className="border border-black px-2 py-1">600</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1">Four Wheeler (LA-427)</td>
                    <td className="border border-black px-2 py-1">NA</td>
                    <td className="border border-black px-2 py-1">1,500</td>
                    <td className="border border-black px-2 py-1">750</td>
                    <td className="border border-black px-2 py-1">150</td>
                    <td className="border border-black px-2 py-1">600</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1">Two Wheeler (LA-416)</td>
                    <td className="border border-black px-2 py-1">NA</td>
                    <td className="border border-black px-2 py-1">500</td>
                    <td className="border border-black px-2 py-1">400 (80% of incentive)</td>
                    <td className="border border-black px-2 py-1">100 (20% of incentive)</td>
                    <td className="border border-black px-2 py-1">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
          commission: null,
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Bank BC Commission Chart</h2>

      {/* Commissions Table */}
      <div className="overflow-x-auto shadow-lg  mb-8">
        <table className="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-primary text-white uppercase text-sm">
            <tr>
              <th className="px-4 py-2 border font-bold">Sl. No.</th>
              <th className="px-4 py-2 border font-bold">Products Available at BC Point</th>
              <th className="px-4 py-2 border font-bold">Commission</th>
            </tr>
          </thead>
          <tbody>
            {bankCommissions.map((row, index) => (
              <tr key={index} className="hover:bg-yellow-50 transition duration-200">
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{row.product}</td>
                <td className="px-4 py-2 border">{row.commission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sections */}
      <div>
        {sections.map((section, sIndex) => (
          <div key={sIndex} className="mb-6">
            <h3 className="font-bold text-center bg-primary text-white py-2 border border-black">
              {section.title}
            </h3>

            {/* Only wrap last section's table for horizontal scroll */}
            {section.title === "Agriculture Loans: Tractor / Four Wheeler and Two Wheeler finance to Farmers" ? (
              <div className="overflow-x-auto">
                <table className="w-full border border-black text-sm text-left mt-2">
                  <tbody>
                    {section.rows.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-100 transition-colors">
                        <td className="border border-black px-3 py-2 text-center">{row.no}</td>
                        <td className="border border-black px-3 py-2">{row.product}</td>
                        <td className="border border-black px-3 py-2">{row.commission}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <table className="w-full border border-black text-sm text-left mt-2">
                <tbody>
                  {section.rows.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-100 transition-colors">
                      <td className="border border-black px-3 py-2 text-center">{row.no}</td>
                      <td className="border border-black px-3 py-2">{row.product}</td>
                      <td className="border border-black px-3 py-2">{row.commission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {section.footer && (
              <p className="text-right font-semibold mt-2">{section.footer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankBcCommission;

"use client";
import { emitradocuments } from "@/lib/utils";
import { Download } from "lucide-react";

export default function EMitraForms() {
  return (
    <section className="bg-gray-50 py-10">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          e-Mitra Services Form
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full border border-gray-200 bg-white text-sm">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-4 py-3 text-left">S.N.</th>
                <th className="px-4 py-3 text-left">Name of Scheme & Facility</th>
                <th className="px-4 py-3 text-center">Link</th>
              </tr>
            </thead>
            <tbody>
              {emitradocuments.map((form, index) => (
                <tr
                  key={form.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-indigo-50 transition`}
                >
                  <td className="px-4 py-3 font-semibold text-gray-700">{form.id}</td>
                  <td className="px-4 py-3 text-gray-700">{form.name}</td>
                  <td className="px-4 py-3 text-center">
                    <a
                      href={form.link}
                      download
                      className="inline-flex items-center gap-1 rounded-lg bg-pink-600 px-3 py-2 text-white text-sm font-medium shadow hover:bg-pink-700 transition"
                    >
                      <Download className="w-4 h-4" /> Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

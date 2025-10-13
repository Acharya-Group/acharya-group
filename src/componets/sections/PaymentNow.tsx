"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useStationeryOrder, { StationeryOrder } from "@/hooks/stationeryOrder";

const PaymentNow: React.FC = () => {
  const params = useSearchParams();
  const orderId = params.get("orderId") || "";
  const name = params.get("name") || "";
  const email = params.get("email") || "";
  const amount = params.get("amount") || "0";

  const { allOrders, initiatePayment } = useStationeryOrder();
  const [order, setOrder] = useState<StationeryOrder | null>(null);
  const [paidStatus, setPaidStatus] = useState<string>("Unpaid");

  // Fetch order from your React Query hook
  useEffect(() => {
    if (!orderId) return;
    const found = allOrders.data?.find((o) => o._id === orderId);
    if (found) {
      setOrder(found);
      setPaidStatus(found.paymentStatus || "Unpaid");
    }
  }, [allOrders.data, orderId]);

const handlePayment = async () => {
  if (!orderId) return;
  try {
    const data = await initiatePayment.mutateAsync(orderId);
    window.location.href = data.paymentUrl; 
  } catch (err: any) {
    console.error("Payment failed", err);
    alert(err.message);
  }
};


  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-xl overflow-hidden">
        <div className="md:w-1/2 p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Application Information</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-600 max-w-[120px] min-w-[120px]">
                Registration No
              </label>
              <input
                type="text"
                value={order?._id || ""}
                readOnly
                className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-600 max-w-[120px] min-w-[120px]">
                Name
              </label>
              <input
                type="text"
                value={name}
                readOnly
                className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-600 max-w-[120px] min-w-[120px]">
                Email
              </label>
              <input
                type="email"
                value={email}
                readOnly
                className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-600 max-w-[120px] min-w-[120px]">
                Total Fee
              </label>
              <input
                type="text"
                value={`₹${amount}`}
                readOnly
                className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-600 max-w-[120px] min-w-[120px]">
                Paid Status
              </label>
              <input
                type="text"
                value={paidStatus}
                readOnly
                className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none"
              />
            </div>

            <div className="pt-4">
             <button
  type="button"
  onClick={handlePayment}
  disabled={initiatePayment.status === "pending"}
  className={`px-6 py-2 rounded-lg cursor-pointer text-white font-medium text-lg ${
    initiatePayment.status === "pending"
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-gradient-to-r from-[#261b7d] to-[#7a0706] hover:from-[#7a0706] hover:to-[#261b7d]"
  } transition-colors flex items-center justify-center mx-auto`}
>
  {initiatePayment.status === "pending" ? "PROCESSING..." : "Pay Now"}
</button>

            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
          <Image
            unoptimized
            src="/images/payNow.jpg"
            alt="Payment Card"
            width={400}
            height={400}
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentNow;

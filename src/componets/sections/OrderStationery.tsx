"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useStationeryOrder from "@/hooks/stationeryOrder";
import useStationery from "@/hooks/stationeryRate";

interface CurrentItem {
  stationery: string;
  quantity: string;
}

const OrderStationery = () => {
  const router = useRouter();
  const { allStationery } = useStationery();
  const { createOrder } = useStationeryOrder();

  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    kioskId: "",
    address: "",
    pinCode: "",
  });

  const [currentItem, setCurrentItem] = useState<CurrentItem>({
    stationery: "",
    quantity: "",
  });

  const [items, setItems] = useState<CurrentItem[]>([]);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle stationery row change
  const handleItemChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  };

  // Add item to list
  const addItem = () => {
    if (!currentItem.stationery || !currentItem.quantity) {
      setError("Please select stationery and enter quantity before adding.");
      return;
    }
    setItems([...items, currentItem]);
    setCurrentItem({ stationery: "", quantity: "" });
    setError("");
  };

  // Remove item
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // Calculate total with GST and courier
  const calculateTotal = () => {
    if (!allStationery?.data) return 0;

    let total = 0;
    items.forEach((it) => {
      const stationery = allStationery.data.find((s: any) => s.name === it.stationery);
      if (!stationery) return;

      const qty = Number(it.quantity);
      const rate =
        qty <= stationery.quantityThreshold
          ? stationery.rateOnLessQuantity
          : stationery.rateOnGreaterQuantity;

      const courier = qty <= stationery.quantityThreshold ? 50 : 100;
      const itemTotal = rate * qty + courier;
      const gst = 0.18 * itemTotal;

      total += itemTotal + gst;
    });

    return Number(total.toFixed(2)); // return as number
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (
      !formData.name ||
      !formData.phoneNo ||
      !formData.kioskId ||
      !formData.address ||
      !formData.pinCode ||
      items.length === 0
    ) {
      setError("All fields and at least one stationery order are required.");
      setIsSubmitting(false);
      return;
    }

    const totalAmount = calculateTotal();

    try {
      // Prepare payload for backend
      const payload = {
        ...formData,
        items: items.map((it) => ({
          type: it.stationery,
          quantity: Number(it.quantity),
        })),
        amount: totalAmount, // backend expects 'amount'
        status: "pending",
      };

      // Create order in backend
      const savedOrder = await createOrder.mutateAsync(payload);

      // Redirect to payment page with correct params
      router.push(
        `/payment-now?orderId=${savedOrder._id}&name=${encodeURIComponent(
          formData.name
        )}&email=${encodeURIComponent("yashsihag@gmail.com")}&amount=${totalAmount}`
      );

      // Reset form
      setFormData({ name: "", phoneNo: "", kioskId: "", address: "", pinCode: "" });
      setItems([]);
      setCurrentItem({ stationery: "", quantity: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setError("Error submitting order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
          {/* Customer Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["name", "phoneNo", "kioskId"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field === "name"
                    ? "Name"
                    : field === "phoneNo"
                    ? "Phone No"
                    : "Kiosk Id"}
                </label>
                <input
                  type={field === "phoneNo" ? "number" : "text"}
                  name={field}
                  placeholder={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 outline-none rounded-lg p-3 focus:ring-2"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["address", "pinCode"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field === "address" ? "Address" : "Pin Code"}
                </label>
                <input
                  type="text"
                  name={field}
                  placeholder={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 outline-none rounded-lg p-3 focus:ring-2"
                />
              </div>
            ))}
          </div>

          {/* Stationery Items */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Add Stationery Items</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stationery Type
                </label>
                <select
                  name="stationery"
                  value={currentItem.stationery}
                  onChange={handleItemChange}
                  className="w-full border border-gray-300 outline-none rounded-lg p-3"
                >
                  <option value="" disabled>
                    Select Stationery
                  </option>
                  {allStationery.data?.map((item: any, idx: number) => (
                    <option key={idx} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  value={currentItem.quantity}
                  onChange={handleItemChange}
                  className="w-full border border-gray-300 outline-none rounded-lg p-3 focus:ring-2"
                  placeholder="0"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={addItem}
                  className="w-full bg-primary text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  ADD ITEM
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          {items.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Order Summary</h4>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3 text-left">Stationery Item</th>
                      <th className="p-3 text-left">Quantity</th>
                      <th className="p-3 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((it, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="p-3">{it.stationery}</td>
                        <td className="p-3">{it.quantity}</td>
                        <td className="p-3">
                          <button
                            type="button"
                            onClick={() => removeItem(idx)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-right mt-4 text-lg font-semibold text-gray-800">
                Total Amount (Incl. GST & Courier): ₹{calculateTotal()}
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200">
              {error}
            </div>
          )}

          <p className="text-gray-600 text-sm">Note: Courier Charges & GST (18%) included</p>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded-lg cursor-pointer text-white font-medium text-lg ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#261b7d] to-[#7a0706] hover:from-[#7a0706] hover:to-[#261b7d]"
              } transition-colors flex items-center justify-center mx-auto`}
            >
              {isSubmitting ? "PROCESSING..." : "SUBMIT ORDER"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderStationery;

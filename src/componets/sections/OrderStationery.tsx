"use client";
import React, { useState } from "react";

const OrderStationery = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    kioskId: "",
    address: "",
    pinCode: "",
  });

  const [currentItem, setCurrentItem] = useState({
    stationery: "",
    quantity: "",
  });

  const [items, setItems] = useState<{ stationery: string; quantity: string }[]>([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
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
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  // Handle final form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (
      !formData.name ||
      !formData.phone ||
      !formData.kioskId ||
      !formData.address ||
      !formData.pinCode ||
      items.length === 0
    ) {
      setError("All fields and at least one stationery order are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare the data for FormSubmit
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("phone", formData.phone);
      formDataToSubmit.append("kioskId", formData.kioskId);
      formDataToSubmit.append("address", formData.address);
      formDataToSubmit.append("pinCode", formData.pinCode);
      formDataToSubmit.append(
        "orders",
        items.map((item) => `${item.stationery} (Quantity: ${item.quantity})`).join(" | ")
      );
      formDataToSubmit.append("_subject", "New Stationery Order Request");
      formDataToSubmit.append("_template", "table");
      
      // Send to FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/sumitkhan.dhana@gmail.com", {
        method: "POST",
        body: formDataToSubmit,
      });

      const result = await response.json();
      
      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          kioskId: "",
          address: "",
          pinCode: "",
        });
        setItems([]);
        setCurrentItem({ stationery: "", quantity: "" });
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Error submitting form. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Order Stationery</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
          {/* Top inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone No</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kiosk Id</label>
              <input
                type="text"
                name="kioskId"
                placeholder="Kiosk identifier"
                value={formData.kioskId}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Full address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
              <input
                type="text"
                name="pinCode"
                placeholder="Postal code"
                value={formData.pinCode}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Stationery Input Row */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Add Stationery Items</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stationery Type</label>
                <select
                  name="stationery"
                  value={currentItem.stationery}
                  onChange={handleItemChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Stationery</option>
                  <option value="Digital Certificates">Digital Certificates</option>
                  <option value="APL Ration Card (Blue)">APL Ration Card (Blue)</option>
                  <option value="BPL Ration Card (Pink)">BPL Ration Card (Pink)</option>
                  <option value="State BPL Ration Card (Green)">State BPL Ration Card (Green)</option>
                  <option value="Antyodaya Ration Card (Yellow)">Antyodaya Ration Card (Yellow)</option>
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
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={addItem}
                  className="w-full bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  ADD ITEM
                </button>
              </div>
            </div>
          </div>

          {/* Added Items List */}
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
                            className="text-red-500 hover:text-red-700 flex items-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200">
              <p className="font-medium">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 rounded-lg text-white font-medium text-lg ${isSubmitting ? 'bg-blue-400' : 'bg-primary hover:bg-secondary cursor-pointer'} transition-colors flex items-center justify-center mx-auto`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  PROCESSING...
                </>
              ) : (
                'SUBMIT ORDER'
              )}
            </button>
          </div>
        </form>

        {/* Success Popup */}
        {success && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-6 max-w-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Order Submitted Successfully!</h3>
              <p className="text-gray-600">Your stationery order has been received. We will process it and contact you shortly.</p>
              <button
                onClick={() => setSuccess(false)}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderStationery;
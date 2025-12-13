"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/componets/admin/AdminLayout";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import useContact, { Contact } from "@/hooks/contactData";

const ContactsPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
<<<<<<< HEAD
  const itemsPerPage = 5;

  // ✅ Using your hook
=======
  const itemsPerPage = 20;

  // Selection states
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Hook
>>>>>>> 10bcdbc (updated code)
  const { allContacts, updateContact, deleteContact } = useContact();

  useEffect(() => {
    setMounted(true);
  }, []);

<<<<<<< HEAD
  // ✅ Show toast on fetch success / error
=======
>>>>>>> 10bcdbc (updated code)
  useEffect(() => {
    if (allContacts.isSuccess) {
      toast.success("Contacts fetched successfully!");
    }
    if (allContacts.isError) {
      toast.error(allContacts.error?.message || "Failed to fetch contacts");
    }
  }, [allContacts.isSuccess, allContacts.isError]);

  if (!mounted) return null;

  if (allContacts.isLoading) {
    return (
      <AdminLayout>
        <p>Loading contacts...</p>
      </AdminLayout>
    );
  }

  const contacts = allContacts.data;

<<<<<<< HEAD
  // ✅ Pagination
=======
  // Pagination
>>>>>>> 10bcdbc (updated code)
  const totalPages = Math.ceil(contacts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContacts = contacts.slice(indexOfFirstItem, indexOfLastItem);

<<<<<<< HEAD
  // ✅ Handle status change with toast
=======
  // Status update
>>>>>>> 10bcdbc (updated code)
  const handleStatusChange = (contact: Contact, newStatus: Contact["status"]) => {
    updateContact.mutate(
      { ...contact, status: newStatus },
      {
        onSuccess: () => toast.success("Contact status updated!"),
        onError: () => toast.error("Failed to update status"),
      }
    );
  };

<<<<<<< HEAD
  // ✅ Handle delete with toast
=======
  // Single Delete
>>>>>>> 10bcdbc (updated code)
  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    deleteContact.mutate(id, {
      onSuccess: () => toast.success("Contact deleted!"),
      onError: () => toast.error("Failed to delete contact"),
    });
  };

<<<<<<< HEAD
=======
  // Select one
  const handleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Select all on current page
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
      setSelectAll(false);
    } else {
      const ids = currentContacts.map((c) => c._id);
      setSelectedIds(ids);
      setSelectAll(true);
    }
  };

  // Bulk delete
  const handleBulkDelete = () => {
    if (selectedIds.length === 0)
      return toast.error("No contacts selected");

    if (!confirm("Delete all selected contacts?")) return;

    selectedIds.forEach((id) => {
      deleteContact.mutate(id, {
        onSuccess: () => {},
        onError: () => toast.error("One or more deletes failed"),
      });
    });

    toast.success("Selected contacts deleted!");
    setSelectedIds([]);
    setSelectAll(false);
  };

>>>>>>> 10bcdbc (updated code)
  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Contact Enquiries</h1>

<<<<<<< HEAD
=======
        {/* Bulk Delete Button */}
        <div className="flex justify-end mb-3">
          <button
            onClick={handleBulkDelete}
            disabled={selectedIds.length === 0}
            className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
          >
            Delete Selected ({selectedIds.length})
          </button>
        </div>

>>>>>>> 10bcdbc (updated code)
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
<<<<<<< HEAD
=======
                <th className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
>>>>>>> 10bcdbc (updated code)
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">District</th>
                <th className="px-4 py-2 text-left">State</th>
                <th className="px-4 py-2 text-left">Message</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {currentContacts.map((contact, index) => (
                <tr key={contact._id}>
<<<<<<< HEAD
                  <td className="px-4 py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                        <td className="px-4 py-2">{contact.createdAt?.split("T")[0]}</td>
=======
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(contact._id)}
                      onChange={() => handleSelect(contact._id)}
                    />
                  </td>

                  <td className="px-4 py-2">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>

                  <td className="px-4 py-2">{contact.createdAt?.split("T")[0]}</td>
>>>>>>> 10bcdbc (updated code)
                  <td className="px-4 py-2">{contact.name}</td>
                  <td className="px-4 py-2">{contact.number}</td>
                  <td className="px-4 py-2">{contact.district}</td>
                  <td className="px-4 py-2">{contact.state}</td>
<<<<<<< HEAD
=======

>>>>>>> 10bcdbc (updated code)
                  <td className="px-4 py-2">
                    <div className="w-40 h-20 p-2 border rounded overflow-y-auto">
                      {contact.message}
                    </div>
                  </td>
<<<<<<< HEAD
                  <td className="px-4 py-2">
                    <select
                      value={contact.status || "pending"}
                      onChange={(e) => handleStatusChange(contact, e.target.value as Contact["status"])}
=======

                  <td className="px-4 py-2">
                    <select
                      value={contact.status || "pending"}
                      onChange={(e) =>
                        handleStatusChange(contact, e.target.value as Contact["status"])
                      }
>>>>>>> 10bcdbc (updated code)
                      className="px-2 py-1 rounded border-[#7a0706] border-[2px]"
                    >
                      <option value="pending">Pending</option>
                      <option value="resolve">Resolve</option>
                    </select>
                  </td>
<<<<<<< HEAD
                  <td className="px-4 py-2">  <button
=======

                  <td className="px-4 py-2">
                    <button
>>>>>>> 10bcdbc (updated code)
                      onClick={() => handleDelete(contact._id)}
                      className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
                    >
                      <FaTrash />
<<<<<<< HEAD
                    </button></td>
               
=======
                    </button>
                  </td>
>>>>>>> 10bcdbc (updated code)
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages || 1}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ContactsPage;

'use client'

import AdminLayout from '@/componets/admin/AdminLayout'
import React, { useState } from 'react'

const Page = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = () => {
    // Clear fields
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md max-w-md">
        <h1 className="text-2xl font-bold mb-6">Change Password</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
              hover:border-[#7a0706] transition"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
              hover:border-[#7a0706] transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter new password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706]
              hover:border-[#7a0706] transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#7a0706] cursor-pointer text-white py-2 px-4 rounded-lg 
            shadow-md hover:bg-[#261b7d] transition transform hover:scale-[1.02]"
          >
            Update Password
          </button>
        </form>

      </div>
    </AdminLayout>
  )
}

export default Page

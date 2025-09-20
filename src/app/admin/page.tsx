'use client'
import AdminMainContent from '@/componets/admin/AdminMainContent'
import AdminNavbar from '@/componets/admin/AdminNavbar'
import AdminSidebar from '@/componets/admin/AdminSidebar'
import React, { useState } from 'react'

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        <AdminNavbar onSidebarToggle={() => setIsSidebarOpen(true)} />
        <div className="p-4">
          <AdminMainContent />
        </div>
      </div>
    </div>
  )
}

export default Page

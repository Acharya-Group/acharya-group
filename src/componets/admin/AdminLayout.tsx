'use client'
import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex bg-gray-50 shadow-right min-h-screen overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen overflow-hidden">
        {/* Navbar - sticky wrapper */}
        <div className="fixed w-full top-0 z-40">
          <AdminNavbar onSidebarToggle={() => setIsSidebarOpen(true)} />
        </div>

        {/* Page content (scrolls) */}
        <main className="flex-1 p-6 overflow-auto mt-16">{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout

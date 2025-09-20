'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  MessageSquare,
  Users,
  ShoppingCart,
  Image as LucideImage,
  Mail,
  PlusSquare,
  List,
  ChevronDown,
  ChevronRight,
  X,
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

type MenuItem = {
  name: string
  href?: string
  icon: any
  children?: MenuItem[]
}

// Sidebar props
interface AdminSidebarProps {
  isSidebarOpen: boolean
  onClose: () => void
}

const menuItems: MenuItem[] = [
  { name: 'Dashboard', href: '/admin', icon: Home },
  {
    name: 'Slider',
    icon: LucideImage,
    children: [
      { name: 'All Sliders', href: '/admin/sliders', icon: List },
      { name: 'Add Slider', href: '/admin/sliders/add', icon: PlusSquare },
    ],
  },
  {
    name: 'DC',
    icon: Users,
    children: [
      { name: 'All DC', href: '/admin/dc', icon: List },
      { name: 'Add DC', href: '/admin/dc/add', icon: PlusSquare },
    ],
  },
  {
    name: 'Stationery Orders',
    icon: ShoppingCart,
    children: [{ name: 'All Orders', href: '/admin/orders', icon: List }],
  },
  { name: 'Contact Enquiries', href: '/admin/contact-enquiries', icon: Mail },
  { name: 'Feedback & Complaints', href: '/admin/complaints-feedback', icon: MessageSquare },
  {
    name: 'Popup Images',
    icon: LucideImage,
    children: [
      { name: 'All Images', href: '/admin/popup-images', icon: List },
      { name: 'Add Image', href: '/admin/popup-images/add', icon: PlusSquare },
    ],
  },
]

export default function AdminSidebar({ isSidebarOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]
    )
  }

  return (
    <div
      className={`w-64 bg-white text-gray-800 h-screen fixed top-0 left-0 transform transition-transform duration-300 z-40
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-300 flex justify-between items-center">
        <Image
          src="/images/logo.png"
          alt="Company Logo"
          width={100}
          height={40}
          className="object-cover"
        />
        <button
          onClick={onClose}
          className="md:hidden text-gray-800 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Menu */}
      <nav className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isOpen = openMenus.includes(item.name)

            return (
              <li key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className="flex w-full items-center justify-between px-2 py-2 text-gray-800 hover:bg-gray-400 rounded-lg"
                    >
                      <span className="flex items-center">
                        <Icon className="w-5 h-5 mr-2" />
                        {item.name}
                      </span>
                      {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>

                    {isOpen && (
                      <ul className="pl-8 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.href || '#'}
                              className="flex items-center p-2 rounded-lg transition-colors text-gray-800 hover:bg-gray-400"
                            >
                              <child.icon className="w-4 h-4 mr-2" />
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="flex items-center p-2 rounded-lg transition-colors text-gray-800 hover:bg-gray-400"
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

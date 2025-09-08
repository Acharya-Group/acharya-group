import React from 'react'

interface ButtonProps {
  content: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
}

const Button: React.FC<ButtonProps> = ({ content, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition ${className}`}
    >
      {content}
    </button>
  )
}

export default Button

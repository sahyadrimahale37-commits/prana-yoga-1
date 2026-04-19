'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ThankYouPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://wa.me/919028329148?text=Hi%20I%20have%20completed%20my%20registration%20for%20Prana%20Yoga'
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center px-6">
      <div className="float-card bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-emerald-100 p-12 max-w-xl text-center">
        <h1 className="text-4xl font-serif font-semibold text-slate-800 mb-4">
          Registration Complete
        </h1>

        <p className="text-slate-600 text-lg leading-8">
          Thank you for choosing <span className="font-semibold text-emerald-700">Prana Yoga</span>.<br/>
          Redirecting you to WhatsApp...
        </p>
      </div>

      <style jsx>{`
        .float-card {
          animation: floatCard 4s ease-in-out infinite;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  )
}
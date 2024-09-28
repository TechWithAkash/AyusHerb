
// components/Footer.js
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold">AYUSHerbs</Link>
            <p className="text-green-200 text-sm">
              Discover the power of AYUSH herbal plants with our AI-powered identification platform.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-green-200 tracking-wider uppercase">Platform</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/plants" className="text-base text-green-300 hover:text-white">Plants</Link></li>
                  <li><Link href="/identify" className="text-base text-green-300 hover:text-white">Identify</Link></li>
                  <li><Link href="/community" className="text-base text-green-300 hover:text-white">Community</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-green-200 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/about" className="text-base text-green-300 hover:text-white">About</Link></li>
                  <li><Link href="/contact" className="text-base text-green-300 hover:text-white">Contact</Link></li>
                  <li><Link href="/privacy" className="text-base text-green-300 hover:text-white">Privacy</Link></li>
                  <li><Link href="/terms" className="text-base text-green-300 hover:text-white">Terms</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-green-700 pt-8">
          <p className="text-base text-green-400 xl:text-center">
            &copy; 2024 AYUSHerbs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
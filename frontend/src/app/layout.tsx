import './globals.css';
import { NavBar } from '@/components/layout/NavBar';
import Link from 'next/link';

export const metadata = {
  title: 'DTIMA - Digital Transformation Initiative for Municipalities in Africa',
  description: 'Empowering African municipalities through digital transformation and capacity building to enhance governance and service delivery.',
  keywords: 'digital transformation, Africa, municipalities, governance, local government, e-governance, technology, innovation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="min-h-screen flex flex-col">
        <NavBar />
        
        <main className="flex-grow pt-16">
          {children}
        </main>
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="font-bold text-xl mb-4">DTIMA</div>
                <p className="text-gray-400 mb-6">
                  Digital Transformation Initiative for Municipalities in Africa. Empowering 
                  municipalities across Africa through digital transformation and capacity building.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/en/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link href="/en/programs" className="text-gray-400 hover:text-white">Our Programs</Link></li>
                  <li><Link href="/en/partners" className="text-gray-400 hover:text-white">Partners</Link></li>
                  <li><Link href="/en/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">info@dtima.org</li>
                  <li className="text-gray-400">+123 456 7890</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              &copy; {new Date().getFullYear()} DTIMA. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '../sideBar/sideBar'
import { ActivePageProvider } from '@/context/activePage'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Twitter',
  description: 'Twitter Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActivePageProvider>
        <div className='page_container'>
          <Sidebar />
          {children}
        </div>
        </ActivePageProvider>
      </body>
    </html>
  )
}

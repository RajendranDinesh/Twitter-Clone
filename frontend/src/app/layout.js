import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '../sideBar/sideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Twitter',
  description: 'Twitter Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='page_container'>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}

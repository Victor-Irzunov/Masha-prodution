import { FooterComp } from '../components/footer/FooterComp'
import './globals.css'
// import { Inter } from 'next/font/google'
import { NavBarMenu } from '../components/navBarMenu/NavBarMenu'
import { MyContextProvider } from '../contexts/MyContextProvider'



// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Психолог в Минске | Ирзунова Мария',
  description: 'Услуги психолога в Минске',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <MyContextProvider>
          <div className='flex'>
            <NavBarMenu />
            <div className='sd:w-4/5 w-full pt-6'>
            <main className=''>
              {children}
            </main>
              <FooterComp />
            </div>
          </div>
        </MyContextProvider>
      </body>
    </html>
  )
}

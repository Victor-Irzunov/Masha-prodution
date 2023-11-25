import { FooterComp } from '../components/footer/FooterComp'
import './globals.css'
import { NavBarMenu } from '../components/navBarMenu/NavBarMenu'
import { MyContextProvider } from '../contexts/MyContextProvider'

export const metadata = {
  title: 'Психолог в Минске | Консультация психолога Ирзуновой Марии',
  description: 'Сертифицированный клинический психолог в Минске. Получите помощь в решении проблем с психологическим бесплодием, депрессией, тревогой, и другими эмоциональными трудностями.',
  alternates: {
    canonical: 'https://irzunova.by/'
  },
  og: {
    title: 'Психолог в Минске | Консультация психолога Ирзуновой Марии',
    description: 'Сертифицированный клинический психолог в Минске. Получите помощь в решении проблем с психологическим бесплодием, депрессией, тревогой, и другими эмоциональными трудностями.',
    type: 'website',
    url: 'https://irzunova.by/',
    image: '/images/main/main.webp',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#cdcecf" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="google-site-verification" content="bI9oN3UNtw5X7nhI__qcCjuEM0QZlhv0p1yK3hg9ttE" />
      </head>
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

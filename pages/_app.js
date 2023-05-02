import store from '@/public/src/app/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { useState, createContext } from 'react'
import RoleContext from './components/RoleContext'

export default function App({ Component, pageProps }) {
  const [noInCart, setNoInCart] = useState(0)
  const [role, setRole] = useState(null)
  return( 
    <SessionProvider session={pageProps.session}>
      <RoleContext.Provider value={{role, setRole}}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </RoleContext.Provider>
    </SessionProvider>
  )
}


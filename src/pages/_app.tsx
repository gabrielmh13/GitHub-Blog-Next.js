import { Header } from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='box-border p-0 m-0 h-auto w-full font-Nunito flex flex-col items-center'>
      < Header />
      <Component {...pageProps} />
    </div >
  )
}

export default MyApp

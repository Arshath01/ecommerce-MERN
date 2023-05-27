import './styles/global.css'
import "./Bootstrap/node_modules/bootstrap/dist/css/bootstrap.css"
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
    <link 
    rel="stylesheet" 
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    </Head>
    <Component {...pageProps} />
  </>
}

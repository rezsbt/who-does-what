// Styles
import '@/styles/globals.scss'
// Components
import Layout from '@/components/layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

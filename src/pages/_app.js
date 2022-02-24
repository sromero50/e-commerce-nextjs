import '../../styles/globals.css'
// import "tailwindcss/tailwind.css"
import React from "react"
import { wrapper } from "../store/index"
import Layout from "../components/layout"


const MyApp = ({ Component, pageProps}) => (
  <>
    <Layout>
     <Component {...pageProps} />
  </Layout>
  </>

)

export default wrapper.withRedux(MyApp);
import NProgress from 'nprogress'
import React, { useEffect } from 'react'
import 'nprogress/nprogress.css'
const NLoading = () => {
  NProgress.start()
  useEffect(() => {
    NProgress.done()
  }, [])
  return <></>
}

export default NLoading

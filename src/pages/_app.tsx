import '@/styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/layouts/MainLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

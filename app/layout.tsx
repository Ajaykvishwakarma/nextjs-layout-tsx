'use client';

import { useEffect } from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/styles/global.css";
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "../store/store";
import theme from "../styles/theme";
import Modals from '@/components/modals/modals';
import toast, { Toaster, ToastBar } from "react-hot-toast";
import { AuthProvider } from '@/context/AuthContext';
import RoutesHandler from '@/routes/RoutesHandler';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  //reactQuery config
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <html lang="en">
      <Head>
        <title>My Next.js App</title>
      </Head>
      <body className={inter.className}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <AuthProvider>
                <RoutesHandler>
                  {children}
               
                  <Modals />
                  <Toaster
                    toastOptions={{
                      duration: 2000,
                    }}
                    position="top-right"
                    reverseOrder={false}
                  >
                    {t => (
                      <ToastBar toast={t}>
                        {({ icon, message }) => (
                          <div style={{ display: 'flex', gap: "8px" }} onClick={() => toast.dismiss()}>
                            {icon}
                            {message}
                          </div>
                        )}
                      </ToastBar>
                    )}
                  </Toaster>
                  </RoutesHandler>
              </AuthProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  )
}

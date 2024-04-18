import Head from 'next/head';
import React from 'react';
import {Footer} from '../footer';
import {NavbarWrapper} from '../navbar';
import {Box} from '../styles/box';

interface Props {
   children: React.ReactNode;
}

export const MainLayout = ({children}: Props) => {
   return (
      <Box as="main">
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <meta name="description" content="Nghia's homepage" />
            <meta name="author" content="Nghia Tran" />
            <meta name="author" content="h1eutran" />
            <link rel="apple-touch-icon" href="apple-touch-icon.png" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <meta name="twitter:title" content="Nghia Tran" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@h1eutran" />
            <meta name="twitter:creator" content="@h1eutran" />
            <meta property="og:site_name" content="Nghia Tran" />
            <meta name="og:title" content="Nghia Tran" />
            <meta property="og:type" content="website" />
            <title>Nghia Tran - Homepage</title>
         </Head>

         <NavbarWrapper />
         <Box
            css={{
               height: '90%',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between',
            }}
         >
            {children}
            <Footer />
         </Box>
      </Box>
   );
};

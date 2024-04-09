'use client';

import React, { useState, FC, Suspense } from 'react';
import { Grid, Box, CircularProgress } from "@mui/material";
import dynamic from 'next/dynamic'

import GlobalNavbar from "@/components/layouts/Tops/GlobalNavbar";
import GlobalFooter from '@/components/layouts/Bottoms/GlobalFooter';



interface PrivateOutlet { }

const PrivateOutlet: FC<PrivateOutlet> = ({ children }: any) => {



    return (
        <React.Fragment>
            <GlobalNavbar />
            <main>
                <Suspense
                    fallback={
                        <Box
                            sx={{
                                display: "flex",
                                height: "100vh",
                                width: "100vw",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    }
                >
                    {children}
                </Suspense>
            </main>
            <GlobalFooter />
        </React.Fragment>
    );
};

export default PrivateOutlet;

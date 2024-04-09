'use client';

import React, { useState, FC, Suspense } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import AuthOutlet from "../components/layouts/AuthOutlet";
import PublicOutlet from "../components/layouts/PublicOutlet";
import PrivateOutlet from "../components/layouts/PrivateOutlet";
import { protectedRoutes, authRoutes } from "./Routes"

const RoutesHandler = ({ children }: {
    children: React.ReactNode
}) => {

    const router = useRouter();

    const token = true;

    const pathname = usePathname();


    if (token && protectedRoutes?.includes(pathname)) {
        return (
            <React.Fragment>
                <PrivateOutlet>
                    {children}
                </PrivateOutlet>
            </React.Fragment>
        );

    }
    else if (token && authRoutes?.includes(pathname)) {
        return (
            <React.Fragment>
                <AuthOutlet>
                    {children}
                </AuthOutlet>
            </React.Fragment>
        )

    } else {
        return (
            <React.Fragment>
                <PublicOutlet>
                    {children}
                </PublicOutlet>
            </React.Fragment>
        );
    }

};

export default RoutesHandler;

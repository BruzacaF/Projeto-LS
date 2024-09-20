'use client';

import styled from "styled-components";

import {Saira_Stencil_One} from "next/font/google";
import '@/app/components/css/button.css';
import Nav from "./nav";
import themeThoggle from "@/app/components/theme-change";

const sairaStencial = Saira_Stencil_One ({
  subsets: ["latin"],
  weight: ['400'],
  
})



export default function Header() {




    return (
        <>
        <header className="header">
            <h1 className={`${sairaStencial.className} logo`}>Letra a Letra</h1>
            
            {themeThoggle()}

            <Nav /> 
            
        </header>
        </>
    );
    }


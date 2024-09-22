'use client';
import { useState, useEffect, useRef } from "react";
import { Icon } from '@iconify/react';
import { flushSync } from "react-dom";
import '@/app/components/css/theme-change.css';



function themeThoggle() {
    const darkIcon = <Icon icon="line-md:sunny-outline-to-moon-loop-transition" width="2rem" height="2rem" className="switch-theme black" />;
    const lightIcon = <Icon icon="line-md:moon-to-sunny-outline-loop-transition" width="2rem" height="2rem" className="switch-theme white" />;

    const [isDarkMode, setIsDarkMode] = useState(false);
    const iconLocation = useRef<HTMLElement>(null);


    const toggleDarkMode = async (isDarkMode: boolean) => {
        if (!iconLocation.current) return;

        await document.startViewTransition(() => {
            flushSync(() => {
                setIsDarkMode(isDarkMode);
            });
        }).ready;

        const { top, left, width, height } = iconLocation.current.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const right = window.innerWidth - left;
        const bottom = window.innerHeight - top;
        const maxRadius = Math.hypot(
            Math.max(left, right),
            Math.max(top, bottom),
        );

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 500,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)'
            }
        );
    };




    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    }, [isDarkMode]);

    return (
        <div className='theme-switch-box' ref={iconLocation} onClick={() => toggleDarkMode(!isDarkMode)}>
            {isDarkMode ? darkIcon : lightIcon}
        </div>
    );
}

export default themeThoggle;
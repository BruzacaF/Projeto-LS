'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToMainPage() {
    const router = useRouter();

    useEffect(() => {
        router.push('/mainPage'); // Replace '/mainPage' with the path to your main page
    }, [router]);

    return (
        <div className="loading">
            <h1>Loading...</h1>
        </div>
    );
}

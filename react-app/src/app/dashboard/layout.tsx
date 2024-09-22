'use client'
import Sidebar from "@/components/dashboard/sidebar"






export default function DashboardLayout({ children }: { children: React.ReactNode }) {


    return (
        <html lang="en">
            <body>
                <div className="dashboard">
                    <Sidebar />
                    <div className="dashboard__content">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
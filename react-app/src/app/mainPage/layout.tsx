import Header from "@/components/header";
import Footer from "@/components/footer";


export default function LayoutMainPage ({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="mainPage">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function MainLayout() {
    return(
        <div className="min-h-screen flex flex-col">
            <Navbar />
            
            {/* Main content grows */}
            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
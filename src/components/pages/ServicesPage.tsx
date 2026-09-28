import { Link } from "react-router-dom";
import ServicesDirectory from "../ServicesDirectory";
import { ArrowLeft } from "@phosphor-icons/react";

export default function ServicesPage() {
    return (
        <main>
            <div className="bg-[#F4F7FB] px-4 pt-8 dark:bg-[#081525] sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-emerald-600 dark:text-slate-300">
                        <ArrowLeft size={16} /> Home
                    </Link>
                </div>
            </div>
            <ServicesDirectory />
        </main>
    );
}

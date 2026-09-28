import TravelBookingHub from "../TravelBookingHub";
import { useParams } from "react-router-dom";
import ServicePage from "./ServicePage";

export default function ServiceLandingPages() {
    const { serviceId } = useParams();

    if (serviceId === "flight") {
        return (
            <main>
                <ServicePage />
                <div className="bg-white py-2 dark:bg-[#0B1B33]">
                    <TravelBookingHub />
                </div>
            </main>
        );
    }

    return <ServicePage />;
}


import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";
import useAll_Schol from "../Hooks/useAll_Schol";
import useAllApply from "../Hooks/useAllApply";
import useAllUser from "../Hooks/useAllUser";
import useReviews from "../Hooks/useReviews";
import Heading from "../Utilities/Heading";

// Registering Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const Statistics = () => {
    const [applications] = useAllApply();
    const [users] = useAllUser();
    const [scholarship] = useAll_Schol();
    const { reviews } = useReviews();

    // Statistical data
    const totalApply = applications.length;
    const totalUser = users.length;
    const totalScholarship = scholarship.length;
    const totalReviews = reviews.length;

    // Chart Data
    const barChartData = {
        labels: ["Applications", "Users", "Scholarships", "Reviews"],
        datasets: [
            {
                label: "Counts",
                data: [totalApply, totalUser, totalScholarship, totalReviews],
                backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#E91E63"],
                borderWidth: 1,
                borderColor: "#ffffff",
            },
        ],
    };

    const pieChartData = {
        labels: ["Applications", "Users", "Scholarships", "Reviews"],
        datasets: [
            {
                data: [totalApply, totalUser, totalScholarship, totalReviews],
                backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#E91E63"],
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div className="w-full h-full px-6 py-10 bg-gray-100">
            <Heading
                one={"Statistics"}
                two={
                    "Data-driven insights to help you make informed decisions and track progress effectively"
                }
            />

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                {/* Bar Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Application Insights
                    </h3>
                    <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: true }} />
                </div>

                {/* Pie Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Data Distribution
                    </h3>
                    <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: true }} />
                </div>
            </div>
        </div>
    );
};

export default Statistics;

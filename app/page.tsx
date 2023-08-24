"use client";

import {
    Chart as ChartJS,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    Title,
} from "chart.js";

ChartJS.register(
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    Title
);

import { Chart, Line } from "react-chartjs-2";

const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(14,165,233, 0.1)",
            borderColor: "#0ea5e9",
            tension: 0,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
    elements: {
        line: {
            tension: 0,
            borderWidth: 2,
            borderColor: "#000",
            fill: "start",
            backgroundColor: "#fff",
        },
        point: {
            radius: 0,
            hitRadius: 0,
        },
    },
    scales: {
        xAxis: {
            display: false,
        },
        yAxis: {
            display: false,
        },
    },
};

export default function Home() {
    return (
        <div className="flex flex-col items-start justify-center w-full h-full">
            <h1 className="text-4xl font-semibold text-neutral-200">
                Dashboard
            </h1>
            <div className="w-full h-full flex-grow gap-2 flex flex-col px-4 py-6 items-start justify-start flex-shrink rounded-lg bg-neutral-800 mt-5">
                <section className="relative w-1/2 aspect-video">
                    <Line data={data} options={options} />
                </section>
            </div>
        </div>
    );
}

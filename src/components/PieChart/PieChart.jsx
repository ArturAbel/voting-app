import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import electionCandidates from "../../data/data";
ChartJS.register(ArcElement, Tooltip);
import { Pie } from "react-chartjs-2";

export const PieChart = () => {
  return (
    <Pie
      data={{
        labels: electionCandidates.map((candidate) => candidate.fullName),
        datasets: [
          {
            label: "Votes",
            data: electionCandidates.map((candidate) => candidate.totalVotes),
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(25, 205, 116)",
              "rgb(205, 190, 132)",
              "rgb(2, 99, 132)",
            ],
            hoverOffset: 4,
          },
        ],
      }}
    />
  );
};

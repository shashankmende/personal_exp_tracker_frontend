import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJs, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/GlobalContext';
import { DateFormat } from '../../utils/DateFormat';
import { useWindowSize } from '../../utils/useWindowSize';

// Register required Chart.js components
ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function Chart() {
  const { incomes, expenses } = useGlobalContext();
  const {width}=useWindowSize()
  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return DateFormat(date);
    }),
    datasets: [
      {
        label: "Income",
        data: incomes.map((income) => income.amount),
        backgroundColor: "green",
        borderColor: "green",
        tension: 0.2,
        borderWidth: width <= 660 ? 1 : 3
      },
      {
        label: "Expenses",
        data: expenses.map((expense) => expense.amount),
        backgroundColor: "red",
        borderColor: "red",
        tension: 0.2,
        borderWidth: width <= 660 ? 1 : 3
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: width>660,
      },
    },
    scales: {
      x: {
        ticks: {
          display: width > 660, 
        },
      },
      y:{
        ticks:{
          font:{
            size:width<=660 ? 9: 14,
          }
        }
      }
    },
  };

  return (
    <ChartStyled>
      <Line data={data} options={options}/>
    </ChartStyled>
  );
}

const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;

  // Set fixed height for canvas when screen width is <= 660px
  canvas {
    width: 100% !important;
  }

  @media (max-width: 660px) {
    canvas {
    padding: 1.1em;
      height: 300px !important;
      width:100% !important;
    }
  }
`;

export default Chart;

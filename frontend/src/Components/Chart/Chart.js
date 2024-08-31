import React from 'react';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
);

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    // Combine incomes and expenses, and sort by date
    const combinedData = [...incomes, ...expenses].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    );

    const labels = combinedData.map((item) => dateFormat(item.date));
    const incomeData = combinedData.map((item) => 
        item.type === 'Income' ? item.amount : 0
    );
    const expenseData = combinedData.map((item) => 
        item.type === 'Expense' ? item.amount : 0
    );

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: '#2ecc71',
                fill: true,
                tension: 0.3,
            },
            {
                label: 'Expenses',
                data: expenseData,
                backgroundColor: 'rgba(231, 76, 60, 0.2)',
                borderColor: '#e74c3c',
                fill: true,
                tension: 0.3,
            },
        ],
    };

    return (
        <ChartStyled>
            <div className="chart-container">
            <Line data={data} />
            </div>
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: var(--primary-color);
    border: 2px solid var(--primary-color);
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;

    .chart-container {
        height: 100%;
        width: 100%;
    }
`;

export default Chart;

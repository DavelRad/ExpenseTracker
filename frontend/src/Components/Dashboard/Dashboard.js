import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/globalContext'
import Chart from '../Chart/Chart'
import History from '../../History/History'
import { useEffect } from 'react'

function Dashboard() {
    const { totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [getIncomes, getExpenses])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                    </div>
                    <div className="amount-con">
                        <div className="income">
                            <h2>Total Income</h2>
                            <p>
                                ${totalIncome()}
                            </p>
                        </div>
                        <div className="expense">
                            <h2>Total Expense</h2>
                            <p>
                                ${totalExpenses()}
                            </p>
                        </div>
                        <div className="balance">
                            <h2>Total Balance</h2>
                            <p>
                                ${totalBalance()}
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="history-con">
                    <History />
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con {
        display: flex;
                    flex-direction: column;
        gap: 2rem;
        margin-bottom: 2rem;
    }
    
    .chart-con {
        height: 400px;
    }

    .amount-con {
                display: flex;
                justify-content: space-between;
        gap: 2rem;
        div {
            flex: 1;
            background: var(--primary-color);
                border-radius: 20px;
            padding: 1rem;
            text-align: center;
            p {
                font-size: 1.5rem;
                font-weight: 700;
                color: var(--color-green);
                }
            }

        .income, .expense, .balance {
            h2 {
                color: var(--color-gray); // Adjust this color as needed
            }
            p {
                color: var(--color-green); // For income
            }
        }

        .income p {
            color: var(--income-color);
        }

        .expense p {
            color: var(--expense-color);
        }

        .balance p {
            color: var(--balance-color);
        }
    }

    .history-con {
        grid-column: 1 / 4;
        h2 {
            margin: 1rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

export default Dashboard
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/globalContext'
import styled from 'styled-components'


function Transaction() {
    const {allTransactionHistory} = useGlobalContext()

    const [...history] = allTransactionHistory()

    return (
        <TransactionStyled>
            <h2>Recent History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'Expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'Expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'Expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </TransactionStyled>
    )
}

const TransactionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default Transaction
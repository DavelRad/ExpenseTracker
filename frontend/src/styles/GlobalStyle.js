import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-color: #222260;
        --primary-color2: 'color: rgba(34, 34, 96, .6)';
        --primary-color3: 'color: rgba(34, 34, 96, .4)';
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
        --primary-color: #1a1a2e;
        --primary-color2: 'color: rgba(26, 26, 46, .6)';
        --primary-color3: 'color: rgba(26, 26, 46, .4)';
        --color-green: #2ecc71;
        --color-grey: #555;
        --color-accent: #e74c3c;
        --color-delete: #c0392b;
        --background-dark: #16213e;
        --text-light: #f1f1f1;
        --income-color: #2ecc71;
        --expense-color: #e74c3c;
        --balance-color: #3498db;
    }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, .6);
        background-color: var(--background-dark);
        color: var(--text-light);
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
    }

    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    
    body{
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0;
        padding: 0;

        height: 100vh;

        background-color: white;
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        height: 400px;
        width: 400px;
        /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }

    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 20px;
    }

    .form input{
        padding: 15px;
        margin:10px;
        width: 300px;

        background-color: #fff;
        border: 1px solid #dbdbdb;
        border-radius: .375em;
        box-shadow: none;
        box-sizing: border-box;
        color: #363636;
    }
    .form p{
        font-size: 10px;
        color: red;
    }

    .formField{
        display: flex;
        flex-direction: column;
        padding: 5px;

        height: 100px;
        align-items: center;
    }

    

    .btn{
        align-items: center;
        appearance: none;
        background-color: #fff;
        border: 1px solid #dbdbdb;
        border-radius: .375em;
        box-shadow: none;
        box-sizing: border-box;
        color: #363636;
        cursor: pointer;
        display: inline-flex;
        font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 1rem;
        height: 2.5em;
        justify-content: center;
        line-height: 1.5;
        padding: calc(.5em - 1px) 1em;
        position: relative;
        text-align: center;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: top;
        white-space: nowrap;
        margin: 10px;

    }

    .btn:active{
        border-color: #4a4a4a;
        outline: 0;

    }




    .btn:focus {
    border-color: #485fc7;
    outline: 0;
    }

    .btn:hover {
    border-color: #b5b5b5;
    }

    .btn:focus:not(:active) {
    box-shadow: rgba(72, 95, 199, .25) 0 0 0 .125em;
    }
`;

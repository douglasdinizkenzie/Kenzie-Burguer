import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

    :root{
        
        --color-primary: #27AE60;   
        --color-secondary: #EB5757;
        --grey-600: #333333;
        --grey-300: #828282;
        --grey-100: #E0E0E0;
        --grey-4: #BDBDBD;
        --grey-6: #F2F2F2;
        --grey-0: #F5F5F5;
        --white: #ffffff;
        --radius: 5px;
    }

body{
    font-family: 'Inter', sans-serif;
}
`;

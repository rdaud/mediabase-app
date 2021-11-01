import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: 'white'
    }
}

export default function Provider({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
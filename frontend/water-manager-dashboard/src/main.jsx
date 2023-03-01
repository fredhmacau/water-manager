import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraBaseProvider} from "@chakra-ui/react"
import App from "./App"
import theme from "./theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
    <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)

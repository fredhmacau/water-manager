import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraBaseProvider} from "@chakra-ui/react"
import App from "./App"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider>
    <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)

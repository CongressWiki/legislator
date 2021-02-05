import React from "react"

import { ThemeProvider } from "./ThemeContext"
import GlobalStyles from "./GlobalStyles"

export type AppProps = {
  children: React.ReactNode
}

function App({ children }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default App

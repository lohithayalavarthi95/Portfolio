import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

function Settingtheme (props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Settingtheme

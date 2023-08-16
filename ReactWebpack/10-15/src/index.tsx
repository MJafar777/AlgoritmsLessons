 /* eslint-disable react/no-deprecated */

/* eslint-disable react/react-in-jsx-scope */
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './app/styles/index.scss'
import App from './app/App'
import ThemeProvider from './app/providers/themeProviders/ui/ThemeProvider'
import 'shared/config/i18n/i18n'

render(
  // eslint-disable-next-line react/react-in-jsx-scope
  <BrowserRouter>

      <ThemeProvider>

          <App />

      </ThemeProvider>

  </BrowserRouter>,
  document.getElementById('root')
)

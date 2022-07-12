import 'styled-components'

import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// Cria uma tipagem para o styled-components do node_modules
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

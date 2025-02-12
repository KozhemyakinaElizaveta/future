import { extendTheme } from '@chakra-ui/react';
import 'shared/config/fonts/fonts.css'
import { TextTheme } from 'shared/ui';

export const theme = extendTheme({
  components: {
    Text: TextTheme,
  },
  fonts: {
    heading: 'MuseoSansCyrl, MuseoSansCyrl, MuseoSansCyrl, MuseoSansCyrl',
    body: 'MuseoSansCyrl, MuseoSansCyrl, MuseoSansCyrl, MuseoSansCyrl',
  },
  breakpoints: {
    sm: '100px',
    base: '1280px',
    md: '1920px',
    lg: '2560px',
  },
  styles: {
    global: {
      body: {
        height: '100vh',
        width: '100vw',
        maxHeight: '100vh',
        maxWidth: '100vw',
        overflow: 'hidden',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
      '&::-webkit-scrollbar': {
        width: '0',
      },
      '&::-webkit-scrollbar-track': {
        width: '0',
      },
    },
  },
  colors: {
    lightblue: {
        100: '#E3F1FF',
        200: '#E0F4FF',
        300: '#62D2FF',
        400: '#54C1FB',
        500: '#2DB6FF',
      },
      blue: {
        100: '#F7FCFF',
        200: '#F5FBFF',
        300: '#EFF6FF',
        400: '#E0EEFF',
        450: '#DAEBFF',
        500: '#B0D4FF',
        600: '#559BED',
        700: '#3576C2',
        800: '#0F3F62',
      },
      gray: {
        100: '#F4F9FF',
        200: '#A5B4CB',
      },
      mint: {
        100: '#C4F7E9',
        200: '#55EDB6',
      },
      red: {
        100: '#FFF1F0',
        200: '#D85A5A',
        300: '#C54646',
      },
      green: {
        100: '#E1FFDA',
        200: '#44A65A',
      },
      orange: {
        100: '#FFF2D9',
      },
  },
})
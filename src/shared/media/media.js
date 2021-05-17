import {useMediaQuery} from 'react-responsive'

export const media = {
  isMobile: `(max-width: 499px)`,
  isTablet: `(min-width: 500px) and (max-width: 1024px)`,
  isDesktop: `(min-width: 1025px)`
}


export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({query: media.isMobile})

  return (
    isMobile ? children : null
  )
}

export const Tablet = ({children}) => {
  const isTablet = useMediaQuery({query: media.isTablet})

  return (
    isTablet ? children : null
  )
}

export const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({query: media.isDesktop})

  return (
    isDesktop ? children : null
  )
}


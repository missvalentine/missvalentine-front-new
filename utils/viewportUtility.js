export const isMobile = () => {
  const checkIsMobile = /iPhone|Android/i.test(navigator.userAgent)
  return checkIsMobile
}
export const isTablet = () => {
  const checkIsTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
    navigator.userAgent,
  )
  return checkIsTablet
}
export const isMobileOrTablet = () => {
  console.log('isMobileOrTablet', navigator.userAgent, isTablet(), isMobile())

  return isTablet() || isMobile()
}

export const getDeviceType = () => {
  if (isMobile()) return 'mobile'
  else if (isTablet()) return 'tablet'
  else return 'window'
}

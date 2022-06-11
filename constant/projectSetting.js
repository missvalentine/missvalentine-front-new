// Development Setting
const LOCAL_SERVER_URL = 'http://localhost:5000/api'
const SERVER_URL = 'https://missval.herokuapp.com/api'
const SERVER_URL_2 = 'https://missval-server.herokuapp.com/api'

export const baseUrl = false ? SERVER_URL_2 : LOCAL_SERVER_URL

// Project Config
export const isCartAvailable = false
export const isReviewsAvailable = false

//SEO
export const keywordString =
  'Buy ladies bras online from a range of sports, push up, padded & more at MissValentine. Find women bras in different colors, fabrics, patterns at best price.'
export const keywordArray = keywordString?.split(' ') || ''

//main inforamtiom
export const projectName = 'MissValentine'
export const projectDescription =
  'MissValentine is premium lingerie brand that provides comfortable fit, support with impeccable quality'
export const comapanyUrl = 'www.missvalentineinnerwear.com'
export const companyInfoEmail = 'info@missvalentineinnerwear.com'
export const companyAdminEmail = 'info@missvalentineinnerwear.com'

//Location Info
export const comapanyCustomerCareNo = '7683037227'
export const comapanyAlternateNo = '9999217125'

export const comapanyOfficeLocation =
  'G-238, Sector D-1 (P-3), Tronica city, Loni Ghaziabad, Uttar Pradesh 201102'
export const comapanyAlternateOfficeLocation =
  'E-6A/235 k.H no-1435 E- Block Gali no 6A Sangam Vihar, New Delhi 110080 INDIA'
export const companyHQCountry = 'India'
export const companyHQState = 'Uttar Pradesh'

//more info
export const companyTagline = 'COMFORT THAT SUITS YOU'
export const companyTagline2 = 'WEAR YOUR STLYE'
export const companyTagline3 = 'FEEL LUXURY'
export const InfoAboutCompany1 = `Premium lingerie brand that provides comfortable fit, support with impeccable quality.`
export const InfoAboutCompany2 = `Any outfit worn by a women looses its charm if you are not wearing a perfect Bra underneath. A bra is not only a piece of inner wear but is also responsible for how confidently you carry yourself in public. The right kind of bra not only is good for the health of your breasts but also affects the way your dresses look on you.`

//main social media handlers
export const socialLinks = [
  {
    name: 'facebook',
    link: 'https://www.youtube.com/channel/UCSOx4OzJU4kjPxFlWRQw6ew',
    iconClass: 'icon-facebook',
  },
  {
    name: 'Instagram',
    link: 'https://www.youtube.com/channel/UCSOx4OzJU4kjPxFlWRQw6ew',
    iconClass: 'icon-instagram',
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/channel/UCSOx4OzJU4kjPxFlWRQw6ew',
    iconClass: 'icon-youtube',
  },
]

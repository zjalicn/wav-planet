# Wav Planet Store
-- 
## Roadmap
### 1.0 - Public Routing + Finalize Pages
- ReactRouter
- StoreFront
    - fixed height sidebar
    - responsive sidebar for StorePage
- HomePage
    - no nav
    - video background
    - big logo in center
- switch chakra ui icons to react fa
    - https://chakra-ui.com/docs/components/media-and-icons/icon

### 2.0 - Log In State + Protected Routes
- Protected Routes
- LoginSignUpPage
    - allow for user sign up w/ encrypted password
    - log in user and create token
- Navbar
    - if logged in, show user avatar + dropdown
    - if logged out, show sign up button
    - cart dropdown leads to checkout
    - remove NavLink?

### 3.0 - Connect to API
- Host API to public VPC on AWS & Connect
- User Login to DB
- PLP
    - GET product info, price, etc
    - add to cart button functionality
    - preview audio
- Checkout
    - connect with stripe API and add payment processing
    - UPDATE user - add product to account
- Products (Download Page)
    - GET users purchased products & display purchased
    - CREATE downloads in database and allow for download
- User Settings
    - UPDATE password + confirm both fields for change & encrypt
    - log out + destroy login token

### 3.5 - Responsiveness & Custom Audio Player
- Responsiveness
    - CheckoutPage
    - DownloadsPage
    - HomePage
    - LogInSignInPage
    - ProductPage
    - StorePage
        - remove sidebar for mobile

### 5.0 - Finalize, Edit, Test
- clean up unneeded libraries
- Better custom styling, using { mode } from  theme-tools
    - https://chakra-ui.com/docs/styled-system/theming/customize-theme
- logo
    - https://www.dafont.com/planet-kosmos.font?text=wav+planet&psize=l
- interfaces
    - make models folder / sync with backend?
- tests
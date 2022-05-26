# Wav Planet Store
-- 
## Roadmap

### 2.0 - Log In State + Protected Routes
- StoreFront
    - fixed height sidebar
    - responsive sidebar for StorePage
- HomePage
    - REACT THREE FIBER - https://codepen.io/round/pen/NBoebM
- Sign Up / Log in
    - onchange events for login/sign up form, clear on error
    - persist on refresh
    - recover password
    - unauthorized for login?
    - Formik : https://formik.org/
    - handle logout
        - if used in more components, this should be in context 
        - axios to /logout endpoint 
- Product Page
    - slightly smaller pic
    - send add to cart to the bottom, space between title, desc and cart button?
    - line up title and top of pic


### 3.0 - Connect to API
- LoginSignUpPage
    - allow for user sign up w/ encrypted password
    - log in user and create token
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
- interfaces
    - make models folder / sync with backend? maybe a core library/dependancy
- tests

### EVENTUALLY
Typescript Cleanup
    - RequireAuth props any
    - AuthProvider any useState

- Navbar
    - cart dropdown leads to checkout

- Remove blue border when element is clicked
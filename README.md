# Wav Planet Store
-- 
## Documentation
### Features

- Store Front
  - 

- Log In / Sign Up Page
  - log in/sign up success/fail toasts
  - 

## Roadmap

### 2.0 - Log In State + Protected Routes
- NAV BAR (show cart amount)
-store front
  - if objects aren't loaded from api don't stay on spinner forever

- Check Out Page
  - add up the sum of all items
  - if user is logged in, check their profile otherwise localstorage

- Sign Up / Log in
    - onchange events for login/sign up form, clear on error
    - toast (info) on successful sign up (or fail)
    - logi state persist on refresh
    - unauthorized for login?
    - Formik : https://formik.org/
    - handle logout
        - if used in more components, this should be in context 
        - axios to /logout endpoint 

- Product Page
    - send add to cart to the bottom, space between title, desc and cart button?
    - line up title and top of pic

- hover animation over products / sidebar options
  - better animation or something for selecting the sidebar categories
- default image so that it doesnt crash if the url doesnt add up

### 3.0 - Connect to API
- LoginSignUpPage
    - allow for user sign up w/ encrypted password
    - log in user and create token
- Connect User Login & Sign Up to DB
    - 
- PLP
    - add to cart button functionality
    - preview audio
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
- Secure login, db, etc
- Checkout
    - connect with stripe API and add payment processing
    - UPDATE user - add product to account
    - on mobile take out top white space
- recover password


### EVENTUALLY
Typescript Cleanup
    - RequireAuth props any
    - AuthProvider any useState

- Navbar
    - cart dropdown leads to checkout

- Remove blue border when element is clicked
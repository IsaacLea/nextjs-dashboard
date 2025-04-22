nextjs tutorial app

NextJS
React
TypeScript
Tailwind CSS

# Chapter 11

## Search params (search.tsx, invoice/page.tsx)
- useSearchParams client hook for capturing query params on the client side.  
- searchParams available on the server side as a special prop type that is made available by nextJS
- replace function from the router library used to set the query params and do a client side page redirect without refreshing

## Debouncing (search.tsx) 
- Used a debouncing third party library to add debouncing to the method that triggers search when the user input changes.  This prevents the function from being called too many times (adds a delay)

## Pagination
- pagination with URL search parameters instead of client state.

# Chapter 12 - Data mutation with NextJS server actions (create-form.tsx, actions.tsx)
- https://nextjs.org/learn/dashboard-app/mutating-data
- Server actions make it easy to execute code on the server in place of an explicit API POST call.  Under the hood they still are POSTs but you don't have to manage setting up the endpoints and calling them.  NextJS abstracts it.
- Uses Zod external library to help with form validation
- Used dynamic route /[id]/ to add an edit page

## Chapter 13 - Error handling
- Added an error.tsx file to act as an error handling UI for its route boundary (any time an uncaught exception is thrown within its route scope it will display)
- Added a not-found.tsx page and used the notFound nextJS function to trigger it

## Chapter 14 - Improving Accessibility and form validation
- Adding accessibility checks via lint "pnpm lint"
- Added enhanced form validation in create-form.tsx and accompanying action.  It uses useActionState and checks the state of the form on the server side to determine when to show errors.  The state is set by the server action.

## Chapter 15 - Authentication
- https://nextjs.org/learn/dashboard-app/adding-authentication
- Use nextAuth to add authentication
- added auth.config.ts to define where the login page is and also logic for applying auth to routes
- added middleware.ts to enable the auth and define a matcher to specify some exclusions
- added auth.ts to configure a credentials provider to allow user/pass login and implemented login logic (password check)
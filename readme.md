# nextjs tutorial app

NextJS
React
TypeScript
Tailwind CSS

# Chapter 2 - CSS styling
- https://nextjs.org/learn/dashboard-app/css-styling
- Add global.css for global styling
- Tailwind css is used in this project but an alternative is CSS modules if the preference is to use vanilla css in seperate file
- Use the clsx library to build dynamic css class names in the jsx

# Chapter 3 - optimization of fonts and images
- https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
- Avoid downloading fonts on the client side with a potential delay by having them statically available using next/font
- Optimize image performance and responsiveness with next/image

## Chapter 4 - Layouts and pages
- https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages
- Folder structure determines url.  Place a page.tsx into the desired folder
- Use layout.tsx to create a UI shared between all child pages
- Export RootLayout in the app/layout.tsx for the global layout

## Chapter 5 - Page navigation
- https://nextjs.org/learn/dashboard-app/navigating-between-pages
- use <Link> instead of <a> to navigate without a full page refresh, and prefetches linked pages for faster loads
- usePathName gets the current url

## Chapter 6 - Setting up database
- https://nextjs.org/learn/dashboard-app/setting-up-your-database
- Setup postgres database and insert seed data

## Chapter 7 - Data fetching
- https://nextjs.org/learn/dashboard-app/fetching-data
- Execute sql within server components
- Execute multiple fetches in parallel with Promise.all to avoid 'request waterfall' where each request executes in sequence when it shouldn't

## Chapter 8 - static and dynamic rendering
- https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering

## Chapter 9 - Streaming
- https://nextjs.org/learn/dashboard-app/streaming
- With streaming a page can load partially while slower 'chunks' are still loading
- use <Suspense> to load encapsolated components or a page while displaying a loading skeleton while its waiting

## Chapter 10 - partial prerendering
- https://nextjs.org/learn/dashboard-app/partial-prerendering
- Combine static and dynamic rendering to optimize more granularly in the same route

# Chapter 11 - Search and pagination
- https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
- useSearchParams client hook for capturing query params on the client side.  
- searchParams available on the server side as a special prop type that is made available by nextJS
- replace function from the router library used to set the query params and do a client side page redirect without refreshing
- Used a debouncing third party library to add debouncing to the method that triggers search when the user input changes.  This prevents the function from being called too many times (adds a delay)
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

## Chapter 16 - Adding metadata
- Reserved file names can be used to automatically generate metadata in the <head> tags, such as favicon.ico
- Export a Metadata config object in layout.tsx to automatically include the specified meta tags in the <head> of each page
- Export a Metadata object in a child page to override the inherited one
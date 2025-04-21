nextjs tutorial app

## Search params (search.tsx, invoice/page.tsx)
- useSearchParams client hook for capturing query params on the client side.  
- searchParams available on the server side as a special prop type that is made available by nextJS
- replace function from the router library used to set the query params and do a client side page redirect without refreshing

## Debouncing (search.tsx)
- Used a debouncing third party library to add debouncing to the method that triggers search when the user input changes.  This prevents the function from being called too many times (adds a delay)

## Pagination
- pagination with URL search parameters instead of client state.
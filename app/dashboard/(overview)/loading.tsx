// The mere existence of this file will make the app show a loading screen
// export default function Loading() {
//     return <div>Loading...</div>;
// }

// Replace the above with a loading skeleton to get more fancy
import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    return <DashboardSkeleton />;
}

// We moved this file into the (overview) folder to make it a loading screen for only the dashboard overview page (page.tsx).
// If it was moved to the parent folder, it would be a loading screen for all the pages in the dashboard folder.

// using () in the folder name is a convention to indicate that this is a special folder used to group in Next.js but it will not affect the URL path

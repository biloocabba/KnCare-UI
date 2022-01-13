import { BestPracticeDetailPage, BEST_PRACTICE_DETAILS, CreateBestPracticePage,NEW_BEST_PRACTICE,SearchBestPracticesPage, SEARCH_BEST_PRACTICE } from ".";

export const bestPracticesMenu = [
    {
        collapse: true,
        name: "Best Practices",
        icon: "ni ni-compass-04  text-primary",
        state: "bestPracticesCollapse",
        views: [
          {
            path: NEW_BEST_PRACTICE,
            name: "Create New",
            miniName: "NB",
            component: CreateBestPracticePage,
            layout: "/admin",
          },
          {
            path: SEARCH_BEST_PRACTICE,
            name: "Search",
            miniName: "SB",
            component: SearchBestPracticesPage,
            layout: "/admin",
          },
        ],
      },
      {
        collapse: false,
        global: true,
        path: `${BEST_PRACTICE_DETAILS}/:id`,
        component: BestPracticeDetailPage,
        layout: "/admin",
      },
]
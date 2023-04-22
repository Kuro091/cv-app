
export interface Project {
  title: string
  description: string
  imgUrl: string
  projectUrl?: string
  detailedDescription?: string
  techStack?: string[]
  images?: string[]
}

const useProjects = (): Project[] => {
  return [
    {
      title: 'Github Search',
      description: 'Search Github users and their repositories, favorite them and view them later.',
      imgUrl: './projects/github-search.png',
      projectUrl: 'https://oddle-challenge.vercel.app/',
      images: ['./projects/github-search.png', './projects/github-search-2.png', './projects/github-search-3.png', './projects/github-search-4.png'],
      detailedDescription: 'Search Github users and their repositories, favorite them and view them later.',
      techStack: ['React', 'NextJS', 'Redux Toolkit', 'Material UI', 'Octokit'],
    },
    {
      title: 'Online Notepad',
      description: 'A notepad that can be used to write notes and save them to the browser. Cloud support with supabase.',
      imgUrl: './projects/notepad.png',
      images: ['./projects/notepad.png', './projects/notepad-2.png', './projects/notepad-3.png', './projects/notepad-4.png'],
      projectUrl: 'https://online-notepad-one.vercel.app/',
      detailedDescription: 'A notepad that can be used to write notes and save them to the browser. Cloud support with supabase.',
      techStack: ['React', 'NextJS', 'Redux Toolkit', 'Supabase', 'TailwindCSS'],
    },
    {
      title: 'Code Editor Online',
      description: 'Online code editor with support for multiple languages. Save your code to the browser. Built with esbuild.',
      imgUrl: './projects/tribble.png',
      images: ['./projects/tribble.png', './projects/tribble-2.png', './projects/tribble-3.png', './projects/tribble-4.png'],
      projectUrl: 'https://kuro091.github.io/super-tribble/',
      detailedDescription: 'Online code editor with support for multiple languages. Save your code to the browser. Built with esbuild.',
      techStack: [
        "React",
        "react-dom",
        "axios",
        "redux",
        "redux-thunk",
        "immer",
        "localforage",
        "typescript",
        "esbuild",
        "prettier",
        "@fortawesome",
        "monaco-editor",
      ]
    },
    {
      title: 'Hygraph Blog',
      description: 'Simple blog site with GraphCMS (Hygraph now) as the backend.',
      imgUrl: './projects/blog.png',
      images: ['./projects/blog.png', './projects/blog-2.png', './projects/blog-3.png', './projects/blog-4.png'],
      projectUrl: 'https://cms-blog-tan.vercel.app/',
      detailedDescription: 'Simple blog site with GraphCMS (Hygraph now) as the backend.',
      techStack: ['React', "NextJS", 'TypeScript', 'react-multi-carousel', 'GraphCMS (Hygraph)', 'TailwindCSS'],
    },
  ]
}
export default useProjects;

export interface Project {
  title: string
  description: string
  imgUrl: string
  projectUrl?: string
  detailedDescription?: string
  techStack?: string[]
}

const useProjects = (): Project[] => {
  return [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      imgUrl: 'https://picsum.photos/200/300',
      projectUrl: 'https://www.google.com',
      detailedDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lor ',
      techStack: ['React', 'TypeScript', 'Material UI', 'Jest', 'Enzyme', 'React Testing Library'],
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      imgUrl: 'https://picsum.photos/200/300',
      projectUrl: 'https://www.google.com',
      detailedDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lor ',
      techStack: ['React', 'TypeScript', 'Material UI', 'Jest', 'Enzyme', 'React Testing Library'],
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      imgUrl: 'https://picsum.photos/200/300',
      projectUrl: 'https://www.google.com',
      detailedDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lor ',
      techStack: ['React', 'TypeScript', 'Material UI', 'Jest', 'Enzyme', 'React Testing Library'],
    },
    {
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      imgUrl: 'https://picsum.photos/200/300',
      projectUrl: 'https://www.google.com',
      detailedDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lor ',
      techStack: ['React', 'TypeScript', 'Material UI', 'Jest', 'Enzyme', 'React Testing Library'],
    },
  ]
}
export default useProjects;
const header = {
  homepage: 'https://gabenedden.github.io/',
  title: 'GZ.',
}

const about = {
  name: 'Gabriel Zur Nedden',
  role: 'Full Stack Web Developer based in Montreal',
  description:
    '',
  resume: '../../GabrielZurNeddenResume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/gabriel-zur-nedden-6a108874/',
    github: 'https://github.com/GabeNedden',
  },
}

const projects = [
  {
    name: 'G Task',
    description:
      'G Task is a streamlined Project Management application for teams of all sizes.',
    stack: ['React', 'MongoDB', 'NodeJS', 'GraphQL'],
    sourceCode: 'https://github.com/GabeNedden/task-tracker-client',
    livePreview: 'https://gtasktracker.netlify.app/',
  },
  {
    name: 'Getflix',
    description:
      'Getflix is a Netflix clone that benefits from heavy use Styled and Compound Components that are built to be reusable.',
    stack: ['React', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/GabeNedden/Getflix',
    livePreview: 'https://getflix2021.netlify.app/',
  },
  {
    name: 'Contribute',
    description:
      'Contribute is a learning tool for newer developers interested in learning how to contribute to Open Source projects.',
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/GabeNedden/contribute',
    livePreview: 'https://contribute.work/',
  },
  {
    name: 'Cinelect',
    description:
      'Cinelect uses the OpenMovie Database API to compare two films on a varity of categories.',
    stack: ['Axios', 'Bulma CSS', 'Javascript'],
    sourceCode: 'https://github.com/GabeNedden/Cinelect',
    livePreview: 'https://cinelect.vercel.app/',
  },
  {
    name: 'G Video',
    description:
      'G Video provides videocall and online chat services, similar to Zoom, or Skype',
    stack: ['Agora SDK', 'Javascript'],
    livePreview: 'https://g-videochat.netlify.app/create',
  },
]

const skills = [
  'JavaScript',
  'React',
  'MongoDB',
  'NodeJS',
  'Express',
  'HTML',
  'CSS',
  'TypeScript',
  'Bootstrap',
  'Semantic UI',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest'
]

const contact = {

  email: 'gabenedden@gmail.com',
}

export { header, about, projects, skills, contact }

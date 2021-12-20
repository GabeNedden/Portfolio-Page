import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, resume, social } = about

  return (
    <div className='about center'>
        <h1>
          Hi, I am <span className='about__name'>{name}</span>
        </h1>

      <h2 className='about__role'>{role}</h2>

      <div className='about__contact center'>

          <a
            href={social.github}
            aria-label='github'
            className='link link--icon'
            target="_blank" rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>

          <a 
            href={resume}
            target="_blank" rel="noopener noreferrer"
          >
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>

          <a
            href={social.linkedin}
            aria-label='linkedin'
            className='link link--icon'
            target="_blank" rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
      </div>
    </div>
  )
}

export default About

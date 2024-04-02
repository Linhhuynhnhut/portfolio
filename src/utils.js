import aboutImage from '../src/assets/about/aboutImage.png';
import cursorIcon from '../src/assets/about/cursorIcon.png';
import serverIcon from '../src/assets/about/serverIcon.png';
import uiIcon from '../src/assets/about/uiIcon.png';
import emailIcon from '../src/assets/contact/emailIcon.png';
import githubIcon from '../src/assets/contact/githubIcon.png';
import linkedinIcon from '../src/assets/contact/linkedinIcon.png';
import phoneIcon from '../src/assets/contact/phone.png';
import heroImage from '../src/assets/hero/heroImage.jpg';
import closeIcon from '../src/assets/nav/closeIcon.png';
import menuIcon from '../src/assets/nav/menuIcon.png';
import project from '../src/assets/projects/project.png';
import project1 from '../src/assets/projects/project1.png';
import project2 from '../src/assets/projects/project2.png';
import project3 from '../src/assets/projects/project3.png';
import css from '../src/assets/skills/css.png';
import figma from '../src/assets/skills/figma.png';
import graphql from '../src/assets/skills/graphql.png';
import html from '../src/assets/skills/html.png';
import mongodb from '../src/assets/skills/mongodb.png';
import node from '../src/assets/skills/node.png';
import react from '../src/assets/skills/react.png';
import retool from '../src/assets/skills/retool.png';
import bootstrap from '../src/assets/skills/bootstrap.png';
import git from '../src/assets/skills/git.png';
import bitbucket from '../src/assets/skills/bitbucket.png';
import javascript from '../src/assets/skills/javascript.png';
import jira from '../src/assets/skills/jira.jpeg';
import deliveree from '../src/assets/history/Deliveree.png';


const IMAGES = {
  'about/aboutImage.png': aboutImage,
  'about/cursorIcon.png': cursorIcon,
  'about/serverIcon.png': serverIcon,
  'about/uiIcon.png': uiIcon,
  'contact/emailIcon.png': emailIcon,
  'contact/githubIcon.png': githubIcon,
  'contact/linkedinIcon.png': linkedinIcon,
  'contact/phone.png': phoneIcon,
  'hero/heroImage.jpg': heroImage,
  'nav/closeIcon.png': closeIcon,
  'nav/menuIcon.png': menuIcon,
  'projects/project.png': project,
  'projects/project1.png': project1,
  'projects/project2.png': project2,
  'projects/project3.png': project3,
  'skills/css.png': css,
  'skills/figma.png': figma,
  'skills/graphql.png': graphql,
  'skills/html.png': html,
  'skills/mongodb.png': mongodb,
  'skills/node.png': node,
  'skills/react.png': react,
  'skills/retool.png': retool, 
  'skills/bootstrap.png': bootstrap, 
  'skills/git.png': git, 
  'skills/bitbucket.png': bitbucket, 
  'skills/javascript.png': javascript, 
  'skills/jira.jpeg': jira, 
  'history/Deliveree.png': deliveree,
};

export const getImageUrl = (path) => {
  if (!IMAGES[path]) return null;
  return IMAGES[path];
};

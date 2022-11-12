import { IProject } from "types";

export const projects: IProject[] = [
  {
    title: 'Markdown previewer',
    shortDescription: 'Un visualizador online de lenguaje de marcado.',
    techs: [{
      name: 'react',
      iconName: 'SiReact'
    },
    {
      name: 'styled components',
      iconName: 'SiStyledcomponents'
    }],
    scope: 'frontend',
    category: 'challenge',
    projectUrl: 'https://maxisan.github.io/markdown-prev/',
    imageUrl: '/assets/projects/Screen-Recording-2020-06-11-at-1.gif',
    longDescription: `This project is part of the Front End Development Libraries colection on freecodecamp.org

    What can you do?
    The project is a textbox in wich you can input free format text with Markdown and a view where you can preview it!
    
    Feel free to test, explore and enjoy it!
    
    What is Markdown?
    Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *.
    
    You can use Markdown most places around GitHub:
    - Gists
    - Comments in Issues and Pull * Requests
    - Files with the .md or .markdown extension
    For more information, see “Writing on GitHub” in the GitHub Help.`
  }
]
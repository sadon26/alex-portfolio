const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/lexzino',
  title: 'AU.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Alex Udeze',
  role: 'Front End Engineer',
  description: `
I’m a frontend engineer with 1–2 years of experience building responsive, high-performance web applications. I specialize in React, Next.js, and TypeScript, with a solid foundation in Java. I’m passionate about crafting clean, scalable code and transforming UI/UX designs into seamless user experiences. I thrive in collaborative environments and work well with backend teams to deliver robust full-stack solutions. What drives me is a strong ambition to one day build my own tech firm, and I approach every project as a step toward that goal—continually learning, improving, and innovating.`,
  resume: 'https://eu.docworkspace.com/d/sIF6HpsvXAbXCgsEG',
  social: {
    linkedin: 'https://www.linkedin.com/in/alexander-udeze-298403365/',
    github: 'https://github.com/lexzino',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Rapido Relief',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML', 'JavaScript', 'TypeScript', 'React'],
    livePreview: 'https://rapido-new.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'alexudeze001@mail.com',
}

export { header, about, projects, skills, contact }

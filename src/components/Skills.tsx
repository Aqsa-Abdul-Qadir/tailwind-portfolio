import React from 'react'

const Skills = () => {
  return (
    <div id="Skills" className="container pt-32">
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="flip-left">
                <h2 className='text-4xl md:text-5xl items-center' > Technologies I worked with</h2>
                <p className='text-white-500 pt-2 items-center'>
                I am passionate about leveraging technology to create impactful and efficient digital solutions. With a strong interest in staying on the cutting edge of innovation, I am dedicated to continuous learning and growth in the tech field. My expertise lies in Next.js and TypeScript, where I excel at building dynamic, type-safe applications that deliver both performance and scalability. I enjoy exploring new frameworks and tools, constantly seeking ways to optimize my development process and expand my knowledge. My commitment to mastering modern web technologies allows me to create seamless user experiences and develop projects that effectively meet both business and user needs.
                </p>

            </div>
            </div>
            <div>
              <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                  <div className='space-y-2' data-aos="flip-left">
                    <h2>Typescript</h2>
                    <h2>React.js</h2>
                    <h2>Next.js</h2>

                  </div>
                  <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                  <div className='space-y-2' data-aos="flip-left">
                    <h2>Tailwind</h2>
                    <h2>CSS</h2>
                    <h2>Node.js</h2>

                  </div>

                </div>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills

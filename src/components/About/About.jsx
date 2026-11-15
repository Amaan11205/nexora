import './About.css'

const steps = [
  {
    title: 'Create a project',
    text: 'Name it, set a due date and invite your team.',
  },
  {
    title: 'Add tasks',
    text: 'List what needs doing and give each task an owner.',
  },
  {
    title: 'Follow progress',
    text: 'Watch the project fill up as tasks are completed.',
  },
]

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__intro">
          <h2>Built for teams that ship.</h2>
          <p>
            NEXORA is a project management tool. It brings tasks, deadlines and team conversations
            into one workspace, so everyone sees the same plan.
          </p>
          <p>
            It is designed for small teams, startups and student groups who need to stay organised
            without learning a heavy tool.
          </p>
        </div>

        {/* Ordered list because the steps really happen in sequence */}
        <ol className="about__steps">
          {steps.map((step, index) => (
            <li key={step.title} className="step">
              <span className="step__number">{index + 1}</span>
              <div>
                <h3 className="step__title">{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default About

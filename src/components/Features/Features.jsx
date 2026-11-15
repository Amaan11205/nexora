import './Features.css'

// Each icon is a small inline SVG so we need no image files or libraries
const features = [
  {
    title: 'Organise projects',
    text: 'Group every task, file and deadline under one project, so nobody has to hunt through chats to find the latest plan.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6h7l2 2h9v11H3z" />
      </svg>
    ),
  },
  {
    title: 'Manage tasks',
    text: 'Break work into tasks, give each one an owner and a due date, and move it forward as it gets done.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12l5 5L20 6" />
      </svg>
    ),
  },
  {
    title: 'Track progress',
    text: 'See how much of a project is finished at a glance, and spot overdue work before it becomes a problem.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
  },
  {
    title: 'Work together',
    text: 'Assign tasks, leave comments and see who is working on what, all in the same place as the work itself.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2 20c0-4 3-6 7-6s7 2 7 6M16 4.5a3.5 3.5 0 010 7M18 14c2.5.6 4 2.4 4 6" />
      </svg>
    ),
  },
]

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="features__heading">Everything a project needs, nothing it doesn’t.</h2>

        <ul className="features__list">
          {features.map((feature) => (
            <li key={feature.title} className="feature">
              <span className="feature__icon">{feature.icon}</span>
              <h3 className="feature__title">{feature.title}</h3>
              <p className="feature__text">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Features

import './DashboardPreview.css'

// Fake data for the preview. Nothing here is connected to a backend.
const menuItems = ['Overview', 'Tasks', 'Timeline', 'Team']

const stats = [
  { label: 'Done', value: '34' },
  { label: 'In review', value: '6' },
  { label: 'Overdue', value: '2' },
]

const weeklyBars = [40, 65, 50, 80, 60, 90, 70]
const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

const tasks = [
  { id: 1, title: 'Finalise homepage copy', owner: 'AK', done: true },
  { id: 2, title: 'Review checkout flow', owner: 'RS', done: true },
  { id: 3, title: 'Fix mobile menu bug', owner: 'MP', done: false },
  { id: 4, title: 'Send launch checklist', owner: 'AK', done: false },
]

function DashboardPreview() {
  return (
    <div className="dash" role="img" aria-label="Preview of the NEXORA dashboard showing a project with progress and tasks">
      <aside className="dash__sidebar">
        <p className="dash__brand">NEXORA</p>
        <ul>
          {menuItems.map((item, index) => (
            <li key={item} className={index === 0 ? 'dash__menu-item dash__menu-item--active' : 'dash__menu-item'}>
              {item}
            </li>
          ))}
        </ul>
      </aside>

      <div className="dash__main">
        <div className="dash__header">
          <div>
            <p className="dash__title">Website relaunch</p>
            <p className="dash__sub">Due 28 Nov</p>
          </div>
          <div className="dash__avatars">
            <span>AK</span>
            <span>RS</span>
            <span>MP</span>
          </div>
        </div>

        <div className="dash__progress">
          <div className="dash__progress-label">
            <span>Progress</span>
            <span>68%</span>
          </div>
          <div className="dash__bar">
            {/* Inline style only because the width is a data value */}
            <div className="dash__bar-fill" style={{ width: '68%' }}></div>
          </div>
        </div>

        <div className="dash__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="dash__stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="dash__lower">
          <div className="dash__chart">
            <p className="dash__label">Tasks completed this week</p>
            <div className="dash__bars">
              {weeklyBars.map((height, index) => (
                <div key={index} className="dash__col">
                  <div className="dash__col-fill" style={{ height: `${height}%` }}></div>
                  <span>{weekDays[index]}</span>
                </div>
              ))}
            </div>
          </div>

          <ul className="dash__tasks">
            {tasks.map((task) => (
              <li key={task.id} className={task.done ? 'dash__task dash__task--done' : 'dash__task'}>
                <span className="dash__check" aria-hidden="true"></span>
                <span className="dash__task-title">{task.title}</span>
                <span className="dash__owner">{task.owner}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview

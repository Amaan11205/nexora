import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    note: 'For trying NEXORA with a small team.',
    features: ['Up to 3 projects', 'Unlimited tasks', 'Up to 5 team members', 'Basic progress view'],
    buttonText: 'Start for free',
    isFeatured: false,
  },
  {
    name: 'Professional',
    price: '₹499',
    note: 'per month, for teams that run many projects.',
    features: ['Unlimited projects', 'Deadline reminders', 'Team workload view', 'Progress reports', 'Priority support'],
    buttonText: 'Request a demo',
    isFeatured: true,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="pricing__heading">Simple pricing.</h2>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <article key={plan.name} className={plan.isFeatured ? 'plan plan--featured' : 'plan'}>
              <h3 className="plan__name">{plan.name}</h3>
              <p className="plan__price">{plan.price}</p>
              <p className="plan__note">{plan.note}</p>

              <ul className="plan__features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              {/* Both buttons scroll to the contact form */}
              <a href="#contact" className={plan.isFeatured ? 'btn btn-primary' : 'btn btn-outline'}>
                {plan.buttonText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

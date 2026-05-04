export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Developer Burnout{' '}
          <span className="text-[#58a6ff]">Before It Happens</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Burnout Radar connects to GitHub and Slack to analyze commit patterns, PR review times,
          and communication signals — surfacing risk scores before your best engineers quit.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $18 / mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Signal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 text-left">
          {[
            { label: 'Commit Frequency Drop', desc: 'Detects sudden or gradual decline in contribution velocity.' },
            { label: 'PR Review Lag', desc: 'Flags engineers who stop reviewing or take unusually long.' },
            { label: 'Slack Disengagement', desc: 'Monitors message volume and response time trends.' },
          ].map((s) => (
            <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold text-sm mb-2">{s.label}</div>
              <div className="text-[#8b949e] text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$18</div>
          <div className="text-[#6e7681] text-sm mb-6">per month · unlimited team members</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'GitHub + Slack integration',
              'Real-time burnout risk scores',
              'Weekly manager digest emails',
              'Slack alert bot for critical signals',
              'Historical trend reports (90 days)',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Does this require installing anything on developer machines?',
              a: 'No. Burnout Radar connects only to your existing GitHub organization and Slack workspace via OAuth. Developers install nothing.',
            },
            {
              q: 'Is developer data kept private from the team?',
              a: 'Individual scores are visible only to engineering managers. Developers see only team-level aggregates, protecting personal privacy.',
            },
            {
              q: 'How accurate are the burnout predictions?',
              a: 'Our model is trained on anonymized patterns from thousands of engineers. It flags at-risk individuals with ~85% precision, giving managers time to intervene.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-10">
        &copy; {new Date().getFullYear()} Burnout Radar. All rights reserved.
      </footer>
    </main>
  )
}

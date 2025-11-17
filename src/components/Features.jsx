import { Shield, Rocket, Repeat, ScanLine, Globe, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Bank‑grade + MPC security',
    desc: 'Multi‑party computation with biometric recovery and hardware‑level isolation.',
  },
  {
    icon: Repeat,
    title: 'Multi‑chain orchestration',
    desc: 'Auto‑route across Ethereum, Solana, Base and more with zero manual switching.',
  },
  {
    icon: Rocket,
    title: 'Instant settlement',
    desc: 'Sub‑second swaps with MEV protection and gas abstraction built‑in.',
  },
  {
    icon: Globe,
    title: 'Global by default',
    desc: 'Fiat on‑ramps, localized currencies and real‑time FX transparency.',
  },
  {
    icon: ScanLine,
    title: 'Privacy layers',
    desc: 'Shielded transfers with on‑device proof generation and rotating addresses.',
  },
  {
    icon: Sparkles,
    title: 'Beautifully simple',
    desc: 'A crisp white UI with subtle depth, made for clarity and speed.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Everything you need to move value</h2>
          <p className="mt-4 text-neutral-600">Designed for builders, traders and everyday use — without the clutter.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky-400 via-fuchsia-400 to-violet-400 text-white shadow-[0_1px_20px_rgba(99,102,241,0.35)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

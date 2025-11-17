import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_10%_-20%,rgba(59,130,246,0.12),transparent),radial-gradient(1000px_300px_at_90%_120%,rgba(139,92,246,0.12),transparent)]" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-violet-500" />
                Invite beta access
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                Be the first to feel walletless crypto
              </h3>
              <p className="mt-3 text-neutral-600">
                Sign up to get early access, updates and a private keyless recovery kit.
              </p>
            </div>
            <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                placeholder="you@domain.com"
                className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/5"
              />
              <button type="button" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 text-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition">
                Join Waitlist
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

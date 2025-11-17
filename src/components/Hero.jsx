import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] min-h-[520px] w-full">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white" />

        <div className="absolute inset-0 flex items-center">
          <div className="pointer-events-none mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-violet-500" />
                New: Multi-chain auto-routing
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-neutral-900">
                The futuristic crypto wallet for a borderless web
              </h1>
              <p className="mt-5 text-base sm:text-lg text-neutral-600">
                Experience a clean, white interface powered by next‑gen security and instant transactions. Your assets, orchestrated across chains in real time.
              </p>
              <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3">
                <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_34px_rgba(0,0,0,0.16)] transition">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-3 text-neutral-900 hover:bg-neutral-50 transition">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  See Features
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

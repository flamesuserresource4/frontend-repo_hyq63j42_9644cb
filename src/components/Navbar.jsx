import { Menu, Wallet, Shield } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 via-fuchsia-400 to-violet-400 text-white shadow-[0_1px_20px_rgba(99,102,241,0.35)]">
              <Wallet className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-neutral-900">
              Flux Wallet
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a className="hover:text-neutral-900 transition-colors" href="#features">Features</a>
            <a className="hover:text-neutral-900 transition-colors" href="#security">Security</a>
            <a className="hover:text-neutral-900 transition-colors" href="#cta">Get Started</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors">
              <Shield className="h-4 w-4 text-emerald-500" />
              Connect
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-neutral-200 p-2 text-neutral-800 hover:bg-neutral-50">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 grid gap-2 rounded-xl border border-neutral-200 p-2 bg-white">
              <a className="rounded-lg px-3 py-2 hover:bg-neutral-50" href="#features">Features</a>
              <a className="rounded-lg px-3 py-2 hover:bg-neutral-50" href="#security">Security</a>
              <a className="rounded-lg px-3 py-2 hover:bg-neutral-50" href="#cta">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

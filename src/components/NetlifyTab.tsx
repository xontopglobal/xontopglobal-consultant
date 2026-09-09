import { Cloud, RocketLaunch, ArrowSquareOut } from "@phosphor-icons/react";

const NETLIFY_SETTINGS = [
  { label: "Build command", value: "npm run build" },
  { label: "Publish directory", value: "dist" },
  { label: "Node version", value: "18+" },
  { label: "Redirects", value: "/* /index.html 200 (in public/_redirects)" },
];

export default function NetlifyTab() {
  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600 dark:text-slate-300">
        Deploy instantly with Netlify continuous deployment. Every push to{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-mono dark:bg-white/10">main</code>{" "}
        triggers an automatic rebuild.
      </p>

      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
          <RocketLaunch size={16} weight="fill" className="text-emerald-500" />
          Build Configuration
        </h4>
        <div className="space-y-2">
          {NETLIFY_SETTINGS.map((s) => (
            <div key={s.label} className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-2.5 dark:border-white/10">
              <span className="text-sm text-slate-600 dark:text-slate-300">{s.label}</span>
              <code className="rounded bg-slate-100 px-2 py-0.5 text-xs font-mono text-emerald-600 dark:bg-white/10 dark:text-emerald-400">{s.value}</code>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
          <ArrowSquareOut size={16} weight="bold" className="text-emerald-500" />
          One-Click Deploy
        </h4>
        <a
          href="https://app.netlify.com/start"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-500"
        >
          <Cloud size={18} weight="fill" />
          Deploy to Netlify
        </a>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700 dark:border-amber-800/50 dark:bg-amber-950/50 dark:text-amber-300">
        <strong>Note:</strong> The <code className="font-mono">public/_redirects</code>{" "}
        file handles SPA routing automatically so all routes fall back to{" "}
        <code className="font-mono">index.html</code>.
      </div>
    </div>
  );
}

import { BookOpen, Gear, CaretDown } from "@phosphor-icons/react";

const VSCODE_EXTENSIONS = [
  { name: "Tailwind CSS IntelliSense", id: "bradlc.vscode-tailwindcss" },
  { name: "ESLint", id: "dbaeumer.vscode-eslint" },
  { name: "Prettier", id: "esbenp.prettier-vscode" },
  { name: "GitLens", id: "eamodio.gitlens" },
];

export default function VSCodeTab() {
  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600 dark:text-slate-300">Boost your productivity with these recommended VS Code extensions.</p>

      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
          <Gear size={16} weight="fill" className="text-emerald-500" />
          Essential Extensions
        </h4>
        <div className="space-y-2">
          {VSCODE_EXTENSIONS.map((ext) => (
            <div key={ext.id} className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 dark:border-white/10">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{ext.name}</p>
                <p className="text-xs text-slate-400 font-mono">{ext.id}</p>
              </div>
              <a
                href={`https://marketplace.visualstudio.com/items?itemName=${ext.id}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
              >
                Install
              </a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
          <BookOpen size={16} weight="fill" className="text-emerald-500" />
          Pro Tips
        </h4>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {[
            { tip: "Use ", code: "Ctrl+Shift+P", desc: " to open the command palette for quick actions." },
            { tip: "Enable ", code: "Format On Save", desc: " in settings for auto-formatting." },
            { tip: "Use the Git Graph view (", code: "Ctrl+Shift+G", desc: ") for visual commit history." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CaretDown size={14} weight="bold" className="mt-0.5 text-emerald-500 rotate-[-90deg]" />
              <span>
                {item.tip}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-mono dark:bg-white/10">{item.code}</code>
                {item.desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

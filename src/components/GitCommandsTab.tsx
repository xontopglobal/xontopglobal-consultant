import { useState } from "react";
import { Copy, Check } from "@phosphor-icons/react";

const GIT_COMMANDS = [
  { label: "Initialize repo", cmd: "git init" },
  { label: "Stage all files", cmd: "git add ." },
  { label: "Commit changes", cmd: 'git commit -m "feat: initial commit"' },
  { label: "Rename branch", cmd: "git branch -M main" },
  {
    label: "Add remote origin",
    cmd: "git remote add origin https://github.com/<username>/xontopglobal-consultancy.git",
  },
  { label: "Push to GitHub", cmd: "git push -u origin main" },
];

export default function GitCommandsTab() {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCmd(key);
      setTimeout(() => setCopiedCmd(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-300">
        Follow these steps to push your project to GitHub. Replace{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-mono text-emerald-600 dark:bg-white/10 dark:text-emerald-400">
          &lt;username&gt;
        </code>{" "}
        with your GitHub username.
      </p>
      <ol className="space-y-3">
        {GIT_COMMANDS.map((item, i) => (
          <li key={item.cmd} className="group">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">{item.label}</p>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  <span className="flex-1 truncate">$ {item.cmd}</span>
                  <button
                    onClick={() => copyToClipboard(item.cmd, item.cmd)}
                    className="shrink-0 text-slate-400 transition hover:text-emerald-500"
                    aria-label="Copy command"
                  >
                    {copiedCmd === item.cmd ? (
                      <Check size={16} weight="bold" className="text-emerald-500" />
                    ) : (
                      <Copy size={16} weight="bold" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs text-blue-700 dark:border-blue-800/50 dark:bg-blue-950/50 dark:text-blue-300">
        <strong>Tip:</strong> After pushing, visit your GitHub repo and enable GitHub Pages or connect to Netlify for live deployment.
      </div>
    </div>
  );
}

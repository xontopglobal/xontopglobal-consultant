import { useState } from "react";
import { Copy, Check, ArrowSquareOut, Download } from "@phosphor-icons/react";

export default function QuickConnectTab() {
  const [username, setUsername] = useState("");
  const [repoName, setRepoName] = useState("xontopglobal-consultancy");
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

  const remoteUrl = `https://github.com/${username || "<username>"}/${repoName}.git`;
  const cloneUrl = `git clone ${remoteUrl}`;

  const fullScript = [
    "# Clone or initialize repository",
    username ? cloneUrl : "git clone https://github.com/<username>/" + repoName + ".git",
    "",
    "# Initialize if starting fresh",
    "cd " + repoName,
    "git init",
    "git branch -M main",
    "git add .",
    'git commit -m "feat: initial commit"',
    "",
    "# Add remote and push",
    `git remote add origin ${remoteUrl}`,
    "git push -u origin main",
  ].join(String.fromCharCode(10));

  const psScript = ["# PowerShell: Push to GitHub", `git remote add origin ${remoteUrl}`, "git push -u origin main"].join(
    String.fromCharCode(10)
  );

  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs text-blue-700 dark:border-blue-800/50 dark:bg-blue-950/50 dark:text-blue-300">
        <strong>Step 1:</strong> Enter your GitHub username and repo name below, then copy the generated commands.
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">GitHub Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="your-username"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-mono text-slate-700 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">Repository Name</label>
          <input
            type="text"
            value={repoName}
            onChange={(e) => setRepoName(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-mono text-slate-700 focus:border-emerald-500 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          />
        </div>
      </div>

      <a
        href={`https://github.com/new?name=${encodeURIComponent(repoName)}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
      >
        <ArrowSquareOut size={16} weight="bold" />
        Create Repository on GitHub
      </a>

      <div>
        <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">Clone the repository</p>
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <span className="flex-1 truncate">$ {cloneUrl}</span>
          <button onClick={() => copyToClipboard(cloneUrl, "clone")} className="shrink-0 text-slate-400 transition hover:text-emerald-500" aria-label="Copy clone URL">
            {copiedCmd === "clone" ? <Check size={16} weight="bold" className="text-emerald-500" /> : <Copy size={16} weight="bold" />}
          </button>
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">Full setup script (bash)</p>
        <div className="relative">
          <pre className="max-h-40 overflow-auto rounded-lg border border-slate-200 bg-slate-900 p-3 text-xs text-emerald-400 font-mono leading-relaxed">{fullScript}</pre>
          <button
            onClick={() => copyToClipboard(fullScript, "script")}
            className="absolute right-2 top-2 rounded-md bg-white/10 px-2 py-1 text-xs text-white transition hover:bg-white/20"
          >
            {copiedCmd === "script" ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">PowerShell script</p>
        <div className="relative">
          <pre className="max-h-24 overflow-auto rounded-lg border border-slate-200 bg-slate-900 p-3 text-xs text-emerald-400 font-mono leading-relaxed">{psScript}</pre>
          <button
            onClick={() => copyToClipboard(psScript, "pscript")}
            className="absolute right-2 top-2 rounded-md bg-white/10 px-2 py-1 text-xs text-white transition hover:bg-white/20"
          >
            {copiedCmd === "pscript" ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      <button
        onClick={() => {
          const blob = new Blob([fullScript], { type: "text/plain" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "setup-github.sh";
          a.click();
          URL.revokeObjectURL(url);
        }}
        className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-500"
      >
        <Download size={16} weight="bold" />
        Download setup-github.sh
      </button>
    </div>
  );
}
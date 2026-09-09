import { Lock, Key, ArrowClockwise, Warning, Info, FileText, CaretDown } from "@phosphor-icons/react";

const TROUBLESHOOTING = [
  {
    icon: Lock,
    title: "Authentication failed",
    desc: 'If you get "Authentication failed" errors, use a Personal Access Token instead of your password. Generate one at github.com/settings/tokens with repo scope.',
  },
  {
    icon: Key,
    title: "SSH vs HTTPS",
    desc: "Use HTTPS for simplicity. For SSH, generate keys with `ssh-keygen -t ed25519`, add the public key to GitHub, then use `git remote add origin git@github.com:user/repo.git`.",
  },
  {
    icon: ArrowClockwise,
    title: "Remote already exists",
    desc: "Run `git remote remove origin` first, then re-add it with the correct URL. Or check current remotes with `git remote -v`.",
  },
  {
    icon: Warning,
    title: "Permission denied (publickey)",
    desc: "Your SSH key is not added to GitHub. Run `ssh -T git@github.com` to test. If it fails, add your public key (~/.ssh/id_ed25519.pub) to GitHub settings.",
  },
  {
    icon: Info,
    title: "Push rejected — non-fast-forward",
    desc: "The remote has commits you don't have locally. Run `git pull --rebase origin main` first, then retry your push.",
  },
  {
    icon: FileText,
    title: "File too large (>100MB)",
    desc: "GitHub rejects large files. Use Git LFS (`git lfs track '*.psd'`) or remove the file from tracking with `git rm --cached <file>`.",
  },
];

export default function TroubleshootingTab() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-300">Common issues and their fixes when connecting to GitHub.</p>

      {TROUBLESHOOTING.map((faq, i) => (
        <details key={i} className="group rounded-lg border border-slate-200 dark:border-white/10">
          <summary className="flex cursor-pointer items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5">
            <faq.icon size={16} weight="bold" className="shrink-0 text-emerald-500" />
            {faq.title}
            <CaretDown size={14} weight="bold" className="ml-auto shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
          </summary>
          <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:text-slate-400">
            {faq.desc}
          </div>
        </details>
      ))}
    </div>
  );
}

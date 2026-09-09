import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  GithubLogo,
  Terminal,
  Cloud,
  Monitor,
  Plus,
  QuestionMark,
} from "@phosphor-icons/react";
import { BRAND_NAME } from "../constants";
import QuickConnectTab from "./QuickConnectTab";
import GitCommandsTab from "./GitCommandsTab";
import NetlifyTab from "./NetlifyTab";
import VSCodeTab from "./VSCodeTab";
import TroubleshootingTab from "./TroubleshootingTab";

interface GitHubDeployModalProps {
  open: boolean;
  onClose: () => void;
}

type TabKey = "quick" | "git" | "netlify" | "vscode" | "trouble";

const TABS: { key: TabKey; icon: React.ComponentType<any>; label: string }[] = [
  { key: "quick", icon: Plus, label: "Quick Connect" },
  { key: "git", icon: Terminal, label: "Git Commands" },
  { key: "netlify", icon: Cloud, label: "Netlify" },
  { key: "vscode", icon: Monitor, label: "VS Code" },
  { key: "trouble", icon: QuestionMark, label: "Help" },
];

export default function GitHubDeployModal({ open, onClose }: GitHubDeployModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("quick");

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed left-1/2 top-1/2 z-[101] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0A192F]"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-white/10">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 text-white">
                  <GithubLogo size={22} weight="fill" />
                </span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">GitHub &amp; Hosting Guide</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Deploy {BRAND_NAME} to the world</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            <div className="flex border-b border-slate-200 dark:border-white/10 overflow-x-auto">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex shrink-0 items-center gap-2 px-4 py-3 text-sm font-medium transition whitespace-nowrap ${
                    activeTab === tab.key
                      ? "border-b-2 border-emerald-500 text-emerald-600 dark:text-emerald-400"
                      : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                >
                  <tab.icon size={16} weight="duotone" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-6">
              {activeTab === "quick" && <QuickConnectTab />}
              {activeTab === "git" && <GitCommandsTab />}
              {activeTab === "netlify" && <NetlifyTab />}
              {activeTab === "vscode" && <VSCodeTab />}
              {activeTab === "trouble" && <TroubleshootingTab />}
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 px-6 py-3 dark:border-white/10">
              <span className="text-xs text-slate-400">{BRAND_NAME} · Built with React + Vite + Tailwind</span>
              <button
                onClick={onClose}
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
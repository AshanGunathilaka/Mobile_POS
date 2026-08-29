import { Head, Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    IconRoute,
    IconRocket,
    IconSparkles,
    IconArrowRight,
    IconBrandGithub,
    IconCheck,
    IconBulb,
} from "@tabler/icons-react";

const GITHUB_URL = "https://github.com/aryadwiputra/point-of-sales";

const releases = [
    {
        version: "v2.0",
        tag: "Major Revamp",
        date: "2025",
        items: [
            "Modern responsive UI redesign",
            "33 documented screenshots across modules",
            "Service-layer architecture foundation",
        ],
    },
    {
        version: "v2.1",
        tag: "Communication",
        date: "2025",
        items: [
            "WhatsApp Gateway through whatsapp-web.js",
            "Centralised app versioning through APP_VERSION",
            "Low-stock and aging notifications",
        ],
    },
    {
        version: "v2.2",
        tag: "Stack Upgrade",
        date: "2026",
        items: [
            "Laravel 12 to 13 upgrade",
            "Inertia v3 and React 19",
            "English-only Sri Lankan localisation",
        ],
    },
    {
        version: "v2.3",
        tag: "POS Hardening",
        date: "2026",
        items: [
            "Cart fixes and stronger shift handling",
            "Warehouse-level stock fallback",
            "Complete per-module documentation",
        ],
    },
    {
        version: "v2.3.1",
        tag: "Current Release",
        date: "Aug 2026",
        items: [
            "Maintenance and refinement release",
            "CI/CD pipeline with build and auto-deploy",
            "New landing page and public site",
            "Customer portal and invoice PDF improvements",
        ],
    },
];

const directions = [
    {
        icon: IconSparkles,
        title: "Deeper mobile experience",
        desc: "A stronger handheld cashier flow with full offline mode, smarter sync queues, and touch-optimised UI.",
    },
    {
        icon: IconBulb,
        title: "Ecosystem integrations",
        desc: "More payment gateways, delivery connectors, accounting integrations, and e-commerce integrations.",
    },
    {
        icon: IconRocket,
        title: "Developer ecosystem",
        desc: "API documentation, themes, plugins, and tooling that make contribution easier.",
    },
];

export default function Roadmap() {
    return (
        <PublicLayout active="/roadmap">
            <Head title="Roadmap - Dikasir" />

            <section className="pt-20 pb-14 px-6 bg-gradient-to-b from-primary-50 dark:from-primary-950/40 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 text-sm font-medium mb-5 border border-primary-100 dark:border-primary-900">
                        <IconRoute size={16} />
                        Roadmap
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                        The Dikasir Roadmap
                    </h1>
                    <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        From a simple cashier app to a complete POS ecosystem, shaped by practical
                        business needs and community feedback.
                    </p>
                </div>
            </section>

            <section className="pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-900 space-y-10">
                        {releases.map((rel) => (
                            <div key={rel.version} className="relative">
                                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 border-4 border-white dark:border-slate-950" />
                                <div className="flex items-center gap-3 flex-wrap">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                        {rel.version}
                                    </h2>
                                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-900">
                                        {rel.tag}
                                    </span>
                                    <span className="text-sm text-slate-400">{rel.date}</span>
                                </div>
                                <ul className="mt-3 space-y-2">
                                    {rel.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5">
                                            <IconCheck size={16} className="text-emerald-500 mt-1 shrink-0" />
                                            <span className="text-sm text-slate-600 dark:text-slate-300">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Future Direction
                        </h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Priorities are formed from user feedback, maintainers, and contributors.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {directions.map((dir) => (
                            <div
                                key={dir.title}
                                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                            >
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-4">
                                    <dir.icon size={22} className="text-white" />
                                </div>
                                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                                    {dir.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {dir.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-10 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            The Roadmap Is Community-Shaped
                        </h2>
                        <p className="text-slate-400 mb-7">
                            Share a feature idea, report a bug, or contribute to one of the planned
                            directions through GitHub.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a
                                href={`${GITHUB_URL}/issues`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all"
                            >
                                <IconBrandGithub size={18} />
                                Create an Issue
                            </a>
                            <Link
                                href="/contributing"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-300 border border-slate-600 rounded-xl hover:border-primary-400 hover:text-primary-400 transition-colors"
                            >
                                Start Contributing
                                <IconArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

import { Head, Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    IconShoppingCart,
    IconWallet,
    IconBuildingWarehouse,
    IconReceiptTax,
    IconChartBar,
    IconReportMoney,
    IconUsers,
    IconBrandWhatsapp,
    IconShieldLock,
    IconCloudOff,
    IconBrandGithub,
    IconStar,
    IconArrowRight,
    IconDeviceMobile,
    IconTerminal2,
} from "@tabler/icons-react";

const GITHUB_URL = "https://github.com/aryadwiputra/point-of-sales";
const DOCS_URL = `${GITHUB_URL}/blob/main/docs/getting-started.md`;
const GALLERY_URL = `${GITHUB_URL}/blob/main/docs/screenshots.md`;

const stats = [
    { value: "200+", label: "GitHub Stars" },
    { value: "44+", label: "Complete Features" },
    { value: "MIT", label: "Free Forever" },
    { value: "8", label: "Integrated Modules" },
];

const features = [
    {
        icon: IconShoppingCart,
        title: "Fast, Simple POS",
        desc: "Search products by barcode or keyboard, scan with the camera in PWA mode, hold/resume carts, and checkout in seconds.",
    },
    {
        icon: IconWallet,
        title: "Multi-Payment",
        desc: "Cash, bank transfer, Midtrans, Xendit, and pay later receivables in one cashier workflow.",
    },
    {
        icon: IconBuildingWarehouse,
        title: "Multi-Warehouse",
        desc: "Separate stock by warehouse or branch, transfer stock, run stock counts, and track batch/expiry with FEFO.",
    },
    {
        icon: IconReceiptTax,
        title: "Tax Management",
        desc: "Configurable tax, exclusive/inclusive pricing, customer Tax ID data, and tidy tax reporting.",
    },
    {
        icon: IconChartBar,
        title: "Reports & Insights",
        desc: "Sales, profit and margin, cashier performance, busy hours, and repeat customer reporting.",
    },
    {
        icon: IconReportMoney,
        title: "Receivables & Payables",
        desc: "Manage customer receivables and supplier payables with aging analysis and partial payments.",
    },
    {
        icon: IconUsers,
        title: "CRM & Loyalty",
        desc: "Member tiers, loyalty pointsts, vouchers, automatic customer segmentation, and marketing campaigns.",
    },
    {
        icon: IconBrandWhatsapp,
        title: "WhatsApp Gateway",
        desc: "Send receipts, receivable reminders, and promotions to customers through WhatsApp.",
    },
    {
        icon: IconShieldLock,
        title: "RBAC & Audit Log",
        desc: "Role-based access, discount approvals, and before/after audit trails for every important change.",
    },
    {
        icon: IconCloudOff,
        title: "Offline Mode",
        desc: "Keep selling during connectivity issues; transactions queue locally and sync when the connection returns.",
    },
];

const techStack = [
    { name: "Laravel 13", color: "bg-red-500" },
    { name: "Inertia.js 3", color: "bg-purple-500" },
    { name: "React 19", color: "bg-cyan-500" },
    { name: "Tailwind CSS", color: "bg-sky-500" },
    { name: "MySQL", color: "bg-orange-500" },
    { name: "PWA", color: "bg-emerald-500" },
];

const screenshots = [
    { src: "/screenshots/01-dashboard.png", title: "Dashboard", span: "col-span-2 row-span-2" },
    { src: "/screenshots/02-pos-checkout.png", title: "POS Checkout" },
    { src: "/screenshots/06-stock-opnames.png", title: "Stock Count" },
    { src: "/screenshots/12-receivables.png", title: "Receivables" },
    { src: "/screenshots/15-sales-report.png", title: "Sales Report" },
];

const faqs = [
    {
        q: "Is Dikasir really free?",
        a: "Yes. Dikasir is released under the MIT license, so it can be used, modified, and distributed for commercial use without license or subscription fees.",
    },
    {
        q: "Can it support multi-branch businesses?",
        a: "Yes. Dikasir supports multi-warehouse operations with separate stock, warehouse transfers, and warehouse-level reports.",
    },
    {
        q: "What happens if the shop internet drops?",
        a: "Offline mode lets transactions continue in a local queue, then sync automatically when the connection returns.",
    },
    {
        q: "What do I need to install it?",
        a: "PHP 8.3+, MySQL, Composer, and Node.js 20+. The complete guide is in the getting-started documentation.",
    },
    {
        q: "How can I contribute?",
        a: "Fork the repository, create a branch from development, and open a pull request back to development. Run php artisan test before submitting.",
    },
];

const quickStart = `git clone https://github.com/aryadwiputra/point-of-sales
cd pointst-of-sales
composer install && npm install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan storage:link

# Run dev servers in two terminals
npm run dev
php artisan serve`;

export default function Welcome() {
    return (
        <PublicLayout>
            <Head title="Dikasir - Open Source POS for Small Businesses" />

            <section className="pt-28 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6 border border-primary-100 dark:border-primary-900">
                            <IconBrandGithub size={16} />
                            Open Source | MIT License | 200+ Stars
                        </div>

                        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
                            Modern POS System
                            <span className="block mt-2 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                                Free &amp; Open Source
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Dikasir is a complete pointst of sale app for Sri Lankan shops and small
                            businesses, with multi-warehouse inventory, tax, loyalty, CRM,
                            WhatsApp, and offline mode. Self-hosted, with your data fully under
                            your control.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl hover:from-primary-600 hover:to-primary-700 shadow-xl shadow-primary-500/30 transition-all flex items-center justify-center gap-2"
                            >
                                <IconStar size={20} />
                                Star on GitHub
                                <IconArrowRight size={18} />
                            </a>
                            <Link
                                href="/login"
                                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-primary-300 dark:hover:border-primary-700 transition-all flex items-center justify-center gap-2"
                            >
                                <IconDeviceMobile size={20} />
                                Try Demo
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-10 pointster-events-none h-32 bottom-0 top-auto" />
                        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
                            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="flex-1 text-center text-xs text-slate-500">
                                    dikasir.local
                                </div>
                            </div>
                            <img
                                src="/media/revamp-pos.png"
                                alt="Dikasir POS preview"
                                className="w-full"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-6 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-extrabold text-primary-600 dark:text-primary-400">
                                {stat.value}
                            </div>
                            <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="screenshot" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                            Application Screens
                        </h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Daily cashier workflows, management reports, and operational tools in
                            one fast application.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[140px] md:auto-rows-[180px]">
                        {screenshots.map((shot) => (
                            <div
                                key={shot.title}
                                className={`${shot.span || ""} relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 group`}
                            >
                                <img
                                    src={shot.src}
                                    alt={shot.title}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
                                    <span className="text-xs font-medium text-white">
                                        {shot.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <a
                            href={GALLERY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors"
                        >
                            View full gallery (33 screenshots)
                            <IconArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>

            <section id="features" className="py-20 px-6 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                            Complete Features for Real Businesses
                        </h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            44+ integrated modules, from daily transactions to advanced analytics,
                            built for Sri Lankan small business operations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg hover:shadow-primary-500/5 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            href="/features"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-950/40 transition-colors"
                        >
                            Explore all features
                            <IconArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Modern Tech Stack
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-10">
                        Built with proven tools that are fast, maintainable, and easy to extend.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
                            >
                                <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="installation" className="py-20 px-6 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                            Install in Minutes
                        </h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400">
                            Clone, install, and start the cashier workflow with sample data included.
                        </p>
                    </div>

                    <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 overflow-hidden">
                        <div className="flex items-center gap-2 mb-4">
                            <IconTerminal2 size={16} className="text-slate-500" />
                            <span className="text-xs font-mono text-slate-500">bash</span>
                        </div>
                        <pre className="text-sm text-slate-300 font-mono overflow-x-auto leading-relaxed">
                            {quickStart}
                        </pre>
                    </div>

                    <div className="mt-6 text-center">
                        <a
                            href={DOCS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors"
                        >
                            Read the full documentation
                            <IconArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="rounded-2xl border border-primary-200 dark:border-primary-900 bg-primary-50/50 dark:bg-primary-950/30 p-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            Want to Try It?
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            The demo includes sample products, transactions, and reports. Use these
                            accounts:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                                <div className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2 uppercase tracking-wide">
                                    Admin
                                </div>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                                    arya@gmail.com
                                </div>
                                <div className="font-mono text-sm text-slate-500 dark:text-slate-400">
                                    password
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                                <div className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2 uppercase tracking-wide">
                                    Cashier
                                </div>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                                    cashier@gmail.com
                                </div>
                                <div className="font-mono text-sm text-slate-500 dark:text-slate-400">
                                    password
                                </div>
                            </div>
                        </div>
                        <Link
                            href="/login"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/25 transition-all"
                        >
                            Open Demo
                            <IconArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <section id="faq" className="py-20 px-6 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <details
                                key={faq.q}
                                className="group rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 open:shadow-md transition-all"
                            >
                                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                                    <span className="font-medium text-slate-900 dark:text-white">
                                        {faq.q}
                                    </span>
                                    <span className="text-primary-500 group-open:rotate-45 transition-transform text-lg">
                                        +
                                    </span>
                                </summary>
                                <p className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Run Your Business with Dikasir?
                        </h2>
                        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                            Free forever, open source, and fully self-hosted. Start from GitHub.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-slate-50 transition-colors"
                            >
                                <IconBrandGithub size={20} />
                                Star on GitHub
                            </a>
                            <Link
                                href="/login"
                                className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-semibold rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                Try Demo
                                <IconArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

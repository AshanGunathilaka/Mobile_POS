import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    IconShoppingCart,
    IconBuildingWarehouse,
    IconTruckDelivery,
    IconReportMoney,
    IconUsers,
    IconChartBar,
    IconShieldLock,
    IconCreditCard,
    IconCheck,
    IconArrowRight,
} from "@tabler/icons-react";

const GITHUB_URL = "https://github.com/aryadwiputra/point-of-sales";

const modules = [
    {
        icon: IconShoppingCart,
        title: "POS & Transactions",
        desc: "The core cashier workflow: fast, flexible, and dependable every day.",
        screenshot: "/screenshots/02-pos-checkout.png",
        features: [
            "Product search by barcode or keyword",
            "Camera barcode scanning in PWA mode",
            "Multi-item cart with hold and resume",
            "Checkout with cash, bank transfer, Midtrans, Xendit, and pay later",
            "Multi-unit products with stock conversion",
            "Promotion engine for discounts, quantity breaks, bundles, and buy-x-get-y",
            "Discount approval workflow",
            "58/80mm thermal receipt printing through WebUSB",
            "Offline mode for uninterrupted selling",
        ],
    },
    {
        icon: IconBuildingWarehouse,
        title: "Inventory & Multi-Warehouse",
        desc: "Control stock across warehouses and branches.",
        screenshot: "/screenshots/07-warehouses.png",
        features: [
            "Products, categories, and barcodes",
            "Separate stock by warehouse or branch",
            "Warehouse transfers from draft to send to receive",
            "Warehouse stock counts",
            "Complete stock mutation history",
            "Batch and expiry tracking with FEFO",
            "Composite products and kits",
            "Reorder points with purchase order recommendations",
            "Low-stock notifications",
        ],
    },
    {
        icon: IconTruckDelivery,
        title: "Purchasing & Suppliers",
        desc: "A clear purchasing flow from purchase order to supplier payable.",
        screenshot: "/screenshots/09-purchase-orders.png",
        features: [
            "Purchase orders from draft to ordered to partial to completed",
            "Goods receiving with batch input",
            "Supplier returns",
            "Supplier data management",
            "Supplier payables with aging analysis",
        ],
    },
    {
        icon: IconReportMoney,
        title: "Finance & Receivables",
        desc: "Receivables, payables, and tax in one controlled finance workflow.",
        screenshot: "/screenshots/12-receivables.png",
        features: [
            "Customer receivables with partial payments",
            "Aging analysis and collection notes",
            "Supplier payables and payments",
            "Configurable tax and customer Tax ID data",
            "Customer portal for invoice viewing and online payment",
        ],
    },
    {
        icon: IconUsers,
        title: "CRM & Loyalty",
        desc: "Grow repeat business with customer retention tools.",
        screenshot: "/screenshots/19-members.png",
        features: [
            "Customer management with regional fields",
            "Member tiers: regular, silver, gold, and platinum",
            "Loyalty points for earning and redemption",
            "Customer vouchers",
            "Manual and rule-based segmentation",
            "Campaign automation for reminders and promotions",
            "WhatsApp receipts, reminders, and promotion messages",
        ],
    },
    {
        icon: IconChartBar,
        title: "Reports & Insights",
        desc: "Data-backed decisions for sales, margin, and operations.",
        screenshot: "/screenshots/15-sales-report.png",
        features: [
            "Sales reports with filters and summaries",
            "Profit and margin analysis",
            "Advanced insights for busy hours, cashier performance, and repeat customers",
            "PDF invoices, receipts, and shipping labels",
            "PDF receivable and payable documents",
            "Excel export for products, customers, and transactions",
        ],
    },
    {
        icon: IconShieldLock,
        title: "Admin & Security",
        desc: "Clear access control and audit history.",
        screenshot: "/screenshots/31-audit-logs.png",
        features: [
            "Full RBAC for users, roles, and permissions",
            "Audit logs with before/after snapshots",
            "Step-up authentication for sensitive actions",
            "Excel import for products and customers",
            "Centralised app versioning through APP_VERSION",
            "Cashier shift management",
        ],
    },
    {
        icon: IconCreditCard,
        title: "Payments & Settings",
        desc: "Accept the payment methods your customers use.",
        screenshot: "/screenshots/24-payment-settings.png",
        features: [
            "Payment gateways: Midtrans and Xendit",
            "Bank accounts for manual transfer",
            "Multiple price lists by customer group",
            "Sales targets and store profile",
            "Printer and tax settings",
            "English-only Sri Lankan localisation",
        ],
    },
];

export default function Features() {
    return (
        <PublicLayout active="/features">
            <Head title="Complete Features - Dikasir" />

            <section className="pt-20 pb-14 px-6 bg-gradient-to-b from-primary-50 dark:from-primary-950/40 to-transparent">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                        Complete Features for Real Businesses
                    </h1>
                    <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        44+ integrated modules across 8 areas, from daily cashier work to advanced
                        analytics. Free, open source, and ready for Sri Lankan small businesses.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {modules.map((m) => (
                            <a
                                key={m.title}
                                href={`#${m.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                className="px-4 py-2 text-sm font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                                {m.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto space-y-20">
                    {modules.map((mod, idx) => (
                        <div
                            key={mod.title}
                            id={mod.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                            className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                                        <mod.icon size={22} className="text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                        {mod.title}
                                    </h2>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 mb-5">
                                    {mod.desc}
                                </p>
                                <ul className="space-y-2.5">
                                    {mod.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2.5">
                                            <IconCheck size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                                            <span className="text-sm text-slate-700 dark:text-slate-300">
                                                {f}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
                                    <img
                                        src={mod.screenshot}
                                        alt={`${mod.title} screenshot`}
                                        className="w-full"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="pb-20 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Need another feature?
                        </h2>
                        <p className="text-slate-400 mb-6">
                            New features can come from any contributor because the project is open
                            source.
                        </p>
                        <a
                            href={`${GITHUB_URL}/issues`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all"
                        >
                            Suggest a Feature on GitHub
                            <IconArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

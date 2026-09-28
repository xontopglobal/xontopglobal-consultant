export default function IVisaChecker() {
    return (
        <section className="bg-white py-14 dark:bg-[#0B1B33] sm:py-16">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
                    <div className="mb-7 text-center">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                            Travel & Visa Tool
                        </span>
                        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                            Check Visa Requirements
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                            Check visa requirements for your destination before you travel.
                        </p>
                    </div>

                    <div className="flex justify-center overflow-hidden">
                        <iframe
                            title="iVisa Visa Requirement Checker"
                            style={{
                                border: "none",
                                padding: 0,
                                width: "340px",
                                height: "400px",
                                maxWidth: "100%",
                            }}
                            src="https://www.ivisa.com/widgets/visa-requirement?utm_source=xontop&utm_content=widget_2_checker&background_color=checker-bg-1&widget_width=340&widget_height=400"
                            allowTransparency
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

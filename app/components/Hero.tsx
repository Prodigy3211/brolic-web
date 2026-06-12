import Link from "next/link";

export default function Hero () {
    return (
        // The section tag is how you can navigate to specific points on a page using the Id prop inside
        <section className="bg-slate-950 text-white"> 
            <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
                <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 text-xs font-medium px-3 py-1.5 
                rounded-full mb-6 border border-blue-500/30">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke= "currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V51-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Built for small organizations
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-2xl">
                    Enterprise-grade tech solutions.
                    <span className="text-blue-400">Without the enterprise price tag.</span>
                </h1>
                
                <p className="text-slate-400"> We help small businesses and nonprofits keep track of their customers, donors
                    and stakeholders- with practical, affordable database managment and a customizable dashboard.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                    href="#contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors
                    text-center" >
                        Schedule Your Consultation
                    </Link>
                    <Link 
                    href="#services"
                    className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-lg
                     transition-colors text-center">
                        See our Services
                     </Link>
                </div>
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800 pt-10">
                    {[
                        { value:"3+", label: "Organizations Consulted"},
                        { value:"< 24h ", label: "Response Time"},
                        { value:"0", label: "Unsatisfied Clients"},
                        { value:"0", label: "Muscle Mass Lost!"}
                    ].map((stat) => (
                        <div key={stat.label}>
                            <p className="text-2xl font-bold text-white">{stat.value}</p>
                            <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                        </div>
                    ))
                    }

                </div>
            </div>
        </section>
    );
}
import GetInTouchSection from "@/components/GetInTouchSection"; 
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <>
        <Header />
        <div className="min-h-screen bg-black text-white pt-24 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        We're Here to <span className="text-green-400">Help</span>
                    </h1>

                    <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Have questions about our trading platform, account setup, deposits/withdrawals,
                        or need technical support? Our team is available 24/7 to assist you.
                        Drop us a message – we usually respond within a few hours.
                    </p>
                </div>

                {/* Yahan tera existing pura section daal diya */}
                <GetInTouchSection />
            </div>
        </div>
        <Footer />
        </>
    );
}
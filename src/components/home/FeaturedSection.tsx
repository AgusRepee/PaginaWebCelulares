import React from 'react';

export const FeaturedSection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Abstract blurred background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gray-700/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkna747X9fOL9OCwbSFYot7_JV13ds8snXAdaFCexYRAsipAgaVwksU67lwa8evw72VcPM-qTHrxEg1VQauTkaASKIFtg8GWFKMlfjae2Ot-R41jGmHMtzEE3wdcWfWBdBPHDLMlWp3PhwSIYOJGzPCbsZhKwWukcPXyangWknsh4uSvCMWj8J1iHFvSytL-QrReQYUoyPO4E5-zYTUOOmUpVJEXFtAzTisDAZP-IgDSpEjaDW2FyBD2wlZu4QGthyY3nqb71DMIc" 
                            alt="iPhone 16 Pro Titanio" 
                            className="max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-2xl rounded-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <span className="inline-block py-1 px-3 rounded-full bg-gray-800 text-gray-300 text-xs font-bold tracking-wider mb-6">
                            IPHONE 16 PRO
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            DISEÑO EN <br/> <span className="text-gray-500">TITANIO</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Caja de titanio de grado aeroespacial. Chip A18 Pro, cámara Pro con zoom 5x y hasta 256 GB de almacenamiento.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors">
                                Reservar ahora
                            </button>
                            <button className="border border-gray-600 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                                Ver especificaciones
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
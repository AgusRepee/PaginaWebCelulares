import React from 'react';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
                    
                    {/* Left Content */}
                    <div className="z-10 text-center lg:text-left animate-fade-in">
                        <span className="inline-block text-primary/80 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                            Tecnología nueva temporada
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-mobix-black leading-[1.1] mb-8">
                            Colección <br className="hidden lg:block"/> smartphone 2026
                        </h1>
                        <p className="mt-4 text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 mb-10">
                            La cúspide de la innovación. Rendimiento sin igual en un diseño que define el futuro.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button variant="primary" size="lg">Comprar ahora</Button>
                            <Button variant="outline" size="lg">Saber más</Button>
                        </div>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="relative flex justify-center lg:justify-end items-center h-full">
                        {/* Decorative Background shape */}
                        <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-gray-200 to-gray-50 rounded-full blur-3xl opacity-60 -z-10 translate-x-10 translate-y-10"></div>
                        
                        <div className="relative w-full max-w-md transform hover:scale-105 transition-transform duration-700 ease-out">
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs-EiBsja3pAC6yx9mdcGnKW1bi5rTJzCeh_U2-y99dm2m33HWYty8j7JaeIbUle9s8Gj75GFZH6LoBqYixL3DOgKafhnJZrHvYcy9ikS36j5ujWb021NDNTX_4r5aWv2nV1rxFOzo-QAh9M49bGkHM6nKXAKLoJL3XwoUHCn4SyG_wphDVM5miJzlFA0wMTNgT_cmAowiD6BfBQBCkjyzKnx8p_ZOM5QbXQiDAeuBmhygWiJug_xau61_z7NDipcm6UEuFULGaxY" 
                                alt="Smartphone moderno en la sección principal" 
                                className="w-full h-auto drop-shadow-2xl rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
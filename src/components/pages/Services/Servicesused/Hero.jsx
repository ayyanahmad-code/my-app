 import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Layers, Settings, RefreshCw, Wrench, Grid3x3, 
  Zap, CheckCircle, ArrowRight, Palette, Grid, Package,
  FileText, Thermometer, Wind, Magnet, BarChart3, CpuIcon,
  Phone, Mail, ChevronRight, Shield, Users, Target
} from 'lucide-react';
import Button from '../../../buttons/Button';
import Services from "../../../../Images/Services.avif";
 
 const Hero = () => {
 return (
 <section className="relative text-white pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src= {Services} 
            alt="Engineering Services - Precision & Innovation"
            className="w-full h-full object-cover"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-800/40"></div>
        </div>
        
        {/* Optional: Circuit/Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        </div>
        
        {/* Floating Engineering Icons */}
        <div className="absolute top-1/4 right-10 opacity-10">
          <Settings size={60} />
        </div>
        <div className="absolute bottom-1/4 left-10 opacity-10">
          <Cpu size={60} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap size={16} />
              <span className="text-sm font-semibold">OUR ENGINEERING SERVICES</span>
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Engineering Services
              <span className="block text-primary-300 mt-2">Precision & Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Providing reliable engineering services through industrious observance of processes 
              and methodology tempered with 10+ years of experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button 
                  variant="gradient"
                  size="lg"
                  icon={<Mail size={20} />}
                >
                  Get Free Consultation
                </Button>
              </Link>
              
              <a href="#services-grid">
                <Button 
                  variant="secondary"
                  size="lg"
                  icon={<ChevronRight size={20} />}
                  iconPosition="right"
                  className="border-white text-white hover:bg-white/10"
                >
                  Explore Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
 );
};
export default Hero;
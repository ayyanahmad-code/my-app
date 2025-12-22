 import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Layers, Settings, RefreshCw, Wrench, Grid3x3, 
  Zap, CheckCircle, ArrowRight, Palette, Grid, Package,
  FileText, Thermometer, Wind, Magnet, BarChart3, CpuIcon,
  Phone, Mail, ChevronRight, Shield, Users, Target
} from 'lucide-react';
import Button from '../../../buttons/Button';

const CTA = () => {
return(
<section className="py-20 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Mail size={16} />
              <span className="text-sm font-semibold">GET STARTED</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Ready for Expert Engineering Solutions?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Partner with APMS for reliable, innovative, and efficient engineering services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
                <Button 
                  variant="gradient"
                  size="lg"
                  icon={<Mail size={20} />}
                >
                  Get Free Consultation
                </Button>
              </Link>
              
              <a href="tel:+917987074614">
                <Button 
                  variant="secondary"
                  size="lg"
                  icon={<Phone size={20} />}
                  className="border-white text-white hover:bg-white/10"
                >
                  Call: +91-7987074614
                </Button>
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-left mt-12 pt-12 border-t border-white/20">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-green-300" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">10+ Years Experience</h4>
                  <p className="text-sm text-white/70">Trusted by leading OEMs worldwide</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-green-300" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Expert Team</h4>
                  <p className="text-sm text-white/70">50+ experienced engineers</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-green-300" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Quality Assurance</h4>
                  <p className="text-sm text-white/70">ISO 9001:2015 certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
    };
    export default CTA;
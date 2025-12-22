 import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Layers, Settings, RefreshCw, Wrench, Grid3x3, 
  Zap, CheckCircle, ArrowRight, Palette, Grid, Package,
  FileText, Thermometer, Wind, Magnet, BarChart3, CpuIcon,
  Phone, Mail, ChevronRight, Shield, Users, Target
} from 'lucide-react';
import Button from '../../../buttons/Button';

const Industry = () => {
return (
<section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-4">
              <Users size={16} />
              <span className="text-sm font-semibold">INDUSTRY EXPERTISE</span>
            </div>
            <h2 className="text-4xl font-bold text-secondary-800 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Serving diverse industries with specialized engineering solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {[
              { name: 'Traction Systems', icon: '⚡', projects: '120+' },
              { name: 'Rolling Stock', icon: '🚂', projects: '85+' },
              { name: 'Heavy Machinery', icon: '🏗️', projects: '150+' },
              { name: 'Industrial Engineering', icon: '⚙️', projects: '95+' },
              { name: 'Power & Energy', icon: '🔋', projects: '75+' },
              { name: 'Consumer Goods', icon: '📦', projects: '110+' }
            ].map((industry, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 text-center hover:bg-primary-600 hover:text-white group transition-all duration-300"
              >
                <div className="text-3xl mb-4 opacity-80 group-hover:opacity-100">
                  {industry.icon}
                </div>
                <h3 className="font-bold text-secondary-800 group-hover:text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80">
                  {industry.projects} Projects
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button 
                variant="secondary"
                size="lg"
                icon={<ChevronRight size={20} />}
                iconPosition="right"
              >
                View Industry Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
      );
    };
    export default Industry;
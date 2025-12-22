 import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Layers, Settings, RefreshCw, Wrench, Grid3x3, 
  Zap, CheckCircle, ArrowRight, Palette, Grid, Package,
  FileText, Thermometer, Wind, Magnet, BarChart3, CpuIcon,
  Phone, Mail, ChevronRight, Shield, Users, Target
} from 'lucide-react';
import Button from '../../../buttons/Button';

const Methodology = () => {

 const analysisCapabilities = [
    {
      icon: <Thermometer size={24} />,
      title: 'Thermal Analysis',
      description: 'Heat transfer analysis including conduction, convection, and radiation'
    },
    {
      icon: <Wind size={24} />,
      title: 'CFD Analysis',
      description: 'Computational Fluid Dynamics for fluid flow and heat transfer analysis'
    },
    {
      icon: <Magnet size={24} />,
      title: 'Electromagnetic Analysis',
      description: 'Magnetic field analysis for electrical and electromechanical systems'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Structural Analysis',
      description: 'Stress, strain and deformation analysis under various loads'
    }
  ];


return(
<section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-4">
                <CpuIcon size={16} />
                <span className="text-sm font-semibold">COMPUTATIONAL ANALYSIS</span>
              </div>
              <h2 className="text-4xl font-bold text-secondary-800 mb-6">
                Advanced Analysis Capabilities
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our computational analysis relies on finite element theory and advanced 
                techniques to solve complex engineering problems.
              </p>
              
              <div className="space-y-6">
                {analysisCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      {capability.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-secondary-800">
                        {capability.title}
                      </h4>
                      <p className="text-gray-600">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/services/mechanical-analysis">
                  <Button 
                    variant="primary"
                    size="md"
                    icon={<ChevronRight size={18} />}
                    iconPosition="right"
                  >
                    Explore Mechanical Analysis
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Shield size={24} className="mr-3" />
                <h3 className="text-white text-2xl font-bold">Analysis Expertise</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Structural Analysis',
                  'Modal & Frequency Analysis',
                  'Thermal Analysis',
                  'CFD Analysis',
                  'Electromagnetic Analysis',
                  'Multi-body Dynamics',
                  'Fatigue Analysis',
                  'Non-linear Analysis'
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <span>{item}</span>
                    <span className="font-bold">✓</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm mb-4">
                  All analyses performed in both static and dynamic conditions
                </p>
                <Link to="/projects">
                  <Button 
                    variant="white"
                    size="sm"
                    icon={<BarChart3 size={16} />}
                    className="w-full"
                  >
                    View Analysis Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
);
};
export default Methodology;
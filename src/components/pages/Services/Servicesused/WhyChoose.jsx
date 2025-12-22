 import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Layers, Settings, RefreshCw, Wrench, Grid3x3, 
  Zap, CheckCircle, ArrowRight, Palette, Grid, Package,
  FileText, Thermometer, Wind, Magnet, BarChart3, CpuIcon,
  Phone, Mail, ChevronRight, Shield, Users, Target
} from 'lucide-react';
import Button from '../../../buttons/Button';

 const Why = () => {
 const whyChooseUs = [
    {
      icon: <Target size={24} />,
      title: 'Precision Engineering',
      description: 'High-precision design with ±0.01mm tolerance accuracy'
    },
    {
      icon: <Users size={24} />,
      title: 'Expert Team',
      description: '50+ experienced engineers with domain expertise'
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Delivery',
      description: '40% faster project delivery with streamlined processes'
    },
    {
      icon: <Shield size={24} />,
      title: 'Quality Assurance',
      description: '99.9% quality rate with rigorous validation'
    }
  ];


return(
<section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-4">
              <Shield size={16} />
              <span className="text-sm font-semibold">WHY CHOOSE APMS</span>
            </div>
            <h2 className="text-4xl font-bold text-secondary-800 mb-4">
              Engineering Excellence Since 2010
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core philosophy of "FOR YOU, WITH YOU ALWAYS" ensures quality services 
              and specific attention for our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-primary-50 transition-colors duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
);
 };
export default Why;
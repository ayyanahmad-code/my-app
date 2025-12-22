// Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Layers, Settings, RefreshCw, Wrench, Grid3x3, 
  Zap, CheckCircle, ArrowRight, Palette, Grid, Package,
  FileText, Thermometer, Wind, Magnet, BarChart3, CpuIcon,
  Phone, Mail, ChevronRight, Shield, Users, Target
} from 'lucide-react';
import Button from '../../buttons/Button';
import Hero from "./Servicesused/Hero";
import Why from "./Servicesused/WhyChoose";
import Main from "./Servicesused/MainServices";
import Methodology from './Servicesused/MethodologySection';
import Industry from './Servicesused/Industryexpertise';
import CTA from './Servicesused/CtaSection';

const Services = () => {
  
  return (
    <div className="">
      {/* Hero Section */}
      <Hero/>

      {/* Why Choose APMS */}
      <Why/>

      {/* Main Services Grid */}
      <Main/>

      {/* Methodology Section */}
      <Methodology/>

      {/* Industry Expertise */}
      <Industry/>

      {/* CTA Section */}
      <CTA/>
       
      <hr/>
    </div>
  );
};

export default Services;  
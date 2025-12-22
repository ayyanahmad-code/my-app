// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';
import { 
  ArrowRight, CheckCircle, Target, Users, Zap, Shield, 
  BarChart3, Cpu, Layers, Settings, RefreshCw, Wrench, 
  Grid3x3, Award, Clock, Star, TrendingUp, Database,
  FileText, Palette, Grid, Package, Phone, Mail
} from 'lucide-react';
import '../../styles/globals.css';
import ServicesOverview from '../pages/Home/Services Overview';
import Methodologies from '../pages/Home/Apms Methodology';
import WhyChooseApms from './Home/WhyChooseApms';
import IndustriesWeServe from './Home/Industries';
import EngineeringSoftwareTools from './Home/EngineeringSoftwareTools';
import ClientsSection from './Home/ClientsSection';
import CTASection from './Home/CTASection';
import HeroSection from './Home/HeroSection';

const Home = () => {
  const features = [
    {
      icon: <TrendingUp size={28} />,
      title: '10+ Years Experience',
      description: 'Working with leading OEMs across various industries',
      stats: '10+ Years'
    },
    {
      icon: <Database size={28} />,
      title: '500+ Projects',
      description: 'Successfully delivered complex engineering projects',
      stats: '500+'
    },
    {
      icon: <Users size={28} />,
      title: 'Expert Team',
      description: 'Highly experienced Mechanical Engineers & Technocrats',
      stats: '50+'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
     <HeroSection />

      {/* Services Overview Section */}
      <ServicesOverview />
      
      {/* APMS Methodology */}
      <Methodologies />

      {/* Why Choose APMS */}
      <WhyChooseApms />

      {/* Industries We Serve */}
      <IndustriesWeServe />

      {/* Engineering Software Tools */}
      <EngineeringSoftwareTools />

      {/* Clients Section */}
      <ClientsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;
// components/AssemblyModeling.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';
import { 
  Box, Layers, Cpu, Wrench, Settings, Play,
  CheckCircle, ArrowRight, FileText, Package,
  Users, Target, Zap, Shield, Factory,
  Train, Bolt, ChevronRight, Phone, Mail,
  Grid3x3, Eye, Film, GitBranch,
  ClipboardCheck, Upload,
  Server
} from 'lucide-react';
import Hero from './AssemblyModeling/HeroSection';
import Overviwe from './AssemblyModeling/Overview';
import Service from './AssemblyModeling/ServicesSection';
import Process from './AssemblyModeling/ProcessSection';
import Applications from './AssemblyModeling/Applications Section';
import Software from './AssemblyModeling/Software Tools';
import Cta from './AssemblyModeling/Cta';
const AssemblyModeling = () => {
  // Animation variants




  return (
    <div className="">
      {/* Hero Section */}
      <Hero/>
      {/* Overview Section */}
      <Overviwe/>

      {/* Services Section */}
      <Service/>

      {/* Process Section */}
     <Process/>

      {/* Applications Section */}
        <Applications/>     

      {/* Software Tools */}
     <Software />

      {/* CTA Section */}
      <Cta/>
      
      <hr/>
    </div>
  );
};

export default AssemblyModeling;
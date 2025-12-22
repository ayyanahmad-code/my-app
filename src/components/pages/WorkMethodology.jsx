// WorkMethodology.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WorkMethodologyHero from './Work/WorkMethodologyHero';
import MethodologyTimeline from './Work/MethodologyTimeline';
import KeyBenefitsSection from './Work/KeyBenefitsSection';
import MethodologyCTASection from './Work/MethodologyCTASection';
import QuickLinksSection from './Work/QuickLinksSection';
import {
  Search, Flag, MessageSquare, Cpu,
  BarChart3, CheckSquare, FileCheck, ThumbsUp,
  Wrench
} from 'lucide-react';

const WorkMethodology = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAutoStep, setCurrentAutoStep] = useState(0);
  
  // Complete workflow data
  const methodologySteps = [
    {
      id: 'requirement',
      step: '01',
      title: 'Requirement Gathering',
      description: 'Initial client consultation to understand project scope and deliverables',
      icon: <Search size={24} />,
      color: 'from-blue-500 to-cyan-500',
      milestoneMeeting: false,
      details: [
        'Client needs assessment and technical interviews',
        'Project scope definition and boundary setting',
        'Deliverables identification and prioritization',
        'Technical specifications documentation',
        'Resource and timeline estimation'
      ],
      deliverables: 'Requirements Specification Document',
      duration: '1-2 weeks'
    },
    {
      id: 'kickoff',
      step: '02',
      title: 'Project Kick-off',
      description: 'Formal project initiation with stakeholder alignment and project planning',
      icon: <Flag size={24} />,
      color: 'from-green-500 to-emerald-500',
      milestoneMeeting: false,
      details: [
        'Stakeholder alignment meeting',
        'Project charter finalization',
        'Communication protocol establishment',
        'Risk assessment and mitigation planning',
        'Resource allocation and team assignment'
      ],
      deliverables: 'Project Charter, Communication Plan',
      duration: '1 week'
    },
    {
      id: 'milestone1',
      step: 'M1',
      title: 'Milestone Meeting',
      description: 'After Project Kick-off: Scope validation and planning approval',
      icon: <MessageSquare size={24} />,
      color: 'from-gray-600 to-gray-800',
      milestoneMeeting: true,
      details: [
        'Scope validation and confirmation',
        'Timeline review and adjustments',
        'Resource requirement finalization',
        'Risk register review',
        'Stakeholder feedback incorporation'
      ],
      deliverables: 'Meeting Minutes, Action Items',
      duration: '1 day'
    },
    {
      id: 'modeling',
      step: '03',
      title: 'Mathematical Modeling',
      description: 'Development of computational models for engineering analysis and simulation',
      icon: <Cpu size={24} />,
      color: 'from-purple-500 to-pink-500',
      milestoneMeeting: false,
      details: [
        'Mathematical model creation using FEA principles',
        'Boundary conditions and constraints setup',
        'Material properties and load cases definition',
        'Mesh generation and quality assessment',
        'Model validation and verification'
      ],
      deliverables: 'Mathematical Models, Validation Report',
      duration: '2-3 weeks'
    },
    {
      id: 'analysis',
      step: '04',
      title: 'Static and Dynamic Analysis',
      description: 'Comprehensive engineering analysis including structural, thermal, and dynamic simulations',
      icon: <BarChart3 size={24} />,
      color: 'from-orange-500 to-red-500',
      milestoneMeeting: false,
      details: [
        'Finite Element Analysis (FEA) for structural integrity',
        'Computational Fluid Dynamics (CFD) for fluid flow',
        'Thermal analysis and heat transfer simulations',
        'Dynamic and vibration analysis',
        'Fatigue and durability assessment'
      ],
      deliverables: 'Analysis Reports, Simulation Results',
      duration: '3-4 weeks'
    },
    {
      id: 'milestone2',
      step: 'M2',
      title: 'Milestone Meeting',
      description: 'After Static & Dynamic Analysis: Results validation and design direction approval',
      icon: <MessageSquare size={24} />,
      color: 'from-gray-600 to-gray-800',
      milestoneMeeting: true,
      details: [
        'Analysis results presentation',
        'Design optimization opportunities',
        'Performance validation against requirements',
        'Risk assessment update',
        'Next phase planning'
      ],
      deliverables: 'Analysis Review Report, Decisions Log',
      duration: '1-2 days'
    },
    {
      id: 'design-review',
      step: '05',
      title: 'Detail Design Review',
      description: 'Iterative design review process with client feedback and technical validation',
      icon: <CheckSquare size={24} />,
      color: 'from-indigo-500 to-blue-500',
      milestoneMeeting: false,
      details: [
        'Detailed design validation meetings',
        'Client feedback incorporation and iteration',
        'Interference detection and clearance checks',
        'Manufacturability assessment',
        'Cost optimization analysis'
      ],
      deliverables: 'Design Review Report, Updated Models',
      duration: '2-3 weeks'
    },
    {
      id: 'milestone3',
      step: 'M3',
      title: 'Milestone Meeting',
      description: 'After Detail Design Review: Design approval before finalization',
      icon: <MessageSquare size={24} />,
      color: 'from-gray-600 to-gray-800',
      milestoneMeeting: true,
      details: [
        'Design approval and sign-off',
        'Manufacturing readiness assessment',
        'Quality assurance plan review',
        'Final cost estimation',
        'Production schedule finalization'
      ],
      deliverables: 'Design Approval Document, Production Plan',
      duration: '1-2 days'
    },
    {
      id: 'final-drawings',
      step: '06',
      title: 'Final Drawings and Reports Approval',
      description: 'Preparation and approval of production-ready documentation and technical reports',
      icon: <FileCheck size={24} />,
      color: 'from-amber-500 to-yellow-500',
      milestoneMeeting: false,
      details: [
        'Production drawing generation (2D/3D)',
        'Bill of Materials (BOM) compilation',
        'Technical documentation preparation',
        'Analysis reports finalization',
        'Quality control documentation'
      ],
      deliverables: 'Production Drawings, BOM, Final Reports',
      duration: '1-2 weeks'
    },
    {
      id: 'signoff',
      step: '07',
      title: 'Design Final Signoff',
      description: 'Final client approval and official project acceptance',
      icon: <ThumbsUp size={24} />,
      color: 'from-teal-500 to-green-500',
      milestoneMeeting: false,
      details: [
        'Final design approval meeting',
        'Documentation completion verification',
        'Quality assurance final check',
        'Client acceptance formalization',
        'Project handover preparation'
      ],
      deliverables: 'Final Sign-off Document, Acceptance Certificate',
      duration: '3-5 days'
    },
    {
      id: 'milestone4',
      step: 'M4',
      title: 'Milestone Meeting',
      description: 'After Design Final Signoff: Project closure and lessons learned',
      icon: <MessageSquare size={24} />,
      color: 'from-gray-600 to-gray-800',
      milestoneMeeting: true,
      details: [
        'Project completion review',
        'Performance metrics evaluation',
        'Lessons learned documentation',
        'Knowledge transfer session',
        'Post-project support planning'
      ],
      deliverables: 'Project Closure Report, Lessons Learned',
      duration: '1 day'
    },
    {
      id: 'manufacturing',
      step: '08',
      title: 'Manufacturing Support',
      description: 'Production support including tooling design, process validation, and quality control',
      icon: <Wrench size={24} />,
      color: 'from-red-500 to-pink-500',
      milestoneMeeting: false,
      details: [
        'Jigs and fixtures design',
        'Tooling validation and optimization',
        'Production process setup support',
        'Quality control procedure implementation',
        'First article inspection support'
      ],
      deliverables: 'Tooling Designs, Process Documentation',
      duration: 'Ongoing as needed'
    }
  ];

  // Auto-play through steps
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentAutoStep(prev => {
          const nextStep = (prev + 1) % methodologySteps.length;
          setActiveStep(methodologySteps[nextStep].id);
          return nextStep;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <WorkMethodologyHero isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* Methodology Timeline */}
      <MethodologyTimeline 
        methodologySteps={methodologySteps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        currentAutoStep={currentAutoStep}
      />

      {/* Key Benefits */}
      <KeyBenefitsSection />

      {/* CTA Section */}
      <MethodologyCTASection />

      {/* Quick Links */}
      <QuickLinksSection />
      
      <hr/>
    </div>
  );
};

export default WorkMethodology;
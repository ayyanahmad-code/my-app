// Projects.jsx
import React, { useState } from 'react';
import ProjectsHero from './Project/ProjectsHero';
import IndustryStatsSection from './Project/IndustryStatsSection';
import FilterSection from './Project/FilterSection';
import ProjectsGrid from './Project/ProjectsGrid';
import TrackRecordSection from './Project/TrackRecordSection';
import ProjectsCTASection from './Project/ProjectsCTASection';
import MoreProjectsSection from './Project/MoreProjectsSection';
import Railway from "../../Images/Railway-1.avif";
import Image  from "../../Images/Project-7.avif";
import Transformer from "../../Images/Transformer.avif";
import Converter from "../../Images/converter.avif";
import Machinery  from "../../Images/Machinery.avif";
import Design from "../../Images/Design.avif";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Car Body Shell Design',
      category: 'rolling-stock',
      description: 'Complete structural design and FEA analysis of railway car body shell with weight optimization.',
      image: Railway,
      features: ['FEA Analysis', 'Weight Optimization', 'Safety Compliance', 'Modal Analysis'],
      client: 'Leading Railway OEM',
      duration: '4 Months',
      technologies: ['SolidWorks', 'ANSYS', 'HyperWorks']
    },
    {
      id: 2,
      title: 'Traction Transformer Tank',
      category: 'power',
      description: 'Design and thermal analysis of transformer tank for railway traction systems.',
      image: Transformer ,
      features: ['Thermal Analysis', 'EMC Compliance', 'Manufacturing Design', 'CFD Analysis'],
      client: 'Power Systems Manufacturer',
      duration: '3 Months',
      technologies: ['CATIA', 'ANSYS Fluent', 'AutoCAD']
    },
    {
      id: 3,
      title: '2x500 KVA Hotel Load Converter',
      category: 'power',
      description: 'High-capacity power converter design with thermal management system.',
      image: Converter,
      features: ['Power Electronics', 'Thermal Management', 'System Integration', 'EMI/EMC'],
      client: 'Energy Solutions Provider',
      duration: '5 Months',
      technologies: ['SolidWorks', 'MATLAB', 'Simulink']
    },
    {
      id: 4,
      title: 'Driver Desk Console',
      category: 'rolling-stock',
      description: 'Ergonomic driver console design with human factors engineering.',
      image: Image,
      features: ['Ergonomic Design', 'Human Factors', 'Interface Design', 'Vibration Analysis'],
      client: 'Locomotive Manufacturer',
      duration: '2 Months',
      technologies: ['Siemens NX', 'HumanCAD', 'AutoCAD']
    },
    {
      id: 5,
      title: 'Heavy Machinery Components',
      category: 'heavy',
      description: 'Design and stress analysis of heavy equipment structural components.',
      image: Machinery ,
      features: ['Stress Analysis', 'Material Selection', 'Fabrication Design', 'Fatigue Analysis'],
      client: 'Heavy Equipment Manufacturer',
      duration: '6 Months',
      technologies: ['SolidWorks', 'ANSYS', 'PDMS']
    },
    {
      id: 6,
      title: 'Consumer Product Design',
      category: 'consumer',
      description: 'Aesthetic and functional design for consumer electronics product.',
      image: Design,
      features: ['Surface Modeling', 'User Experience', 'Cost Optimization', 'DFM'],
      client: 'Consumer Electronics Company',
      duration: '3 Months',
      technologies: ['SolidWorks', 'Keyshot', 'AutoCAD']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="">
      {/* Hero Section */}
      <ProjectsHero />

      {/* Industry Stats */}
      <IndustryStatsSection />

      {/* Filter Section */}
      <FilterSection 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        projects={projects}
      />

      {/* Projects Grid */}
      <ProjectsGrid 
        filteredProjects={filteredProjects}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* Track Record Section */}
      <TrackRecordSection />

      {/* CTA Section */}
      <ProjectsCTASection />

      {/* More Projects CTA */}
      <MoreProjectsSection />
      
      <hr/>
    </div>
  );
};

export default Projects;
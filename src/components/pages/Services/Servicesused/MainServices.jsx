 import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Layers, Settings, RefreshCw, Wrench, Grid3x3, 
  Zap, CheckCircle, ArrowRight, Palette, Grid, Package,
  FileText, Thermometer, Wind, Magnet, BarChart3, CpuIcon,
  Phone, Mail, ChevronRight, Shield, Users, Target
} from 'lucide-react';
import Button from '../../../buttons/Button';

const Main = () => {
 const services = [
    {
      id: 'mechanical-analysis',
      icon: <Cpu size={32} />,
      title: 'Mechanical Analysis Services',
      shortDesc: 'Advanced numerical simulations including FEA, CFD, and dynamic analysis',
      fullDesc: `Optimize your mechanical analysis capabilities with conventional and advanced numerical simulations, including finite element/volume/difference, discrete element, and boundary element methods. We Provide engineering solutions for the complex problems through mechanical analysis. Mathematical model helps to achieve requested outcome of design optimization and helps in assessing the performance, reliability and safety of product. Our expertise is in the domain spans structural, thermal, torsional, CFD, electromagnetic and multi-body dynamic analysis.`,
      features: [
        'Structural Analysis (Static & Dynamic)',
        'Thermal Analysis (Steady-state & Transient)',
        'CFD Analysis for fluid flow',
        'Electromagnetic Analysis',
        'Multi-body Dynamic Analysis',
        'Modal & Frequency Analysis'
      ],
      color: 'from-blue-600 to-cyan-600',
      link: '/services/mechanical-analysis'
    },
    {
      id: 'assembly-modeling',
      icon: <Layers size={32} />,
      title: 'Assembly Modeling & Animation',
      shortDesc: 'Complete assembly development from skeleton layout to animation',
      fullDesc: `Product designers produce General Assembly layout (Skeleton Layout) of the product to be manufactured. We have expertise to develop the assembly from the given layout, using top-down configuration, interference detection check and ensuring physical interaction of components using physical dynamics. We create multiple configuration of the assembly, apply corresponding materials to the components, and generate assembly drawing with Bill of Materials and recommendations based on customer input. We also create animation of the working model along with its exploded view for presentation and review of product functionality.`,
      features: [
        'General Assembly Layout Development',
        'Interference Detection & Resolution',
        'Multiple Configuration Creation',
        'BOM Generation',
        'Working Model Animation',
        'Exploded View Creation'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'product-design',
      icon: <Settings size={32} />,
      title: 'Mechanical Design Services',
      shortDesc: 'End-to-end design from concept to production drawing',
      fullDesc: `Enhance your product design processes with our comprehensive solutions from concept initiation to release of production drawing within mechanical designs. Our iterative design process validates design specifications at each stage of the life cycle. Our design cycle comprises concept design and selection, preliminary design including material selection and sub-system design, and detailed design of modules, assemblies, geometric dimensioning, and design optimization. Innovation and creativity are the two vital needs of the industry and we help companies by improving the aesthetic appeal of their products.`,
      features: [
        'Concept Design & Selection',
        'Preliminary Design',
        'Detailed Design',
        'Material Selection',
        'Geometric Dimensioning',
        'Design Optimization'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'reverse-engineering',
      icon: <RefreshCw size={32} />,
      title: 'Reverse Engineering',
      shortDesc: 'Convert physical models to digital with precision',
      fullDesc: `Reverse Engineering techniques are effectively used in scenarios where physical models may require digital interpretation for enhancing or modifying the product to suit a different segment/application. We convert the given physical models or image files of the product to digital models using tools like SolidWorks with accuracy and integrity. This process helps in product enhancement, quality inspection, and adaptation for different market segments.`,
      features: [
        '3D Scanning Services',
        'Digital Model Creation',
        'Accuracy & Integrity Check',
        'Quality Inspection',
        'Product Enhancement',
        'Segment Adaptation'
      ],
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'jigs-fixtures',
      icon: <Wrench size={32} />,
      title: 'Jigs, Fixtures & Tooling',
      shortDesc: 'Design, manufacturing, and validation support',
      fullDesc: `Jigs & Fixtures helps in increasing productivity, interchangeability and Enhance quality, as well as reducing cost. We specialized in Jigs, Fixtures & Tooling Design & Manufacturing. Which includes Assembly & Welding jigs fixtures, Templates & Manipulators. We also support in installation & commissioning as well as validation to our clients. We pre validate our Designs with 3D Models to reduce production line validation of the jigs & fixtures.`,
      features: [
        'Assembly Jigs Design',
        'Welding Fixtures',
        'Templates & Manipulators',
        '3D Model Validation',
        'Installation Support',
        'Commissioning & Validation'
      ],
      color: 'from-yellow-600 to-amber-600'
    },
    {
      id: 'cad-customization',
      icon: <Grid3x3 size={32} />,
      title: 'CAD Customization & Automation',
      shortDesc: 'Automate repetitive CAD tasks for efficiency',
      fullDesc: `Developing Assembly Models and General Assembly (GA) drawing of various configurations as per customer requirement is a time consuming and repetitive task. We address this problem by customizing the existing CAD software (SolidWorks) for the individual product lines and providing a user interface for entering the variables. With our customization solution the models, drawings and BOM gets generated automatically at a click of the button, significantly reducing manual effort and errors.`,
      features: [
        'SolidWorks API Development',
        'Automated Drawing Generation',
        'BOM Automation',
        'Custom UI Development',
        'Process Automation',
        'Error Reduction'
      ],
      color: 'from-indigo-600 to-blue-600'
    }
  ];
   const additionalServices = [
      {
        icon: <Palette size={24} />,
        title: 'Surface Modeling / Aesthetic Design',
        description: 'Improving styling and appearance of products'
      },
      {
        icon: <Grid size={24} />,
        title: '2D to 3D Conversion',
        description: 'Converting engineering drawings to 3D parametric models'
      },
      {
        icon: <Package size={24} />,
        title: 'New Product Development',
        description: 'Complete product development lifecycle support'
      },
      {
        icon: <FileText size={24} />,
        title: 'Product Localization',
        description: 'Adapting products for different markets'
      }
    ];

return (
<section id="services-grid" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-4">
              <Cpu size={16} />
              <span className="text-sm font-semibold">CORE SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions from concept to completion with advanced technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${service.color} h-2`}></div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle size={18} className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {service.link ? (
                    <Link to={service.link}>
                      <Button 
                        variant="ghost"
                        size="md"
                        icon={<ArrowRight size={18} />}
                        iconPosition="right"
                        className="w-full justify-start text-primary-600 hover:text-primary-700"
                      >
                        Learn More
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      variant="ghost"
                      size="md"
                      icon={<ArrowRight size={18} />}
                      iconPosition="right"
                      className="w-full justify-start text-primary-600 hover:text-primary-700"
                    >
                      Learn More
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-secondary-800 mb-4">
                Additional Services
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Specialized services to complement your engineering needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-gray-100 hover:border-primary-200"
                >
                  <div className="text-primary-600 group-hover:text-primary-700 mb-4 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-secondary-800 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="text-primary-600 hover:text-primary-700 text-sm"
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
);
};
export default Main;
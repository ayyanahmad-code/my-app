// components/buttons/ButtonShowcase.jsx
import React from 'react';
import { ArrowRight, Download, Mail, Phone, Check, X, Star } from 'lucide-react';
import Button from './Button';
import IconButton from './IconButton';
import ButtonGroup from './ButtonGroup';

const ButtonShowcase = () => {
  return (
    <div className="space-y-12 p-8">
      {/* Primary Buttons */}
      <div>
        <h3 className="text-xl font-bold text-secondary-800 mb-4">Primary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="primary" icon={<ArrowRight />} iconPosition="right">
            With Icon
          </Button>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div>
        <h3 className="text-xl font-bold text-secondary-800 mb-4">Secondary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="accent">Accent Button</Button>
          <Button variant="gradient">Gradient Button</Button>
        </div>
      </div>

      {/* Status Buttons */}
      <div>
        <h3 className="text-xl font-bold text-secondary-800 mb-4">Status Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="success" icon={<Check />}>
            Success
          </Button>
          <Button variant="warning" icon={<Star />}>
            Warning
          </Button>
          <Button variant="error" icon={<X />}>
            Error
          </Button>
          <Button variant="dark">Dark</Button>
          <Button variant="white">White</Button>
        </div>
      </div>

      {/* Icon Buttons */}
      <div>
        <h3 className="text-xl font-bold text-secondary-800 mb-4">Icon Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <IconButton icon={<Phone />} variant="primary" />
          <IconButton icon={<Mail />} variant="secondary" />
          <IconButton icon={<Download />} variant="accent" />
          <IconButton icon={<Star />} variant="ghost" />
          <IconButton icon={<Check />} variant="success" size="lg" />
          <IconButton icon={<X />} variant="error" size="sm" />
        </div>
      </div>

      {/* Button Group */}
      <div>
        <h3 className="text-xl font-bold text-secondary-800 mb-4">Button Groups</h3>
        <ButtonGroup>
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </div>

      {/* Full Width Buttons */}
      <div>
        <h3 className="text-xl font-bold text-secondary-800 mb-4">Full Width Buttons</h3>
        <div className="space-y-4 max-w-md">
          <Button variant="primary" fullWidth>
            Full Width Primary
          </Button>
          <Button variant="secondary" fullWidth>
            Full Width Secondary
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;
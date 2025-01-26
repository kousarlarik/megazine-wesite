import React from 'react';
import rightImage from '../../asest/Mask group.png'; 
const SafetyAndStyleSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black text-white px-6 md:px-16 py-10 md:py-16">
      {/* Left Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Redefine <span className="text-blue-500">Safety</span> And <span className="text-blue-500">Style</span>
          <br />
          With Spectralite.
        </h2>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Full-Width Visibility - Drivers See Your Entire Bike.
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Ground Laser Safety Zone - Stay Safe With A Visible Perimeter.
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            360° Lighting - Front, Rear, And Laser In One System.
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Sleek Design - Seamlessly Integrated, No Bulky Attachments.
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          src={rightImage}
          alt="Spectralite Lighting"
          className="w-full max-w-sm md:max-w-md rounded-lg"
        />
      </div>
    </section>
  );
};

export default SafetyAndStyleSection;

import React from "react"
import bikeImage from "../../asest/BIke-Evolution-271.png" // Ensure this path is correct

const BikeFeatureSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bikeImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Overlay for Text */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Feature List */}
      <div className="absolute right-10 bottom-10 bg-black bg-opacity-50 text-white p-6 rounded-lg space-y-4 shadow-lg z-10">
        <FeatureItem icon="⏳" text="8+ Hours Runtime" />
        <FeatureItem icon="💧" text="Water Proof" />
        <FeatureItem icon="🛡️" text="Enhanced Safety" />
        <FeatureItem icon="👀" text="Clear Visibility" />
      </div>
    </section>
  )
}

// Reusable Component for Feature Items
const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center space-x-3">
    <span className="text-blue-500 text-xl" aria-hidden="true">
      {icon}
    </span>
    <p className="text-lg">{text}</p>
  </div>
)

export default BikeFeatureSection


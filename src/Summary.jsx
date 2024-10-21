import React from 'react';

const Summary = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6">Hi Archit</h1>
      
      {/* Subheading */}
      <h2 className="text-2xl font-semibold mb-4">Your Medical Report Summary is:</h2>
      
      {/* Card */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl mx-auto">
        
        {/* Card Header */}
        <div className="px-6 py-4 border-b">
          <h3 className="text-xl font-semibold">Medical Summary</h3>
        </div>
        
        {/* Card Content */}
        <div className="px-6 py-4">
          <p className="text-lg">
            This is where the output of your medical report summary would go. It could include key findings, recommendations, or any other relevant information from your medical checkup.
          </p>
        </div>
      </div>
    </div>
  );
};

// Usage example within your main application file or another component
const App = () => {
  return (
    <div id="root">
      <MedicalSummary />
    </div>
  );
};

export default Summary;

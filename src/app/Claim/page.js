import React from "react";
import { CheckCircle, Clock, Circle } from "lucide-react";

const ClaimDetails = () => {
  const claim = {
    id: "#MP-GWL-2025-0458",
    applicant: "Sunita Bai",
    status: "In Progress",
    steps: [
      {
        title: "Submission of Claims",
        status: "done",
        date: "Completed on 15 Aug 2025",
      },
      {
        title: "Gram Sabha Verification",
        status: "done",
        date: "Completed on 01 Sep 2025",
      },
      {
        title: "On-site Verification by Committee",
        status: "current",
        date: "Started on 08 Sep 2025",
      },
      {
        title: "Sub-division Level Review",
        status: "pending",
        date: "Pending",
      },
      {
        title: "District Level Approval",
        status: "pending",
        date: "Pending",
      },
      {
        title: "Final Report",
        status: "pending",
        date: "Pending",
      },
    ],
  };

  // Count how many steps are done
  const completedSteps = claim.steps.filter((s) => s.status === "done").length;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-green-800">Claim Details</h2>
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
          {claim.status}
        </span>
      </div>

      
      <div className="mb-6">
        <p>
          <span className="font-semibold">Claim ID:</span>{" "}
          <span className="text-gray-700">{claim.id}</span>
        </p>
        <p>
          <span className="font-semibold">Applicant Name:</span>{" "}
          <span className="text-gray-700">{claim.applicant}</span>
        </p>
      </div>

      
      <div className="relative pl-8">
       
        <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-300">
          
          <div
            className="bg-green-500 w-0.5"
            style={{
              height: `${(completedSteps - 1) * 64 + 32}px`,
            }}
          ></div>
        </div>

        
        {claim.steps.map((step, index) => (
          <div key={index} className="mb-8 relative flex items-start">
            
            <div className="absolute -left-1.5 mt-2">
              {step.status === "done" && (
                <CheckCircle className="text-green-500 w-5 h-5" />
              )}
              {step.status === "current" && (
                <Clock className="text-orange-500 w-5 h-5" />
              )}
              {step.status === "pending" && (
                <Circle className="text-gray-400 w-5 h-5" />
              )}
            </div>

            
            <div className="ml-6">
              <p
                className={`font-medium ${
                  step.status === "done"
                    ? "text-green-600"
                    : step.status === "current"
                    ? "text-orange-600"
                    : "text-gray-500"
                }`}
              >
                {step.title}
              </p>
              <p className="text-xs text-gray-500">{step.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mt-6 pt-4">
        <p className="text-sm text-green-700">
          Need help with your claim?{" "}
          <span className="font-medium">
            Contact the Forest Rights Committee.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ClaimDetails;

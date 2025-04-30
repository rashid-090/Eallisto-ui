import React from 'react';

const Career = () => {
  // Sample job data - replace with your actual data from API
  const jobOpenings = [
    {
      id: 1,
      title: "Financial analyst",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      description: "We are looking for experience candidates with Bcom and CMA",
      linkto:`https://jobs.eallisto.com`
    },
    {
      id: 2,
      title: "Solar Technical Engineer",
      type: "Full-time",
      location: "Hybrid (New York)",
      department: "Design",
      description: "We are looking for candidates who have experience in solar field with M tech or BTECH in electrical and electrical engineering",
      linkto:`https://jobs.eallisto.com`
    },
  ];

  const benefits = [
    "Competitive salary and equity",
    "Flexible work hours",
    "Remote work options",
    "Health, dental, and vision insurance",
    "Professional development budget",
    "Generous vacation policy",
    "Team retreats and events"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-main to-main-hover text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-4xl font-medium mb-2">Build Your Career With Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Join our team of innovators and help shape the future of our industry.
          </p>
        </div>
      </section>

      {/* Job Openings */}
      <section className="pb-16 pt-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 text-center">Current Openings</h2>
        
        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{job.type}</span>
                      {/* <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">{job.location}</span>
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">{job.department}</span> */}
                    </div>
                  </div>
                  <a href={job.linkto} target='_blank' className="mt-4 md:mt-0 bg-main hover:bg-main-hover text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                    Apply Now
                  </a>
                </div>
                <p className="mt-4 text-gray-600 text-sm">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     

      {/* Application Form */}
      {/* <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Apply Now</h2>
        <form className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:border-main outline-none transition duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:border-main outline-none transition duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:border-main outline-none transition duration-300"
                placeholder="+1 (___) ___-____"
              />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position</label>
              <select
                id="position"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:border-main outline-none transition duration-300"
              >
                <option value="">Select a position</option>
                {jobOpenings.map((job) => (
                  <option key={job.id} value={job.id}>{job.title}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition duration-300">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
                  </div>
                  <input id="resume" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="cover-letter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
              <textarea
                id="cover-letter"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:border-main outline-none transition duration-300"
                placeholder="Tell us why you'd be a great fit..."
              ></textarea>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="bg-main hover:bg-main-hover text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section> */}

     
    </div>
  );
};

export default Career;
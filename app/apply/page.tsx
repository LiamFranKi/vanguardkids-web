'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaPaperPlane, FaCheckCircle, FaFilePdf, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'

export default function Apply() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    location: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    experience: '',
    education: '',
    coverLetter: '',
    resume: null as File | null,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Convert resume file to base64 if present
      let resumeBase64 = ''
      let resumeFileName = ''
      if (formData.resume) {
        resumeBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => {
            const result = reader.result as string
            resolve(result.split(',')[1]) // Remove data:application/pdf;base64, prefix
          }
          reader.onerror = reject
          reader.readAsDataURL(formData.resume!)
        })
        resumeFileName = formData.resume.name
      }

      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          resume: resumeBase64,
          resumeFileName: resumeFileName,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitted(true)
        toast.success('Application submitted successfully! We will review your application and get back to you soon.')
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            position: '',
            location: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            experience: '',
            education: '',
            coverLetter: '',
            resume: null,
          })
        }, 5000)
      } else {
        toast.error('Failed to submit application. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      toast.error('An error occurred. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type === 'application/pdf') {
        setFormData({
          ...formData,
          resume: file,
        })
      } else {
        alert('Please upload a PDF file only.')
        e.target.value = ''
      }
    }
  }

  const positions = [
    'Lead Preschool Teacher',
    'Assistant Teacher',
    'Substitute Teacher',
    'Program Coordinator',
  ]

  const locations = [
    'Vanguard Kids Preschool',
    'Vanguard Kids Academy',
    'Both Locations',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <br />
            <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6">
              <br />Apply for a Position
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Join our team of passionate educators and make a difference in children's lives. 
              We're excited to learn more about you!
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 text-center py-16">
              <FaCheckCircle className="text-6xl text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Application Submitted!</h2>
              <p className="text-lg text-gray-700 mb-2">
                Thank you for your interest in joining Vanguard Kids.
              </p>
              <p className="text-lg text-gray-700">
                We've received your application and will review it carefully. We'll be in touch soon!
              </p>
            </Card>
          ) : (
            <Card className="bg-gradient-to-br from-pink-50 to-rose-50">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <FaUser className="mr-2" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <FaEnvelope className="mr-2" />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="+1 (813) 555-0123"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    Address
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="Dover"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="FL"
                        />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="33527"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Position Information */}
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <FaBriefcase className="mr-2" />
                    Position Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                        Position Applied For *
                      </label>
                      <select
                        id="position"
                        name="position"
                        required
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select a position</option>
                        {positions.map((pos) => (
                          <option key={pos} value={pos}>
                            {pos}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Location *
                      </label>
                      <select
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select a location</option>
                        {locations.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Education & Experience */}
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Education & Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="education" className="block text-sm font-semibold text-gray-700 mb-2">
                        Education *
                      </label>
                      <textarea
                        id="education"
                        name="education"
                        required
                        rows={3}
                        value={formData.education}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Please list your educational background, degrees, and certifications..."
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                        Relevant Experience *
                      </label>
                      <textarea
                        id="experience"
                        name="experience"
                        required
                        rows={4}
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Please describe your relevant work experience..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={6}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us why you're interested in joining Vanguard Kids and what makes you a great fit for this position..."
                  ></textarea>
                </div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                    Resume / CV (PDF only) *
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex-1 cursor-pointer">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        required
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <div className="w-full px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors flex items-center justify-center">
                        <FaFilePdf className="text-2xl text-red-500 mr-3" />
                        <span className="text-gray-700">
                          {formData.resume ? formData.resume.name : 'Click to upload PDF (Max 5MB)'}
                        </span>
                      </div>
                    </label>
                  </div>
                  {formData.resume && (
                    <p className="mt-2 text-sm text-green-600 flex items-center">
                      <FaCheckCircle className="mr-2" />
                      File selected: {formData.resume.name}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <FaPaperPlane className="mr-2" />
                    Submit Application
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </Section>

      {/* Additional Information */}
      <Section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-50 to-violet-50">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">What Happens Next?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                After you submit your application, our hiring team will review your qualifications and experience. 
                If your profile matches our requirements, we'll contact you to schedule an interview.
              </p>
              <p>
                We typically respond to applications within 1-2 weeks. If you have any questions about the application 
                process, please don't hesitate to contact us.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/contact" variant="primary" size="md">
                Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}


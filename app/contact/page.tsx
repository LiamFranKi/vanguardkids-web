'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    location: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitted(true)
        toast.success('Message sent successfully! We will get back to you soon.')
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            location: '',
          })
        }, 5000)
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('An error occurred. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const locations = [
    {
      name: 'Vanguard Kids Preschool',
      address: '12660 Sydney Road Dover, FL 33527',
      phone: '+1 (813) 530-0032',
      email: 'vanguardkids12660@gmail.com',
      hours: 'Monday - Friday: 7:00 AM - 6:00 PM',
      license: 'C HC 433675',
    },
    {
      name: 'Vanguard Kids Academy',
      address: '465 Carolina Avenue. Fort Myers, FL 33905',
      phone: '+1 (239) 694-5912',
      email: 'vanguardkidsacademy@gmail.com',
      hours: 'Monday - Friday: 7:00 AM - 6:00 PM',
      license: 'C20LR0301',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <br />
            <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6">
              <br />Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We'd love to hear from you! Get in touch with us to learn more about our programs, 
              schedule a visit, or ask any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Send Us a Message</h2>
            {submitted ? (
              <Card className="bg-gradient-to-br from-pastel-green/20 to-white text-center py-12">
                <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
              </Card>
            ) : (
              <Card className="bg-gradient-to-br from-pastel-blue/10 to-white">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-blue focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-blue focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-blue focus:border-transparent outline-none transition-all"
                      placeholder="+1 (813) 530-0032"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                      Location of Interest
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-blue focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select a location</option>
                      <option value="preschool">Vanguard Kids Preschool</option>
                      <option value="academy">Vanguard Kids Academy</option>
                      <option value="both">Both Locations</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-blue focus:border-transparent outline-none transition-all"
                      placeholder="What is your message about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-blue focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Get in Touch</h2>
            <div className="space-y-6 mb-8">
              {locations.map((location, index) => {
                const pastelColors = [
                  'from-pink-50 to-rose-50',
                  'from-purple-50 to-violet-50',
                ]
                return (
                <Card key={index} className={`bg-gradient-to-br ${pastelColors[index]}`}>
                  <h3 className="text-xl font-bold text-blue-800 mb-4">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <FaMapMarkerAlt className="text-pastel-blue mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{location.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaPhone className="text-pastel-blue flex-shrink-0" />
                      <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="text-gray-700 hover:text-pastel-blue transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaEnvelope className="text-pastel-blue flex-shrink-0" />
                      <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-pastel-blue transition-colors">
                        {location.email}
                      </a>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FaClock className="text-pastel-blue mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{location.hours}</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FaEnvelope className="text-pastel-blue mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">License Number</p>
                        <p className="text-gray-700">{location.license}</p>
                      </div>
                    </div>
                  </div>
                </Card>
                )
              })}
            </div>

            {/* General Contact */}
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
              <h3 className="text-xl font-bold text-blue-800 mb-4">General Inquiries</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-pastel-blue flex-shrink-0" />
                  <a href="mailto:vanguardkids12660@gmail.com" className="text-gray-700 hover:text-pastel-blue transition-colors">
                    vanguardkids12660@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-pastel-blue flex-shrink-0" />
                  <a href="tel:+18135300032" className="text-gray-700 hover:text-pastel-blue transition-colors">
                    +1 (813) 530-0032
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="bg-gradient-to-br from-pastel-yellow/20 to-pastel-peach/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Visit Our Locations</h2>
          <p className="text-gray-600">
            We welcome families to schedule a tour of our facilities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vanguard Kids Preschool */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-lg border-2 border-green-300 relative">
              <iframe
                src="https://www.google.com/maps?q=12660+Sydney+Road+Dover+FL+33527&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="px-2 pb-2">
              <h3 className="text-xl font-bold text-blue-800 mb-2">{locations[0].name}</h3>
              <p className="text-gray-600 mb-4">{locations[0].address}</p>
              <a
                href="https://maps.app.goo.gl/5oErWUkD2aaNaTVp7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-lg font-semibold transform hover:scale-105"
              >
                <FaMapMarkerAlt className="mr-2" />
                Open in Google Maps
              </a>
            </div>
          </Card>

          {/* Vanguard Kids Academy */}
          <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-lg border-2 border-teal-300 relative">
              <iframe
                src="https://www.google.com/maps?q=465+Carolina+Avenue+Fort+Myers+FL+33905&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="px-2 pb-2">
              <h3 className="text-xl font-bold text-blue-800 mb-2">{locations[1].name}</h3>
              <p className="text-gray-600 mb-4">{locations[1].address}</p>
              <a
                href="https://maps.app.goo.gl/dZtcsXGirs138enm8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-lg font-semibold transform hover:scale-105"
              >
                <FaMapMarkerAlt className="mr-2" />
                Open in Google Maps
              </a>
            </div>
          </Card>
        </div>
      </Section>

      {/* Office Hours */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 text-center">
            <FaClock className="text-4xl text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Office Hours</h2>
            <div className="space-y-2 text-gray-700">
              <p className="text-lg"><strong>Monday - Friday:</strong> 7:00 AM - 6:00 PM</p>
              <p className="text-lg"><strong>Saturday:</strong> By appointment only</p>
              <p className="text-lg"><strong>Sunday:</strong> Closed</p>
            </div>
            <p className="mt-6 text-gray-600">
              We recommend scheduling a visit in advance to ensure we can give you a comprehensive tour 
              and answer all your questions.
            </p>
          </Card>
        </div>
      </Section>
    </>
  )
}


'use client'

import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaFilePdf, FaDownload, FaFileAlt, FaClipboardList, FaUserCheck, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa'

export default function Forms() {
  const forms = [
    {
      category: 'Enrollment Forms',
      icon: FaFileAlt,
      items: [
        {
          title: 'Enrollment Application',
          description: 'Complete application form for new student enrollment',
          type: 'PDF',
          size: '245 KB',
        },
        {
          title: 'Emergency Contact Form',
          description: 'Provide emergency contact information for your child',
          type: 'PDF',
          size: '180 KB',
        },
        {
          title: 'Health Information Form',
          description: 'Medical history and health information form',
          type: 'PDF',
          size: '320 KB',
        },
        {
          title: 'Parent Handbook Acknowledgment',
          description: 'Acknowledgment form for parent handbook policies',
          type: 'PDF',
          size: '95 KB',
        },
      ],
    },
    {
      category: 'Medical & Health Forms',
      icon: FaShieldAlt,
      items: [
        {
          title: 'Immunization Record',
          description: 'Record of required immunizations and vaccinations',
          type: 'PDF',
          size: '210 KB',
        },
        {
          title: 'Medication Authorization',
          description: 'Form to authorize administration of medication',
          type: 'PDF',
          size: '150 KB',
        },
        {
          title: 'Allergy Information Form',
          description: 'Document allergies and dietary restrictions',
          type: 'PDF',
          size: '175 KB',
        },
        {
          title: 'Physical Examination Form',
          description: 'Required physical examination documentation',
          type: 'PDF',
          size: '195 KB',
        },
      ],
    },
    {
      category: 'Program & Activity Forms',
      icon: FaCalendarCheck,
      items: [
        {
          title: 'Field Trip Permission Slip',
          description: 'Authorization for participation in field trips',
          type: 'PDF',
          size: '125 KB',
        },
        {
          title: 'Photo/Video Release Form',
          description: 'Consent for use of photos and videos',
          type: 'PDF',
          size: '110 KB',
        },
        {
          title: 'After-School Program Registration',
          description: 'Registration form for extended care programs',
          type: 'PDF',
          size: '165 KB',
        },
        {
          title: 'Summer Camp Enrollment',
          description: 'Enrollment form for summer camp programs',
          type: 'PDF',
          size: '200 KB',
        },
      ],
    },
    {
      category: 'Employment Forms',
      icon: FaUserCheck,
      items: [
        {
          title: 'Employment Application',
          description: 'Application form for teaching positions',
          type: 'PDF',
          size: '280 KB',
        },
        {
          title: 'Background Check Authorization',
          description: 'Required background check consent form',
          type: 'PDF',
          size: '140 KB',
        },
        {
          title: 'Reference Check Form',
          description: 'Form for professional references',
          type: 'PDF',
          size: '120 KB',
        },
      ],
    },
    {
      category: 'Parent Resources',
      icon: FaClipboardList,
      items: [
        {
          title: 'Parent Handbook',
          description: 'Complete guide to policies, procedures, and information',
          type: 'PDF',
          size: '1.2 MB',
        },
        {
          title: 'Daily Schedule Template',
          description: 'Sample daily schedule for reference',
          type: 'PDF',
          size: '95 KB',
        },
        {
          title: 'Parent-Teacher Conference Form',
          description: 'Form to schedule and prepare for conferences',
          type: 'PDF',
          size: '130 KB',
        },
        {
          title: 'Volunteer Application',
          description: 'Application for parent volunteers',
          type: 'PDF',
          size: '155 KB',
        },
      ],
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
              <br />Forms & Documents
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Access all the forms and documents you need for enrollment, activities, and more. 
              Download, print, and return completed forms to our office.
            </p>
          </div>
        </div>
      </section>

      {/* Forms by Category */}
      <Section className="bg-white">
        <div className="space-y-12">
          {forms.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Icon className="text-xl text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-blue-800">{category.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((form, formIndex) => {
                    const pastelColors = [
                      'from-sky-50 to-blue-50',
                      'from-lime-50 to-green-50',
                      'from-teal-50 to-cyan-50',
                      'from-indigo-50 to-purple-50',
                    ]
                    return (
                    <Card key={formIndex} className={`bg-gradient-to-br ${pastelColors[formIndex % 4]} hover:shadow-xl transition-all duration-300`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-blue-800 mb-2">{form.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{form.description}</p>
                        </div>
                        <div className="ml-4">
                          <FaFilePdf className="text-red-500 text-2xl" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          <span className="font-semibold">{form.type}</span> • {form.size}
                        </div>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => {
                            // In a real application, this would download the actual file
                            alert(`Downloading ${form.title}...`)
                          }}
                        >
                          <FaDownload className="mr-2" />
                          Download
                        </Button>
                      </div>
                    </Card>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Instructions */}
      <Section className="bg-gradient-to-br from-pastel-yellow/20 to-pastel-peach/20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-50 to-violet-50">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">How to Submit Forms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '1',
                  title: 'Download',
                  description: 'Download the form(s) you need from the categories above.',
                },
                {
                  step: '2',
                  title: 'Complete',
                  description: 'Fill out the form completely and accurately. Print if necessary.',
                },
                {
                  step: '3',
                  title: 'Submit',
                  description: 'Return completed forms to our office in person, by email, or by mail.',
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact Info */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Need Help?</h2>
          <p className="text-lg text-gray-600 mb-6">
            If you have questions about any forms or need assistance completing them, 
            please don't hesitate to contact us.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  )
}


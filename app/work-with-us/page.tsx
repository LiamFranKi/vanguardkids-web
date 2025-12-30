import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaHeart, FaUsers, FaGraduationCap, FaHandsHelping, FaCheckCircle, FaEnvelope, FaFileAlt } from 'react-icons/fa'

export default function WorkWithUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <br />
            <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6">
              <br />Work with Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Join our passionate team of educators and make a difference in children's lives. 
              We're looking for dedicated professionals who share our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Why Join Vanguard Kids?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of a team that's shaping the future, one child at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: FaHeart,
              title: 'Meaningful Work',
              description: 'Make a real impact on children\'s lives and watch them grow and thrive under your guidance.',
            },
            {
              icon: FaGraduationCap,
              title: 'Professional Development',
              description: 'Access to ongoing training, workshops, and opportunities for career advancement.',
            },
            {
              icon: FaUsers,
              title: 'Supportive Team',
              description: 'Work alongside passionate educators in a collaborative and encouraging environment.',
            },
            {
              icon: FaHandsHelping,
              title: 'Competitive Benefits',
              description: 'Comprehensive benefits package including health insurance, retirement plans, and paid time off.',
            },
            {
              icon: FaCheckCircle,
              title: 'Work-Life Balance',
              description: 'Flexible scheduling options and a positive work environment that values your well-being.',
            },
            {
              icon: FaHeart,
              title: 'Growth Opportunities',
              description: 'Clear career paths and opportunities to take on leadership roles within our organization.',
            },
          ].map((benefit, index) => {
            const Icon = benefit.icon
            const pastelColors = [
              'from-pink-50 to-rose-50',
              'from-purple-50 to-violet-50',
              'from-blue-50 to-cyan-50',
              'from-green-50 to-emerald-50',
              'from-yellow-50 to-amber-50',
              'from-orange-50 to-amber-50',
            ]
            return (
              <Card key={index} className={`bg-gradient-to-br ${pastelColors[index]}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Open Positions */}
      <Section className="bg-gradient-to-br from-pastel-yellow/20 to-pastel-peach/20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Open Positions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore current opportunities to join our team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              title: 'Lead Preschool Teacher',
              location: 'Vanguard Kids Preschool',
              type: 'Full-time',
              description: 'We are seeking an experienced Lead Preschool Teacher to guide our 3-4 year old classroom. The ideal candidate will have a degree in Early Childhood Education and at least 3 years of teaching experience.',
              requirements: [
                'Bachelor\'s degree in Early Childhood Education or related field',
                'State teaching certification',
                'Minimum 3 years of classroom experience',
                'Strong communication and organizational skills',
                'Passion for working with young children',
              ],
            },
            {
              title: 'Assistant Teacher',
              location: 'Vanguard Kids Academy',
              type: 'Full-time',
              description: 'Join our team as an Assistant Teacher supporting our Lead Teachers in creating engaging learning experiences. This is an excellent opportunity for recent graduates or those new to early childhood education.',
              requirements: [
                'Associate\'s degree in Early Childhood Education or related field',
                'Willingness to pursue further education',
                'Patience and enthusiasm for working with children',
                'Ability to work collaboratively in a team setting',
                'First Aid and CPR certification (or willingness to obtain)',
              ],
            },
            {
              title: 'Substitute Teacher',
              location: 'Both Locations',
              type: 'Part-time / On-call',
              description: 'Flexible opportunity for qualified educators to support our team when regular staff members are absent. Perfect for those seeking part-time work or flexible scheduling.',
              requirements: [
                'Early Childhood Education background preferred',
                'Flexible availability',
                'Reliable transportation',
                'Ability to adapt quickly to different classroom environments',
                'Current background check',
              ],
            },
            {
              title: 'Program Coordinator',
              location: 'Vanguard Kids Academy',
              type: 'Full-time',
              description: 'We are looking for a Program Coordinator to oversee curriculum development, staff training, and program quality. This leadership role requires strong organizational and communication skills.',
              requirements: [
                'Master\'s degree in Early Childhood Education or related field',
                'Minimum 5 years of experience in early childhood education',
                'Previous leadership or administrative experience',
                'Strong curriculum development skills',
                'Excellent written and verbal communication',
              ],
            },
          ].map((position, index) => {
            const pastelColors = [
              'from-sky-50 to-blue-50',
              'from-lime-50 to-green-50',
              'from-teal-50 to-cyan-50',
              'from-indigo-50 to-purple-50',
            ]
            return (
            <Card key={index} className={`bg-gradient-to-br ${pastelColors[index]}`}>
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-blue-800">{position.title}</h3>
                  <span className="px-3 py-1 bg-pastel-yellow rounded-full text-sm font-semibold text-gray-800">
                    {position.type}
                  </span>
                </div>
                <p className="text-blue-700 font-semibold mb-3">{position.location}</p>
                <p className="text-gray-600 mb-4">{position.description}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Requirements:</h4>
                <ul className="space-y-1">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start text-gray-600 text-sm">
                      <FaCheckCircle className="text-pastel-blue mt-1 mr-2 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button href="/apply" variant="primary" size="sm" className="w-full">
                Apply Now
              </Button>
            </Card>
            )
          })}
        </div>
      </Section>

      {/* Application Process */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Application Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to join our team
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Submit Application',
                description: 'Fill out our online application form or send your resume and cover letter.',
                icon: FaFileAlt,
              },
              {
                step: '2',
                title: 'Initial Review',
                description: 'Our hiring team will review your qualifications and experience.',
                icon: FaCheckCircle,
              },
              {
                step: '3',
                title: 'Interview',
                description: 'Selected candidates will be invited for an interview with our team.',
                icon: FaUsers,
              },
              {
                step: '4',
                title: 'Join Our Team',
                description: 'Successful candidates will receive an offer and begin their journey with us.',
                icon: FaHeart,
              },
            ].map((process, index) => {
              const Icon = process.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 relative shadow-lg">
                    <Icon className="text-3xl text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-sm font-bold text-white">{process.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100 relative overflow-hidden pb-0">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              We'd love to hear from you. Send us your resume and cover letter, or reach out with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white hover:opacity-90">
                Contact Us
              </Button>
              <Button href="/forms" size="lg" className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white hover:opacity-90">
                Download Application Form
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaGraduationCap, FaBookOpen, FaUsers, FaCertificate, FaLightbulb, FaHandsHelping, FaCheckCircle, FaCalendarAlt, FaHeartbeat, FaClock, FaFireExtinguisher } from 'react-icons/fa'

export default function TeacherTraining() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <br />
            <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6">
              <br />Teacher Training & Professional Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Empowering educators with the knowledge, skills, and tools to excel in early childhood education. 
              Continuous learning is at the heart of what we do.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Investing in Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Vanguard Kids, we believe that exceptional teachers are the foundation of exceptional education. 
              That's why we invest heavily in professional development and training programs designed to enhance 
              teaching skills, stay current with best practices, and inspire innovation in the classroom.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our comprehensive training program covers everything from curriculum implementation and child 
              development theories to classroom management and parent communication. We ensure every educator 
              has the tools and knowledge needed to create meaningful learning experiences.
            </p>
            <Button href="/work-with-us" variant="primary" size="lg">
              Join Our Team
            </Button>
          </div>
          <Card className="bg-gradient-to-br from-purple-50 to-violet-50 p-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '100+', label: 'Training Hours/Year' },
                { number: '50+', label: 'Certified Teachers' },
                { number: '20+', label: 'Workshops Offered' },
                { number: '100%', label: 'Staff Participation' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-800 mb-2">{stat.number}</div>
                  <div className="text-gray-700 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Training Programs */}
      <Section className="bg-gradient-to-br from-pastel-yellow/20 to-pastel-peach/20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Our Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive professional development opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: FaGraduationCap,
              title: 'New Teacher Orientation',
              description: 'Comprehensive onboarding program for new staff members covering our philosophy, policies, and best practices.',
              duration: '2 weeks',
            },
            {
              icon: FaBookOpen,
              title: 'Curriculum Training',
              description: 'In-depth training on our curriculum frameworks, lesson planning, and assessment strategies.',
              duration: 'Ongoing',
            },
            {
              icon: FaUsers,
              title: 'Classroom Management',
              description: 'Strategies and techniques for creating positive learning environments and managing diverse classroom dynamics.',
              duration: 'Quarterly',
            },
            {
              icon: FaCertificate,
              title: 'Certification Programs',
              description: 'Support for teachers pursuing additional certifications and advanced degrees in early childhood education.',
              duration: 'Year-round',
            },
            {
              icon: FaLightbulb,
              title: 'Innovation Workshops',
              description: 'Hands-on workshops exploring new teaching methods, technology integration, and creative approaches.',
              duration: 'Monthly',
            },
            {
              icon: FaHandsHelping,
              title: 'Mentorship Program',
              description: 'Pairing experienced educators with newer teachers for guidance, support, and professional growth.',
              duration: 'Ongoing',
            },
          ].map((program, index) => {
            const Icon = program.icon
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="text-2xl text-white" />
                </div>
                <div className="mb-2">
                  <span className="px-3 py-1 bg-pastel-yellow rounded-full text-xs font-semibold text-gray-800">
                    {program.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Training Topics */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Training Topics Covered
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive coverage of essential early childhood education topics
          </p>
        </div>

        {/* Main Topics - Featured */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: FaHeartbeat,
              title: 'First Aid & CPR',
              description: 'Essential life-saving skills and emergency response training for early childhood educators.',
              color: 'from-red-50 to-rose-50',
              iconColor: 'from-red-600 to-rose-600',
            },
            {
              icon: FaClock,
              title: 'First 40 Clock Hours',
              description: 'Comprehensive initial training program covering all fundamental aspects of early childhood education.',
              color: 'from-blue-50 to-cyan-50',
              iconColor: 'from-blue-600 to-cyan-600',
            },
            {
              icon: FaFireExtinguisher,
              title: 'Fire Extinguisher',
              description: 'Fire safety training and proper use of fire extinguishers in educational settings.',
              color: 'from-orange-50 to-amber-50',
              iconColor: 'from-orange-600 to-amber-600',
            },
          ].map((topic, index) => {
            const Icon = topic.icon
            return (
              <Card key={index} className={`bg-gradient-to-br ${topic.color} border-2 border-blue-200 shadow-lg`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${topic.iconColor} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm">{topic.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Other Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Child Development & Psychology',
            'Age-Appropriate Curriculum Design',
            'Play-Based Learning Strategies',
            'Social-Emotional Learning',
            'Language & Literacy Development',
            'STEM Education for Young Children',
            'Special Needs & Inclusion',
            'Behavior Management Techniques',
            'Parent Communication & Engagement',
            'Health & Safety Protocols',
            'Assessment & Documentation',
            'Cultural Competency & Diversity',
            'Technology Integration',
            'Creative Arts & Music',
            'Outdoor & Physical Education',
          ].map((topic, index) => {
            const pastelColors = [
              'from-sky-50 to-blue-50',
              'from-lime-50 to-green-50',
              'from-teal-50 to-cyan-50',
              'from-indigo-50 to-purple-50',
              'from-pink-50 to-rose-50',
              'from-amber-50 to-yellow-50',
              'from-emerald-50 to-teal-50',
              'from-violet-50 to-purple-50',
              'from-cyan-50 to-blue-50',
              'from-green-50 to-emerald-50',
              'from-blue-50 to-sky-50',
              'from-purple-50 to-pink-50',
              'from-yellow-50 to-orange-50',
              'from-rose-50 to-pink-50',
              'from-orange-50 to-amber-50',
            ]
            return (
            <Card key={index} className={`bg-gradient-to-br ${pastelColors[index]}`}>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{topic}</p>
              </div>
            </Card>
            )
          })}
        </div>
      </Section>

      {/* Training Schedule */}
      <Section className="bg-gradient-to-br from-pastel-blue/20 to-pastel-green/20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Training Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Regular professional development opportunities throughout the year
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="space-y-6">
              {[
                {
                  period: 'Monthly',
                  activities: [
                    'Innovation Workshops',
                    'Team Building Sessions',
                    'Curriculum Updates',
                  ],
                },
                {
                  period: 'Quarterly',
                  activities: [
                    'Comprehensive Training Days',
                    'Guest Speaker Presentations',
                    'Best Practices Sharing',
                  ],
                },
                {
                  period: 'Annually',
                  activities: [
                    'Professional Development Conference',
                    'Certification Renewal Support',
                    'Annual Review & Goal Setting',
                  ],
                },
              ].map((schedule, index) => (
                <div key={index} className="border-l-4 border-pastel-purple pl-6">
                  <div className="flex items-center mb-3">
                    <FaCalendarAlt className="text-pastel-purple mr-3" />
                    <h3 className="text-2xl font-bold text-blue-800">{schedule.period}</h3>
                  </div>
                  <ul className="space-y-2">
                    {schedule.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-pastel-purple rounded-full mr-3"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Benefits of Our Training Program
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'For Teachers',
              benefits: [
                'Enhanced teaching skills and confidence',
                'Career advancement opportunities',
                'Access to latest educational research',
                'Networking with other professionals',
                'Recognition and certification',
                'Increased job satisfaction',
              ],
            },
            {
              title: 'For Children',
              benefits: [
                'Higher quality learning experiences',
                'More engaging and effective instruction',
                'Better individual attention',
                'Improved learning outcomes',
                'Safer and more nurturing environment',
                'Greater enthusiasm for learning',
              ],
            },
          ].map((section, index) => {
            const pastelColors = [
              'from-pink-50 to-rose-50',
              'from-purple-50 to-violet-50',
            ]
            return (
            <Card key={index} className={`bg-gradient-to-br ${pastelColors[index]}`}>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.benefits.map((benefit, benIndex) => (
                  <li key={benIndex} className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
            )
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100 relative overflow-hidden pb-0">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Ready to Grow Your Career?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join a team that invests in your professional development and supports your growth as an educator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/work-with-us" size="lg" className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white hover:opacity-90">
                View Open Positions
              </Button>
              <Button href="/contact" size="lg" className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white hover:opacity-90">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


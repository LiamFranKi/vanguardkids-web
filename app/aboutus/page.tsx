import Section from '@/components/Section'
import Card from '@/components/Card'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaChild, FaUsers, FaGraduationCap, FaHeart } from 'react-icons/fa'

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <br />
            <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6">
              <br />About Vanguard Kids
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Building futures, one child at a time. We are committed to providing exceptional 
              early childhood education in a nurturing and inspiring environment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-gradient-to-br from-pink-50 to-rose-50">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <FaHeart className="text-xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-800">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              To provide a safe, nurturing, and stimulating environment where children can grow, 
              learn, and develop to their fullest potential. We are dedicated to fostering a love 
              of learning while building strong foundations for future academic and personal success.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that every child is unique and deserves individualized attention and care. 
              Our mission is to help each child discover their strengths, build confidence, and 
              develop the skills they need to thrive in an ever-changing world.
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-50">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <FaGraduationCap className="text-xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-800">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              To be the leading early childhood education center recognized for excellence, innovation, 
              and commitment to the holistic development of every child. We envision a community where 
              children are empowered to become confident, compassionate, and capable individuals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision extends beyond the classroom walls. We strive to create lasting partnerships 
              with families and the community, working together to shape the next generation of 
              leaders, thinkers, and innovators.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Locations */}
      <Section className="bg-gradient-to-br from-pastel-yellow/20 to-pastel-peach/20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Our Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Two exceptional facilities, one shared commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vanguard Kids Preschool */}
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <FaChild className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-2">Vanguard Kids Preschool</h3>
              <p className="text-gray-600 text-lg">
                Early childhood education for ages 2-5
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-pastel-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-gray-600">12660 Sydney Road Dover, FL 33527</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaPhone className="text-pastel-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+1 (813) 530-0032</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-pastel-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">vanguardkids12660@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="text-pastel-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Hours</p>
                  <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-pastel-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">License Number</p>
                  <p className="text-gray-600">C HC 433675</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-blue-800 mb-3">Program Highlights</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Play-based learning curriculum
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Social and emotional development focus
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Creative arts and music programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Outdoor play and physical activities
                </li>
              </ul>
            </div>
          </Card>

          {/* Vanguard Kids Academy */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-2">Vanguard Kids Academy</h3>
              <p className="text-gray-600 text-lg">
                Advanced learning programs for ages 4-6
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-pastel-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-gray-600">465 Carolina Avenue. Fort Myers, FL 33905</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaPhone className="text-pastel-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+1 (239) 694-5912</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-pastel-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">vanguardkidsacademy@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="text-pastel-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Hours</p>
                  <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-pastel-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">License Number</p>
                  <p className="text-gray-600">C20LR0301</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-blue-800 mb-3">Program Highlights</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Enhanced academic curriculum
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  STEM and technology integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Leadership and character development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Elementary school preparation
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* Our Team */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Our Dedicated Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate educators committed to your child's success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Qualified Teachers',
              description: 'All our teachers hold early childhood education degrees and certifications, with ongoing professional development.',
              icon: FaGraduationCap,
            },
            {
              title: 'Low Student-Teacher Ratio',
              description: 'We maintain small class sizes to ensure every child receives the individual attention they deserve.',
              icon: FaUsers,
            },
            {
              title: 'Caring Staff',
              description: 'Our team is passionate about creating a warm, welcoming environment where children feel safe and valued.',
              icon: FaHeart,
            },
          ].map((item, index) => {
            const Icon = item.icon
            const pastelColors = [
              'from-yellow-50 to-amber-50',
              'from-orange-50 to-amber-50',
              'from-cyan-50 to-blue-50',
            ]
            return (
              <Card key={index} className={`text-center bg-gradient-to-br ${pastelColors[index]}`}>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gradient-to-br from-pastel-blue/30 via-pastel-green/30 to-pastel-purple/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Respect for each child\'s unique learning style',
            'Commitment to excellence in education',
            'Building strong family partnerships',
            'Creating a safe and nurturing environment',
            'Fostering creativity and curiosity',
            'Promoting social and emotional growth',
            'Encouraging independence and confidence',
            'Celebrating diversity and inclusion',
          ].map((value, index) => {
            const pastelColors = [
              'from-sky-50 to-blue-50',
              'from-lime-50 to-green-50',
              'from-teal-50 to-cyan-50',
              'from-indigo-50 to-purple-50',
              'from-pink-50 to-rose-50',
              'from-amber-50 to-yellow-50',
              'from-emerald-50 to-teal-50',
              'from-violet-50 to-purple-50',
            ]
            return (
            <Card key={index} className={`text-center bg-gradient-to-br ${pastelColors[index]}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <p className="text-gray-700 font-medium">{value}</p>
            </Card>
            )
          })}
        </div>
      </Section>
    </>
  )
}


import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Image from 'next/image'
import { FaHeart, FaGraduationCap, FaUsers, FaStar, FaChild, FaBookOpen, FaHandsHelping, FaRocket, FaSmile, FaShieldAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      {/* Hero Section - Asymmetric Design */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100 py-24 pt-40 pb-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block mt-8">
                <span className="px-3 py-1.5 bg-white text-pink-700 rounded-full text-sm font-semibold shadow-sm">
                  Premier Early Childhood Education
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-800 leading-tight">
                Where Little Minds
                <span className="block text-blue-600 mt-2">Grow Big Dreams</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                At Vanguard Kids, we create magical learning experiences that inspire curiosity, 
                foster creativity, and build confident young learners ready to take on the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/aboutus" size="lg" className="shadow-xl bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white hover:shadow-blue-800/50">
                  Explore Our Programs
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white border-0 hover:shadow-lg hover:shadow-red-500/50">
                  Schedule a Tour
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2</div>
                  <div className="text-sm text-gray-600">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl transform rotate-6 group-hover:rotate-8 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl px-8 py-12 shadow-2xl transform -rotate-3 animate-float group-hover:-rotate-2 group-hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Left side - Features */}
                    <div className="space-y-8">
                      <div className="flex items-center space-x-4 hover-lift">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
                          <FaRocket className="text-3xl text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-blue-800">Innovative Learning</h3>
                          <p className="text-sm text-gray-600">Cutting-edge curriculum</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 hover-lift">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
                          <FaSmile className="text-3xl text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-blue-800">Happy Children</h3>
                          <p className="text-sm text-gray-600">Joyful learning environment</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 hover-lift">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
                          <FaShieldAlt className="text-3xl text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-blue-800">Safe & Secure</h3>
                          <p className="text-sm text-gray-600">Your child's safety first</p>
                        </div>
                      </div>
                    </div>
                    {/* Right side - Image */}
                    <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden">
                      <Image
                        src="/niñasbanner.png"
                        alt="Happy children at Vanguard Kids"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-2xl"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations - Split Design */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Two Locations, One Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the location that's perfect for your family
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preschool - Left Aligned */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 lg:p-12 h-full">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FaChild className="text-4xl text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-800 mb-2">Vanguard Kids Preschool</h3>
                  <p className="text-blue-600 font-semibold">Dover, FL • Ages 2-5</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our preschool program creates a nurturing foundation where young children explore, 
                discover, and develop through play-based learning and creative activities.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Play-based curriculum</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Small class sizes</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Experienced teachers</span>
                </div>
              </div>
              <Button href="/aboutus" variant="primary" size="md">
                Learn More
              </Button>
            </div>
          </div>

          {/* Academy - Right Aligned */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 lg:p-12 h-full">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FaBookOpen className="text-4xl text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-800 mb-2">Vanguard Kids Academy</h3>
                  <p className="text-cyan-600 font-semibold">Fort Myers, FL • Ages 4-6</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our academy program prepares children for elementary school with enhanced academics, 
                STEM activities, and leadership development in a stimulating environment.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  <span>Advanced curriculum</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  <span>STEM integration</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  <span>School readiness</span>
                </div>
              </div>
              <Button href="/aboutus" variant="secondary" size="md">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us - Zigzag Layout */}
      <Section className="bg-gradient-to-b from-white to-blue-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Why Parents Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The difference is in the details
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              icon: FaGraduationCap,
              title: 'Expert Educators',
              description: 'Our certified teachers bring years of experience and passion to every classroom, ensuring your child receives the best education possible.',
              color: 'from-blue-500 to-cyan-500',
              image: '/img1.jpg',
            },
            {
              icon: FaHeart,
              title: 'Nurturing Environment',
              description: 'We create a warm, welcoming atmosphere where children feel safe, valued, and excited to learn every single day.',
              color: 'from-cyan-500 to-blue-500',
              image: '/img2.jpg',
            },
            {
              icon: FaShieldAlt,
              title: 'Safety First',
              description: 'Your child\'s safety is our top priority. We maintain rigorous security protocols and maintain the highest safety standards.',
              color: 'from-blue-500 to-cyan-500',
              image: '/img3.jpg',
            },
            {
              icon: FaStar,
              title: 'Proven Results',
              description: 'Our graduates excel in elementary school, demonstrating strong academic skills, confidence, and a love for learning.',
              color: 'from-cyan-500 to-blue-500',
              image: '/img4.jpg',
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0
            // img2 y img3 necesitan ser más anchas, img3 necesita ser aún más ancha
            const isWideImage = index === 1 || index === 2 // img2 (index 1) y img3 (index 2)
            const isExtraWideImage = index === 2 // img3 (index 2) necesita ser más ancha
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                <div className={`flex-1 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mb-6 shadow-xl`}>
                    <Icon className="text-4xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-800 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
                <div className={`${isExtraWideImage ? 'flex-[1.5]' : isWideImage ? 'flex-[1.3]' : 'flex-1'} relative w-full ${isWideImage ? 'aspect-[3/2]' : 'aspect-video'} rounded-3xl overflow-hidden shadow-2xl`}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                    style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Testimonials Section - Modern Cards */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            What Parents Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from our Vanguard Kids family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Parent of 4-year-old',
              text: 'Vanguard Kids has been amazing for our daughter. She loves going to school every day and has learned so much!',
            },
            {
              name: 'Michael Chen',
              role: 'Parent of 5-year-old',
              text: 'The teachers are incredible and truly care about each child. We couldn\'t be happier with our choice.',
            },
            {
              name: 'Emily Rodriguez',
              role: 'Parent of 3-year-old',
              text: 'The curriculum is engaging and our son has developed so much confidence. Highly recommend!',
            },
          ].map((testimonial, index) => {
            const pastelColors = [
              'from-yellow-50 to-amber-50',
              'from-green-50 to-emerald-50',
              'from-orange-50 to-amber-50',
            ]
            return (
            <Card key={index} className={`bg-gradient-to-br ${pastelColors[index]} border-2 border-gray-100`}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <FaUsers className="text-xl text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </Card>
            )
          })}
        </div>
      </Section>

      {/* CTA Section - Modern Design */}
      <section className="bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100 relative overflow-hidden pb-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
              Start Your Child's Journey Today
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Join hundreds of happy families who trust Vanguard Kids for their child's early education. 
              Schedule a tour and see why we're the best choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" className="shadow-xl bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white hover:shadow-blue-800/50">
                Schedule a Tour
              </Button>
              <Button href="/forms" variant="outline" size="lg" className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white border-0 hover:shadow-lg hover:shadow-red-500/50">
                Download Forms
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

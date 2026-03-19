import Section from '@/components/Section'

export const metadata = {
  title: 'Virtual Tour - Vanguard Kids',
  description: 'Take a virtual tour of Vanguard Kids Preschool & Academy. Explore our facilities and classrooms from anywhere.',
}

const CLOUDPANO_TOUR_ID = 'Z-MLJYAhe'
const TOUR_URL = `https://app.cloudpano.com/tours/${CLOUDPANO_TOUR_ID}`

export default function VirtualTourPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-12 bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <br />
            <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6">
              Virtual Tour
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Explore our facilities and classrooms from anywhere. Take a 360° tour and discover the spaces where your child will learn and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Embed Section - iframe avoids JS/CORS issues with CloudPano script */}
      <Section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100 w-full aspect-video min-h-[500px]">
            <iframe
              src={TOUR_URL}
              allow="accelerometer; gyroscope; fullscreen"
              allowFullScreen
              frameBorder="0"
              className="w-full h-full min-h-[500px]"
              title="Vanguard Kids Virtual Tour"
            />
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            Use your mouse or touch to navigate. Click and drag to look around.
          </p>
        </div>
      </Section>
    </>
  )
}

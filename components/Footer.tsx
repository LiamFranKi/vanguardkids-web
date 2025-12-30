import Link from 'next/link'
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Vanguard Kids</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Nurturing young minds with love, care, and excellence in early childhood education.
              We provide a safe, stimulating environment where children can grow, learn, and thrive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutus" className="text-white/90 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work-with-us" className="text-white/90 hover:text-white transition-colors text-sm">
                  Work with Us
                </Link>
              </li>
              <li>
                <Link href="/teacher-training" className="text-white/90 hover:text-white transition-colors text-sm">
                  Teacher Training
                </Link>
              </li>
              <li>
                <Link href="/forms" className="text-white/90 hover:text-white transition-colors text-sm">
                  Forms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Locations</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-white">Vanguard Kids Preschool</p>
                <p className="text-white/80 text-xs">12660 Sydney Road Dover, FL 33527</p>
                <p className="text-white/80 text-xs">+1 (813) 530-0032</p>
              </div>
              <div>
                <p className="font-semibold text-white">Vanguard Kids Academy</p>
                <p className="text-white/80 text-xs">465 Carolina Avenue. Fort Myers, FL 33905</p>
                <p className="text-white/80 text-xs">+1 (239) 694-5912</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-white" />
                <span className="text-white/90">+1 (813) 530-0032</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-white" />
                <span className="text-white/90">vanguardkids12660@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-white" />
                <span className="text-white/90">Florida, United States</span>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://www.facebook.com/people/Vanguard-Kids-Academy/61577858960786/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-cyan-300 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={26} />
                </a>
                <a
                  href="https://www.instagram.com/vanguard_kids_academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-cyan-300 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} Vanguard Kids. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


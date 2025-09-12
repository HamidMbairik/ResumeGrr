import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa"; // replace with X if using Fa6
import { BsTwitterX } from "react-icons/bs";// replace with X if using Fa6
// If you have react-icons v6, you can import FaX from "react-icons/fa6" for X

const accentColor = "37,99,235";

const FooterMobile = () => {
  return (
    <footer
      className="w-full text-white pt-20 pb-10 overflow-hidden"
      style={{
        background: "#1f1f1f", // dark gray background
        paddingTop: "5rem",
        padding: "2rem 1rem",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:justify-between">
        {/* Logo */}
        <div className="mb-8 md:mb-0 flex items-center">
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#2563eb",
              fontFamily: "Inter, sans-serif",
              cursor: "pointer",
            }}
          >
            ResumeGrr
          </h1>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {/* Product */}
          <div>
            <h4 className="font-semibold text-xl mb-4" style={{
              marginTop: '2rem',
              fontSize: '1.65rem',
              // fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              color: '#ffffff',
              textShadow: '0px 0px 6px rgba(255,255,255,0.7)',
              fontWeight: '400',
            }}>Product</h4>
            <ul className="space-y-2 text-white" style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              fontFamily: 'Roboto, sans-serif',
              color: '#d1d5db',
            }}>
              <li className="hover:text-[#2563eb] cursor-pointer transition">Features</li>
              <li className="hover:text-[#2563eb] cursor-pointer transition">Pricing</li>
              <li className="hover:text-[#2563eb] cursor-pointer transition">Templates</li>
              <li className="hover:text-[#2563eb] cursor-pointer transition">Try AI</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-xl mb-4" style={{
              marginTop: '2rem',
              fontSize: '1.65rem',
              // fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              color: '#ffffff',
              textShadow: '0px 0px 6px rgba(255,255,255,0.7)',
              fontWeight: '400',
            }}>Resources</h4>
            <ul className="space-y-2 text-white" style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              fontFamily: 'Roboto, sans-serif',
              color: '#d1d5db',
            }}>
              <li className="hover:text-[#2563eb] cursor-pointer transition">Blog</li>
              <li className="hover:text-[#2563eb] cursor-pointer transition">Guides</li>
              <li className="hover:text-[#2563eb] cursor-pointer transition">FAQs</li>
              <li className="hover:text-[#2563eb] cursor-pointer transition">Support</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-xl mb-4" style={{
              marginTop: '2rem',
              fontSize: '1.65rem',
              // fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              color: '#ffffff',
              textShadow: '0px 0px 6px rgba(255,255,255,0.7)',
              fontWeight: '400',
            }}>Company</h4>
            <ul className="space-y-2 text-white" style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              fontFamily: 'Roboto, sans-serif',
              color: '#d1d5db',
            }}>
              <li className="hover:text-[#2563eb] cursor-pointer transition">About Us</li>
              <li className="hover:text-[#2563eb] cursor-pointer transition">Careers</li>
              <li className="hover:text-[#2563eb] cursor-pointer transition">Contact</li>
              <li className="hover:text-[#2563eb] cursor-pointer transition">Partners</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-xl mb-4" style={{
              marginTop: '2rem',
              fontSize: '1.65rem',
              // fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              color: '#ffffff',
              textShadow: '0px 0px 6px rgba(255,255,255,0.7)',
              fontWeight: '400',
            }}>Legal</h4>
            <ul className="space-y-2 text-white" style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              fontFamily: 'Roboto, sans-serif',
              color: '#d1d5db',
            }}  >
              <li className="hover:text-[#2563eb] cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-[#2563eb] cursor-pointer transition">Terms of Service</li>
              <li className="hover:text-[#2563eb] cursor-pointer transition">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="max-w-6xl mx-auto flex justify-between space-x-6 text-white text-2xl mb-10" style={{
        marginTop: '2rem',
        marginBottom: '2rem',
        fontSize: '2rem',
        padding: '0 2rem',
        color: '#9ca3af',
      }}>
        <FaFacebookF className="hover:text-[#2563eb] cursor-pointer transition" />
        <BsTwitterX className="hover:text-[#2563eb] cursor-pointer transition" /> {/* replace with X if you want */}
        <FaGithub className="hover:text-[#2563eb] cursor-pointer transition" />
        <FaLinkedinIn className="hover:text-[#2563eb] cursor-pointer transition" />
        <FaInstagram className="hover:text-[#2563eb] cursor-pointer transition" />
      </div>

      {/* Bottom line */}
      <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm" style={{
        fontSize: '1rem',
        fontFamily: 'Roboto, sans-serif',
        color: '#9ca3af',
      }}>
        Made by <span className="text-[#2563eb] hover:text-[#9ca3af]" style={{
          fontWeight: '600',
          textShadow: '0px 0px 6px rgba(37,99,235,0.7)',
          textDecoration: 'none',
          fontFamily: 'Inter, sans-serif',
          cursor: 'pointer',
        }}>Hamid Mbairik | L3zwaDev</span> &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterMobile;

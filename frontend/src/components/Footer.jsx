const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-8 mt-10 w-full">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          
          <div className="mb-6 sm:mb-0 sm:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p>Email: giftshop@gmail.com</p>
            <p>Phone: +91999000112</p>
            <p>Address: 123 Gift Street, City, Country</p>
          </div>

          <div className="mb-6 sm:mb-0 sm:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Cart</a></li>
              <li><a href="#" className="hover:text-gray-400">Collections</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          <div className="mb-6 sm:mb-0 sm:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
            </ul>
          </div>

          
        </div>

        
        <div className="text-center text-gray-200 mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Your Gift Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

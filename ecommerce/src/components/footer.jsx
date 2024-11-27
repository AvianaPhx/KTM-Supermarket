const Footer = () => {
    return (
      <footer className="bg-red-700 text-white py-8 mt-1">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left ">
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <p>123455678</p>
            <p>Address: Abc</p>
            <p>Socials:</p>
            <div className="flex space-x-2 justify-center md:justify-start mt-2">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Abc Mart</h4>
            <p>"A world full of flavours."</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Get Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Customer Service</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms and Services</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; Copyright 2024</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;

  
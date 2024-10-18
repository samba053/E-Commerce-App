function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <p className="mb-4">
                            We are committed to delivering the best services and solutions for all your business needs.
                        </p>
                        <p>123 Business St, Suite 100</p>
                        <p>City, State 12345</p>
                        <p>Email: info@yourcompany.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">Services</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">Contact</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Subscribe to Our Newsletter</h3>
                        <p className="mb-4">Stay updated with our latest news, articles, and promotions.</p>
                        <form>
                            <input
                                type="email"
                                className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    <p>Powered by Your Company</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
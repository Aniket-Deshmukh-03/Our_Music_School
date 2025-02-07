
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 sm:px-6 lg:px-8">
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">
                    About Us
                </h2>
                <p className="mb-4 text-justify">
                    Music School is a premeir online music school that offers a wide range of courses for students of all levels. Our instructors are some of the best in the world and are dedicated to helping you achieve your musical goals.
                </p>
            </div>
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">
                    Quick Links
                </h2>
                <p>
                    <a href="#" className="hover:text-white transition-colors duration-300 block mb-2">Home</a>
                    <a href="#" className="hover:text-white transition-colors duration-300 block mb-2">Courses</a>
                    <a href="#" className="hover:text-white transition-colors duration-300 block mb-2">Instructors</a>
                    <a href="#" className="hover:text-white transition-colors duration-300 block mb-2">Contact Us</a>
                </p>
            </div>
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">
                    Follow Us
                </h2>
                <p>
                    <a href="#" className="hover:text-white transition-colors duration-300 block mb-2">Facebook</a>
                    <a href="#" className="hover:text-white transition-colors duration-300 block mb-2">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors duration-300 block mb-2">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors duration-300 block mb-2">YouTube</a>
                </p>
            </div>
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">
                    Contact Us
                </h2>
                <p>07 Music School, Main Street,</p>
                <p>Maharashtra, India, 444444.</p>
            </div>
        </div>
        <p className="text-center text-sm pt-8">© 2025 Music School. All rights reserved.</p>
    </footer>
  )
}

export default Footer
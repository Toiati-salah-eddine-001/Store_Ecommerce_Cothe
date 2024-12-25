

function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-4">
  {/* Header Section */}
  <div className="text-center mb-8">
    <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
    <p className="text-gray-600 mt-2">We d love to hear from you!</p>
  </div>

  {/* Contact Form */}
  <div className="bg-gray-50 p-6 rounded-md shadow-md">
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* First Name */}
      <div className="flex flex-col">
        <label htmlFor="first-name" className="text-gray-700 font-medium">
          First Name
        </label>
        <input
          type="text"
          id="first-name"
          placeholder="Enter your first name"
          className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Last Name */}
      <div className="flex flex-col">
        <label htmlFor="last-name" className="text-gray-700 font-medium">
          Last Name
        </label>
        <input
          type="text"
          id="last-name"
          placeholder="Enter your last name"
          className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col md:col-span-2">
        <label htmlFor="email" className="text-gray-700 font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col md:col-span-2">
        <label htmlFor="message" className="text-gray-700 font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          placeholder="Write your message here..."
          className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2 text-center">
        <button
          type="submit"
          className="px-6 py-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>

  {/* Contact Info */}
  <div className="mt-12 text-center">
    <p className="text-gray-600">Or reach us at:</p>
    <p className="text-gray-800 font-medium mt-2">Phone: +1 234 567 890</p>

    {/* Social Links */}
    <div className="flex justify-center mt-4 gap-7 mb-2 p-4">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-600"
        aria-label="Facebook"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.12 8.438 9.878v-6.988H7.897v-2.89h2.541v-2.208c0-2.507 1.493-3.89 3.775-3.89 1.094 0 2.238.196 2.238.196v2.475h-1.261c-1.243 0-1.628.771-1.628 1.561v1.866h2.773l-.443 2.89h-2.33V21.88C18.344 21.12 22 16.991 22 12z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-600"
        aria-label="Instagram"
      >
        
        <i className="fa-brands fa-instagram"></i>
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-600"
        aria-label="Twitter"
      >
       <i className="fa-brands fa-x-twitter"></i>
      </a>

      {/* Threads */}
      <a
        href="https://threads.net"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-600"
        aria-label="Threads"
      >
       <i className="fa-brands fa-threads"></i>
      </a>
    </div>
  </div>
</div>

  )
}

export default Contact
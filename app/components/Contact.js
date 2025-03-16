export default function Contact() {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-red-600 ">
          Fill The Form
        </h2>
        <form className="mt-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Aaron Osafo"
              required
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Postcode
            </label>
            <input
              type="email"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="example@mail.com"
              required
            />
          </div>

          {/* Message */}
          {/* <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Write your message here..."
              rows="4"
              required
            ></textarea>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Book Installation
          </button>
        </form>
      </div>
    </div>
  );
}

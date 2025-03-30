import { getStorage } from "firebase/storage";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../static/currencyConverter/format";
import toast from "react-hot-toast";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const subtotal = cartItems.reduce((a, b) => a + b.price * b.qty, 0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    receipt: null,
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const storage = getStorage();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { firstName, lastName, email, phoneNumber, address, receipt } =
      formData;
    if (!firstName || !lastName || !email || !phoneNumber || !address) {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }
    if (!receipt) {
      toast.error("Please upload a receipt");
      setLoading(false);
      return;
    }
    console.log(formData);
  };

  return (
    <div className="md:w-[80%] w-[98%] mx-auto md:my-10 my-5">
      <div className="grid md:grid-cols-4 gap-5 grid-cols-1">
        {/* Payment Information (First on Mobile) */}
        <div className="px-4 py-3 md:col-span-2 col-span-1 bg-[#ffffff] flex flex-col justify-center items-center md:order-none order-first">
          <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
          <p className="text-md font-medium mb-2">
            Delivery Fee:{" "}
            <span className="font-semibold newsreader">
              {formatCurrency(1000)}
            </span>
          </p>
          <p className="text-md font-medium mb-2">
            Total Amount:
            <span className="font-semibold newsreader">
              {formatCurrency(subtotal + 1000)}
            </span>
          </p>
          <p className="text-md font-medium">
            Pay{" "}
            <span className="font-semibold newsreader">
              {formatCurrency(subtotal + 1000)}
            </span>{" "}
            to the following account:
          </p>
          <div className="bg-[#F5F5F4] space-y-2 newsreader p-4 rounded-md font-medium shadow-md my-3">
            <p className="text-base ">Bank Name: XYZ Bank</p>
            <p className="text-base ">Account Number: 1234567890</p>
            <p className="text-base ">Account Name: Caligata Publisher</p>
          </div>
          <p className="text-sm text-gray-600 text-center mt-2">
            After making the payment, upload your receipt and submit the form.
          </p>
        </div>

        {/* Billing Address Form (Second on Mobile) */}
        <div className="md:px-4 px-1 py-3 col-span-2 bg-[#ffffff] shadow-md md:order-none order-last">
          <h3 className="text-lg font-semibold py-3">Billing Address</h3>
          <form
            onSubmit={handleSubmit}
            className="md:p-6 md:py-0 py-2 w-full mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "firstName", placeholder: "First Name" },
                { name: "lastName", placeholder: "Last Name" },
                { name: "email", placeholder: "Email Address", type: "email" },
                {
                  name: "phoneNumber",
                  placeholder: "Phone Number",
                  type: "tel",
                },
                { name: "address", placeholder: "Address" },
              ].map(({ name, placeholder, type = "text" }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                  onChange={handleChange}
                  required
                />
              ))}

              <label
                htmlFor="file-input"
                className="p-4 outline-none cursor-pointer rounded-md shadow-sm bg-[#F5F5F4] w-full"
              >
                <span>Upload Payment Receipt</span>
                <input
                  type="file"
                  name="receipt"
                  id="file-input"
                  accept=".jpeg,.png,.jpg"
                  onChange={handleChange}
                  className="sr-only"
                  required
                />
              </label>
            </div>

            {formData.receipt && (
              <div className="w-[100px] h-[100px] rounded-md">
                <img
                  src={URL.createObjectURL(formData.receipt)}
                  alt="Payment Receipt"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className={`mt-4 cursor-pointer text-white py-2 px-20 rounded ${
                  loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={loading}
              >
                {loading ? "Uploading..." : "Submit Payment"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

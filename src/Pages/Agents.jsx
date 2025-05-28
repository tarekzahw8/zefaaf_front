import { FaPhone, FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Agents = () => {
  const agentsData = [
    {
      name: "Mohamed Ali",
      city: "Cairo",
      phone: "+20 100 123 4567",
      email: "mohamed.ali@example.com",
      facebook: "https://facebook.com/mohamed.ali",
      whatsapp: "https://wa.me/201001234567",
    },
    {
      name: "Sara Ahmed",
      city: "Alexandria",
      phone: "+20 101 234 5678",
      email: "sara.ahmed@example.com",
      facebook: "https://facebook.com/sara.ahmed",
      whatsapp: "https://wa.me/201012345678",
    },
  ];

  return (
    <div className="w-[90%] pt-[100px] max-md:flex max-md:items-center max-md:justify-center max-md:flex-col mt-10   max-md:w-[90%] mx-auto mb-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-[white]">
      وكلاء زفاف
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {agentsData.map((agent, index) => (
          <div
            key={index}
            className="bg-white shadow-lg  text-[#5650ce] rounded-lg p-6 flex flex-col justify-between items-start hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-[#5650ce] mb-4">
              {agent.name}
            </h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">المدينة: </span>
              {agent.city}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">البريد الإلكتروني: </span>
              {agent.email}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">الهاتف: </span>
              {agent.phone}
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href={agent.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href={`mailto:${agent.email}`} className="text-red-600">
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a
                href={agent.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a href={`tel:${agent.phone}`} className="text-black">
                <FaPhone className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;

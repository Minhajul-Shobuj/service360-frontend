import Image from "next/image";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const team = [
  {
    name: "Erick Reynolds",
    image: "/team/member1.jpg",
    description:
      "He is an expert cleaning staff member who provides thorough cleaning with precision.",
  },
  {
    name: "Erick Reynolds",
    image: "/team/member2.jpg",
    description:
      "He is an expert cleaning staff member who provides thorough cleaning with precision.",
  },
  {
    name: "Erick Reynolds",
    image: "/team/member3.jpg",
    description:
      "He is an expert cleaning staff member who provides thorough cleaning with precision.",
  },
];

export default function ExpertTeamSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Effective Cleaning Requires <br />
              an Expert Cleaning Team
            </h2>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
            <p className="text-gray-600 max-w-md text-sm">
              We have professional expert cleaning staff ensuring top-notch
              cleanliness and hygiene for your space.
            </p>
          </div>
        </div>

        <hr className="mb-10 border-gray-200" />

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-gray-900">
                  {member.name}
                </h3>

                {/* Stars */}
                <div className="flex gap-1 text-yellow-500 text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-sm text-gray-600">{member.description}</p>

                {/* Social Icons */}
                <div className="flex gap-4 text-gray-800 mt-2 text-sm">
                  <FaFacebookF className="hover:text-green-500 cursor-pointer" />
                  <FaXTwitter className="hover:text-green-500 cursor-pointer" />
                  <FaInstagram className="hover:text-green-500 cursor-pointer" />
                  <FaLinkedinIn className="hover:text-green-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

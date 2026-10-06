import eteng from "../assets/eteng.jpeg";   
import will from "../assets/wil.jpeg";
import victor from "../assets/victor.jpg";

const WebsiteManagers = () => {
  const managers = [
    {
      name: "Mr. Eteng Etta",
      role: "Team Supervisor",
      image: eteng,
    },
    {
      name: "Mr. Wilfred O. Binang",
      role: "Programme Analyst (ICT)",
      image: will,
    },
    {
      name: "Victor Itom-Ishor Ayim",
      role: "Ministry Intern",
      image: victor,
    },
  ];

  return (
    <section
      id="website-management"
      aria-labelledby="website-management-heading"
      className="border-t border-gray-100 bg-gray-50 px-5 py-12 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-5xl text-center">

        <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
          Website
        </p>

        <h2
          id="website-management-heading"
          className="mt-1 text-lg font-semibold text-gray-700"
        >
          Website Management Team
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">

          {managers.map((manager) => (
            <article
              key={manager.name}
              className="flex w-full max-w-[180px] flex-col items-center"
            >
              <img
                src={manager.image}
                alt={manager.name}
                className="h-40 w-40 rounded-full object-cover ring-2 ring-white shadow-sm"
              />

              <h3 className="mt-3 text-sm font-medium text-gray-700">
                {manager.name}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {manager.role}
              </p>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WebsiteManagers;
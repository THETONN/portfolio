import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  // {
  //   title: "Youtube",
  //   href: "#",
  // },
  {
    title: "Github",
    href: "https://github.com/THETONN",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/thanyathon/",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/txonnnnnnnn?igsh=NHQzOGhkZmJsdzh4&utm_source=qr",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors duration-200 ease-in-out hover:text-emerald-300 focus:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1"
              >
                <span className="">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

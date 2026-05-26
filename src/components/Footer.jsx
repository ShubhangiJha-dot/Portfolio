import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-500">
      
      <div className="max-w-[800px] mx-auto px-6 py-12">

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-4 text-teal-600 dark:text-teal-400">
          Connect
        </h2>

        {/* Links */}
        <div className="flex flex-wrap gap-6 text-md font-semibold text-gray-500 dark:text-gray-300">

          <a
            href="mailto:shubhangijha4444@gmail.com"
            className="flex items-center gap-2 hover:text-teal-600 transition"
          >
            <MdEmail /> Email
          </a>

          <a
            href="https://github.com/ShubhangiJha-dot"
            target="_blank"
            className="flex items-center gap-2 hover:text-teal-600 transition"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shubhangi-jha-403457310/"
            target="_blank"
            className="flex items-center gap-2 hover:text-teal-600 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/gK1cjiJgFc/"
            target="_blank"
            className="flex items-center gap-2 hover:text-teal-600  transition"
          >
            <SiLeetcode /> LeetCode
          </a>

        </div>

        {/* Optional small line */}
        <p className="text-md text-teal-600 dark:text-teal-400 mt-8">
          © {new Date().getFullYear()} Shubhangi.
        </p>

      </div>
    </footer>
  );
}
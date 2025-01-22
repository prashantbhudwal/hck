import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export function SocialLinks() {
  return (
    <section className="flex justify-center space-x-4 md:justify-end mb-8 w-1/3">
      <a
        href="https://twitter.com/pra_shantb"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://github.com/prashantbhudwal"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com/in/prashantbhudwal"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary"
      >
        <FaLinkedin size={24} />
      </a>
    </section>
  );
}

import { LuImagePlus } from 'react-icons/lu';

const Navbar = () => {
  return (
    <nav className="bg-purple-800 text-white px-4 py-2 flex  items-center">
      <a
        className="bg-purple-800 text-white px-4 py-2 flex  items-center"
        href="/"
      >
        {' '}
        <LuImagePlus className="bg-purple-800 text-4xl w-6 h-6 fas fa-icon " />
        <h1 className="text-xl font-bold">Random Image Generator</h1>
      </a>
    </nav>
  );
};

export default Navbar;

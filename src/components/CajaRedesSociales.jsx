import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className='hidden md:flex fixed right-0 top-1/2 transform -translate-y-1/2 flex-col space-y-3 gap-5 bg-softYellow p-4 shadow-lg'>
      <Link
        to='https://www.facebook.com/people/Mario-Saave/61573827956090/#'
        target='_blank'>
        <Facebook className='w-8 h-8 text-black hover:text-blue-500 transition-colors' />
      </Link>
      <Link to='https://www.instagram.com/mario.saave/' target='_blank'>
        <Instagram className='w-8 h-8 text-black hover:text-pink-500 transition-colors' />
      </Link>
      <Link
        to='https://www.youtube.com/channel/UCvuT6Tv1x3jS5H53_BuzXrA'
        target='_blank'>
        <Youtube className='w-8 h-8 text-black hover:text-red-500 transition-colors' />
      </Link>
      <Link to='https://www.tiktok.com/@mario.saave_' target='_blank'>
        <FaTiktok className='w-8 h-8 text-black hover:text-cyan-500 transition-colors' />
      </Link>
    </div>
  );
};

export default SocialLinks;

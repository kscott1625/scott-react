import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
  return (
    <footer className="h-44 bg-red pt-px">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            KATHERINE SCOTT
          </p>
          <p className="font-playfair text-lg text-yellow">
            ©2023 SCOTT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
/* eslint-disable react/prop-types */
const Header = ({ title, description }) => {
  return (
    <header className="sticky top-0 left-0 w-full">
      <div className="container">
        <div className="relative w-full text-center space-y-4 py-4 mb-10">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

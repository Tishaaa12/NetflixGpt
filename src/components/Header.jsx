import Netflix from '../assets/Images/Netflix_logo.png'

const Header = () => {
  return (
    <div className="px-8 py-3 absolute m-2 bg-gradient-to-b from-black z-10">
      <img src={Netflix} className ="w-30" alt="Netflix Logo" ></img>
    </div>
  );
}

export default Header;

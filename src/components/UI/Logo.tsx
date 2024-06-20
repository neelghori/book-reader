import LogoFile from "../../assets/images/logo.svg";

//common logo component

const Logo = () => {
  return (
    <div className="flex justify-center">
      <img src={LogoFile} alt="logo" width={100} height={100} />
    </div>
  );
};

export default Logo;

import LoginSideImage from "../../assets/images/login.jpg";

const CommonImageSidebar = () => {
  return (
    <div className="relative hidden md:block">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={LoginSideImage}
        alt=""
      />
    </div>
  );
};

export default CommonImageSidebar;

import LoginSideImage from "../../assets/images/login.jpg";

//common image sidebar for login and register page.
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

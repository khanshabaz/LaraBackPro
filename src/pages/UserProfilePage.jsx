import NavBar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";
import Footer from "../features/common/Footer";

function UserProfilePage() {
  return (
    <div>
      <NavBar />
      <h1 className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-2xl ">
        My Profile
      </h1>
      <UserProfile></UserProfile>
      <Footer />
    </div>
  );
}

export default UserProfilePage;

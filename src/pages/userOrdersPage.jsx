import NavBar from "../features/navbar/Navbar";
import UserOrders from "../features/user/components/UserOrders";
import Footer from "../features/common/Footer";
function UserOrdersPage() {
  return (
    <div>
      <NavBar />
      <h1 className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-2xl">My Orders</h1>
      <UserOrders />
      <Footer />
    </div>
  );
}

export default UserOrdersPage;

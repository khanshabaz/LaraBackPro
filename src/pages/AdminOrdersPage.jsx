import AdminOrders from "../features/admin/components/AdminOrders";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

function AdminOrdersPage() {
  return (
    <div>
      <NavBar />
      <AdminOrders></AdminOrders>
      <Footer />
    </div>
  );
}

export default AdminOrdersPage;

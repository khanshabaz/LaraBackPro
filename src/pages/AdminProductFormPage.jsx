import ProductForm from "../features/admin/components/ProductForm";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer"

function AdminProductFormPage() {
    return ( 
        <div>
            <NavBar>
                <ProductForm></ProductForm>
            </NavBar>
            <Footer/>
        </div>
     );
}

export default AdminProductFormPage;
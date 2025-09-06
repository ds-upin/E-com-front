import { createProduct } from "../services/product.api";
import { useRef, useState } from "react";
import AdminProductTable from "./AdminProductTable";

const AdminAddProduct = () => {
    const [addedProduct, setAddedProduct] = useState([]);

    const formRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);

        try {
            const res = await createProduct(formData);
            setAddedProduct([res, ...addedProduct]);
            formRef.current.reset();
        } catch (error) {
            console.error("Network or parsing error", error);
        }

    };

    return (<>
        <form ref={formRef} className="mt-4" onSubmit={handleSubmit}>
            <h5>Add Product</h5>
            <div className="row g-3">
                <div className="col-md-4">
                    <input className="form-control" type="text" name="name" placeholder="Product Name" />
                </div>
                <div className="col-md-3">
                    <input className="form-control" name="stock" type="number" placeholder="Quantity" />
                </div>
                <div className="col-md-3">
                    <input className="form-control" name="image" type="file" />
                </div>
                <div className="col-md-3">
                    <input className="form-control" name="slug" placeholder="Slug" type="text" />
                </div>
                <div className="col-md-3">
                    <input className="form-control" name="sellingPrice" type="number" placeholder="Selling Price" />
                </div>
                <div className="col-md-3">
                    <input className="form-control" name="costPrice" type="number" placeholder="Cost Price" />
                </div>
                <div className="col-md-3">
                    <input className="form-control" name="category" type="text" placeholder="Category" />
                </div>
                <div className="col-md-3">
                    <textarea className="form-control" name="description" type="text" rows="3" placeholder="Description"></textarea>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary w-100" type="submit">Add</button>
                </div>
            </div>
        </form>
        <AdminProductTable products={addedProduct} />
    </>
    )
};

export default AdminAddProduct;

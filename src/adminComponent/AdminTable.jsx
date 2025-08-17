import { updateProduct, deleteProduct } from "../services/product.api";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AdminTable = (props) => {
    const navigate = useNavigate();
  const i = props.value;
  const nameRef = useRef();
  const stockRef = useRef();
  const categoryRef = useRef();
  const costRef = useRef();
  const sellingRef = useRef();
  const descRef = useRef();
  const slugRef = useRef();

  const handleEdit = async () => {
    const updatedData = {
      name: nameRef.current.value,
      stock: Number(stockRef.current.value),
      category: categoryRef.current.value,
      costPrice: Number(costRef.current.value),
      sellingPrice: Number(sellingRef.current.value),
      description: descRef.current.value,
      slug: slugRef.current.value,
    };

    try {
      const res = await updateProduct(i._id, updatedData);
      console.log("Updated successfully", res);
      alert("Product updated!");
      
    } catch (err) {
      console.error("Failed to update", err);
      alert("Update failed.");
    }
  };
  const deleteSpecificProduct = async () => {
    try {
      const res = await deleteProduct(i._id);
      alert("Product Deleted!");
    } catch (err) {
      console.error("Failed to delete", err);
      alert("Delete failed.");
    }
  };

  return (
    <tr>
      <td>{1}</td>
      <td>
        <input className="form-control" ref={nameRef} defaultValue={i.name} />
      </td>
      <td>
        <input
          className="form-control"
          type="number"
          ref={stockRef}
          defaultValue={i.stock}
        />
      </td>
      <td>
        <input
          className="form-control"
          ref={categoryRef}
          defaultValue={i.category}
        />
      </td>
      <td>
        <input
          className="form-control"
          ref={costRef}
          type="number"
          defaultValue={i.costPrice}
        />
      </td>
      <td>
        <input
          className="form-control"
          ref={sellingRef}
          type="number"
          defaultValue={i.sellingPrice}
        />
      </td>
      <td>
        <input
          className="form-control"
          ref={descRef}
          defaultValue={i.description}
        />
      </td>
      <td>
        <input className="form-control" ref={slugRef} defaultValue={i.slug} />
      </td>
      <td>
        <button className="btn btn-sm btn-outline-primary" onClick={handleEdit}>
          Edit
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={deleteSpecificProduct}
        >
          DEL
        </button>
      </td>
    </tr>
  );
};
export default AdminTable;

const baseurl = 'http://localhost:4000';

export const getAllProduct = async () => {
    const response = await fetch(`${baseurl}/api/products/`);
    let result;
    try {
      result = await response.json();
    } catch (err) {
      console.warn("Could not parse JSON response", err);
    }
    if (!response.ok) {
      console.error("Server responded with error:", response.status, result);
      return { err: result || "Unknown error", status: response.status };
    }
    return result;
};

export const getProductDetails = async (id) => {
    const response = await fetch(`${baseurl}/api/products/${id}`);
    return await response.json();
};

//Admin
export const createProduct = async (data) => {
  const response = await fetch(`${baseurl}/api/products/`, {
    method: 'POST',
    body: data,
  });

  let result = null;
  try {
    result = await response.json();
  } catch (err) {
    console.warn("Could not parse JSON response", err);
  }
  if (!response.ok) {
    console.error("Server responded with error:", response.status, result);
    return { err: result || "Unknown error", status: response.status };
  }

  return result;
};

export const updateProduct = async (id, data) => {
  const response = await fetch(`${baseurl}/api/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to update');
  }

  return await response.json();
};

export const deleteProduct = async (id) => {
    const response = await fetch(`${baseurl}/api/products/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Delete failed");
    }
    return data;
};


export const getAdminAllProduct = async () => {
    const response = await fetch(`${baseurl}/api/admin-panel/products`);
    let result;
    try {
      result = await response.json();
    } catch (err) {
      console.warn("Could not parse JSON response", err);
    }
    if (!response.ok) {
      console.error("Server responded with error:", response.status, result);
      return { err: result || "Unknown error", status: response.status };
    }
    return result;
};
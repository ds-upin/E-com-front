const baseurl = 'http://localhost:4000';

export const getCart = async () => {
    const response = await fetch(`${baseurl}/api/cart/`, {
        method: 'GET',
        credentials: 'include', 
    });

    const data = await response.json();

    return {
        status: response.status,
        ok: response.ok,
        data: data
    };
};

export const AddItemCart = async (data) => {
  const response = await fetch(`${baseurl}/api/cart/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", 
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return {
    ...result,
    status: response.status,
  };
};


export const UpdateQuantity = async (data) => {
    const response = await fetch(`${baseurl}/api/cart/`,{
        method: "PUT",
        header: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const deleteItemCart = async (id) => {
    const response = await fetch(`${baseurl}/api/cart/${id}`,{
        method: "DELETE",
        header: {
            'Content-Type':'application/json',
        }
    });
    return response.json();
}

export const clearItemCart = async () => {
    const response = await fetch(`${baseurl}/api/cart/`,{
        method: "DELETE",
        header: {
            'Content-Type':'application/json',
        }
    });
    return response.json();
}
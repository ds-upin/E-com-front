const baseurl = 'https://e-com-server-omega.vercel.app';

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
    const response = await fetch(`${baseurl}/api/cart/`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify(data)
    });
    //console.log(response);
    return { status: response.status };
}

export const deleteItemCart = async (id) => {
    const response = await fetch(`${baseurl}/api/cart/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    return { status: response.status, data: response.json() };
}

export const clearItemCart = async () => {
    const response = await fetch(`${baseurl}/api/cart/`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
    });
    return response.json();
}
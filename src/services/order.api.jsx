const baseurl = 'https://e-com-server-eta.vercel.app';

export const placeOrder = async (data) => {
    const response = await fetch(`${baseurl}/api/orders/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify(data),
    });

    return await { status: response.status, data: response.json() };
};

export const cancelOrder = async (id) => {
    const response = await fetch(`${baseurl}/api/orders/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
    });
    return await response.json();
};

export const getOrder = async () => {
    const response = await fetch(`${baseurl}/api/orders/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
    });
    return await { status: response.status, data: response.json() };
};

export const getSpecificOrder = async (id) => {
    const response = await fetch(`${baseurl}/api/orders/${id}`);
    return await response.json();
};

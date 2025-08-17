const baseurl = 'http://localhost:4000';

export const placeOrder = async (data) => {
    const response = await fetch(`${baseurl}/api/orders/`,{
        method: 'POST',
        header: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    });

    return await response.json();
};

export const cancelOrder = async (id) => {
    const response = await fetch(`${baseurl}/api/orders/${id}`,{
        method: 'PUT',
        header: {
            'Content-Type':'application/json',
        },
    });
    return await response.json();
};

export const getOrder = async () => {
    const response = await fetch(`${baseurl}/api/orders/`);
    return await response.json();
};

export const getSpecificOrder = async (id) => {
    const response = await fetch(`${baseurl}/api/orders/${id}`);
    return await response.json();
};

const baseurl = 'http://localhost:4000';

export const getOrders = async () =>{
    const response = await fetch(`${baseurl}/api/admin-panel/orders`);
    return await response.json();
}

export const getOrderStatusById = async (id) => {
    const response = await fetch(`${baseurl}/api/admin-panel/orders/${id}`);
    return response.json();
}

export const editOrderStatus = async (id) => {
    const response = await fetch(`${baseurl}/api/admin-panel/orders/${id}`,{
        method: "PUT",
    });
    return response.json();
}
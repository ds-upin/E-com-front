const baseurl = 'https://e-com-server-eta.vercel.app';

export const getAdminOrders = async () => {
    const response = await fetch(`${baseurl}/api/admin-panel/orders`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    const data = await response.json();
    return { status: response.status, data: data };
}

export const getOrderByStatus = async ({ status }) => {
    //console.log(status);
    const response = await fetch(`${baseurl}/api/admin-panel/orders/${status}`, { credentials: "include", headers: { "Content-Type": "application/json" } });
    const data = await response.json();
    return { data, status: response.status };
}

export const editOrderStatus = async ({ id, status }) => {
    const response = await fetch(`${baseurl}/api/admin-panel/orders/${id}`, {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify({ status }),
        headers: {
            "Content-Type": "application/json",  // <--- MUST HAVE
        },
    });
    const data = await response.json();
    return { status: response.status, data }
}
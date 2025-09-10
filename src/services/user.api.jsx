const baseurl = "https://e-com-server-eta.vercel.app";

export const updateUserProfile = async (data) => {
    const response = await fetch(`${baseurl}/api/users/me`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data)
    });

    const datas = await response.json();
    return {
        status: response.status,
        data: datas,
    }
}

export const deleteAccount = async () => {
    const response = await fetch(`${baseurl}/api/users/me`, {
        method: 'DELETE',
    });
    return await response.json();
}

export const loggedIn = async () => {
    const response = await fetch(`${baseurl}/api/users/me`);
    return await response.json();
}

//Admin
export const getUserById = async (id) => {
    const response = await fetch(`${baseurl}/api/users/${id}`);
    return await response.json();
}

//ADMIN
export const getAllUser = async () => {
    const response = await fetch(`${baseurl}/api/users/`);
    return await response.json();
}
const apiurl = 'http://localhost:4000';

export const loginApi = async (data) => {
    try {
        const response = await fetch(`${apiurl}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include",
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("Login failed:", result);
            return { err: result, status: response.status };
        }

        return { data: result, status: response.status };
    } catch (err) {
        console.error("Network error during login", err);
        return { err: "Network error", status: 500 };
    }
};

export const verifyEmail = async ({ email, code }) => {
    const res = await fetch('http://localhost:4000/api/auth/verify-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code }),
    });
    return res;
};

export const registerApi = async (data) => {
    const response = await fetch(`${apiurl}/api/auth/register`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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

    return { data: result, status: response.status };
};

export const logoutApi = async () => {
    const response = await fetch(`${apiurl}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
    });

    const result = await response.json();
    return {
        ...result,
        status: response.status,
    };
};


export const forgotPasswordApi = async (data) => {
    const response = await fetch(`${apiurl}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export const fetchUserData = async () => {
    const response = await fetch(`${apiurl}/api/auth/me`, {
        method: "GET",
        credentials: "include",
    });

    const result = await response.json();
    return {
        ...result,
        status: response.status,
    };
};

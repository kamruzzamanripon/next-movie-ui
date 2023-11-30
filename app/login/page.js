"use client";


const Page = () => {


    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-lg w-80">
                <h1 className="text-2xl font-semibold mb-4">Login </h1>
                <form >
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full border rounded-md px-3 py-2 text-red-800"
                            required

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            className="mt-1 block w-full border rounded-md px-3 py-2 text-red-800"
                            required

                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>


            </div>
        </div>
    );
};

export default Page;


export default function SignUp() {
    const render = (
        <div className="bg-no-repeat bg-cover bg-center relative" >
            <div className="border-2">
            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center ">
                <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div className="self-start hidden lg:flex flex-col  text-white">
                    <img src="" className="mb-3" />
                    <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome back</h1>
                    </div>
                </div>
                <div className="flex justify-center self-center z-10">
                    <div className="p-12 bg-white-500 mx-auto rounded-2xl w-100 ">
                        <div className="mb-4">
                        <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                        <p className="text-gray-700">Please sign in to your account.</p>
                        </div>
                        <div className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                        <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="mail@gmail.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                Password
                            </label>
                            <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="Enter your password" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                            </div>
                            <div className="text-sm">
                                I don't have an account
                                <a href="/signup" className="ml-1 text-orange-500 hover:underline">
                                Sign Up
                                </a>
                            </div>
                        </div>
                        <div>
                        <button type="submit" className="w-full flex justify-center bg-orange-500  text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                            Sign in
                        </button>
                        </div>
                        </div>
                        <div className="pt-5 text-center text-gray-400 text-xs">
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
    return render
}

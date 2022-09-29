import { Eye, House, Key, SignIn, User, X } from "phosphor-react";
import { useState } from "react";

export default function Login() {
    const [show, setShow] = useState(false);

    return (
        <div className="w-full bg-gradient-to-b from-slate-900 to-slate-700 font-ubuntu text-slate-200">
            <form className="flex flex-col gap-y-5 py-5 px-3 h-[100vh]">
                <div className="text-3xl flex items-center justify-center">
                    <h1>Login</h1>
                    <SignIn size={32} />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-x-3">
                        Username
                        <User />
                    </label>

                    <input
                        className="py-2 px-3 outline-none text-slate-900 rounded-md bg-slate-50 focus:outline-orange-200 outline outline-[3px] focus:bg-slate-100 transition-all"
                        type={'text'}
                        placeholder='username here' />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-x-3">
                        Password
                        <Key />
                    </label>

                    <input
                        className="py-2 px-3 outline-none text-slate-900 rounded-md bg-slate-50 focus:outline-orange-200 outline outline-[3px] focus:bg-slate-100 transition-all"
                        type={'password'}
                        placeholder='your password' />
                    <small>Don't have an account? <a href="#">register right here!</a></small>
                </div>

                <div className="mt-6 ">
                    <button className="w-1/3 bg-teal-200 rounded-sm text-slate-900 hover:shadow-md hover:text-slate-100 hover:bg-teal-400 transition-all ease-in-ou px-3 py-2">Login</button>
                </div>
            </form>

            <footer className="w-full fixed bottom-0 py-3 px-3 bg-teal-400 text-white">
                <small>mytodolist.me © 2022 | All rights reserved</small>
            </footer>
        </div>
    )
}
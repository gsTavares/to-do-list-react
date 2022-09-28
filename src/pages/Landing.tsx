import { Eye, House, List, SignIn, X } from "phosphor-react";
import { useState } from "react";

/**
 * 
 * Color pallets
 * #bg-slate-900
 * #bg-teal-900
 * #bg-emerald-700
 * #bg-orange-200
 * 
 */

export function Landing() {
    const [show, setShow] = useState(false);

    return (
        <div id="wrapper" className="font-ubuntu  delay-300">
            <nav id="menu" className="flex bg items-center bg-slate-900 text-slate-100">
                <div className="px-3 py-3 rounded-sm lg:hidden">
                    <button className="flex items-center" onClick={() => {
                        setShow(!show);
                    }}>
                        {show ? <X size={32} /> : <List size={32} /> } 
                    </button>
                </div>


                <div className="ml-auto mr-auto lg:hidden">
                    <span className="text-xl">mytodolist.me</span>
                </div>
            </nav>

            <div id="menu-bar" className={`opacity-0 transition-all duration-200 ease-linear ${show ? 'h-[9vh] opacity-100' : 'h-[0px]'} flex flex-row justify-evenly bg-slate-700 px-3 py-3 border-b-4 border-teal-400 text-slate-100`}>
                <div className={`${show ? 'flex' : 'hidden'} items-center gap-x-3`}>
                    <SignIn size={25} />
                    <p>Sign up</p>
                </div>

            <div className={`${show ? 'flex' : 'hidden'} items-center gap-x-3`}>
                    <House size={25} />
                    <p>Home</p>
                </div>

                <div className={`${show ? 'flex' : 'hidden'} items-center gap-x-3`}>
                    <Eye size={25} />
                    <p>Preview</p>
                </div>
            </div>

            <div id="content" className="mt-5 px-3">
                <div id="content-header">
                    <h1 className="text-3xl">Simple, faster and extremely necessary</h1>
                    <p className="mt-2">Start to organize your routine right now!</p>
                    <div className="flex justify-start gap-x-5 mt-5">
                        <button className="flex items-center justify-center p-3 w-32 bg-orange-200 rounded-md hover:shadow-md transition-shadow ease-in-out" id="login">Sign up</button>
                        <button className="flex items-center justify-center p-3 w-32 bg-teal-200 rounded-md hover:shadow-md transition-shadow ease-in-out" id="preview">Preview</button>
                    </div>
                </div>

                <div id="logo" className="mt-9 flex flex-col justify-center items-center min-h-[35vh]">
                    {'{Logo goes here :p}'}
                    <small>img description</small>
                </div>
            </div>

            <footer className="w-full fixed bottom-0 py-3 px-3 bg-teal-400 text-white">
                <small>mytodolist.me © 2022 | All rights reserved</small>
            </footer>
        </div>
    )
}
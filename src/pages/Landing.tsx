import { useState } from "react";
import Menu from "../components/Menu";

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
    return (
        <div id="wrapper" className="font-ubuntu">
            <Menu />

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
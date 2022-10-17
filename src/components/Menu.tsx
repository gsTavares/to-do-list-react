import { List, X, SignIn, House, Eye } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {

    const [show, setShow] = useState<boolean>(false);

    return (
        <div>
            <nav id="menu" className="flex bg items-center bg-slate-900 text-slate-100">
                <div className="px-3 py-3 rounded-sm lg:hidden">
                    <div className="flex items-center" onClick={() => {
                        setShow(!show);
                    }}>
                        {show ? <X size={32} /> : <List size={32} />}
                    </div>
                </div>


                <div className="ml-auto mr-auto lg:hidden">
                    <span className="text-xl">mytodolist.me</span>
                </div>
            </nav>

            <div id="menu-bar" className={`opacity-0 transition-all duration-200 ease-linear ${show ? 'h-[9vh] opacity-100' : 'h-[0px]'} flex flex-row justify-evenly bg-slate-700 px-3 py-3 border-b-4 border-teal-400 text-slate-100`}>
                <Link to={'/login'} className={`${show ? 'flex' : 'hidden'} items-center gap-x-3`}>
                    <SignIn size={25} />
                    <p>Sign up</p>
                </Link>

                <Link to={'/'} className={`${show ? 'flex' : 'hidden'} items-center gap-x-3`}>
                    <House size={25} />
                    <p>Home</p>
                </Link>
            </div>
        </div>
    )
}
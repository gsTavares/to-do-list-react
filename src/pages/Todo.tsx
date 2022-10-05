import { Checks, User } from "phosphor-react";
import Menu from "../components/Menu";

export default function () {
    return (
        <div className="w-full">
            <Menu />

            <div className="px-3 py-3">
                <div>
                    <h1 className="text-xl font-bold flex gap-x-3 justify-center items-center">
                        <User size={32} />
                        {`{username here}`}'s TODO list
                    </h1>
                </div>
            </div>
            <div className="px-3 py-3 bg-orange-100 mt-6">
                <h2 className="text-[1.5rem] flex gap-x-1 items-center justify-center">
                    <Checks />
                    New Task
                </h2>
                <form className="flex flex-col mt-2">
                    <label htmlFor="description">Description</label>
                    <textarea className="h-24 rounded-md px-3 py-2 leading-relaxed" name="description" />

                    <label className="mt-2" htmlFor="estipulatedCompleteTime">Time to complete</label>
                    <div className="flex justify-between">
                        <input className="w-1/4 px-2 py-1 rounded-md" type={'text'} name="hours" placeholder="HH" maxLength={2} max={2} />
                        <input className="w-1/4 px-2 py-1 rounded-md" type={'text'} name="minutes" placeholder="mm" maxLength={2} max={2} />
                        <input className="w-1/4 px-2 py-1 rounded-md" type={'text'} name="seconds" placeholder="ss" maxLength={2} max={2} />
                    </div>

                    <button
                        className="mt-3 flex items-center justify-center p-2 bg-teal-200 rounded-md hover:shadow-md transition-shadow ease-in-out"
                    >
                        Save
                    </button>
                </form>
            </div>


            <footer className="w-full fixed bottom-0 py-3 px-3 bg-teal-400">
                <small className="text-black">mytodolist.me © 2022 | All rights reserved</small>
            </footer>
        </div>
    )
}
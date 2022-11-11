import React from "react";

const Card = ({ title, description }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg h-full">
            <img className="w-full h-32 object-cover object-center" src="https://images.unsplash.com/photo-1616096219198-452584a402f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
            <div className="bg-slate-700 text-slate-700 text-left p-3 h-full">
                <h1 className="text-lg text-gray-200">{title}</h1>
                <div className="h-px bg-slate-500 my-3"></div>
                <p className="text-xs font-bold text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card
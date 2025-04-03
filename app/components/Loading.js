import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-full flex-col gap-2">
            <div className="animate-spin border-3 border-t-transparent w-10 h-10  rounded-full border-white/70"></div>
            <p className="text-white/90">It may take a while</p>
        </div>
    );
};

export default Loading;
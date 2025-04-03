import React from 'react'

const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className="flex fixed bottom-10 left-[50%] -translate-x-1/2">
            <div className='flex-1 h-25 p-2 outline-none rounded-[30px] resize-none w-200 bg-zinc-800 ml-60 relative'>

            <label
                htmlFor="fileInput"
                className="h-full w-full rounded-3xl border-dashed border-2 border-white/70 flex justify-center items-center cursor-pointer"
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={ShowImageHandler}
                />
                <span className="text-white/60">
                    Click and drag to upload your image
                </span>
            </label>
            </div>
        </div>
    );
};

export default ImageUpload;
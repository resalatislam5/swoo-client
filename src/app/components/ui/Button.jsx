function Button({text, style}) {
    return (
        <button className={`${style} bg-white text-black w-fit font-medium text-sm px-5 py-3 rounded-[10px]`}>
            {text}
        </button>
    );
}

export default Button;
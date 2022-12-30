import { useRef, useEffect } from "react";

const InputRefExample = () => {
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
        setTimeout(() => {
            inputRef2.current.focus();
        }, 5000);
    }, []);

    return (
        <div>
            <input ref={inputRef} />
            <input ref={inputRef2} />
            <button onClick={() => (inputRef.current.value = "tomodachi")}>
                Focus on Input{" "}
            </button>
        </div>
    );
};
export default InputRefExample;

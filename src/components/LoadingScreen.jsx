import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [progress, setProgress] = useState(0); 
    const fullText = "Sadeeq Umar";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            setProgress((index / fullText.length) * 100); 
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    if (onComplete) {
                        onComplete();
                    }
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]); 

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
                <span className="ml-1 animate-blink">|</span> 
            </div>

            {/* Dynamic Loading Bar */}
            <div className="w-[200px] h-[2px] bg-gray-800 rounded overflow-hidden mt-4">
                <div 
                    className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all duration-100"
                    style={{ width: `${progress}%` }} // Dynamic width
                ></div>
            </div>
        </div>
    );
};

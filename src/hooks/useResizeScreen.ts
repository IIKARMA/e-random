import { useEffect, useState } from "react";

export const useResizeScreen = () => {
    const [screenWidth, setScreenWidth] = useState<number>(window.screen.availWidth);
    useEffect(() => {
        const handleScreenResize = () => {
            setScreenWidth(window.screen.availWidth);
        };

        window.addEventListener("resize", handleScreenResize);

        return () => {
            window.removeEventListener("resize", handleScreenResize);
        };
    }, []);

    return { screenWidth }

};

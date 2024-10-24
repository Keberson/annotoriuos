import {useState, useEffect} from "react";

const useRightClickMenu = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        e.pageX + 150 > window.innerWidth ? setX(window.innerWidth - 180) : setX(e.pageX);
        e.pageY + 200 > window.innerWidth ? setY(window.innerWidth - 230) : setY(e.pageY);
        setShowMenu(true)
    };

    const handleClick = () => {
        showMenu && setShowMenu(false);
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);
        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('contextmenu', handleContextMenu);
        }
    });

    return { x, y, showMenu }
};

export default useRightClickMenu;

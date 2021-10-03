import { useEffect, useState } from 'react';

const useDidMountEffect = (func: Function, deps: any[]) => {
    const [runChild, setRunChild] = useState(false);
    useEffect(() => {
        let unmount;
        if (runChild) unmount = func();
        else setRunChild(true);
        return () => {
            unmount && unmount();
        };
    }, [...deps]);
};

export default useDidMountEffect;

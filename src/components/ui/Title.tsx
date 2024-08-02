import { ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }) => {
    return <h1 className="font-bold text-2xl my-3">{children}</h1>;
};

export default Title;

import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import BoxModel from './components/BoxModel';
import Padding from './components/Padding';
import Title from '../../components/ui/Title';
import { Container } from '@mui/material';
import { ReactNode } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Navigation = () => {
    return (
        <Container>
            <nav>
                <Title>Concepts</Title>
                <ul>
                    <li>
                        <Link to="/css/boxmodel">Box Model</Link>
                    </li>
                    <li>
                        <Link to="/css/padding">Padding</Link>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

const CSS = () => {
    return (
        <div>
            <Routes>
                <Route path="/" index element={<Navigation />} />
                <Route
                    path="/boxmodel"
                    element={
                        <ContainerWrap>
                            <BoxModel />
                        </ContainerWrap>
                    }
                />
                <Route
                    path="/padding"
                    element={
                        <ContainerWrap>
                            <Padding />
                        </ContainerWrap>
                    }
                />
            </Routes>
        </div>
    );
};

const ContainerWrap = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    return (
        <Container>
            <button onClick={handleBack} className="my-4">
                <ArrowBackIcon width={'12px'} sx={{ color: 'purple', marginRight: '2px' }} /> back
            </button>
            {children}
        </Container>
    );
};

export default CSS;

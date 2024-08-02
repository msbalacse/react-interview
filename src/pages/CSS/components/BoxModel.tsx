import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from '@mui/material';
import Title from '../../../components/ui/Title';
import { useEffect, useRef, useState } from 'react';

type TSide = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};

type TProperties = {
    padding: TSide;
    margin: TSide;
    border: TSide;
};

const BoxModel = () => {
    const model = useRef<HTMLDivElement>(null);

    const Sides = ['left', 'right', 'top', 'bottom'];

    const [paddingFace, setPaddingFace] = useState<string>('left');
    const [paddingValue, setPaddingValue] = useState<number>(1);

    const [marginFace, setMarginFace] = useState<string>('left');
    const [marginValue, setMarginValue] = useState<number>(1);

    const initialProperty: TProperties = {
        border: {
            top: 1,
            bottom: 1,
            left: 1,
            right: 1,
        },
        margin: {
            top: 1,
            bottom: 1,
            left: 1,
            right: 1,
        },
        padding: {
            top: 1,
            bottom: 1,
            left: 1,
            right: 1,
        },
    };

    const [properties, setProperties] = useState<TProperties>(initialProperty);

    function handleValuePadding(e: any) {
        setPaddingValue(e.target.value);
    }

    function handlleValueMargin(e: any) {
        setMarginValue(e.target.value);
    }

    const handlePaddingSide = (event: SelectChangeEvent) => {
        setPaddingFace(event.target.value as string);
    };

    const handleMarginSide = (event: SelectChangeEvent) => {
        setMarginFace(event.target.value as string);
    };

    const handleSet = () => {
        setProperties({
            ...properties,
            padding: { ...properties.padding, [paddingFace]: paddingValue },
            margin: { ...properties.margin, [marginFace]: marginValue },
        });
        console.log(properties);
    };

    useEffect(() => {
        if (model.current) {
            model.current.style.padding = `${properties.padding.top}px ${properties.padding.right}px ${properties.padding.bottom}px ${properties.padding.left}px`;

            model.current.style.margin = `${properties.margin.top}px ${properties.margin.right}px ${properties.margin.bottom}px ${properties.margin.left}px`;
        }
    }, [properties]);

    return (
        <div>
            <Title>Box Model</Title>
            <Grid container spacing={2}>
                <Grid
                    item
                    md={6}
                    sx={{ border: '1px solid #000', margin: '1rem', height: '10rem', overflow: 'hidden' }}
                >
                    <Box>
                        <div ref={model} style={{ background: 'yellow', width: 'fit-content' }}>
                            Content
                        </div>
                    </Box>
                </Grid>

                <Grid item md={6}>
                    <Box sx={{ margin: '1rem 0' }}>
                        <TextField type="number" placeholder="padding" onChange={handleValuePadding} />
                        <FormControl>
                            <InputLabel id="lebel-padding-side">Side</InputLabel>
                            <Select
                                labelId="lebel-padding-side"
                                id="padding-side"
                                value={paddingFace}
                                label="side"
                                onChange={handlePaddingSide}
                            >
                                {Sides.map((side) => (
                                    <MenuItem value={side}>{side}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ margin: '1rem 0' }}>
                        <TextField type="number" placeholder="margin" onChange={handlleValueMargin} />
                        <FormControl>
                            <InputLabel id="lebel-margin-side">Side</InputLabel>
                            <Select
                                labelId="lebel-margin-side"
                                id="margin-side"
                                value={marginFace}
                                label="side"
                                onChange={handleMarginSide}
                            >
                                {Sides.map((side) => (
                                    <MenuItem value={side}>{side}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <Button variant="contained" onClick={handleSet}>
                            Set
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default BoxModel;

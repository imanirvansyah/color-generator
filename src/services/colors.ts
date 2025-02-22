import { ColorResponse } from "./colors.type";

export const getColors = async (color: string) => {
    try {
        const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=monochrome&count=5`, {
            method: 'GET',
        });
        const result: ColorResponse = await response.json();
        return (result);
    } catch (error) {
        console.error('Error fetching colors:', error);
    }
};
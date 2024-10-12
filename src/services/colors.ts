export const getColors = async () => {
    try {
        const response = await fetch('http://colormind.io/api/', {
            method: 'POST',
            body: JSON.stringify({
                model: 'default', // You can change model here (e.g., 'ui', 'default')
            }),
        });
        const result = await response.json();
        return (result.result);
    } catch (error) {
        console.error('Error fetching colors:', error);
    }
};
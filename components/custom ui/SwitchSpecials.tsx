import React, { useState, useEffect } from 'react';
import { Switch } from '../ui/switch';

interface SwitchSpecialsProps {
    isSpecials: boolean | undefined;
    slug: string | null;
}

const SwitchSpecials = ({ isSpecials, slug }: SwitchSpecialsProps) => {
    const [value, setValue] = useState(isSpecials);

    useEffect(() => {
        console.log("SwitchSpecials component mounted with ID:", { slug, value });
        if (!slug) {
            console.warn("Warning: ID is undefined or null");
        }
    }, [slug]);

    const handleToggleSpecials = async () => {
        try {
            // Toggle the value
            const newValue = !value;
            setValue(newValue);

            // Send API request to update specials status
            const response = await fetch('http://localhost:1999/api/v1/product', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    slug,           // Send the slug
                    specials: newValue, // Send the new specials value
                }),
            });

            const data = await response.json();

            // Check if the request was successful
            if (!response.ok) {
                console.error('Failed to update specials:', data.error);
            } else {
                console.log('Specials updated successfully:', data.product);
            }
        } catch (error) {
            console.error('Error updating specials:', error);
        }
    };

    return (
        <Switch
            checked={value}
            onCheckedChange={handleToggleSpecials} // Call the function on switch toggle
        />
    );
};

export default SwitchSpecials;

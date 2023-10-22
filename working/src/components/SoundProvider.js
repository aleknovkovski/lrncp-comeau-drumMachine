'use client'
import React from 'react';

export const SoundContext = React.createContext();

function SoundProvider({ children }) {
    const [soundEnabled, setSoundEnabled] = React.useState(true)

    return (
        <SoundContext.Provider
            value={{ soundEnabled, setSoundEnabled }}
        >
            {children}
        </SoundContext.Provider>
    );
}

export function useSoundEnabled() {
    const data = React.useContext(
        SoundContext
    );

    if (!data) {
        throw new Error(
            'Cannot consume SoundEnabled context without a SoundEnabledProvider'
        );
    }

    return data;
}

export default SoundProvider;
import { useState, useEffect, useRef } from 'react';

const useOnlineCounter = (active: boolean) => {
    const [count, setCount] = useState(Math.floor(Math.random() * 60) + 30); // Commence entre 30 et 90
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const scheduleNextUpdate = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            // Met à jour toutes les 2 à 7 secondes
            const interval = 2000 + Math.random() * 5000;

            timeoutRef.current = window.setTimeout(() => {
                setCount(prevCount => {
                    // 80% de chance d'augmenter, 20% de chance de diminuer
                    const shouldIncrease = Math.random() < 0.8;
                    let change = 0;

                    if (shouldIncrease) {
                        // Augmente de 1 à 5
                        change = Math.floor(Math.random() * 5) + 1;
                    } else {
                        // Diminue de 1 ou 2, mais sans descendre en dessous d'un minimum
                        change = -(Math.floor(Math.random() * 2) + 1);
                    }
                    
                    const newCount = prevCount + change;
                    return newCount < 20 ? 20 : newCount; // S'assure de ne pas descendre trop bas
                });
                scheduleNextUpdate();
            }, interval);
        };

        if (active) {
            scheduleNextUpdate();
        } else {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [active]);

    return count;
};

export default useOnlineCounter;

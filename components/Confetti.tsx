
import React, { useRef, useEffect } from 'react';

const Confetti: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const pieces: any[] = [];
        const numberOfPieces = 200;
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
        const animationStartTime = Date.now();
        const duration = 5000; // 5 seconds

        function createPieces() {
            for (let i = 0; i < numberOfPieces; i++) {
                pieces.push({
                    x: width * (0.1 + Math.random() * 0.8),
                    y: -20,
                    size: (Math.random() * 0.5 + 0.75) * 10,
                    weight: Math.random() * 0.4 + 0.1,
                    rotation: Math.random() * 360,
                    rotationSpeed: Math.random() * 6 - 3,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    velocityX: Math.random() * 8 - 4,
                    velocityY: Math.random() * 5 + 2,
                });
            }
        }

        function update() {
            if (Date.now() - animationStartTime > duration) {
               ctx!.clearRect(0, 0, width, height);
               return;
            }

            ctx!.clearRect(0, 0, width, height);
            pieces.forEach(p => {
                p.velocityY += p.weight * 0.05;
                p.y += p.velocityY;
                p.x += p.velocityX;
                p.rotation += p.rotationSpeed;
                
                ctx!.save();
                ctx!.translate(p.x, p.y);
                ctx!.rotate(p.rotation * Math.PI / 180);
                ctx!.fillStyle = p.color;
                ctx!.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                ctx!.restore();
            });

            animationFrameId.current = requestAnimationFrame(update);
        }
        
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);

        createPieces();
        animationFrameId.current = requestAnimationFrame(update);

        return () => {
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000, pointerEvents: 'none' }} />;
};

export default Confetti;

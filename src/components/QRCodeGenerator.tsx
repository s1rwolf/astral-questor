
import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QRCodeGeneratorProps {
  value: string;
  size?: number;
  className?: string;
}

const QRCodeGenerator = ({ value, size = 200, className }: QRCodeGeneratorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && value) {
      QRCode.toCanvas(
        canvasRef.current, 
        value, 
        {
          width: size,
          margin: 1,
          color: {
            dark: '#ffffff',
            light: '#1e1b4b00'
          },
          errorCorrectionLevel: 'H'
        },
        (error) => {
          if (error) console.error('Error generating QR code:', error);
        }
      );
    }
  }, [value, size]);

  return (
    <div className={`flex flex-col items-center ${className || ''}`}>
      <div className="celestial-card p-4 bg-space-900/80">
        <canvas ref={canvasRef} className="rounded-lg" />
      </div>
      <p className="mt-4 text-center text-space-300 text-sm">
        Escaneie o código para acessar seu mapa astral
      </p>
    </div>
  );
};

export default QRCodeGenerator;

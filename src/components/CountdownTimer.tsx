import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  // Set target date to 3 days from now if not provided
  const defaultTarget = new Date();
  defaultTarget.setDate(defaultTarget.getDate() + 3);
  
  const target = targetDate || defaultTarget;
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const targetTime = target.getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [target]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`grid grid-cols-4 gap-4 ${className}`}>
      <div className="text-center">
        <div className="bg-gold rounded-lg p-4 mb-2 shadow-gold">
          <div className="text-2xl md:text-3xl font-bold text-navy animate-pulse">
            {formatNumber(timeLeft.days)}
          </div>
        </div>
        <div className="text-white font-semibold text-sm md:text-base">Dias</div>
      </div>
      <div className="text-center">
        <div className="bg-gold rounded-lg p-4 mb-2 shadow-gold">
          <div className="text-2xl md:text-3xl font-bold text-navy animate-pulse">
            {formatNumber(timeLeft.hours)}
          </div>
        </div>
        <div className="text-white font-semibold text-sm md:text-base">Horas</div>
      </div>
      <div className="text-center">
        <div className="bg-gold rounded-lg p-4 mb-2 shadow-gold">
          <div className="text-2xl md:text-3xl font-bold text-navy animate-pulse">
            {formatNumber(timeLeft.minutes)}
          </div>
        </div>
        <div className="text-white font-semibold text-sm md:text-base">Min</div>
      </div>
      <div className="text-center">
        <div className="bg-gold rounded-lg p-4 mb-2 shadow-gold">
          <div className="text-2xl md:text-3xl font-bold text-navy animate-pulse">
            {formatNumber(timeLeft.seconds)}
          </div>
        </div>
        <div className="text-white font-semibold text-sm md:text-base">Seg</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
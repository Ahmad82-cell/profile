import { useEffect, useRef, useState } from "react";
import "../Page/SkillCircle.css";

export default function SkillCircle({ name, percent, color, sub, icon }) {
    const circleRef = useRef(null);
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // يشتغل مرة وحدة فقط
                }
            },
            { threshold: 0.5 } // لازم نصف العنصر يبان
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible || !circleRef.current) return;

        const circle = circleRef.current;
        const radius = 45;
        const circumference = 2 * Math.PI * radius;

        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference;

        const offset = circumference * (1 - percent / 100);
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 200);
    }, [visible, percent]);

    return (
        <div
            ref={containerRef}
            className="text-center p-3 shadow-sm bg-dark rounded-3 text-light h-100 d-flex flex-column align-items-center"
        >
            {/* أيقونة واسم */}
            <div className="d-flex align-items-center gap-2 mb-2">
                {icon && <span className="fs-4">{icon}</span>}
                <h5 className="mb-0">{name}</h5>
            </div>

            {/* دائرة */}
            <div className="position-relative d-inline-block mb-2">
                <svg width="120" height="120">
                    <circle
                        cx="60"
                        cy="60"
                        r="45"
                        strokeWidth="10"
                        className="bg-circle"
                    />
                    <circle
                        ref={circleRef}
                        cx="60"
                        cy="60"
                        r="45"
                        strokeWidth="10"
                        stroke={color}
                        className="progress-circle"
                    />
                </svg>
                <div className="circle-label">{percent}%</div>
            </div>

            {/* الوصف */}
            <p className=" small">{sub}</p>
        </div>
    );
}
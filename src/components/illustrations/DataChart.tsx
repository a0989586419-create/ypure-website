"use client";

import { useRef, useEffect, useState } from "react";

interface DataChartProps {
  type: "bar" | "donut";
  data: { label: string; value: number; color?: string }[];
  className?: string;
  title?: string;
}

const DEFAULT_COLORS = [
  "#E5B94C",
  "#c9a23e",
  "#ad8c32",
  "#917626",
  "#76601a",
  "#8a8a8a",
  "#a0a0a0",
  "#b6b6b6",
];

function useInView(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function BarChart({
  data,
  title,
}: {
  data: DataChartProps["data"];
  title?: string;
}) {
  const ref = useRef<SVGSVGElement | null>(null);
  const inView = useInView(ref);

  const maxValue = Math.max(...data.map((d) => d.value));
  const barCount = data.length;
  const padding = 60;
  const chartWidth = 400;
  const chartHeight = 220;
  const barAreaWidth = chartWidth - padding * 2;
  const barWidth = Math.min(40, barAreaWidth / barCount - 10);
  const gap = (barAreaWidth - barWidth * barCount) / (barCount + 1);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${chartWidth} ${chartHeight + 40}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && (
        <text
          x={chartWidth / 2}
          y="20"
          textAnchor="middle"
          fill="#E5B94C"
          fontSize="14"
          fontWeight="bold"
        >
          {title}
        </text>
      )}

      {/* Y-axis */}
      <line
        x1={padding}
        y1={title ? 35 : 15}
        x2={padding}
        y2={chartHeight}
        stroke="#E5B94C"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      {/* X-axis */}
      <line
        x1={padding}
        y1={chartHeight}
        x2={chartWidth - padding + 10}
        y2={chartHeight}
        stroke="#E5B94C"
        strokeWidth="1.5"
      />

      {/* Grid lines */}
      {[0.25, 0.5, 0.75, 1].map((frac) => {
        const y = chartHeight - frac * (chartHeight - (title ? 45 : 25));
        return (
          <line
            key={frac}
            x1={padding}
            y1={y}
            x2={chartWidth - padding + 10}
            y2={y}
            stroke="#E5B94C"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
        );
      })}

      {data.map((d, i) => {
        const barHeight =
          (d.value / maxValue) * (chartHeight - (title ? 55 : 35));
        const x = padding + gap + i * (barWidth + gap);
        const y = chartHeight - barHeight;
        const color = d.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];

        return (
          <g key={d.label}>
            <rect
              x={x}
              y={inView ? y : chartHeight}
              width={barWidth}
              height={inView ? barHeight : 0}
              fill={color}
              rx="2"
              style={{
                transition: `y 0.8s ease-out ${i * 0.1}s, height 0.8s ease-out ${i * 0.1}s`,
              }}
            />
            {/* Value text */}
            <text
              x={x + barWidth / 2}
              y={inView ? y - 6 : chartHeight - 6}
              textAnchor="middle"
              fill={color}
              fontSize="10"
              fontWeight="bold"
              style={{
                transition: `y 0.8s ease-out ${i * 0.1}s`,
                opacity: inView ? 1 : 0,
              }}
            >
              {d.value}
            </text>
            {/* Label */}
            <text
              x={x + barWidth / 2}
              y={chartHeight + 16}
              textAnchor="middle"
              fill="#888"
              fontSize="9"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function DonutChart({
  data,
  title,
}: {
  data: DataChartProps["data"];
  title?: string;
}) {
  const ref = useRef<SVGSVGElement | null>(null);
  const inView = useInView(ref);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setMounted(true), 50);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const total = data.reduce((sum, d) => sum + d.value, 0);
  const cx = 150;
  const cy = 140;
  const radius = 80;
  const strokeWidth = 28;
  const circumference = 2 * Math.PI * radius;

  let accumulatedOffset = 0;

  return (
    <svg
      ref={ref}
      viewBox="0 0 300 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && (
        <text
          x={cx}
          y="20"
          textAnchor="middle"
          fill="#E5B94C"
          fontSize="14"
          fontWeight="bold"
        >
          {title}
        </text>
      )}

      {/* Background ring */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        stroke="#1a1a2e"
        strokeWidth={strokeWidth}
        fill="none"
      />

      {data.map((d, i) => {
        const segmentLength = (d.value / total) * circumference;
        const color = d.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
        const offset = accumulatedOffset;
        accumulatedOffset += segmentLength;

        return (
          <circle
            key={d.label}
            cx={cx}
            cy={cy}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
            strokeDashoffset={mounted ? -offset : circumference}
            strokeLinecap="butt"
            transform={`rotate(-90 ${cx} ${cy})`}
            style={{
              transition: `stroke-dashoffset 1s ease-out ${i * 0.15}s`,
            }}
          />
        );
      })}

      {/* Center text */}
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        fill="white"
        fontSize="22"
        fontWeight="bold"
      >
        {total}
      </text>
      <text
        x={cx}
        y={cy + 14}
        textAnchor="middle"
        fill="#888"
        fontSize="10"
      >
        Total
      </text>

      {/* Legend */}
      {data.map((d, i) => {
        const color = d.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
        const lx = 20;
        const ly = 250 + i * 16;
        if (ly > 275) return null;
        return (
          <g key={d.label + "-legend"}>
            <rect x={lx} y={ly - 6} width="8" height="8" rx="2" fill={color} />
            <text x={lx + 14} y={ly + 2} fill="#aaa" fontSize="9">
              {d.label} ({Math.round((d.value / total) * 100)}%)
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function DataChart({ type, data, className = "", title }: DataChartProps) {
  return (
    <div className={className}>
      {type === "bar" ? (
        <BarChart data={data} title={title} />
      ) : (
        <DonutChart data={data} title={title} />
      )}
    </div>
  );
}

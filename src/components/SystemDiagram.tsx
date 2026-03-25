"use client";

import React from "react";

interface SystemDiagramProps {
  className?: string;
}

const GOLD = "#E5B94C";
const GOLD_DIM = "rgba(229, 185, 76, 0.3)";
const NODE_BG = "#0d0d2b";
const NODE_BORDER = "rgba(229, 185, 76, 0.2)";
const WHITE = "#ffffff";
const WHITE_DIM = "#9ca3af";

// Node positions in SVG viewBox (800 x 400)
const VW = 800;
const VH = 420;

interface DiagramNode {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  icon: "phone" | "cloud" | "iot" | "washer" | "pay" | "notify" | "chart";
}

const nodes: DiagramNode[] = [
  { id: "phone", label: "LINE LIFF APP", sub: "消費者手機端", x: 80, y: 160, icon: "phone" },
  { id: "cloud", label: "雲管家平台", sub: "Railway + Vercel", x: 320, y: 120, icon: "cloud" },
  { id: "iot", label: "IoT 控制器", sub: "Modbus RTU", x: 560, y: 160, icon: "iot" },
  { id: "washer", label: "洗衣機 / 烘衣機", sub: "實體設備", x: 720, y: 280, icon: "washer" },
  { id: "pay", label: "LINE Pay", sub: "行動支付", x: 160, y: 330, icon: "pay" },
  { id: "notify", label: "LINE 推播", sub: "即時通知", x: 360, y: 330, icon: "notify" },
  { id: "chart", label: "管理後台", sub: "數據分析", x: 540, y: 330, icon: "chart" },
];

interface Connection {
  from: number;
  to: number;
  label?: string;
}

const connections: Connection[] = [
  { from: 0, to: 1, label: "HTTPS" },
  { from: 1, to: 2, label: "MQTT" },
  { from: 2, to: 3, label: "Modbus" },
  { from: 0, to: 4, label: "付款" },
  { from: 4, to: 1, label: "回調" },
  { from: 1, to: 5, label: "推播" },
  { from: 5, to: 0 },
  { from: 1, to: 6, label: "API" },
  { from: 2, to: 6, label: "狀態" },
];

function PhoneIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x - 10}, ${y - 14})`}>
      <rect x="2" y="0" width="16" height="28" rx="3" stroke={GOLD} strokeWidth="1.5" fill="none" />
      <line x1="7" y1="23" x2="13" y2="23" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" />
      <rect x="5" y="4" width="10" height="14" rx="1" fill={GOLD} opacity="0.15" />
    </g>
  );
}

function CloudIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x - 16}, ${y - 10})`}>
      <path
        d="M8,20 Q0,20 0,14 Q0,8 6,8 Q7,2 14,2 Q22,2 24,8 Q32,8 32,14 Q32,20 24,20 Z"
        stroke={GOLD}
        strokeWidth="1.5"
        fill={GOLD}
        fillOpacity="0.1"
      />
    </g>
  );
}

function IoTIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x - 12}, ${y - 12})`}>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke={GOLD} strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="3" fill={GOLD} opacity="0.4" />
      {/* Antenna waves */}
      <path d="M6,2 Q12,-2 18,2" stroke={GOLD} strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M3,0 Q12,-5 21,0" stroke={GOLD} strokeWidth="1" fill="none" opacity="0.3" />
    </g>
  );
}

function WasherIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x - 12}, ${y - 14})`}>
      <rect x="0" y="0" width="24" height="28" rx="3" stroke={GOLD} strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="17" r="8" stroke={GOLD} strokeWidth="1.2" fill="none" />
      <circle cx="12" cy="17" r="3" fill={GOLD} opacity="0.25" />
      <rect x="4" y="3" width="4" height="3" rx="1" fill={GOLD} opacity="0.4" />
      <rect x="10" y="3" width="4" height="3" rx="1" fill={GOLD} opacity="0.4" />
    </g>
  );
}

function PayIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x - 14}, ${y - 10})`}>
      <rect x="0" y="0" width="28" height="20" rx="3" stroke={GOLD} strokeWidth="1.5" fill="none" />
      <line x1="0" y1="7" x2="28" y2="7" stroke={GOLD} strokeWidth="1" opacity="0.4" />
      <rect x="4" y="12" width="8" height="4" rx="1" fill={GOLD} opacity="0.3" />
    </g>
  );
}

function NotifyIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x - 10}, ${y - 12})`}>
      <path
        d="M4,16 Q4,6 10,4 Q16,2 16,6 L18,6 Q22,6 20,16 Z"
        stroke={GOLD}
        strokeWidth="1.5"
        fill="none"
      />
      <line x1="8" y1="18" x2="14" y2="18" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="2" r="1.5" fill={GOLD} opacity="0.6" />
    </g>
  );
}

function ChartIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x - 12}, ${y - 10})`}>
      <rect x="0" y="12" width="5" height="8" rx="1" fill={GOLD} opacity="0.5" />
      <rect x="7" y="6" width="5" height="14" rx="1" fill={GOLD} opacity="0.7" />
      <rect x="14" y="0" width="5" height="20" rx="1" fill={GOLD} opacity="0.9" />
      <line x1="0" y1="22" x2="20" y2="22" stroke={GOLD} strokeWidth="1" opacity="0.4" />
    </g>
  );
}

const iconMap: Record<DiagramNode["icon"], React.FC<{ x: number; y: number }>> = {
  phone: PhoneIcon,
  cloud: CloudIcon,
  iot: IoTIcon,
  washer: WasherIcon,
  pay: PayIcon,
  notify: NotifyIcon,
  chart: ChartIcon,
};

export default function SystemDiagram({ className }: SystemDiagramProps) {
  return (
    <div className={className}>
      <style>{`
        @keyframes dashFlow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .conn-line {
          animation: dashFlow 1.5s linear infinite;
        }
        @keyframes nodeGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(229, 185, 76, 0.2)); }
          50% { filter: drop-shadow(0 0 12px rgba(229, 185, 76, 0.4)); }
        }
        .node-group:hover {
          animation: nodeGlow 2s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .diagram-fade {
          animation: fadeIn 0.6s ease-out both;
        }
      `}</style>

      <div
        style={{
          background: "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a0a1a 100%)",
          borderRadius: 20,
          border: `1px solid ${NODE_BORDER}`,
          padding: "32px 16px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid pattern */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={WHITE} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 16, position: "relative" }} className="diagram-fade">
          <p style={{ color: GOLD, fontSize: 13, fontWeight: 500, letterSpacing: 2, marginBottom: 4, textTransform: "uppercase" }}>
            System Architecture
          </p>
          <h3 style={{ color: WHITE, fontSize: 22, fontWeight: 700, margin: 0 }}>
            IoT 智慧洗衣系統架構
          </h3>
          <p style={{ color: WHITE_DIM, fontSize: 13, marginTop: 4 }}>
            從手機到洗衣機，全程雲端智慧管理
          </p>
        </div>

        {/* Main SVG diagram */}
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          style={{ width: "100%", height: "auto", position: "relative" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glow filter for connection lines */}
            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Arrow marker */}
            <marker id="arrowGold" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0,0 8,3 0,6" fill={GOLD} opacity="0.6" />
            </marker>
          </defs>

          {/* Connection lines */}
          {connections.map((conn, i) => {
            const from = nodes[conn.from];
            const to = nodes[conn.to];
            const mx = (from.x + to.x) / 2;
            const my = (from.y + to.y) / 2;

            // Slight curve for non-horizontal/vertical lines
            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const curveOffset = Math.abs(dx) > 100 && Math.abs(dy) > 100 ? 30 : 0;
            const cpx = mx + (dy > 0 ? -curveOffset : curveOffset);
            const cpy = my + (dx > 0 ? -curveOffset : curveOffset);

            const pathD = curveOffset > 0
              ? `M${from.x},${from.y} Q${cpx},${cpy} ${to.x},${to.y}`
              : `M${from.x},${from.y} L${to.x},${to.y}`;

            return (
              <g key={i}>
                {/* Glow line */}
                <path
                  d={pathD}
                  stroke={GOLD}
                  strokeWidth="2"
                  fill="none"
                  opacity="0.08"
                  filter="url(#lineGlow)"
                />
                {/* Animated dashed line */}
                <path
                  d={pathD}
                  stroke={GOLD}
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.5"
                  strokeDasharray="6 4"
                  className="conn-line"
                  markerEnd="url(#arrowGold)"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
                {/* Connection label */}
                {conn.label && (
                  <g>
                    <rect
                      x={mx - 20}
                      y={my - 8}
                      width={40}
                      height={16}
                      rx={8}
                      fill="#0a0a1a"
                      stroke={GOLD_DIM}
                      strokeWidth="0.5"
                    />
                    <text
                      x={mx}
                      y={my + 4}
                      fill={GOLD}
                      fontSize="8"
                      fontWeight="500"
                      textAnchor="middle"
                      fontFamily="system-ui, sans-serif"
                    >
                      {conn.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node, i) => {
            const IconComp = iconMap[node.icon];
            const nodeW = 110;
            const nodeH = 80;
            const nx = node.x - nodeW / 2;
            const ny = node.y - nodeH / 2;

            return (
              <g key={node.id} className="node-group" style={{ cursor: "default" }}>
                {/* Node background */}
                <rect
                  x={nx}
                  y={ny}
                  width={nodeW}
                  height={nodeH}
                  rx={14}
                  fill={NODE_BG}
                  stroke={NODE_BORDER}
                  strokeWidth="1"
                />
                {/* Hover highlight border */}
                <rect
                  x={nx}
                  y={ny}
                  width={nodeW}
                  height={nodeH}
                  rx={14}
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="0.5"
                  opacity="0.1"
                />

                {/* Icon circle bg */}
                <circle
                  cx={node.x}
                  cy={ny + 26}
                  r={16}
                  fill={GOLD}
                  opacity="0.08"
                />
                <IconComp x={node.x} y={ny + 26} />

                {/* Label */}
                <text
                  x={node.x}
                  y={ny + 54}
                  fill={WHITE}
                  fontSize="10"
                  fontWeight="700"
                  textAnchor="middle"
                  fontFamily="system-ui, sans-serif"
                >
                  {node.label}
                </text>
                {/* Subtitle */}
                <text
                  x={node.x}
                  y={ny + 68}
                  fill={WHITE_DIM}
                  fontSize="8"
                  textAnchor="middle"
                  fontFamily="system-ui, sans-serif"
                >
                  {node.sub}
                </text>
              </g>
            );
          })}

          {/* Flow direction labels at top corners */}
          <text x={80} y={80} fill={WHITE_DIM} fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.4">
            使用者端
          </text>
          <text x={VW / 2} y={60} fill={WHITE_DIM} fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.4">
            雲端服務
          </text>
          <text x={VW - 80} y={80} fill={WHITE_DIM} fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.4">
            設備端
          </text>
        </svg>
      </div>
    </div>
  );
}

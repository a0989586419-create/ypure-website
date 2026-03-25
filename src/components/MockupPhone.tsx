"use client";

import React from "react";

type MockupVariant =
  | "home"
  | "payment"
  | "machine"
  | "notification"
  | "dashboard"
  | "coupon";

interface MockupPhoneProps {
  variant: MockupVariant;
  className?: string;
}

const GOLD = "#E5B94C";
const GOLD_LIGHT = "#F0D078";
const SCREEN_BG = "#0a0a0a";
const CARD_BG = "#1a1a2e";
const CARD_BORDER = "#2a2a4e";
const WHITE = "#ffffff";
const WHITE_DIM = "#888899";
const GREEN = "#4ade80";
const RED = "#f87171";

// Phone dimensions (9:19.5 ratio approx)
const PW = 280;
const PH = 607;
const RADIUS = 36;
const NOTCH_W = 120;
const NOTCH_H = 28;
const SCREEN_X = 12;
const SCREEN_Y = 12;
const SW = PW - 24; // 256
const SH = PH - 24; // 583

function PhoneFrame({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <svg
      viewBox={`0 0 ${PW} ${PH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      {/* Phone body shadow */}
      <defs>
        <filter id={`phoneShadow-${id}`} x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#000000" floodOpacity="0.5" />
        </filter>
        <linearGradient id={`phoneGrad-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
        <clipPath id={`screenClip-${id}`}>
          <rect
            x={SCREEN_X}
            y={SCREEN_Y}
            width={SW}
            height={SH}
            rx={RADIUS - 8}
          />
        </clipPath>
      </defs>

      {/* Phone body */}
      <rect
        x="0"
        y="0"
        width={PW}
        height={PH}
        rx={RADIUS}
        fill={`url(#phoneGrad-${id})`}
        stroke="#444444"
        strokeWidth="1.5"
        filter={`url(#phoneShadow-${id})`}
      />

      {/* Side buttons */}
      <rect x={PW - 1} y={130} width="3" height="36" rx="1.5" fill="#333" />
      <rect x={-2} y={110} width="3" height="24" rx="1.5" fill="#333" />
      <rect x={-2} y={150} width="3" height="44" rx="1.5" fill="#333" />

      {/* Screen area */}
      <rect
        x={SCREEN_X}
        y={SCREEN_Y}
        width={SW}
        height={SH}
        rx={RADIUS - 8}
        fill={SCREEN_BG}
      />

      {/* Screen content clipped */}
      <g clipPath={`url(#screenClip-${id})`}>{children}</g>

      {/* Notch / Dynamic Island */}
      <rect
        x={(PW - NOTCH_W) / 2}
        y={SCREEN_Y}
        width={NOTCH_W}
        height={NOTCH_H}
        rx={14}
        fill="#111111"
      />
      {/* Camera */}
      <circle cx={PW / 2 + 32} cy={SCREEN_Y + 14} r={5.5} fill="#1a1a1a" />
      <circle cx={PW / 2 + 32} cy={SCREEN_Y + 14} r={3} fill="#0a1525" />
      <circle cx={PW / 2 + 33} cy={SCREEN_Y + 13} r={1} fill="#1a3050" opacity="0.6" />

      {/* Home indicator */}
      <rect
        x={(PW - 100) / 2}
        y={PH - 16}
        width={100}
        height={4}
        rx={2}
        fill="#555555"
      />
    </svg>
  );
}

function StatusBar() {
  return (
    <g>
      <text
        x={SCREEN_X + 22}
        y={SCREEN_Y + 52}
        fill={WHITE}
        fontSize="12"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
      >
        9:41
      </text>
      {/* Signal bars */}
      <g transform={`translate(${SCREEN_X + SW - 72}, ${SCREEN_Y + 42})`}>
        <rect x="0" y="6" width="3" height="4" rx="0.8" fill={WHITE} />
        <rect x="5" y="4" width="3" height="6" rx="0.8" fill={WHITE} />
        <rect x="10" y="2" width="3" height="8" rx="0.8" fill={WHITE} />
        <rect x="15" y="0" width="3" height="10" rx="0.8" fill={WHITE} />
      </g>
      {/* WiFi */}
      <g transform={`translate(${SCREEN_X + SW - 48}, ${SCREEN_Y + 42})`}>
        <path d="M4,10 L8,10 M2,6 Q6,2 10,6 M0,3 Q6,-2 12,3" stroke={WHITE} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      {/* Battery */}
      <rect
        x={SCREEN_X + SW - 30}
        y={SCREEN_Y + 43}
        width={20}
        height={10}
        rx="3"
        stroke={WHITE}
        strokeWidth="1"
        fill="none"
      />
      <rect
        x={SCREEN_X + SW - 28}
        y={SCREEN_Y + 45.5}
        width={14}
        height={5}
        rx="1"
        fill={GREEN}
      />
      <rect
        x={SCREEN_X + SW - 9}
        y={SCREEN_Y + 46}
        width="1.5"
        height="4"
        rx="0.75"
        fill={WHITE}
        opacity="0.4"
      />
    </g>
  );
}

function BottomTabs({ active = 0 }: { active?: number }) {
  const tabY = SCREEN_Y + SH - 56;
  const labels = ["首頁", "紀錄", "錢包", "我的"];

  return (
    <g>
      <rect x={SCREEN_X} y={tabY} width={SW} height={56} fill="#09090f" />
      <line
        x1={SCREEN_X}
        y1={tabY}
        x2={SCREEN_X + SW}
        y2={tabY}
        stroke={CARD_BORDER}
        strokeWidth="0.5"
      />
      {labels.map((label, i) => {
        const cx = SCREEN_X + (SW / 4) * i + SW / 8;
        const isActive = i === active;
        const color = isActive ? GOLD : "#555566";
        return (
          <g key={label}>
            {/* Icon placeholder - simple shapes */}
            {i === 0 && (
              <path
                d={`M${cx - 7},${tabY + 24} L${cx},${tabY + 16} L${cx + 7},${tabY + 24} Z`}
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            )}
            {i === 1 && (
              <g>
                <rect x={cx - 7} y={tabY + 15} width={14} height={11} rx="2" fill="none" stroke={color} strokeWidth="1.5" />
                <line x1={cx - 4} y1={tabY + 20} x2={cx + 4} y2={tabY + 20} stroke={color} strokeWidth="1" />
                <line x1={cx - 4} y1={tabY + 23} x2={cx + 2} y2={tabY + 23} stroke={color} strokeWidth="1" />
              </g>
            )}
            {i === 2 && (
              <rect
                x={cx - 8}
                y={tabY + 15}
                width={16}
                height={12}
                rx="3"
                fill="none"
                stroke={color}
                strokeWidth="1.5"
              />
            )}
            {i === 3 && (
              <g>
                <circle cx={cx} cy={tabY + 18} r={4} fill="none" stroke={color} strokeWidth="1.5" />
                <path
                  d={`M${cx - 7},${tabY + 29} Q${cx},${tabY + 23} ${cx + 7},${tabY + 29}`}
                  fill="none"
                  stroke={color}
                  strokeWidth="1.5"
                />
              </g>
            )}
            <text
              x={cx}
              y={tabY + 44}
              fill={color}
              fontSize="8"
              fontFamily="system-ui, sans-serif"
              textAnchor="middle"
            >
              {label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

// =============================================
// HOME SCREEN
// =============================================
function HomeScreen() {
  const cy = SCREEN_Y + 68;
  return (
    <>
      <StatusBar />
      {/* Header with logo */}
      <circle cx={PW / 2} cy={cy + 18} r={18} fill={GOLD} opacity="0.12" />
      <text x={PW / 2} y={cy + 24} fill={GOLD} fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">Y</text>

      <text x={PW / 2} y={cy + 52} fill={WHITE} fontSize="15" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">
        悠洗自助洗衣
      </text>
      <text x={PW / 2} y={cy + 68} fill={WHITE_DIM} fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">
        嘉義市東區文雅街181號
      </text>

      {/* Balance card */}
      <rect x={SCREEN_X + 16} y={cy + 84} width={SW - 32} height={58} rx={14} fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="0.5" />
      <text x={SCREEN_X + 30} y={cy + 104} fill={WHITE_DIM} fontSize="9" fontFamily="system-ui, sans-serif">點數餘額</text>
      <text x={SCREEN_X + 30} y={cy + 126} fill={GOLD} fontSize="20" fontWeight="700" fontFamily="system-ui, sans-serif">NT$ 350</text>
      <rect x={SCREEN_X + SW - 90} y={cy + 100} width={54} height={28} rx={14} fill={GOLD} />
      <text x={SCREEN_X + SW - 63} y={cy + 119} fill="#0a0a0a" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">儲值</text>

      {/* Quick actions */}
      {["使用紀錄", "我的優惠", "最新消息"].map((label, i) => {
        const qx = SCREEN_X + 16 + i * ((SW - 32) / 3);
        const qw = (SW - 32) / 3 - 4;
        return (
          <g key={label}>
            <rect x={qx} y={cy + 156} width={qw} height={36} rx={10} fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="0.5" />
            <text x={qx + qw / 2} y={cy + 178} fill={WHITE_DIM} fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">{label}</text>
          </g>
        );
      })}

      {/* Machine grid 2x3 */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const cardW = (SW - 40) / 2;
        const gx = SCREEN_X + 16 + col * (cardW + 8);
        const gy = cy + 206 + row * 66;
        const avail = i !== 2 && i !== 4;
        return (
          <g key={i}>
            <rect x={gx} y={gy} width={cardW} height={56} rx={10} fill={CARD_BG} stroke={avail ? `${GOLD}44` : CARD_BORDER} strokeWidth="1" />
            <circle cx={gx + 22} cy={gy + 21} r={10} stroke={avail ? GOLD : WHITE_DIM} strokeWidth="1.5" fill="none" opacity={avail ? 0.8 : 0.3} />
            <circle cx={gx + 22} cy={gy + 21} r={4} fill={avail ? GOLD : WHITE_DIM} opacity="0.25" />
            <text x={gx + 40} y={gy + 19} fill={WHITE} fontSize="9" fontWeight="600" fontFamily="system-ui, sans-serif">
              {i < 4 ? "洗衣機" : "烘衣機"} {(i % 4) + 1}
            </text>
            <circle cx={gx + cardW - 14} cy={gy + 16} r={3} fill={avail ? GREEN : RED} />
            <text x={gx + 40} y={gy + 32} fill={avail ? GREEN : RED} fontSize="7.5" fontFamily="system-ui, sans-serif">
              {avail ? "可使用" : "使用中"}
            </text>
            <text x={gx + 22} y={gy + 48} fill={WHITE_DIM} fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">NT$40</text>
          </g>
        );
      })}

      <BottomTabs active={0} />
    </>
  );
}

// =============================================
// PAYMENT SCREEN
// =============================================
function PaymentScreen() {
  const cy = SCREEN_Y + 68;
  return (
    <>
      <StatusBar />
      {/* Back arrow + title */}
      <text x={SCREEN_X + 20} y={cy + 14} fill={WHITE_DIM} fontSize="16" fontFamily="system-ui, sans-serif">&#x2039;</text>
      <text x={PW / 2} y={cy + 14} fill={WHITE} fontSize="14" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">確認付款</text>

      {/* Machine info */}
      <rect x={SCREEN_X + 16} y={cy + 34} width={SW - 32} height={76} rx={14} fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="0.5" />
      <text x={SCREEN_X + 30} y={cy + 56} fill={WHITE} fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">洗衣機 1 - 標準洗</text>
      <text x={SCREEN_X + 30} y={cy + 72} fill={WHITE_DIM} fontSize="9" fontFamily="system-ui, sans-serif">悠洗自助洗衣 | 40分鐘</text>
      <text x={SCREEN_X + 30} y={cy + 90} fill={WHITE_DIM} fontSize="9" fontFamily="system-ui, sans-serif">洗劑: 標準 | 溫度: 常溫</text>

      {/* Divider */}
      <line x1={SCREEN_X + 32} y1={cy + 124} x2={SCREEN_X + SW - 32} y2={cy + 124} stroke={CARD_BORDER} strokeWidth="0.5" strokeDasharray="4 3" />

      {/* Amount */}
      <text x={PW / 2} y={cy + 150} fill={WHITE_DIM} fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">付款金額</text>
      <text x={PW / 2} y={cy + 190} fill={GOLD} fontSize="38" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">NT$40</text>

      {/* Payment method label */}
      <text x={SCREEN_X + 24} y={cy + 224} fill={WHITE_DIM} fontSize="9" fontFamily="system-ui, sans-serif">選擇付款方式</text>

      {/* LINE Pay */}
      <rect x={SCREEN_X + 16} y={cy + 236} width={SW - 32} height={48} rx={14} fill="#06C755" />
      <text x={PW / 2} y={cy + 266} fill={WHITE} fontSize="14" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">LINE Pay</text>

      {/* Wallet */}
      <rect x={SCREEN_X + 16} y={cy + 296} width={SW - 32} height={48} rx={14} fill="none" stroke={GOLD} strokeWidth="1.5" />
      <text x={PW / 2} y={cy + 326} fill={GOLD} fontSize="13" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">錢包餘額 NT$350</text>

      {/* Warning */}
      <rect x={SCREEN_X + 16} y={cy + 362} width={SW - 32} height={34} rx={10} fill="#2a1a00" opacity="0.5" />
      <text x={PW / 2} y={cy + 383} fill={GOLD_LIGHT} fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">請確認機門已關好再付款</text>

      <BottomTabs active={2} />
    </>
  );
}

// =============================================
// MACHINE SCREEN
// =============================================
function MachineScreen() {
  const cy = SCREEN_Y + 68;
  const machines = [
    { name: "洗衣機 1", avail: true, time: "" },
    { name: "洗衣機 2", avail: true, time: "" },
    { name: "洗衣機 3", avail: false, time: "23:45" },
    { name: "洗衣機 4", avail: true, time: "" },
    { name: "烘衣機 1", avail: false, time: "15:20" },
    { name: "烘衣機 2", avail: true, time: "" },
  ];
  return (
    <>
      <StatusBar />
      <text x={PW / 2} y={cy + 14} fill={WHITE} fontSize="14" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">選擇機器</text>
      <text x={PW / 2} y={cy + 32} fill={WHITE_DIM} fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">悠洗自助洗衣 - 6 台機器</text>

      {machines.map((m, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const cardW = (SW - 40) / 2;
        const gx = SCREEN_X + 16 + col * (cardW + 8);
        const gy = cy + 50 + row * 126;

        return (
          <g key={i}>
            <rect x={gx} y={gy} width={cardW} height={114} rx={14} fill={CARD_BG} stroke={m.avail ? `${GOLD}55` : CARD_BORDER} strokeWidth="1" />

            {/* Machine drum icon */}
            <circle cx={gx + cardW / 2} cy={gy + 36} r={20} stroke={m.avail ? GOLD : WHITE_DIM} strokeWidth="2" fill="none" opacity={m.avail ? 0.8 : 0.3} />
            <circle cx={gx + cardW / 2} cy={gy + 36} r={10} fill={m.avail ? GOLD : WHITE_DIM} opacity="0.15" />
            <circle cx={gx + cardW / 2} cy={gy + 36} r={3} fill={m.avail ? GOLD : WHITE_DIM} opacity="0.4" />

            {/* Status dot */}
            <circle cx={gx + cardW - 14} cy={gy + 14} r={4} fill={m.avail ? GREEN : RED} />

            <text x={gx + cardW / 2} y={gy + 72} fill={WHITE} fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">{m.name}</text>
            <text x={gx + cardW / 2} y={gy + 86} fill={m.avail ? GREEN : "#fbbf24"} fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">
              {m.avail ? "可使用" : `剩餘 ${m.time}`}
            </text>
            {m.avail && (
              <>
                <rect x={gx + (cardW - 56) / 2} y={gy + 92} width={56} height={16} rx={8} fill={GOLD} opacity="0.15" />
                <text x={gx + cardW / 2} y={gy + 104} fill={GOLD} fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">NT$40</text>
              </>
            )}
          </g>
        );
      })}

      <BottomTabs active={0} />
    </>
  );
}

// =============================================
// NOTIFICATION SCREEN
// =============================================
function NotificationScreen() {
  const cy = SCREEN_Y + 68;
  const messages = [
    { text: "洗衣機 1 已完成!", time: "09:41" },
    { text: "您的衣物已洗好，請盡快取衣。", time: "09:41" },
    { text: "烘衣機 2 即將完成 (5分鐘)", time: "09:36" },
    { text: "儲值成功 NT$200", time: "09:20" },
    { text: "歡迎使用悠洗雲管家!", time: "08:00" },
  ];

  return (
    <>
      <StatusBar />
      {/* LINE-style green header */}
      <rect x={SCREEN_X} y={cy - 8} width={SW} height={38} fill="#06C755" />
      <text x={SCREEN_X + 20} y={cy + 16} fill={WHITE} fontSize="14" fontFamily="system-ui, sans-serif">&#x2039;</text>
      <text x={PW / 2} y={cy + 16} fill={WHITE} fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">悠洗雲管家</text>

      {/* Chat area background */}
      <rect x={SCREEN_X} y={cy + 30} width={SW} height={SH - cy - 30 + SCREEN_Y - 56} fill="#8ba4b1" opacity="0.08" />

      {messages.map((msg, i) => {
        const by = cy + 48 + i * 76;
        const charWidth = 10;
        const bubbleW = Math.min(msg.text.length * charWidth + 24, SW - 64);
        return (
          <g key={i}>
            {/* Avatar */}
            <circle cx={SCREEN_X + 28} cy={by + 16} r={14} fill={GOLD} opacity="0.15" />
            <text x={SCREEN_X + 28} y={by + 21} fill={GOLD} fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">Y</text>

            {/* Bubble */}
            <rect x={SCREEN_X + 48} y={by} width={bubbleW} height={34} rx={14} fill={WHITE} />
            <polygon points={`${SCREEN_X + 49},${by + 12} ${SCREEN_X + 44},${by + 16} ${SCREEN_X + 49},${by + 20}`} fill={WHITE} />
            <text x={SCREEN_X + 60} y={by + 22} fill="#222222" fontSize="10" fontFamily="system-ui, sans-serif">{msg.text}</text>

            {/* Time */}
            <text x={SCREEN_X + 52 + bubbleW} y={by + 30} fill={WHITE_DIM} fontSize="7" fontFamily="system-ui, sans-serif">{msg.time}</text>
          </g>
        );
      })}

      <BottomTabs active={1} />
    </>
  );
}

// =============================================
// DASHBOARD SCREEN
// =============================================
function DashboardScreen() {
  const cy = SCREEN_Y + 68;
  return (
    <>
      <StatusBar />
      <text x={PW / 2} y={cy + 14} fill={WHITE} fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">管理後台</text>
      <text x={PW / 2} y={cy + 30} fill={WHITE_DIM} fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">悠洗自助洗衣 | 今日概覽</text>

      {/* KPI cards */}
      {[
        { label: "今日營收", value: "NT$2,480", color: GOLD },
        { label: "使用次數", value: "62 次", color: GREEN },
      ].map((card, i) => {
        const cardW = (SW - 40) / 2;
        const cx = SCREEN_X + 16 + i * (cardW + 8);
        return (
          <g key={i}>
            <rect x={cx} y={cy + 44} width={cardW} height={58} rx={12} fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="0.5" />
            <text x={cx + 14} y={cy + 62} fill={WHITE_DIM} fontSize="8" fontFamily="system-ui, sans-serif">{card.label}</text>
            <text x={cx + 14} y={cy + 86} fill={card.color} fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">{card.value}</text>
          </g>
        );
      })}

      {/* Chart card */}
      <rect x={SCREEN_X + 16} y={cy + 116} width={SW - 32} height={130} rx={12} fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="0.5" />
      <text x={SCREEN_X + 28} y={cy + 136} fill={WHITE} fontSize="9" fontWeight="600" fontFamily="system-ui, sans-serif">7 日營收趨勢</text>

      {/* Bar chart */}
      {[42, 68, 55, 82, 72, 95, 78].map((h, i) => {
        const bx = SCREEN_X + 28 + i * 30;
        const barH = h * 0.72;
        const by = cy + 228 - barH;
        return (
          <g key={i}>
            <rect x={bx} y={by} width={18} height={barH} rx={4} fill={GOLD} opacity={i === 6 ? 1 : 0.4} />
            <text x={bx + 9} y={cy + 240} fill={WHITE_DIM} fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">
              {["一", "二", "三", "四", "五", "六", "日"][i]}
            </text>
          </g>
        );
      })}

      {/* Machine status */}
      <rect x={SCREEN_X + 16} y={cy + 260} width={SW - 32} height={74} rx={12} fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="0.5" />
      <text x={SCREEN_X + 28} y={cy + 280} fill={WHITE} fontSize="9" fontWeight="600" fontFamily="system-ui, sans-serif">機器狀態</text>
      {[
        { label: "運行中", count: "2", color: GREEN },
        { label: "閒置", count: "3", color: GOLD },
        { label: "維修", count: "1", color: RED },
      ].map((s, i) => {
        const sx = SCREEN_X + 28 + i * 72;
        return (
          <g key={i}>
            <circle cx={sx + 6} cy={cy + 300} r={4} fill={s.color} />
            <text x={sx + 16} y={cy + 297} fill={WHITE_DIM} fontSize="8" fontFamily="system-ui, sans-serif">{s.label}</text>
            <text x={sx + 16} y={cy + 314} fill={WHITE} fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">{s.count}</text>
          </g>
        );
      })}

      {/* Recent orders hint */}
      <rect x={SCREEN_X + 16} y={cy + 348} width={SW - 32} height={40} rx={12} fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="0.5" />
      <text x={SCREEN_X + 28} y={cy + 373} fill={WHITE_DIM} fontSize="9" fontFamily="system-ui, sans-serif">最近訂單 3 筆 ...</text>

      <BottomTabs active={0} />
    </>
  );
}

// =============================================
// COUPON SCREEN
// =============================================
function CouponScreen() {
  const cy = SCREEN_Y + 68;
  const coupons = [
    { title: "新會員優惠", discount: "NT$20", desc: "首次洗衣折扣", exp: "2026/04/30", color: GOLD },
    { title: "滿額折扣", discount: "折$15", desc: "消費滿NT$100可用", exp: "2026/05/15", color: "#818cf8" },
    { title: "烘衣優惠", discount: "8折", desc: "烘衣全品項適用", exp: "2026/04/10", color: GREEN },
    { title: "儲值回饋", discount: "+10%", desc: "儲值NT$500送NT$50", exp: "2026/06/01", color: "#f472b6" },
  ];

  return (
    <>
      <StatusBar />
      <text x={SCREEN_X + 20} y={cy + 14} fill={WHITE_DIM} fontSize="16" fontFamily="system-ui, sans-serif">&#x2039;</text>
      <text x={PW / 2} y={cy + 14} fill={WHITE} fontSize="14" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">我的優惠</text>
      <text x={PW / 2} y={cy + 32} fill={WHITE_DIM} fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">4 張可用優惠券</text>

      {coupons.map((c, i) => {
        const cardY = cy + 48 + i * 100;
        return (
          <g key={i}>
            {/* Coupon card */}
            <rect x={SCREEN_X + 16} y={cardY} width={SW - 32} height={88} rx={14} fill={CARD_BG} stroke={CARD_BORDER} strokeWidth="0.5" />

            {/* Left accent strip */}
            <rect x={SCREEN_X + 16} y={cardY + 6} width={5} height={76} rx={2.5} fill={c.color} />

            {/* Ticket perforation */}
            <line
              x1={SCREEN_X + SW - 96}
              y1={cardY + 6}
              x2={SCREEN_X + SW - 96}
              y2={cardY + 82}
              stroke={CARD_BORDER}
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            {/* Notch circles */}
            <circle cx={SCREEN_X + SW - 96} cy={cardY} r={5} fill={SCREEN_BG} />
            <circle cx={SCREEN_X + SW - 96} cy={cardY + 88} r={5} fill={SCREEN_BG} />

            {/* Discount */}
            <text x={SCREEN_X + 36} y={cardY + 34} fill={c.color} fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">{c.discount}</text>

            {/* Title & desc */}
            <text x={SCREEN_X + 36} y={cardY + 52} fill={WHITE} fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">{c.title}</text>
            <text x={SCREEN_X + 36} y={cardY + 66} fill={WHITE_DIM} fontSize="8" fontFamily="system-ui, sans-serif">{c.desc}</text>
            <text x={SCREEN_X + 36} y={cardY + 80} fill={WHITE_DIM} fontSize="7" fontFamily="system-ui, sans-serif">有效期限: {c.exp}</text>

            {/* Use button */}
            <rect x={SCREEN_X + SW - 82} y={cardY + 28} width={50} height={28} rx={14} fill={c.color} opacity="0.15" />
            <text x={SCREEN_X + SW - 57} y={cardY + 47} fill={c.color} fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">使用</text>
          </g>
        );
      })}

      <BottomTabs active={3} />
    </>
  );
}

// =============================================
// MAIN EXPORT
// =============================================
const variantMap: Record<MockupVariant, React.FC> = {
  home: HomeScreen,
  payment: PaymentScreen,
  machine: MachineScreen,
  notification: NotificationScreen,
  dashboard: DashboardScreen,
  coupon: CouponScreen,
};

export default function MockupPhone({ variant, className }: MockupPhoneProps) {
  const Screen = variantMap[variant];
  return (
    <div className={className} style={{ width: 280, maxWidth: "100%" }}>
      <PhoneFrame id={variant}>
        <Screen />
      </PhoneFrame>
    </div>
  );
}

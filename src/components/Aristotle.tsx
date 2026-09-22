// Cartoon Aristotle, the app's guide character. Drawn as inline SVG so it
// scales cleanly and picks up the theme colors.

type Props = {
  className?: string;
  waving?: boolean;
  /** Crop to just the face, for small avatars. */
  headOnly?: boolean;
};

const hairCurls = [
  [76, 100, 14],
  [80, 80, 15],
  [94, 64, 15],
  [112, 56, 15],
  [130, 56, 15],
  [148, 64, 15],
  [162, 80, 15],
  [166, 100, 14],
];

const beardCurls = [
  [86, 146, 14],
  [98, 162, 15],
  [121, 170, 16],
  [144, 162, 15],
  [156, 146, 14],
];

// Laurel leaves along the top of the head: [x, y, rotation]
const laurelLeaves = [
  [84, 82, -60],
  [92, 70, -45],
  [103, 62, -25],
  [115, 58, -8],
  [127, 58, 8],
  [139, 62, 25],
  [150, 70, 45],
  [158, 82, 60],
];

export default function Aristotle({ className, waving = true, headOnly = false }: Props) {
  return (
    <svg
      viewBox={headOnly ? "58 40 126 140" : "0 0 240 300"}
      role="img"
      aria-label={waving ? "Cartoon Aristotle waving" : "Cartoon Aristotle"}
      className={className}
    >
      {/* Shadow */}
      <ellipse cx="120" cy="292" rx="70" ry="7" className="fill-forest-900/10" />

      {/* Toga */}
      <path
        d="M54 292 L66 212 Q120 186 176 212 L188 292 Z"
        className="fill-white stroke-silver-300"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M96 226 Q104 260 98 290" className="stroke-silver-200" strokeWidth="3" fill="none" />
      <path d="M144 226 Q138 260 146 290" className="stroke-silver-200" strokeWidth="3" fill="none" />
      {/* Green sash */}
      <path
        d="M78 206 Q90 200 100 204 L176 292 L146 292 Z"
        className="fill-forest-600"
      />
      <circle cx="96" cy="210" r="6" className="fill-silver-300 stroke-silver-400" strokeWidth="2" />

      {/* Waving arm */}
      <g
        className={waving ? "animate-wave" : undefined}
        style={{ transformOrigin: "170px 218px" }}
      >
        <path
          d="M164 220 Q190 196 200 162"
          className="stroke-white"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M164 220 Q190 196 200 162"
          className="stroke-silver-300"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
          style={{ mixBlendMode: "multiply" }}
          opacity="0.35"
        />
        <circle cx="202" cy="150" r="13" className="fill-skin" />
        <path d="M194 140 L192 128 M202 137 L202 124 M210 140 L213 129" className="stroke-skin" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Hair (behind head) */}
      {hairCurls.map(([cx, cy, r]) => (
        <circle key={`h${cx}-${cy}`} cx={cx} cy={cy} r={r} className="fill-silver-100 stroke-silver-300" strokeWidth="2.5" />
      ))}

      {/* Head */}
      <circle cx="121" cy="112" r="46" className="fill-skin" />
      {/* Ears */}
      <circle cx="76" cy="116" r="9" className="fill-skin" />
      <circle cx="166" cy="116" r="9" className="fill-skin" />

      {/* Laurel wreath */}
      {laurelLeaves.map(([x, y, rot]) => (
        <ellipse
          key={`l${x}-${y}`}
          cx={x}
          cy={y}
          rx="10"
          ry="5"
          transform={`rotate(${rot} ${x} ${y})`}
          className="fill-forest-500 stroke-forest-700"
          strokeWidth="1.5"
        />
      ))}

      {/* Eyebrows */}
      <path d="M92 94 Q102 86 112 93" className="stroke-silver-100" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M130 93 Q140 86 150 94" className="stroke-silver-100" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M92 94 Q102 86 112 93" className="stroke-silver-300" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M130 93 Q140 86 150 94" className="stroke-silver-300" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Eyes */}
      <ellipse cx="102" cy="107" rx="6" ry="7.5" className="fill-forest-900" />
      <ellipse cx="140" cy="107" rx="6" ry="7.5" className="fill-forest-900" />
      <circle cx="104" cy="104" r="2.2" className="fill-white" />
      <circle cx="142" cy="104" r="2.2" className="fill-white" />

      {/* Cheeks */}
      <ellipse cx="90" cy="124" rx="8" ry="5" className="fill-blush" opacity="0.6" />
      <ellipse cx="152" cy="124" rx="8" ry="5" className="fill-blush" opacity="0.6" />

      {/* Nose */}
      <path d="M121 110 Q114 124 122 126" className="stroke-forest-900/40" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Beard */}
      <path
        d="M78 118 Q76 150 96 164 Q121 180 146 164 Q166 150 164 118 Q150 138 121 140 Q92 138 78 118 Z"
        className="fill-silver-100 stroke-silver-300"
        strokeWidth="2.5"
      />
      {beardCurls.map(([cx, cy, r]) => (
        <circle key={`b${cx}-${cy}`} cx={cx} cy={cy} r={r} className="fill-silver-100 stroke-silver-300" strokeWidth="2.5" />
      ))}
      <path
        d="M80 124 Q84 152 104 162 Q121 170 138 162 Q158 152 162 124"
        className="fill-silver-100"
      />

      {/* Smile and mustache */}
      <path d="M109 139 Q121 150 133 139" className="fill-forest-800 stroke-forest-800" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M121 132 Q108 126 98 136 Q106 140 121 136 Q136 140 144 136 Q134 126 121 132 Z"
        className="fill-white stroke-silver-300"
        strokeWidth="2"
      />
    </svg>
  );
}

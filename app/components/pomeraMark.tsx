/* Single source of truth for the Pomera asterisk, so every place it appears has identical geometry. */

export const MARK_CENTER = { x: 90, y: 94 };
export const MARK_ARM_LENGTH = 38;
export const MARK_STROKE = 22;

// Clockwise from the top. The two lower legs are spread wide (45° / 135°) with a clear gap between them.
const ANGLES = [-90, -18, 45, 135, 198];

export const MARK_ARMS = ANGLES.map((deg) => {
  const rad = (deg * Math.PI) / 180;
  return {
    x: +(MARK_CENTER.x + MARK_ARM_LENGTH * Math.cos(rad)).toFixed(2),
    y: +(MARK_CENTER.y + MARK_ARM_LENGTH * Math.sin(rad)).toFixed(2),
  };
});

type PomeraMarkProps = {
  size?: number;
  /** Background fill; omit for arms only. */
  bg?: string;
  /** Corner radius of the background in viewBox units (90 = circle). */
  radius?: number;
  fg?: string;
  className?: string;
};

export function PomeraMark({ size = 28, bg, radius = 40, fg = "#C8F135", className }: PomeraMarkProps) {
  return (
    <svg className={className} viewBox="0 0 180 180" width={size} height={size} aria-hidden="true" style={{ display: "block", flexShrink: 0 }}>
      {bg && <rect width="180" height="180" rx={radius} fill={bg} />}
      {MARK_ARMS.map((arm, i) => (
        <line
          key={i}
          x1={MARK_CENTER.x}
          y1={MARK_CENTER.y}
          x2={arm.x}
          y2={arm.y}
          stroke={fg}
          strokeWidth={MARK_STROKE}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

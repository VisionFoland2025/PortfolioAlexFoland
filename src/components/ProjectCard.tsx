import styles from "./ProjectCard.module.css";

type Props = {
  title: string;
  description: string;
  stack: string;
  links: { label: string; url: string }[];
  illustration:
    | "template"
    | "todo"
    | "calculator"
    | "portfolio"
    | "pizza"
    | "social";
};

const illustrations: Record<Props["illustration"], React.JSX.Element> = {
  template: (
    <svg viewBox='0 0 300 160' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='300' height='160' fill='#0d0018' />
      {/* Grid pattern */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={i * 44}
          y1='0'
          x2={i * 44}
          y2='160'
          stroke='#8405fa'
          strokeOpacity='0.06'
          strokeWidth='1'
        />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1='0'
          y1={i * 40}
          x2='300'
          y2={i * 40}
          stroke='#8405fa'
          strokeOpacity='0.06'
          strokeWidth='1'
        />
      ))}
      {/* Browser window */}
      <rect
        x='30'
        y='18'
        width='240'
        height='124'
        rx='10'
        fill='#1a0030'
        stroke='#8405fa'
        strokeOpacity='0.4'
        strokeWidth='1'
      />
      <rect x='30' y='18' width='240' height='28' rx='10' fill='#2a0050' />
      <rect x='30' y='32' width='240' height='14' fill='#2a0050' />
      <circle cx='48' cy='32' r='5' fill='#ff6b6b' opacity='0.8' />
      <circle cx='63' cy='32' r='5' fill='#ffd166' opacity='0.8' />
      <circle cx='78' cy='32' r='5' fill='#06d6a0' opacity='0.8' />
      <rect
        x='95'
        y='26'
        width='130'
        height='12'
        rx='6'
        fill='#3d0070'
        opacity='0.8'
      />
      <rect
        x='108'
        y='29'
        width='80'
        height='6'
        rx='3'
        fill='#8405fa'
        opacity='0.4'
      />
      {/* Content blocks */}
      <rect
        x='44'
        y='58'
        width='110'
        height='8'
        rx='3'
        fill='#8405fa'
        opacity='0.9'
      />
      <rect
        x='44'
        y='72'
        width='160'
        height='5'
        rx='2.5'
        fill='#6b21a8'
        opacity='0.5'
      />
      <rect
        x='44'
        y='83'
        width='130'
        height='5'
        rx='2.5'
        fill='#6b21a8'
        opacity='0.4'
      />
      <rect
        x='44'
        y='94'
        width='145'
        height='5'
        rx='2.5'
        fill='#6b21a8'
        opacity='0.3'
      />
      <rect
        x='44'
        y='108'
        width='60'
        height='18'
        rx='5'
        fill='#8405fa'
        opacity='0.8'
      />
      <rect
        x='110'
        y='108'
        width='60'
        height='18'
        rx='5'
        fill='transparent'
        stroke='#8405fa'
        strokeWidth='1'
        opacity='0.6'
      />
      {/* Sidebar */}
      <rect
        x='196'
        y='54'
        width='62'
        height='80'
        rx='6'
        fill='#1a0030'
        stroke='#8405fa'
        strokeOpacity='0.3'
        strokeWidth='1'
      />
      <rect
        x='204'
        y='62'
        width='46'
        height='7'
        rx='2'
        fill='#8405fa'
        opacity='0.6'
      />
      <rect
        x='204'
        y='75'
        width='46'
        height='7'
        rx='2'
        fill='#6b21a8'
        opacity='0.4'
      />
      <rect
        x='204'
        y='88'
        width='46'
        height='7'
        rx='2'
        fill='#6b21a8'
        opacity='0.3'
      />
      <rect
        x='204'
        y='101'
        width='30'
        height='7'
        rx='2'
        fill='#6b21a8'
        opacity='0.3'
      />
      {/* Glow */}
      <ellipse
        cx='150'
        cy='80'
        rx='80'
        ry='30'
        fill='#8405fa'
        fillOpacity='0.04'
      />
    </svg>
  ),
  todo: (
    <svg viewBox='0 0 300 160' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='300' height='160' fill='#0a0015' />
      {/* BG glow */}
      <ellipse
        cx='150'
        cy='80'
        rx='130'
        ry='60'
        fill='#8405fa'
        fillOpacity='0.05'
      />
      {/* App panel */}
      <rect
        x='30'
        y='14'
        width='240'
        height='132'
        rx='12'
        fill='#130025'
        stroke='#8405fa'
        strokeOpacity='0.35'
        strokeWidth='1'
      />
      {/* Header */}
      <rect
        x='30'
        y='14'
        width='240'
        height='32'
        rx='12'
        fill='#8405fa'
        fillOpacity='0.2'
      />
      <rect
        x='30'
        y='32'
        width='240'
        height='14'
        fill='#8405fa'
        fillOpacity='0.2'
      />
      <circle cx='46' cy='30' r='7' fill='#8405fa' fillOpacity='0.5' />
      <rect
        x='60'
        y='25'
        width='80'
        height='10'
        rx='4'
        fill='#c084fc'
        fillOpacity='0.7'
      />
      <rect
        x='234'
        y='25'
        width='26'
        height='10'
        rx='4'
        fill='#8405fa'
        fillOpacity='0.5'
      />
      {/* Todo items */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            x='42'
            y={58 + i * 20}
            width='216'
            height='14'
            rx='5'
            fill={i === 0 ? "rgba(132,5,250,0.12)" : "rgba(255,255,255,0.03)"}
            stroke={i === 0 ? "rgba(132,5,250,0.4)" : "rgba(132,5,250,0.1)"}
            strokeWidth='1'
          />
          <rect
            x='49'
            y={62 + i * 20}
            width='8'
            height='8'
            rx='2'
            fill={i < 2 ? "#8405fa" : "rgba(132,5,250,0.2)"}
          />
          {i < 2 && (
            <path
              d={`M51 ${66 + i * 20} l2 2 l4-4`}
              stroke='#fff'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          )}
          <rect
            x='63'
            y={64 + i * 20}
            width={[90, 110, 80, 100][i]}
            height='4'
            rx='2'
            fill={i < 2 ? "rgba(192,132,252,0.5)" : "rgba(132,5,250,0.2)"}
          />
          <rect
            x='218'
            y={61 + i * 20}
            width='30'
            height='8'
            rx='3'
            fill={
              [
                "rgba(132,5,250,0.3)",
                "rgba(239,68,68,0.2)",
                "rgba(251,191,36,0.2)",
                "rgba(99,102,241,0.2)",
              ][i]
            }
          />
        </g>
      ))}
      {/* Add button glow */}
      <rect x='42' y='140' width='70' height='0' rx='5' fill='#8405fa' />
      <ellipse
        cx='77'
        cy='146'
        rx='35'
        ry='6'
        fill='#8405fa'
        fillOpacity='0.3'
      />
    </svg>
  ),
  calculator: (
    <svg viewBox='0 0 300 160' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='300' height='160' fill='#080010' />
      {/* Glow bg */}
      <ellipse
        cx='150'
        cy='80'
        rx='90'
        ry='60'
        fill='#8405fa'
        fillOpacity='0.07'
      />
      {/* Calc body */}
      <rect
        x='82'
        y='8'
        width='136'
        height='144'
        rx='16'
        fill='#130022'
        stroke='#8405fa'
        strokeOpacity='0.4'
        strokeWidth='1'
      />
      {/* Display */}
      <rect x='94' y='20' width='112' height='34' rx='8' fill='#05000f' />
      <rect
        x='94'
        y='20'
        width='112'
        height='34'
        rx='8'
        stroke='#8405fa'
        strokeOpacity='0.3'
        strokeWidth='1'
      />
      <text
        x='198'
        y='43'
        fontFamily='monospace'
        fontSize='18'
        fontWeight='700'
        fill='#c084fc'
        textAnchor='end'
      >
        1,337
      </text>
      <text
        x='98'
        y='32'
        fontFamily='monospace'
        fontSize='8'
        fill='#6b21a8'
        opacity='0.7'
      >
        2 + 2 =
      </text>
      {/* Buttons */}
      {[
        ["C", "±", "%", "÷"],
        ["7", "8", "9", "×"],
        ["4", "5", "6", "−"],
        ["1", "2", "3", "+"],
      ].map((row, ri) =>
        row.map((btn, ci) => (
          <g key={`${ri}-${ci}`}>
            <rect
              x={94 + ci * 29}
              y={64 + ri * 22}
              width='24'
              height='17'
              rx='5'
              fill={
                ci === 3
                  ? "rgba(132,5,250,0.5)"
                  : ri === 0
                    ? "rgba(132,5,250,0.15)"
                    : "rgba(255,255,255,0.04)"
              }
              stroke={ci === 3 ? "rgba(132,5,250,0.8)" : "rgba(132,5,250,0.2)"}
              strokeWidth='1'
            />
            <text
              x={94 + ci * 29 + 12}
              y={64 + ri * 22 + 11}
              fontFamily='monospace'
              fontSize='9'
              fontWeight='600'
              fill={ci === 3 ? "#e9d5ff" : ri === 0 ? "#a855f7" : "#d8b4fe"}
              textAnchor='middle'
            >
              {btn}
            </text>
          </g>
        )),
      )}
      {/* Zero row */}
      <rect
        x='94'
        y='152'
        width='53'
        height='17'
        rx='5'
        fill='rgba(255,255,255,0.04)'
        stroke='rgba(132,5,250,0.2)'
        strokeWidth='1'
      />
      <rect
        x='152'
        y='152'
        width='24'
        height='17'
        rx='5'
        fill='rgba(132,5,250,0.6)'
        stroke='rgba(132,5,250,0.9)'
        strokeWidth='1'
      />
      {/* Side glow */}
      <rect
        x='82'
        y='8'
        width='2'
        height='144'
        rx='1'
        fill='#8405fa'
        fillOpacity='0.4'
      />
    </svg>
  ),
  portfolio: (
    <svg viewBox='0 0 300 160' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='300' height='160' fill='#050008' />
      {/* Stars */}
      {[
        [20, 15],
        [60, 8],
        [120, 20],
        [200, 5],
        [250, 18],
        [280, 30],
        [30, 60],
        [270, 55],
        [10, 100],
        [290, 90],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 1.5 : 1}
          fill='#fff'
          opacity={0.2 + i * 0.04}
        />
      ))}
      {/* City skyline */}
      {[
        [0, 60, 28],
        [28, 80, 22],
        [50, 50, 30],
        [80, 70, 20],
        [100, 40, 35],
        [135, 65, 25],
        [160, 45, 30],
        [190, 72, 22],
        [212, 38, 28],
        [240, 68, 24],
        [264, 50, 36],
      ].map(([x, h, w], i) => (
        <g key={i}>
          <rect
            x={x}
            y={160 - h}
            width={w}
            height={h}
            fill={`hsl(${270 + i * 3},${50 + (i % 3) * 10}%,${8 + (i % 4) * 3}%)`}
          />
          {/* Windows */}
          {Array.from({ length: Math.floor(h / 14) }).map((_, wi) => (
            <rect
              key={wi}
              x={x + 4}
              y={160 - h + 6 + wi * 12}
              width='4'
              height='6'
              rx='1'
              fill='#8405fa'
              fillOpacity={Math.random() > 0.4 ? 0.6 : 0.1}
            />
          ))}
        </g>
      ))}
      {/* Neon ground glow */}
      <ellipse
        cx='150'
        cy='158'
        rx='180'
        ry='16'
        fill='#8405fa'
        fillOpacity='0.15'
      />
      {/* Avatar circle */}
      <circle
        cx='150'
        cy='62'
        r='34'
        fill='#1a0030'
        stroke='#8405fa'
        strokeWidth='1.5'
        strokeOpacity='0.7'
      />
      <circle cx='150' cy='62' r='34' fill='url(#avatarGlow)' />
      <defs>
        <radialGradient id='avatarGlow' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' stopColor='#8405fa' stopOpacity='0.1' />
          <stop offset='100%' stopColor='#8405fa' stopOpacity='0' />
        </radialGradient>
      </defs>
      {/* Avatar person */}
      <circle cx='150' cy='52' r='13' fill='#3d0070' />
      <ellipse cx='150' cy='74' rx='20' ry='11' fill='#3d0070' />
      {/* Neon outline */}
      <circle
        cx='150'
        cy='62'
        r='34'
        fill='none'
        stroke='#8405fa'
        strokeWidth='1'
        strokeOpacity='0.5'
        strokeDasharray='4 3'
      />
      {/* Name tags */}
      <rect
        x='100'
        y='104'
        width='100'
        height='8'
        rx='4'
        fill='#8405fa'
        fillOpacity='0.7'
      />
      <rect
        x='115'
        y='116'
        width='70'
        height='5'
        rx='2.5'
        fill='#6b21a8'
        fillOpacity='0.5'
      />
      {/* Purple glow around avatar */}
      <circle
        cx='150'
        cy='62'
        r='42'
        fill='none'
        stroke='#8405fa'
        strokeWidth='8'
        strokeOpacity='0.06'
      />
    </svg>
  ),
  pizza: (
    <svg viewBox='0 0 300 160' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='300' height='160' fill='#07000e' />
      <defs>
        <radialGradient id='bgGlow' cx='50%' cy='55%' r='55%'>
          <stop offset='0%' stopColor='#8405fa' stopOpacity='0.2' />
          <stop offset='100%' stopColor='#8405fa' stopOpacity='0' />
        </radialGradient>

        {/* Градиенты для каждого сектора */}
        <radialGradient id='s1' cx='30%' cy='30%' r='70%'>
          <stop offset='0%' stopColor='#a855f7' />
          <stop offset='100%' stopColor='#6d28d9' />
        </radialGradient>
        <radialGradient id='s2' cx='30%' cy='30%' r='70%'>
          <stop offset='0%' stopColor='#7c3aed' />
          <stop offset='100%' stopColor='#4c1d95' />
        </radialGradient>
        <radialGradient id='s3' cx='30%' cy='30%' r='70%'>
          <stop offset='0%' stopColor='#c084fc' />
          <stop offset='100%' stopColor='#9333ea' />
        </radialGradient>
        <radialGradient id='s4' cx='30%' cy='30%' r='70%'>
          <stop offset='0%' stopColor='#581c87' />
          <stop offset='100%' stopColor='#3b0764' />
        </radialGradient>

        <filter id='softGlow'>
          <feGaussianBlur stdDeviation='2' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
        <filter id='neonEdge'>
          <feGaussianBlur stdDeviation='1.5' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* Фон */}
      <ellipse cx='150' cy='88' rx='120' ry='80' fill='url(#bgGlow)' />

      {/*
      Пицца — круг cx=150 cy=88 r=68
      Вырезанный кусок: сектор от 330° до 60° (жёлтый на референсе)
      Оставшиеся сектора делим на 3 части

      Сектора (в градусах):
      - Кусок отдельно:  330° → 60°  (90°)  — он ВЫРЕЗАН из круга
      - Сектор 1 (большой красный): 60° → 210°  (150°)
      - Сектор 2 (тёмный):          210° → 270° (60°)
      - Сектор 3 (серый):           270° → 330° (60°)
    */}

      {/* Центр пиццы */}
      {/* cx=150, cy=88, r=68 */}

      {/* Сектор 1 — большой, 60°→210°, светло-фиолетовый */}
      {/* Сектор 1 — большой, 60°→210°, светло-фиолетовый */}
      <path
        d={`M150 88
      L${150 + 68 * Math.cos((60 * Math.PI) / 180)} ${88 + 68 * Math.sin((60 * Math.PI) / 180)}
      A68 68 0 0 1 ${150 + 68 * Math.cos((135 * Math.PI) / 180)} ${88 + 68 * Math.sin((135 * Math.PI) / 180)}
      A68 68 0 0 1 ${150 + 68 * Math.cos((210 * Math.PI) / 180)} ${88 + 68 * Math.sin((210 * Math.PI) / 180)}
      Z`}
        fill='url(#s1)'
      />

      {/* Сектор 2 — 210°→270°, тёмный */}
      <path
        d={`M150 88
          L${150 + 68 * Math.cos((210 * Math.PI) / 180)} ${88 + 68 * Math.sin((210 * Math.PI) / 180)}
          A68 68 0 0 1 ${150 + 68 * Math.cos((270 * Math.PI) / 180)} ${88 + 68 * Math.sin((270 * Math.PI) / 180)}
          Z`}
        fill='url(#s4)'
      />

      {/* Сектор 3 — 270°→330°, средний */}
      <path
        d={`M150 88
          L${150 + 68 * Math.cos((270 * Math.PI) / 180)} ${88 + 68 * Math.sin((270 * Math.PI) / 180)}
          A68 68 0 0 1 ${150 + 68 * Math.cos((330 * Math.PI) / 180)} ${88 + 68 * Math.sin((330 * Math.PI) / 180)}
          Z`}
        fill='url(#s3)'
      />

      {/* Неоновые границы между секторами */}
      {[60, 210, 270, 330].map((a, i) => (
        <line
          key={i}
          x1='150'
          y1='88'
          x2={150 + 68 * Math.cos((a * Math.PI) / 180)}
          y2={88 + 68 * Math.sin((a * Math.PI) / 180)}
          stroke='#07000e'
          strokeWidth='2.5'
        />
      ))}
      {[60, 210, 270, 330].map((a, i) => (
        <line
          key={i}
          x1='150'
          y1='88'
          x2={150 + 68 * Math.cos((a * Math.PI) / 180)}
          y2={88 + 68 * Math.sin((a * Math.PI) / 180)}
          stroke='#c084fc'
          strokeWidth='0.8'
          strokeOpacity='0.5'
          filter='url(#neonEdge)'
        />
      ))}

      {/* Внешний контур круга */}
      <circle
        cx='150'
        cy='88'
        r='68'
        fill='none'
        stroke='#07000e'
        strokeWidth='3'
      />
      <circle
        cx='150'
        cy='88'
        r='68'
        fill='none'
        stroke='#a855f7'
        strokeWidth='1'
        strokeOpacity='0.7'
        filter='url(#softGlow)'
      />

      {/* ================================ */}
      {/* КУСОК ОТДЕЛЬНО — вправо-вверх   */}
      {/* ================================ */}
      {/*
      Кусок: сектор 330°→60° (90°) — вырезан из круга
      Сдвигаем его от центра наружу по биссектрисе угла (угол 15° = середина между 330 и 60)
      Смещение: dx=+22, dy=-18
    */}

      {/* Тень куска */}
      <ellipse
        cx={150 + 68 * Math.cos((15 * Math.PI) / 180) * 0.55 + 22}
        cy={88 + 68 * Math.sin((15 * Math.PI) / 180) * 0.55 - 14}
        rx='38'
        ry='12'
        fill='#8405fa'
        fillOpacity='0.15'
      />

      {/* Кусок (сдвинут на +22, -18) */}
      <path
        d={`M${150 + 22} ${88 - 18}
          L${150 + 22 + 68 * Math.cos((330 * Math.PI) / 180)} ${88 - 18 + 68 * Math.sin((330 * Math.PI) / 180)}
          A68 68 0 0 1 ${150 + 22 + 68 * Math.cos((60 * Math.PI) / 180)} ${88 - 18 + 68 * Math.sin((60 * Math.PI) / 180)}
          Z`}
        fill='url(#s2)'
      />

      {/* Неоновые края куска */}
      <path
        d={`M${150 + 22} ${88 - 18}
          L${150 + 22 + 68 * Math.cos((330 * Math.PI) / 180)} ${88 - 18 + 68 * Math.sin((330 * Math.PI) / 180)}
          A68 68 0 0 1 ${150 + 22 + 68 * Math.cos((60 * Math.PI) / 180)} ${88 - 18 + 68 * Math.sin((60 * Math.PI) / 180)}
          Z`}
        fill='none'
        stroke='#c084fc'
        strokeWidth='1'
        strokeOpacity='0.75'
        filter='url(#neonEdge)'
      />

      {/* Линии среза куска */}
      {[330, 60].map((a, i) => (
        <line
          key={i}
          x1={150 + 22}
          y1={88 - 18}
          x2={150 + 22 + 68 * Math.cos((a * Math.PI) / 180)}
          y2={88 - 18 + 68 * Math.sin((a * Math.PI) / 180)}
          stroke='#c084fc'
          strokeWidth='0.8'
          strokeOpacity='0.6'
          filter='url(#neonEdge)'
        />
      ))}

      {/* Свечение куска */}
      <path
        d={`M${150 + 22} ${88 - 18}
          L${150 + 22 + 68 * Math.cos((330 * Math.PI) / 180)} ${88 - 18 + 68 * Math.sin((330 * Math.PI) / 180)}
          A68 68 0 0 1 ${150 + 22 + 68 * Math.cos((60 * Math.PI) / 180)} ${88 - 18 + 68 * Math.sin((60 * Math.PI) / 180)}
          Z`}
        fill='none'
        stroke='#8405fa'
        strokeWidth='4'
        strokeOpacity='0.1'
        filter='url(#softGlow)'
      />
    </svg>
  ),
  social: (
    <svg viewBox='0 0 300 160' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='300' height='160' fill='#080010' />
      {/* BG glow */}
      <ellipse
        cx='150'
        cy='80'
        rx='120'
        ry='60'
        fill='#8405fa'
        fillOpacity='0.06'
      />
      {/* Connection lines */}
      {[
        [58, 38],
        [242, 38],
        [58, 122],
        [242, 122],
      ].map(([x, y], i) => (
        <line
          key={i}
          x1='150'
          y1='80'
          x2={x}
          y2={y}
          stroke='#8405fa'
          strokeOpacity='0.3'
          strokeWidth='1.5'
          strokeDasharray='5 4'
        />
      ))}
      {/* Pulse rings on central */}
      <circle
        cx='150'
        cy='80'
        r='30'
        fill='none'
        stroke='#8405fa'
        strokeOpacity='0.1'
        strokeWidth='8'
      />
      <circle
        cx='150'
        cy='80'
        r='22'
        fill='#1a0030'
        stroke='#8405fa'
        strokeOpacity='0.5'
        strokeWidth='1.5'
      />
      {/* Central avatar */}
      <circle cx='150' cy='74' r='8' fill='#a855f7' />
      <ellipse cx='150' cy='89' rx='12' ry='7' fill='#a855f7' />
      {/* Satellite nodes */}
      {[
        { cx: 58, cy: 38, color: "#f59e0b" },
        { cx: 242, cy: 38, color: "#10b981" },
        { cx: 58, cy: 122, color: "#ef4444" },
        { cx: 242, cy: 122, color: "#6366f1" },
      ].map(({ cx, cy, color }, i) => (
        <g key={i}>
          <circle
            cx={cx}
            cy={cy}
            r='20'
            fill='#0a0015'
            stroke={color}
            strokeWidth='1'
            strokeOpacity='0.5'
          />
          <circle cx={cx} cy={cy - 4} r='6' fill={color} opacity='0.7' />
          <ellipse
            cx={cx}
            cy={cy + 8}
            rx='9'
            ry='5'
            fill={color}
            opacity='0.7'
          />
          {/* Glow */}
          <circle cx={cx} cy={cy} r='22' fill={color} fillOpacity='0.06' />
        </g>
      ))}
      {/* Icons on connections */}
      {[
        [104, 52],
        [196, 52],
        [104, 108],
        [196, 108],
      ].map(([x, y], i) => (
        <rect
          key={i}
          x={x - 7}
          y={y - 7}
          width='14'
          height='14'
          rx='4'
          fill={["#1da1f2", "#25d366", "#e1306c", "#0077b5"][i]}
          opacity='0.8'
        />
      ))}
      {/* Notification dot */}
      <circle cx='260' cy='28' r='7' fill='#ef4444' />
      <text
        x='260'
        y='32'
        fontSize='8'
        fontWeight='700'
        fill='#fff'
        textAnchor='middle'
      >
        3
      </text>
    </svg>
  ),
};

export const ProjectCard = ({
  title,
  description,
  stack,
  links,
  illustration,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.preview}>{illustrations[illustration]}</div>
      <div className={styles.stack}>{stack}</div>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className={styles.linkBtn}
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

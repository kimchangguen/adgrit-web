"use client";

const actions = [
  {
    label: "전화하기",
    href: "tel:1661-0646",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C2.25 22.5 0 20.25 0 17.25V6.75a3 3 0 0 1 1.5-2.25Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    className: "bg-[#1e40af] hover:bg-[#1e3a8a] text-white",
  },
  {
    label: "카카오톡",
    href: "https://open.kakao.com/o/s2RtMSei",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3Z" />
      </svg>
    ),
    className: "bg-[#FEE500] hover:bg-[#F9DF4A] text-[#191919]",
  },
  {
    label: "제안서 받기",
    href: "#contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
          clipRule="evenodd"
        />
        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
      </svg>
    ),
    className: "bg-slate-700 hover:bg-slate-800 text-white",
  },
];

export function FloatingActions() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      aria-label="고객 상담 바로가기"
    >
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all hover:scale-110 ${action.className}`}
          title={action.label}
          aria-label={action.label}
        >
          {action.icon}
        </a>
      ))}
    </div>
  );
}

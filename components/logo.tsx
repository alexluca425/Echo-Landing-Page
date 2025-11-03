export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 112 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="28"
        fontSize="32"
        fontWeight="700"
        fill="white"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        ECHO
      </text>
    </svg>
  );
};

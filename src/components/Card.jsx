function Card({ className, label, children }) {
  return (
    <div
      className={`border border-white/10 rounded-2xl bg-white/[0.035] p-5 ${className}`}
    >
      {label && (
        <span className="text-neutral-600 text-xs fontMonospace">{label}</span>
      )}
      {children}
    </div>
  );
}

export default Card;

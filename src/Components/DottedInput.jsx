export const DottedInput = ({ label, name, value, onChange }) => (
  <div className="flex items-center gap-2 mb-3">
    <span className="whitespace-nowrap text-sm font-medium">{label}</span>
    <div className="relative flex-1">
      <div className="border-b border-dotted border-black h-6"></div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="absolute left-0 top-0 w-full h-full bg-transparent outline-none text-sm px-1"
      />
    </div>
  </div>
);
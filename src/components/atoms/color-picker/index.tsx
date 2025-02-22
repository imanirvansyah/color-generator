export const ColorPicker: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <>
      <input type="color" id="favcolor" name="favcolor" value={value} onChange={(e) => onChange(e.target.value)}></input>
      <span className="p-3">{value}</span>
    </>
  )
}
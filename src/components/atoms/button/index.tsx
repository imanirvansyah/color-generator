export const Button: React.FC<{ onClick: () => void; color: string }> = ({ onClick, color }) => {
    return (
        <button className="px-5 py-3 !tracking-widest" onClick={onClick} style={{ backgroundColor: `${color}` }}>Generate New Palette</button>
    )
}
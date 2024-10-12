export const Navbar: React.FC<{ onClick: () => void, color: string }> = ({ onClick, color }) => {
    return (
        <div className={`absolute top-0 w-full h-16 bg-[${color}]`}>
            <div className="container mx-auto flex items-center justify-between h-full">
                <h3 className={`text-[${color}] font-bold`}>YOUR LOGO</h3>
                <button onClick={onClick}>you can generate here too</button>
            </div>
        </div>
    )
}
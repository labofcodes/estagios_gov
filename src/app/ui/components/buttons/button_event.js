
export default function Button_event ({ className, onClick, over, leave, setId, children }){
    return(
        <>
        <button className={className} onClick={onClick} onMouseOver={over} onMouseLeave={leave} id={setId}>
            { children }
        </button>
        
        </>
    )
}
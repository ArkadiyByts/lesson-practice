type HeaderTextProps = {
    text: string
    children: any
}

export const HeaderText = (props: HeaderTextProps) => {
    const { text = "", children } = props

   // if (text === '') return <h1>NO INFO</h1>

    return <>
        {text === "" ? <h1>{text}</h1> : <h1>NO INFO</h1>}
        
        <h2>Here I come : {children}</h2>
        </>
    
}
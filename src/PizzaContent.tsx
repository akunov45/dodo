
interface IDataPizza {
    name: string,
    desc: string,
    img: string,
    price: number
}

const dataPizza: IDataPizza[] = [
    {
        name: 'Peperoni',
        desc: 'Креветки  , ананасы , соус сладкий чили, перец сладкий , моцарелла, соус альфредо',
        img: 'https://media.dodostatic.net/image/r:584x584/11EE7D5FF78033BC90CAA234BEC0CD26.avif',
        price: 495,
    },
    {
        name: '4 Cheese',
        desc: 'Моцарелла, картофель из печи , соленые огурчики , цыпленок , соус ранч , томаты , красный лук , чеснок сухой , томатный соус',
        img: 'https://media.dodostatic.net/image/r:584x584/11EE7D600BC7B9F1B6888AF021E5C198.avif',
        price: 595,
    },
]

const PizzaContent = () => {
    return (
        <div style={{
            display: 'flex',
            gap: '100px'
        }}>
            {dataPizza.map(p => {
                return (
                    <div style={{ width: "250px" }} key={p.name}>
                        <img width={"100%"} src={p.img} alt="" />
                        <h3>{p.name}</h3>
                        <p>{p.desc}</p> 
                        <div style={{
                            display:'flex', justifyContent:'space-between'}}>
                            <p>от {p.price} сом </p>
                            <button>Выбрать</button>
                        </div>  
                    </div>
                )
            })}

        </div>
    )
}

export default PizzaContent
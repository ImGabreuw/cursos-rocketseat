interface ProductProps {
    params: {
        id: string
    }
}

export default function Product({ params }: ProductProps) {
    return (
        <h1>Product: {JSON.stringify(params.id)}</h1>
    )
}
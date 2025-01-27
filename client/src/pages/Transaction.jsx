import { useParams } from "react-router-dom"

export default function Transaction() {
    const { boxId } = useParams();

    return (
        <div>
            <p>Transaction Page - with box id {boxId}</p>
        </div>
    )
}
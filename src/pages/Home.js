import { getTrendings } from "services/api"

export const Home = () => {

    console.log(getTrendings());

    return (
        <div>
            <p>123</p>
        </div>
    )
}
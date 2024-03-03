"use client"
import { useParams } from "next/navigation"
import { Typography } from "@mui/material"
import Link from "next/link"
import { RemoveRedEye, LocationOn } from "@mui/icons-material"
// import { useQuery } from "@tanstack/react-query"
// import { getId } from "../../api"
import styles from "../index.module.scss"
import CustomCarousel from "../../components/CustomCarousel"
const DetailPage = () => {
    const { id } = useParams()
    // backend return cors error 
    // const { data } = useQuery({ queryKey: ['ads', id], queryFn: () => getId(id) })
    const data = {
        id: 294,
        images: [
            {
                id: 1068,
                image: "https://bazaarthaikand.s3.ap-southeast-1.amazonaws.com/announcement_images/photo_2024-01-19_16.26.47.jpeg",
                thumbnail: "https://bazaarthaikand.s3.ap-southeast-1.amazonaws.com/announcement_thumbnails/photo_2024-01-19_16.26.47.jpeg",
                user: 204
            },
            {
                id: 1069,
                image: "https://bazaarthaikand.s3.ap-southeast-1.amazonaws.com/announcement_images/photo_2024-01-19_16.26.44.jpeg",
                thumbnail: "https://bazaarthaikand.s3.ap-southeast-1.amazonaws.com/announcement_thumbnails/photo_2024-01-19_16.26.44.jpeg",
                user: 204
            },
            {
                id: 1070,
                image: "https://bazaarthaikand.s3.ap-southeast-1.amazonaws.com/announcement_images/photo_2024-01-19_16.26.50.jpeg",
                thumbnail: "https://bazaarthaikand.s3.ap-southeast-1.amazonaws.com/announcement_thumbnails/photo_2024-01-19_16.26.50.jpeg",
                user: 204
            }
        ],
        city_name: "Пхукет",
        district_name: "Чалонг",
        title: "Mg Zs 2021-2023",
        description: "<p>Mg Zs 2021-2023</p><p>Объем двигателя 1.5</p><p>Стоимость:</p><p>Сутки 1500-2000 бат</p><p>Месяц 35-40000 бат</p><p>Депозит 6000 бат или 200$</p><p><br></p><p><br></p>",
        price: 1500,
        created_at: "19.01.2024",
        views: 16,
        user: 204
    }
    return (
        <section className={styles.details}>
            <div className={styles.container}>
                <Typography variant="h2" fontSize={30}> {data.title}

                </Typography>

                <Link href='/'>Back </Link>
                <CustomCarousel {...data} />
                <div className={styles.detail_card}>
                    <div>
                        {data.description}
                    </div>
                    <div className={styles.detail_card_footer}>
                        <p>
                            <LocationOn />
                            {data.city_name}
                        </p>
                        <p>
                            <RemoveRedEye />
                            {data.views}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DetailPage
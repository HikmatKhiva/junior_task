import { Box, Card, CardContent, Typography } from "@mui/material"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Image from "next/image";
import styles from "../app/index.module.scss"
import Link from "next/link";
const CardAds = ({ data }) => {
    return (
        <Card className={styles.card}>
            <Link href={`/${data.id}`}>
                <Image src={data.images[0].thumbnail} width={250} height={180} alt={data.title} priority />
                <CardContent>
                    <Typography variant="h4">
                        {data.title}
                    </Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" columnGap={"20px"} alignItems={"center"}>
                            <Typography variant="p" >
                                {data.city_name}
                            </Typography>
                            <Typography variant="p" >
                                {data.price}
                            </Typography>
                        </Box>
                        <Typography variant="p" display="flex" alignItems="center" columnGap="10px">
                            <RemoveRedEyeIcon />
                            {data.views}
                        </Typography>
                    </Box>
                </CardContent>
            </Link>
        </Card>
    )
}
export default CardAds
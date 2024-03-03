import CardAds from './CardAds';
import styles from "../app/index.module.scss"
const ListAds = ({ ads }) => {
    return (
        <div className={styles.card_list}>
            {ads?.results?.map(data => <CardAds key={data.id} data={data} />
            )}
        </div>
    )
}
export default ListAds
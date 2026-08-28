import Layout from "@comp/layout/layout"
import styl from "./dashboard.module.styl"

const mapUrl = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL as string | undefined

const Dashboard = () => (
    <Layout>
        <section className={styl.mapPanel}>
            {mapUrl ? (
                <iframe
                    className={styl.map}
                    src={mapUrl}
                    title="Google Maps"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            ) : (
                <p>Set VITE_GOOGLE_MAPS_EMBED_URL to display Google Maps.</p>
            )}
        </section>
    </Layout>
)

export default Dashboard

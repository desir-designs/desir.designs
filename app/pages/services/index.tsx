import PageService from "@services/page"
import ContentSearch from "@components/ContentSearch"

const ServicesPage = ({ page }) => {

    const { data: { contentSearch } } = page

    return (

        <>
            <ContentSearch />
        </>

    )
}

export default ServicesPage


export async function getStaticProps() {

    const { getPage } = PageService()

    const page = await getPage("services")

    return {
        props: {
            page
        },
        revalidate: 2
    }

}
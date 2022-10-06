import RootLayout from "@layouts/RootLayout"
import Footer from "@components/Footer"
import Header from "@components/Header"
import DrawerMenu from "@includes/DrawerMenu"
import ScrollToTop from "react-scroll-to-top"
import NorthIcon from '@mui/icons-material/North'


const PageLayout = ({ children, metaData, header, footer }) => {

    return (
        <RootLayout metaData={metaData}>
            <ScrollToTop component={<NorthIcon className="text-blue-800" />} smooth />
            <DrawerMenu />
            <Header {...header} />
            {children}
            <Footer {...footer} />
        </RootLayout>
    )
}

export default PageLayout